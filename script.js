$(document).ready(function() {
  $('#search').click(function() {
    var location = $('#location').val();
    if (location != '') {
      $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        data: {
          q: location,
          appid: '1d82e6526faf5512c06cedc3f7ee6fb4',
          units: 'metric'
        },
        type: 'GET',
        dataType: 'json',
        success: function(data) {
          var weather = '<div><h2>Current Weather in ' + data.name + '</h2>';
          weather += '<p>Temperature: ' + data.main.temp + ' &deg;C</p>';
          weather += '<p>Weather: ' + data.weather[0].description + '</p></div>';
          $('#weather').html(weather);
          var lat = data.coord.lat;
          var lon = data.coord.lon;
          var mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lon + '&zoom=12&size=400x300&maptype=roadmap&markers=color:red%7C' + lat + ',' + lon + '&key=AIzaSyAMubSgpjEewnn5YVDAjvaU-e6sKgNYGwA';
          var map = '<img src="' + mapUrl + '">';
          $('#map').html(map);
        }
      });
    } else {
      alert('Please enter a location');
    }
  });
});
