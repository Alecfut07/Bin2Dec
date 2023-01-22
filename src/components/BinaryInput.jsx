import React, { useState } from "react";

const BinaryInput = () => {
  const [binaryValue, setBinaryValue] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.validity.valid
      ? event.target.value
      : binaryValue.state.inputValue;

    setBinaryValue(inputValue);
  };

  return (
    <div className="binInput">
      <label>Binary</label>
      <input
        id="binaryInput"
        type="text"
        pattern="[0-1]*"
        minLength="1"
        maxLength="8"
        value={binaryValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default BinaryInput;
