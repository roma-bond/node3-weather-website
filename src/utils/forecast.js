const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=87e34363d43dd8902957f1130fc6b7a0&query=' + latitude + ',' + longitude + '&units=f'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      const temperature = body.current.temperature
      const apparent = body.current.feelslike
      const type = body.current.weather_descriptions[0]
      const humidity = body.current.humidity
      callback(undefined, type + '. It is currently ' + temperature + ' degrees out. It feels like ' + apparent + ' degrees out. The humidity is ' + humidity + '%.')
    }
  })
}

module.exports = forecast