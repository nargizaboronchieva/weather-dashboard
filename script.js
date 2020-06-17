//api 5688ccc5b545f3bda8794822e3d374ed


$(document).ready(function(){
  $("#search-button").click(function(){
      var city = $("#search-value").val();

      // AJAX for Today's Forecast
      $.ajax({
          url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=5688ccc5b545f3bda8794822e3d374ed",
          type: "GET",
          dataType: "jsonp", // Needed to call API
          success: function for1(data){ // call back

              // Todays Forecast
              var widget1 = today(data);
              $("#today").html(widget1);
          } 
      });

      // AJAX for Five Day Forecast
      $.ajax({
          url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&APPID=5688ccc5b545f3bda8794822e3d374ed",
          type: "GET",
          dataType: "jsonp", // Needed to call API
          success: function for2(data){ // call back

              // 5 day Forecast
              var widget2 = forecast(data);
              $("#forecast").html(widget2);
          } 
      });

      // Check to see if user did not input a city
      if(city = city){
          // Empty field when user clicks button
          $("#search-value").val('');
      } else{
          // Create error message
          $("#error").html('Please enter a city to search.');
          // Also empty field
          $("#search-value").val('');
      }
  })
});

//Show the forcast for today
function today(data) {
  $ ("#today").append("<li>"+ data.name + ", " + data.sys.country"</li>")
//   return "<h2>" + data.name + ", " + data.sys.country + "</h2>"  +
//          "<h2>Today: Date + <img src='http://openweathermap.org/img/wn/" + data.weather[0].icon +".png'>" + data.weather[0].main + "</h2>" +
//          "<h2>Temperature:  " + data.main.temp + " ˚F</h2>" +
//          "<h2>Humidity:  " + data.main.humidity + " %</h2>" +
//          "<h2>Wind Speed:  " + data.wind.speed + " miles/hour</h2>";
// }

// Show the forcast for next five days
function forecast(data) {
  //console.log(data);
  for(var i = 9; i < 40; i += 8) {
      $("#forecast").append("<h3>Date: " + data.list[i].dt_txt + "</h3>")
      $("#forecast").append("<h3>Forecast:  <img src='http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon +".png'>" + data.list[i].weather[0].main + "</h3>") +
      $("#forecast").append("<h3>Temperature:  " + data.list[i].main.temp + " ˚F</h3>") +
      $("#forecast").append("<h3>Humidity:  " + data.list[i].main.humidity + " %</h3>") +
      $("#forecast").append("<h3>Cloudiness:  " + data.list[i].clouds.all + " %</h3>");
  }
}
ooo
