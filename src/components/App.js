import React, { useContext, useReducer } from "react";
import AppContext from "./context";
import AppReducer from "./reducer";

import Dashboard from "./Dashboard";

const App = () => {
  const initialState = useContext(AppContext);
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="main-container">
        <Dashboard />
      </div>
    </AppContext.Provider>
  );
};

export default App;
