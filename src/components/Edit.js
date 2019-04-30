import React, { useContext } from "react";
import { Link } from "@reach/router";
import AppContext from "./context";

const Edit = () => {
  const { state } = useContext(AppContext);
  return (
    <div>
      <h1>{`Edit ${state.info[0].month} budget`}</h1>
      <div>
        <Link to="/">Dashboard</Link>
        <br />
        <Link to="../">Go Back</Link>
      </div>
    </div>
  );
};

export default Edit;
