var inputvalue = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var description = document.querySelector("#description"); // Fixed typo here
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var apik = "f117e77636752a28e688c6e28f09c2f8"; // Make sure to declare 'apik' using 'var', 'let', or 'const'

function convertion(val) {
  return (val - 273).toFixed(3);
}

btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputvalue.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())
    .then((data) => {
      var nameval = data["name"];
      var descrip = data["weather"]["0"]["description"];
      var tempature = data["main"]["temp"];
      var wndspeed = data["wind"]["speed"];

      city.innerHTML = `Weather of <span>${nameval}</span>`;
      temp.innerHTML = `Temperature: <span>${convertion(tempature)} C</span>`;
      description.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
      wind.innerHTML = `Wind Speed: <span>${wndspeed} km/h</span>`;
    })
    .catch((err) => {
      alert("Error fetching weather data. Please check the city name.");
      console.error(err);
    });
});
