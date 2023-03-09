import React from "react";
import { GrMail } from "react-icons/gr";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" data-scroll-section>
      <div className="container">
        <div className="row mt-5"    aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3">
          <div className="col-md-2">
            <Link className="logoMini">Imran</Link>
          </div>
          <div className=" col-md-4 col-7 mb-5">
            <h3 className="mb-4">CONTACT</h3>
            <ul className="social">
              <Link className="d-flex align-items-center socialItems" to="mailto: huseynlimran@gmail.com" id="">
                <GrMail className="me-2 socialIcon" /> huseynlimran@gmail.com
              </Link>
              <Link className="d-flex align-items-center socialItems" to="/" id="">
                <IoPhonePortraitOutline className="me-2 socialIcon" />
                +994 55 620 62 24
              </Link>
              <Link 
                to="https://github.com/Huseynlimran"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center socialItems"
              >
                <BsGithub className="me-2 socialIcon" />
                GitHub
              </Link>

              <Link
                to="https://www.linkedin.com/in/imran-huseynli-406347220/"
                className="d-flex align-items-center socialItems"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="me-2  socialIcon" />
                Linkedin
              </Link>
            </ul>
          </div>
          <div className="col-md-4 ms-md-0 ms-2 col-4 pb-5 ">
            <ul className="navFooter">
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
