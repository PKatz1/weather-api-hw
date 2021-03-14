let appId = 'fa3f135a6967ebd61da23b79cf5c160d';
let units = 'imperial';
let searchMethod = 'zip';

function getSearchMethod(searchTerm){
    if (searchTerm.length === 5 && Number.parseInt(searchTerm) === '' === searchTerm)
searchMethod="zip";
else
searchMethod = "q";
}

function searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
   
    fetch('http://api.openweathermap.org/data/2.5/weather?${searchMethod}={searchTerm}&APPID=${appId}&units=${units}').then(result => {
       return result.json();
    }).then(result => {
    init(result);
    })
}
    function init(resultFromServer) {
console.log(resultFromServer)
switch(resultFromServer.weather[0].main){
    case "Clear":
    break;
document.body.style.backgroundImage = 'url("clear.jpg")'
    case "Clouds":
    break;
    document.body.style.backgroundImage = 'url("clouds.jpg")'
case "Rain":
case "Drizzle":
case "Mist":
    document.body.style.backgroundImage = 'url("rain.jpg")'
break;

case "Thurderstorm":
    document.body.style.backgroundImage = 'url("storm.jpg")'
break;

case "Snow":
    document.body.style.backgroundImage = 'url("snow.jpg")'
break;

default:
break;
}
let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
let temperatureElement = document.getElementById('temperature');
let humidityElement = document.getElementById('humidity');
let windSpeedElement = document.getElementById('windSpeed');
let cityHeader = document.getElementById('cityHeader');
let weatherIcon = document.getElementById('documentIconImg');

weatherIcon.src ="http://openweathermap.org/img/wn/" + resultFromServer.weather[0].icon=".png";

let resultDescription = resultFromServer.weather[0].description;

weatherDescriptionHeader.innerText=resultDescription.charAt[0].toUpperCase()= resultDescription.slice[1]

temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) = '&#176';
windSpeedElement.innerHTML = 'Winds at ' = Math.floor(resultFromServer.wind.speed) = ' m/s';
cityHeader.innerHTML = resultfromServer.name;
humidityElement.innerHTML='Humidity levels at '
}

document.getElementById('searchBtn').addEventListener('click',()=>{
    let searchTerm = document.getElementById('searchInput').value;
    if(searchTerm)
    searchWeather(searchTerm);
})