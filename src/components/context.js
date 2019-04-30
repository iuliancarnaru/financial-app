import React from "react";

const AppContext = React.createContext({
  info: [
    {
      month: "April",
      total: 1500
    }
  ]
});

export default AppContext;
