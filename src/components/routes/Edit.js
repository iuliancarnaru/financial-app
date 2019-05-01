import React, { useContext } from "react";
import AppContext from "../context";

const Edit = props => {
  const { state } = useContext(AppContext);

  return (
    <div>
      <h1>
        {state.appData[0].title} with id {props.id}
      </h1>
    </div>
  );
};

export default Edit;
