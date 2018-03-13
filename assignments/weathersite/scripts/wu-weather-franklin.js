<!--Franklin Conditions--->
var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','//api.wunderground.com/api/2484b1bb70021030/conditions/q/MN/Franklin.json',true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);


document.getElementById('conditions').innerHTML = weatherInfo.current_observation.weather;
    
document.getElementById('temperature').innerHTML = weatherInfo.current_observation.temp_f;
    
document.getElementById('windS').innerHTML = weatherInfo.current_observation.wind_mph;

document.getElementById('weather_icon').src = weatherInfo.current_observation.icon_url;
    
}

var forecastObject = new XMLHttpRequest();

forecastObject.open('GET','//api.wunderground.com/api/2484b1bb70021030/forecast/q/MN/Franklin.json',true);

forecastObject.send();

forecastObject.onload = function() {
    var forecastInfo = JSON.parse(forecastObject.responseText);
    console.log(forecastInfo);
    
    document.getElementById('forecast').innerHTML = 'Forecast: ' + forecastInfo.forecast.simpleforecast.forecastday["0"].conditions;
    
    document.getElementById('lows').innerHTML = 'Lows overnight around ' + forecastInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit + '&deg;';
    
}



