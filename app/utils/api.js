var axios = require('axios');

let currentForecast = 'http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=72e7728b0a0651e910db0585cad5880e';
let fiveDayForecast = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=72e7728b0a0651e910db0585cad5880e&cnt=5';


module.exports = {
  getCurrentWeather: function(cityName) {
    return axios.get(currentForecast)
  },
  getCurrentFiveDaysWeather: function(cityName) {
    return axios.get(fiveDayForecast)
  }
}