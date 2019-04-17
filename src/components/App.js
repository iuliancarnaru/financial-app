import React, { useState } from "react";
import "normalize.css";
import Dashboard from "./Dashboard";

const App = () => {
  const dashboardData = {
    income: 0,
    outcome: 0,
    percentage: 0
  };

  const [data, setData] = useState(dashboardData);

  const printMessage = () => {
    setData({
      income: 2000,
      outcome: 1560,
      percentage: 88
    });
  };

  return (
    <div>
      <Dashboard data={data} printMessage={printMessage} />
    </div>
  );
};

export default App;
