import React from "react";
import { GrMail } from "react-icons/gr";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-2">
            <Link to="/" className="logoMini">
              <span>I</span>H
            </Link>
          </div>
          <div className="col-md-4 col-7 mb-5">
            <h3>CONTACT</h3>
            <ul className="social">
                <Link to="mailto: huseynlimran@gmail.com" id="">
                  <GrMail /> huseynlimran@gmail.com
                </Link>
                <Link to="/" id="">
                  <IoPhonePortraitOutline />
                  +994 55 620 62 24
                </Link>
                <Link
                  to="https://github.com/Huseynlimran"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <BsGithub />
                  GitHub
                </Link>

                  <Link
                    to="https://www.linkedin.com/in/imran-huseynli-406347220/"
                    className=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsLinkedin />
                    Linkedin
                  </Link>
            </ul>
          </div>
          <div className="col-md-4 ms-md-0 ms-2 col-4 pb-5 d-flex flex-column justify-content-end">
            <ul>
                <Link to="/" id="" className="navfooter">
                  Home
                </Link>
                <Link to="/myskills" id="" className="navfooter">
                  My Skills
                </Link>
                <Link to="/project" className="navfooter">
                  Project
                </Link>

                  <Link to="/about" className="navfooter">
                    About Me
                  </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
