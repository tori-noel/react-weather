import React from "react";
import "./Weather.css";
import SearchEngine from "./SearchEngine";
export default function Weather() {
  return (
    <div className="Weather">
      <SearchEngine />
      <h1> New York, NY </h1>
      <ul>
        <li>Thursday 12:00 PM</li>
        <li>Mostly Cloudy</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="mostly cloudy"
              className="float-left"
            />

            <span className="temperature">20</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 52%</li>
            <li>Wind: 7mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
