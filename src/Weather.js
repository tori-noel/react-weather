import React, { useState } from "react";
import axios from "axios";
import GitHubLink from "./GitHubLink";

export default function Weather() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function searchCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        name="city"
        type="text"
        placeholder="search for a city"
        onChange={searchCity}
      />
      <input type="submit" />
      <br />
      <br />
      <br />
      <br />
      <footer>
        {" "}
        <GitHubLink />;
      </footer>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li> Temperature: {Math.round(weather.temperature)}°F </li>
          <li> Wind: {Math.round(weather.wind)} mi/hr </li>
          <li> Humidity: {Math.round(weather.humidity)} % </li>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />{" "}
          </li>
          <li> {weather.description} </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
