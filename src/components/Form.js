import React, { useState } from "react";

const Form = props => {
  const initialState = {
    income: "",
    outcome: "",
    percentage: ""
  };

  const [inputData, setInputData] = useState(initialState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleFromSubmit = event => {
    event.preventDefault();
    if (!inputData.income || !inputData.outcome) return;

    props.addDataToDashboard(inputData);
    setInputData(initialState);
  };

  return (
    <div>
      <form onSubmit={handleFromSubmit}>
        <label htmlFor="income">Add income</label>
        <input
          type="number"
          id="income"
          name="income"
          value={inputData.income}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="outcome">Add outcome</label>
        <input
          type="number"
          id="outcome"
          name="outcome"
          value={inputData.outcome}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button type="submit">Add data</button>
      </form>
    </div>
  );
};

export default Form;
