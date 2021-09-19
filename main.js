//weather for Denver

$.getJSON(
  "http://api.openweathermap.org/data/2.5/weather?q=denver&units=imperial&appid=683a0113fdebaa416b2acf311e3ad5d3",
  function (data) {
    console.log(data);
    let icon =
      "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    let temp = Math.floor(data.main.temp);
    console.log(temp);

    let weather = data.weather[0].description;
    console.log(weather);

    $("#weatherIcon").attr("src", icon);
    $("#temp").append(temp + " F");
    $("#weather").append(weather);
  }
);
