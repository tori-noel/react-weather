import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
export default function Weather() {
  let [city, setCity] = useState("");

  let [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
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
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            className="form-control"
            name="city"
            type="text"
            placeholder="Enter a city..."
            autoFocus="on"
            onChange={searchCity}
          />
        </div>
        <div className="col-3">
          <input type="submit" className="btn btn-primary w-100 " />
        </div>
      </div>
    </form>
  );
  if (weather.ready) {
    return (
      <div className="Weather">
        <h1> {city} </h1>
        <ul>
          <li>
            {" "}
            <FormattedDate date={weather.date} />{" "}
          </li>
          <li>{weather.description} </li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="mostly cloudy"
                className="float-left"
              />

              <span className="temperature">
                {Math.round(weather.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: {weather.precipitation}</li>
              <li>Humidity: {weather.humidity} </li>
              <li>Wind: {Math.round(weather.wind)} </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else return form;
}
