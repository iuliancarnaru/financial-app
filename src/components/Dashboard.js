import React from "react";
//import PropTypes from "prop-types";

const Dashboard = props => {
  return (
    <header className="dashboard-container">
      <h1 className="heading-primary">Your stats for April</h1>
      <h2 className="heading-secondary">Income:</h2>
      <h2 className="heading-secondary">Outcome:</h2>
    </header>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
