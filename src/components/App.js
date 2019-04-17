import React, { useState } from "react";
import "normalize.css";
import Dashboard from "./Dashboard";
import Form from "./Form";

const App = () => {
  const dashboardData = {
    income: "0",
    outcome: "0",
    percentage: "0"
  };

  const [data, setData] = useState(dashboardData);

  const addDataToDashboard = inputData => {
    setData({ ...data, ...inputData });
  };

  return (
    <div>
      <Dashboard data={data} />
      <Form addDataToDashboard={addDataToDashboard} />
    </div>
  );
};

export default App;
