import React from "react";

// Styles
import Style from "./SectionTitle.module.css";

const SectionTitle = ({ title }) => {
  return (
    <div className={Style.titleWrapper}>
      <div className={Style.divider} />
      <p>{title}</p>
    </div>
  );
};

export default SectionTitle;
