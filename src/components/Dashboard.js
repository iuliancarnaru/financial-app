import React from "react";
//import PropTypes from "prop-types";

const Dashboard = props => {
  return (
    <header className="dashboard-container">
      <h1 className="heading-primary">Your stats for April</h1>
      <h2 className="heading-secondary income">
        Income: <span className="amount">+ 3400</span>
        <span className="percentage">&nbsp;</span>
      </h2>
      <h2 className="heading-secondary outcome">
        Outcome: <span className="amount">- 1900</span>
        <span className="percentage">80%</span>
      </h2>
    </header>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
