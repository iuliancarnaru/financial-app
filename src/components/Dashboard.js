import React from "react";
//import PropTypes from "prop-types";

const Dashboard = props => {
  return (
    <React.Fragment>
      <div className="dashboard-main">
        <section className="dashboard-container">
          <h1 className="heading-primary">
            <i class="icon ion-md-calendar margin-right-s" />
            Total April %amount%
          </h1>
          <h2 className="heading-secondary income">
            Income: <span className="amount">3400</span>
            <span className="percentage">&nbsp;&nbsp; &nbsp;</span>
          </h2>
          <h2 className="heading-secondary outcome">
            Outcome: <span className="amount">1900</span>
            <span className="percentage">80%</span>
          </h2>
        </section>

        <section className="dashboard-card">
          <div className="dashboard-card--home">
            <i class="icon ion-md-home icon-color" />
            <div className="flex-wrapper">
              <div className="info-dot info-dot--bad">&nbsp;</div>
              <p className="info-display">1650</p>
            </div>
          </div>

          <div className="dashboard-card--home">
            <i class="icon ion-md-pizza icon-color" />
            <div className="flex-wrapper">
              <div className="info-dot info-dot--medium">&nbsp;</div>
              <p className="info-display">400</p>
            </div>
          </div>

          <div className="dashboard-card--home">
            <i class="icon ion-md-bus icon-color" />
            <div className="flex-wrapper">
              <div className="info-dot info-dot--good">&nbsp;</div>
              <p className="info-display">120</p>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
