import React from "react";
import Heros from "../../Components/Heros";
import "./index.scss";

const HomePage = () => {
  return (
    <div className="container-body">
      <Heros genre="16" page="1" />
    </div>
  );
};

export default HomePage;
