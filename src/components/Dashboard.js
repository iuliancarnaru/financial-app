import React from "react";
import PropTypes from "prop-types";

const Dashboard = props => {
  const { income, outcome, percentage } = props.data;

  return (
    <header>
      <div className="main-title">
        Available Budget in <span>%Month%</span>
      </div>
      <div className="">
        <div className="flex-container income">
          <div>Income</div>
          <div>+{income}</div>
          <div className="precentage">&nbsp;</div>
        </div>
        <div className="flex-container outcome">
          <div>Outcome</div>
          <div>-{outcome}</div>
          {/* color percentage 0-35 green / 36-70 yellow / >= 71 red */}
          <div className="precentage">{percentage}%</div>
        </div>
        <button type="button" onClick={props.printMessage}>
          Click
        </button>
      </div>
    </header>
  );
};

Dashboard.propTypes = {
  dashboardData: PropTypes.shape({
    income: PropTypes.number,
    outcome: PropTypes.number,
    percentage: PropTypes.number
  })
};

export default Dashboard;
