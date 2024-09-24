import React from "react";

// Styles
import Style from "./HomePage.module.css";
import Header from "../../components/Header/Header";
import Solutions from "../../components/Solutions/Solutions";
import Partners from "../../components/Partners/Partners";

const HomePage = () => {
  return (
    <div className={Style.homepage}>
      <div className={Style.home}>
        <Header />
        <Solutions />
        <Partners />
      </div>
    </div>
  );
};

export default HomePage;
