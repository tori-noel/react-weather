import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span className="temperature"> {Math.round(props.temperature)} </span>
      <span className="unit"> °F </span>
    </span>
  );
}
