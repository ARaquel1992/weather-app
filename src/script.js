//Day and time
function formatDate(date) {
  let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day = days[date.getDay()];

  let hour = currentDayTime.getHours();
  let minutes = currentDayTime.getMinutes();

  let formattedDate = `${day} ${hour}:${minutes}`;
  return formattedDate;
}
 
let currentDayTime = new Date();

let li = document.querySelector("li");
li.innerHTML = formatDate(currentDayTime);

//Search city
function search(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#city");
  let cityInput = document.querySelector("#form-search-input");
  citySearch.innerHTML = cityInput.value;

  searchCity(cityInput.value);
}

function searchCity(city) {
  let apiKey = "f84d3c7abfdce95b297035c27acaaab5";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  axios.get(url).then(showData); 
}

let form = document.querySelector("#form-search-city");
form.addEventListener("submit",search);

function showData(response) {
 let temperature = Math.round(response.data.main.temp);
  let weather = response.data.weather[0].description;
  let city = response.data.name;
  let country = response.data.sys.country;
  
  let h1 = document.querySelector("#city");
  h1.innerHTML = `${city}, ${country}`;

  let h2 = document.querySelector("displayTemperature");
  displayTemperature.innerHTML = temperature;

  let weatherDescription = document.querySelector("description");
  description.innerHTML = weather;

}

//Geolocation
function retrievePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "f84d3c7abfdce95b297035c27acaaab5";
  let currentLocUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(currentLocUrl).then(showData);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}
let currentButton = document.querySelector("#current-location");
currentButton.addEventListener("click", getPosition);

//Change celsius-fahrenheit
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}