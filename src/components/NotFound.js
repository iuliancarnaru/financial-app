import React from "react";
import { navigate } from "@reach/router";

const NotFound = () => {
  return (
    <div>
      <h1>404 Page not found</h1>
      {setTimeout(() => {
        navigate("/");
      }, 2000)}
    </div>
  );
};

export default NotFound;
