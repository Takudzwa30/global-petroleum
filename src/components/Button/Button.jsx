import React from "react";

// Icons
import arrow from "../../assets/images/arrow.png";

// Styles
import Style from "./Button.module.css";

const Button = ({ children }) => {
  return (
    <button className={Style.btn}>
      {children}
      <img src={arrow} alt="" />
    </button>
  );
};

export default Button;
