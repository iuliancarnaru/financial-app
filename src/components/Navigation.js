import React from "react";
import { Link } from "@reach/router";

const Navigation = () => {
  return (
    <div className="navigation flex-container-around">
      <Link to="/">
        <div className="icon-box">
          <i className="icon ion-md-clipboard" />
        </div>
      </Link>
      <Link to="edit">
        <div className="icon-box">
          <i className="icon ion-md-add-circle-outline" />
        </div>
      </Link>
      <Link to="/">
        <div className="icon-box">
          <i className="icon ion-md-trending-up" />
        </div>
      </Link>
      <Link to="/">
        <div className="icon-box">
          <i className="icon ion-md-more" />
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
