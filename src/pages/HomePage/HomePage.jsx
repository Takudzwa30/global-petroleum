import React from "react";

// Styles
import Style from "./HomePage.module.css";
import Header from "../../components/Header/Header";

const HomePage = () => {
  return (
    <div className={Style.homepage}>
      <div className={Style.home}>
        <Header />
        <div>Second section</div>
      </div>
    </div>
  );
};

export default HomePage;
