import React from "react";

// Components
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

// Images
import update1 from "../../assets/images/update1.png";
import update2 from "../../assets/images/update2.png";
import update3 from "../../assets/images/update3.png";
import update4 from "../../assets/images/update4.png";

// Styles
import Style from "./Updates.module.css";

const Updates = () => {
  const data = [update2, update3, update4, update1];
  return (
    <SectionWrapper>
      <SectionTitle title="Latest news" />
      <div className={Style.updateGrid}>
        <img src={update1} alt="update" />
        <div className={Style.textWrapper}>
          <h5>Get to know about our latest updates</h5>
          <p>
            Stay up-to-date with the most recent developments in the energy and
            petroleum industry. Our latest news section brings you breaking
            updates, innovations, and industry insights, covering everything
            from advancements in renewable energy to shifts in global oil
            markets. Explore key trends, expert analysis, and the latest
            projects shaping the future of the energy landscape..
          </p>

          <div className={Style.imgGrid}>
            {data.map((item, index) => {
              return (
                <img
                  alt="item"
                  key={index}
                  className={Style.gridItem}
                  src={item}
                />
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Updates;
