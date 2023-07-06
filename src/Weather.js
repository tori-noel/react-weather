import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);

  let [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      ready: true,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      description: response.data.condition.description,
      city: response.data.city,
    });
    console.log(response.data);
  }
  function searchCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiKey = "43fa5d86069t4dbb87a934b227c8ob50";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }
  if (weather.ready) {
    return (
      <div className="Weather">
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
        <WeatherInfo data={weather} />
        <WeatherForecast city={weather.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
