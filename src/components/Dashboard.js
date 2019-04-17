import React from "react";

const Dashboard = () => {
  return (
    <header>
      <div className="main-title">
        Available Budget in <span>%Month%</span>
      </div>
      <div className="">
        <div className="flex-container income">
          <div>Income</div>
          <div>+ 2,200.00</div>
          <div className="precentage">&nbsp;</div>
        </div>
        <div className="flex-container outcome">
          <div>Outcome</div>
          <div>- 1,954.00</div>
          {/* color percentage 0-35 green / 36-70 yellow / >= 71 red */}
          <div className="precentage">88%</div>
        </div>
      </div>
    </header>
  );
};

export default Dashboard;
