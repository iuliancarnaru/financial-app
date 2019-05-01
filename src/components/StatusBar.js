import React, { useState, useEffect } from "react";

const StatusBar = () => {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
  });

  const handleOnline = () => {
    setStatus(true);
  };

  const handleOffline = () => {
    setStatus(false);
  };

  return (
    <div className="status-bar flex-container-between ">
      <div>{status ? "Online" : "Ofline"}</div>
      <div>May 2019</div>
      <div>15 - Cloudy</div>
    </div>
  );
};

export default StatusBar;
