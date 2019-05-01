import React from "react";
import { Link } from "@reach/router";

const Navigation = () => {
  return (
    <div className="navigation flex-container">
      <Link to="/">HOME</Link>
      <Link to="/">ADD</Link>
      <Link to="/">TIMELINE</Link>
      <Link to="/">MORE</Link>
    </div>
  );
};

export default Navigation;
