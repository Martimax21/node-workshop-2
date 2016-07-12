// Using your first module

// For the next exercise (“How’s the weather?”), make sure to use your requestJson module instead of 
// using the regular request module. As you do this, you may notice that your requestJson function stopped 
// working since you put it in a separate file. Find out how and fix it :)
var prompt = require('prompt');
var request = require('request');
var requestJ = require('./library/request-json.js');

var weather = "https://api.forecast.io/forecast/6f17c324d37032fc7d14088b2b30d027/";
var arrayForecast = ["day1", "day2", "day3", "day4", "day5"]
var arrayTemp = [];
var colors = require('colors');
var emoji = require('node-emoji');

prompt.get('location', function(err, answers) {
    if (err) {
        console.log('there was an error');
    }
    else {
        var url = ("https://maps.googleapis.com/maps/api/geocode/json?address=" +answers.loca);

        requestJ(url, function(err, data) {
            if (err) {
                console.log('there was an error');
            }
            else {
                var parsedBody = data;
                var lat1 = parsedBody.results[0].geometry.location.lat;
                var long1 = parsedBody.results[0].geometry.location.lng;
                var weatherUrl = (weather+lat1 +"," +long1);
                requestJ(weatherUrl, function(err, data) {
                    if (err) {
                        console.log('there was an error');
                    }
                    else {
                        var currentTemp = Number(data.currently.temperature);
                        for(var i = 0; i < 5; i++) {
                            arrayTemp.push(data.daily.data[i].temperatureMax);
                        }
                        console.log(colors.green(emoji.get('smile') + "The current temperature is : " + currentTemp));
                        console.log(colors.rainbow("The forcast for the next 5 days is :"));
                        console.log(arrayForecast);
                        console.log(arrayTemp);
                    }
                });
            }
        }); 
        
    }
});



// How’s the weather?

// Go to Forecast.io API and read the documentation
// Get yourself a free API key
// Remember the Google Geocoding API from yesterday’s workshop
// Using both APIs, complete the following workflow:
// Ask the user for their location
// Retrieve the weather for the user’s location
// Display the current weather as well as the next 5 days weather in a nice way

// Hint: to display the results in a nice way, a few NPM modules could be useful, including but not limited to:
// colors
// cli-table
// node-emoji
// Add/commit/push

