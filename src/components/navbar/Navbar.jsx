import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { useState } from "react";

const Navbar = () => {
  const [isNavbar, setIsNavbar] = useState("navBar");

  const showNav = () => {
    setIsNavbar("navBar activeNavBar");
  };

  //look section or div
  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1>
              <MdOutlineTravelExplore className="mainIcon icon" />
              EKMTravel.
            </h1>
          </a>
        </div>
        <div className={isNavbar}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="navbarBtn btn">
              <a href="#" className="navbarBtnA">
                BOOK NOW
              </a>
            </button>
          </ul>
          <div className="closeNavbar" onClick={() => setIsNavbar("navBar")}>
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div
          className="toggleNavbar"
          onClick={() => setIsNavbar("navBar activeNavBar")}
        >
          <TbGridDots className="toggleNavbarIcon icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
