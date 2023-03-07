import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [active, setActive] = useState("nav-links");
  const [toggleIcon, setToggleIcon] = useState("burger");

  const showNav = () => {
    active === "nav-links"
      ? setActive("navlinks nav-active")
      : setActive("nav-links");

    // Toggle

    toggleIcon === "burger"
      ? setToggleIcon("burger toggle")
      : setToggleIcon("burger");
  };
  return (
    <nav className="navSticky">
      <div className="container">
        <Link className="logo">
         Imran

        </Link>

        <ul className={active}>
          <Link href="#D" className="logo"></Link>

          <li className="listLi">
            <Link href="#D" className="linksNav">
              PRODUCTS
            </Link>
          </li>
          <li className="listLi">
            <Link href="#myskills" className="linksNav">
              SOLUTIONS
            </Link>
          </li>
          <li className="listLi">
            <Link href="#project" className="linksNav">
              CUSTOMER
            </Link>
          </li>
          <li className="listLi">
            <Link href="#aboutme" className="linksNav">
              PRICING
            </Link>
          </li>
          <li className="listLi">
            <Link href="#aboutme" className="linksNav">
              RESOURCES
            </Link>
          </li>
          <li className="listLi">
            <Link href="#registerNow" className="linksNav registerLink">
              REGISTER NOW
              <img
                src="img/arrow-down-left.png"
                className="arrow"
                alt="arrow"
              />
            </Link>
          </li>
        </ul>

        <div></div>

        <div className={toggleIcon} onClick={showNav}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
