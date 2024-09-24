import React from "react";

// Styles
import Style from "./HomePage.module.css";
import Header from "../../components/Header/Header";
import Solutions from "../../components/Solutions/Solutions";
import Partners from "../../components/Partners/Partners";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Updates from "../../components/Updates/Updates";
import ContactUs from "../../components/ContactUs/ContactUs";

const HomePage = () => {
  return (
    <div className={Style.homepage}>
      <div className={Style.home}>
        <Header />
        <Solutions />
        <Partners />
        <WhatWeDo />
        <Updates />
        <ContactUs />
      </div>
    </div>
  );
};

export default HomePage;
