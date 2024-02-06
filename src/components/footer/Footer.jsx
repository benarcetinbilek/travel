import { FiChevronRight, FiSend } from "react-icons/fi";
import "./footer.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video
          src="videoFooter.mp4"
          loop
          autoPlay
          muted
          type="video/mp4"
        ></video>
      </div>
      <div className="secContent container ">
        <div className="contactDiv flex">
          <div className="contactText">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="inputDivBtn btn flex" type="submit">
              SEND
              <FiSend className="inputDivBtnIcon icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="footerLogo flex">
                <MdOutlineTravelExplore className="logoDivIcon icon" />
                EKMTravel.
              </a>
            </div>
            <div className="footerParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. tempor
              incididunt ut labore et dolore magna aliqua. tempor incididunt ut
              labore et dolore magna aliqua. tempor incididunt ut labore et
              dolore magna aliqua.tempor incididunt ut labore et dolore magna
              aliqua.tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="footerSocials">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <SiTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>
            <div className="linkGroup">
              <span className="groupTitle">PARTNERS</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>
            <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Ocenia
              </li>
            </div>
          </div>
          <div className="footerCR flex">
            <small>BEST TRAVEL WEBSITE EVER</small>
            <small>COPYRIGHTS RESERVED - Bn'R Dev</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
