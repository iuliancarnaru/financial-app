import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";

const StatusBar = () => {
  const [status, setStatus] = useState(navigator.onLine);
  const date = moment().format("MMM Do YY");

  const [weatherData, setWeatherData] = useState([]);

  const temperature = Math.round(weatherData.temp - 273.15);

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=814a0524d9ed038ee65ba121ef28c339`
      )
      .then(result => setWeatherData(result.data.main));
  }, []);

  const handleOnline = () => {
    setStatus(true);
  };

  const handleOffline = () => {
    setStatus(false);
  };

  return (
    <div className="status-bar flex-container-between ">
      <div>{status ? "Online" : "Ofline"}</div>
      <div>
        <strong>{date}</strong>
      </div>
      <div>{temperature ? temperature : `--`} &#176;C</div>
    </div>
  );
};

export default StatusBar;
