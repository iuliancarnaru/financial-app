import React, { useContext, useReducer } from "react";
import AppContext from "./context";
import AppReducer from "./reducer";

import { Router, Link } from "@reach/router";

import Dashboard from "./Dashboard";
import Edit from "./Edit";
import NotFound from "./NotFound";

const App = () => {
  const initialState = useContext(AppContext);
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="main-container">
        <Router>
          <Dashboard path="/" />

          <Edit path="/edit" />

          <NotFound default />
        </Router>

        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="edit">Edit</Link>
        </nav>
      </div>
    </AppContext.Provider>
  );
};

export default App;
