import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city} </h1>
      <ul>
        <li>
          {" "}
          <FormattedDate date={props.data.date} />{" "}
        </li>
        <li className="text-capitalize">{props.data.description} </li>
      </ul>

      <div className="row mt-3">
        <div className="col-8">
          <div className="clearfix">
            <span className="float-left">
              <img alt="icon" src={props.data.iconUrl} />
            </span>
            <span className="float-left">
              <WeatherTemperature temperature={props.data.temperature} />
            </span>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}% </li>
            <li>Wind speed: {Math.round(props.data.wind)} mph </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
