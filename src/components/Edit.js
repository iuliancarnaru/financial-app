import React, { useContext } from "react";
import { Link, navigate } from "@reach/router";
import AppContext from "./context";

const Edit = () => {
  const { state } = useContext(AppContext);

  const handleClick = () => {
    console.log("Redirecting....");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  var buttonStyle = {
    backgroundColor: "blue",
    padding: 5,
    color: "white",
    marginTop: 5
  };

  return (
    <div>
      <h1>{`Edit ${state.info[0].month} budget`}</h1>
      <div>
        <Link to="/">Dashboard</Link>
        <br />
        <Link to="../">Go Back</Link>
      </div>
      <button onClick={handleClick} style={buttonStyle}>
        Go back home
      </button>
    </div>
  );
};

export default Edit;
