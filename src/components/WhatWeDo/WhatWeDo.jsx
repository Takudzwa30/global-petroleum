import React from "react";

// Components
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import SectionTitle from "../SectionTitle/SectionTitle";

// IMages
import oilPumps from "../../assets/images/oilPumps.png";
import whiteArrow from "../../assets/images/whiteArrow.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";

// Styles
import Style from "./WhatWeDo.module.css";

// Data
const data = [
  {
    img: img1,
    title: "Portable Fuel Station",
    subTitle:
      "For the first time ever, you can have a portable fuel station that’s  as safe and reliable as an in-ground fuel station. Our engineers have  designed a product that is not only portable, but also durable and easy  to install.",
  },
  {
    img: img2,
    title: "Lubricants",
    subTitle:
      "Engine oils are the most important part of your vehicle. Afrilube  Motor oils have been proven to be the best in the industry, with a  variety of options and high-quality ingredients that will keep your  engine running smoothly and efficiently.",
  },
  {
    img: img3,
    title: "Portable Workshops",
    subTitle:
      "Portable workshops are a simple, cost-effective solution to your  company’s needs. Whether you need a mobile workshop for field work or  want to integrate it into your existing infrastructure, our workshops  have you covered. The modular design is easy to assemble and can be  customized to meet your needs.",
  },
  {
    img: img4,
    title: "Bitumen",
    subTitle:
      "Bitumen is a black, sticky, and highly viscous liquid or semi-solid  form of petroleum. It may also be called tar, asphalt, pitch, and  bituminous coal. Bitumen is naturally occurring in the earth’s crust and  is a substance produced through the distillation of crude oil. We are  one of the leading producers & suppliers of Bitumen across Africa",
  },
];

const WhatWeDo = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="What We Do" />
      <div className={Style.topSection}>
        <div>
          <h4>Industrial Fuel</h4>
          <p>
            We are suppliers of high-quality industrial fuels to the African
            market with in-house logistic solutions. we serve major Shipping
            companies, Power stations, and Transport companies in Africa with
            our on-time deliveries.
          </p>
        </div>
        <ImageLink img={oilPumps} />
      </div>
      <div className={Style.dataGrid}>
        {data.map((item, index) => {
          return <SectionLink key={index} {...item} />;
        })}
      </div>
    </SectionWrapper>
  );
};

const ImageLink = ({ img }) => {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className={Style.imageLink}>
      <div className={Style.arrow}>
        <div className={Style.arrowIn}>
          <img src={whiteArrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

const SectionLink = ({ img, title, subTitle }) => {
  return (
    <div className={Style.sectionLink}>
      <ImageLink img={img} />
      <h6>{title}</h6>
      <p>{subTitle}</p>
    </div>
  );
};

export default WhatWeDo;
