const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '7f59daeedf7035efe7544f4ec617e143';
let city = 'seoul';

let url = API_URL + city + '&appid=' + API_KEY;
$.ajax({
  url: url,
  dataType: 'json',
  type: 'GET',
  async: 'false',
  success: function (response) {
    console.log(response);
    console.log('현재온도 : ' + (response.main.temp - 273.15));
    console.log('현재습도 : ' + response.main.humidity);
    console.log('날씨 : ' + response.weather[0].main);
    console.log('상세날씨설명 : ' + response.weather[0].description);
    console.log('날씨 이미지 : ' + response.weather[0].icon);
    console.log('바람   : ' + response.wind.speed);
    console.log('나라   : ' + response.sys.country);
    console.log('도시이름  : ' + response.name);
    console.log('구름  : ' + response.clouds.all + '%');
  },
});
