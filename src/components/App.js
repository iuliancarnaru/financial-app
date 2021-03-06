import React, { useContext, useReducer, Suspense } from "react";
import { Router } from "@reach/router";
import AppContext from "./context";
import AppReducer from "./reducer";

import StatusBar from "./StatusBar";
import Navigation from "./Navigation";

const Dashboard = React.lazy(() => import("./routes/Dashboard"));
const Edit = React.lazy(() => import("./routes/Edit"));
const NotFound = React.lazy(() => import("./routes/NotFound"));

const Loading = () => <h1>loading...</h1>;

const App = () => {
  const initialState = useContext(AppContext);
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="main-container">
        <StatusBar />
        <Suspense fallback={<Loading />}>
          <Router>
            <Dashboard path="/" />
            <Edit path="/edit" />
            <NotFound default />
          </Router>
        </Suspense>
        <Navigation />
      </div>
    </AppContext.Provider>
  );
};

export default App;
