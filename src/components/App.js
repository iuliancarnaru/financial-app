import React from "react";
import PropTypes from "prop-types";

const App = props => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

App.defaultProps = {
  title: "CRUD with Hooks"
};

App.propTypes = {
  title: PropTypes.string
};

export default App;
