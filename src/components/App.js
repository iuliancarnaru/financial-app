import React from "react";
import "normalize.css";
import Dashboard from "./Dashboard";

const App = () => {
  const dashboardData = {
    income: 2200,
    outcome: 1954,
    percentage: 88
  };

  return (
    <div>
      <Dashboard dashboardData={dashboardData} />
    </div>
  );
};

export default App;
