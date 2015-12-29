$(document).ready(function(){
  var units = 'imperial';  
  var appId = "4952b26888308bc17ac2180000ba036c";
  getLocation();
  function getLocation() {
    $.get("http://ip-api.com/json", function(location) {  
      $('.location')
        .append(location.city + ", ")
        .append(location.region);
         
      getWeather(location.lat, location.lon);
    }, "jsonp");

  }
  function getWeather(lat, lon) {
    var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + "&units=" + units + "&APPID=" + appId;

    $.get(weatherApiUrl, function(weather) {
      var temperature = weather.main.temp;
      var unitLabel;
      if (window.navigator.language == "en-US") {
          var units = 'imperial';
           unitLabel = "ºF";
      } else {
          units = 'metrics';
          temperature = (temperature -  32) * 5/9;
          unitLabel = "ºC";
      }
       $('#far').change(function() {
             $('#temp').empty();
             $('#conditions').empty();
             units = 'imperial';
             unitLabel = 'ºF';  
             var temperature = weather.main.temp;
             temperature = parseFloat((temperature).toFixed(1));   
            $('#temp').append(temperature + " " + unitLabel);               $('#conditions').append(weather.weather[0].description); 
            return;    
        });

       $('#cel').change(function() {
            $('#temp').empty();
            $('#conditions').empty(); 
            units = 'metric';
            unitLabel = 'ºC';
            var temperature = weather.main.temp; 
            temperature = (temperature -  32) * 5/9;
            temperature = parseFloat((temperature).toFixed(1));  
            $('#temp').append(temperature + " " + unitLabel);               $('#conditions').append(weather.weather[0].description); 
        }); 
   
        $('#temp').empty();
        temperature = parseFloat((temperature).toFixed(1));   
        $('#temp').append(temperature + " " + unitLabel); 
        $('#conditions').append(weather.weather[0].description);  
        $('#imageIcon')
          .append("<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png'>");
      }, "jsonp");

  };
});



