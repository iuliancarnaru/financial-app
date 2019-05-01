import React, { useContext } from "react";
import AppContext from "../context";

const Edit = props => {
  const { state } = useContext(AppContext);

  return (
    <div className="dashboard">
      <h1>
        Edit {state.appData[0].title} with id {props.id}
      </h1>
      <p>
        Seamlessly provide access to transparent manufactured products after
        adaptive leadership skills. Energistically maximize global vortals
        vis-a-vis wireless intellectual capital. Quickly deliver prospective
        functionalities whereas accurate technology. Monotonectally enable
        tactical benefits vis-a-vis team building networks. Interactively
        conceptualize error-free methodologies through distinctive
        opportunities. Distinctively fabricate innovative materials rather than
        just in time e-business. Uniquely extend technically sound
        potentialities with wireless results. Assertively syndicate user
        friendly quality vectors vis-a-vis viral sources. Assertively repurpose
        proactive systems without fully tested e-tailers. Quickly pontificate
        value-added outsourcing rather than orthogonal solutions. Monotonectally
        myocardinate cutting-edge products through go forward processes.
        Professionally initiate timely outsourcing via intuitive interfaces.
        Authoritatively.
      </p>
    </div>
  );
};

export default Edit;
