import React from "react";
import PropTypes from "prop-types";
import "normalize.css";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string
};

export default App;
