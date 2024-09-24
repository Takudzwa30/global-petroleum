import React from "react";

// Styles
import Style from "./SectionWrapper.module.css";

const SectionWrapper = ({ children }) => {
  return <div className={Style.sectionWrapper}>{children}</div>;
};

export default SectionWrapper;
