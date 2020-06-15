$(document).ready(function () {

  $('#submitWeather').click(function () {
    var city = $("#city").val();
    if (city !== '') {

      $.ajax({

        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" +
          "&APPID=5688ccc5b545f3bda8794822e3d374ed",
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
          var widget =show (data);
          $("#city").val('');
          response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");

        }

      });

    } else {
      $("error").html("Field cannot be empty");
    }
  })

});
function show(data){
  return "<h2><strong>Weather</strong>: " + data.weather[0].main + "</h2>" +
        "<h2><strong>Description</strong>: "+ data.weather[0].description + "</h2>"

  
}

