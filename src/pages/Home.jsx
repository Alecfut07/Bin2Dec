import React from "react";
import BinaryInput from "@components/BinaryInput";
import DecimalResult from "@components/DecimalResult";

const Home = () => {
  return (
    <div>
      <BinaryInput />
      <div>
        <DecimalResult />
      </div>
    </div>
  );
};

export default Home;
