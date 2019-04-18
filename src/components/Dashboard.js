import React from "react";
//import PropTypes from "prop-types";

const Dashboard = props => {
  return (
    <React.Fragment>
      <header className="dashboard-container">
        <h1 className="heading-primary">
          <i class="icon ion-md-calendar margin-right-s" />
          April
        </h1>
        <h2 className="heading-secondary income">
          Income: <span className="amount">+ 3400</span>
          <span className="percentage">&nbsp;</span>
        </h2>
        <h2 className="heading-secondary outcome">
          Outcome: <span className="amount">- 1900</span>
          <span className="percentage">80%</span>
        </h2>
      </header>
      <section className="dashboard-card">
        <div className="dashboard-card--home">
          <h2>
            <i class="icon ion-md-home" />
          </h2>
          <h3>1200</h3>
        </div>
        <div className="dashboard-card--home">
          <h2>
            <i class="icon ion-md-pizza" />
          </h2>
          <h3>1200</h3>
        </div>
        <div className="dashboard-card--home">
          <h2>
            <i class="icon ion-md-bus" />
          </h2>
          <h3>1200</h3>
        </div>
      </section>
    </React.Fragment>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
