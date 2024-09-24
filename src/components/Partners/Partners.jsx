import React from "react";

// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

// Styles
import Style from "./Partners.module.css";
import Button from "../Button/Button";

const Partners = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="who we are" />
      <h4 className={Style.whoWeAre}>
        At Global Petroleum, we are proud of our 17-year journey that began in
        South Africa. Over the years, we've grown into a family of companies
        focused on excellence and innovation. Our four core subsidiaries.
      </h4>
      <div className={Style.btnWrapper}>
        <Button>Read More</Button>
      </div>
      <div className={Style.trusted}>Trusted By</div>
    </SectionWrapper>
  );
};

export default Partners;
