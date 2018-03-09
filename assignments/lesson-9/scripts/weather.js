/*-------API KEY: 2484b1bb70021030 ------*/
var section h2 = document.querySelector('h2');
var section p = document.querySelector('p');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
   var weatherMan = request.response;
    showData(weatherMan);
}

function showData(jsonObj) {
    var towns = jsonObj['towns'];
    
    for (var i = 0; i <towns.length; i++) {
        
        var article = document.createElement('article');
        var header = document.createElement('h1');
        var h2 = document.createElement('h2');
        var motto = document.createElement('p');
        var yearFounded = document.createElement('p');
        var currentPopulation = document.createElement('p');
        var averageRainfall = document.createElement('p');
        var events = document.createElement('ul');
        
        h2.textContent = towns[i].name;
        motto.textContent = 'Motto: ' + towns[i].motto;
        yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        currentPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
        averageRainfall.textContent = 'Average RainFall: ' + towns[i].averageRainfall;
        events.textContent = 'Events: ';
        
        var eventList = towns[i].events;
        for (var e = 0; e < eventList.length; e++) {
            var listItem = document.createElement('li');
            listItem.textContent = events[e];
            events.appendChild(listItem);
        }
        
        article.appendChild(h2);
         article.appendChild(motto);
         article.appendChild(yearFounded);
         article.appendChild(currentPopulation);
         article.appendChild(averageRainfall);
         article.appendChild(events);
        
        section.appendChild(article);
        
    }
}