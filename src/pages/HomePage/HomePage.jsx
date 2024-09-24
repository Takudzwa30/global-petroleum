import React from "react";

// Styles
import Style from "./HomePage.module.css";
import Header from "../../components/Header/Header";
import Solutions from "../../components/Solutions/Solutions";

const HomePage = () => {
  return (
    <div className={Style.homepage}>
      <div className={Style.home}>
        <Header />
        <Solutions />
      </div>
    </div>
  );
};

export default HomePage;
