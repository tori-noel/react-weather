import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city} </h1>
      <ul>
        <li>
          {" "}
          <FormattedDate date={props.data.date} />{" "}
        </li>
        <li>{props.data.description} </li>
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
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: {props.data.precipitation}</li>
            <li>Humidity: {props.data.humidity} </li>
            <li>Wind: {Math.round(props.data.wind)} </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
