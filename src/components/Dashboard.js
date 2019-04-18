import React from "react";
import PropTypes from "prop-types";

const Dashboard = props => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

Dashboard.propTypes = {
  title: PropTypes.string.isRequired
};

export default Dashboard;
