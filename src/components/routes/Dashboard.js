import React from "react";

const Dashboard = () => {
  const dashboardInfo = [
    {
      icon: "icon ion-ios-key",
      amount: 1250,
      color: "danger"
    },
    {
      icon: "icon ion-ios-pizza",
      amount: 400,
      color: "neutral"
    },
    {
      icon: "icon ion-ios-bus",
      amount: 120,
      color: "success"
    }
  ];
  return (
    <div className="dashboard">
      <div className="dashboard-general">
        {dashboardInfo.map(item => (
          <div key={item.icon} className="dashboard-general--card">
            <i className={item.icon} />
            <div className="price-container">
              <span className={item.color} />
              <p>{item.amount}</p>
            </div>
          </div>
        ))}
      </div>
      <div>Part 2</div>
      <div>Part 3</div>
    </div>
  );
};

export default Dashboard;
