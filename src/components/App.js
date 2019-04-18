import React from "react";
import PropTypes from "prop-types";

const App = props => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

App.propTypes = {
  title: PropTypes.string
};

App.defaultProps = {
  title: "Financial independence"
};

export default App;
