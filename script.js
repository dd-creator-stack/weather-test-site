const API_KEY = "070253b4b264ceb416276237b774ad47";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("result");

  if (!city) {
    resultDiv.innerText = "Please enter a city";
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  )
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        resultDiv.innerText = "City not found";
        console.log(data);
        return;
      }

      resultDiv.innerHTML = `
        <p>City: ${data.name}</p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    })
    .catch(error => {
      resultDiv.innerText = "Error fetching weather";
      console.error(error);
    });
}
