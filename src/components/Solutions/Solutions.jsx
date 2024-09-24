import React from "react";

// Components
import Button from "../Button/Button";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

// Images
import futureImg from "../../assets/images/futureImg.png";

// Styles
import Style from "./Solutions.module.css";

const Solutions = () => {
  return (
    <SectionWrapper>
      <div className={Style.solutions}>
        <div className={Style.leftContainer}>
          <h2>Sustainable Energy Solutions for the Future</h2>
          <p>
            Delivering reliable, sustainable, and efficient energy solutions
            that cater to both industrial and personal needs. We are committed
            to reducing environmental impact while maintaining optimal
            performance and innovation to power businesses and communities for a
            brighter, greener tomorrow.
          </p>
          <Button>Read More</Button>
        </div>
        <div className={Style.rightContainer}>
          <img src={futureImg} alt="Solutions" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Solutions;
