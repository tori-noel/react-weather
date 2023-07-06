import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = "43fa5d86069t4dbb87a934b227c8ob50";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}$units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon"> ICON </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 24</span>
            <span className="WeatherForecast-temperature-min"> 19</span>
          </div>
        </div>
      </div>
    </div>
  );
}
