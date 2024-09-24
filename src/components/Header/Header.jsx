import React, { useState } from "react";

// Libraries
import classNames from "@hybris-software/ui-kit/dist/Utils/classNames";

// Assets
import logo from "../../assets/images/logo.png";

// Styles
import Style from "./Header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={Style.header}>
      <div className={Style.mobileHead}>
        <div className={Style.head}>
          <img src={logo} alt="Logo" />
          <Links />
          <Address />
        </div>
        <div className={Style.navBarIcon}>
          <div
            className={classNames(
              Style.navBarIconMobile,
              open ? Style.active : Style.notActive
            )}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span className={Style.iconPartOne}></span>
            <span className={Style.iconPartTwo}></span>
            <span className={Style.iconPartThree}></span>
          </div>
        </div>
      </div>
      <div className={Style.divider} />

      {open && (
        <div onClick={() => setOpen(false)} className={Style.mobileNavbar}>
          <Links />
          <Address />
        </div>
      )}
    </div>
  );
};

const Address = () => {
  return (
    <div className={Style.address}>
      <p>+971 4 529 4004</p>
      <p>info@afrigroup.ae</p>
      <p>Mon — Sat: 9AM — 6PM</p>
    </div>
  );
};

const Links = () => {
  return (
    <div className={Style.navLinks}>
      <a href="#home">HOME</a>
      <a href="#who">WHO WE ARE</a>
      <a href="#what">WHAT WE DO</a>
      <a href="#contact">CONTACT US</a>
    </div>
  );
};

export default Header;
