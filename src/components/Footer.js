import React from "react";
import { GrMail } from "react-icons/gr";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" data-scroll-section>
      <div className="containerl">
        <div
          className="row mt-md-5 d-flex align-items-center justify-content-between"
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="3"
        >
          <div className="col-md-2"><svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.338 35.068C6.338 36.54 5.418 37.276 3.578 37.276C1.76867 37.276 0.864 36.54 0.864 35.068V2.454C0.864 0.981999 1.76867 0.245999 3.578 0.245999C5.418 0.245999 6.338 0.981999 6.338 2.454V35.068Z" fill="black"/>
<path d="M38.138 2.454C38.138 0.981999 39.0427 0.245999 40.852 0.245999C42.692 0.245999 43.612 0.981999 43.612 2.454V35.068C43.612 36.54 42.692 37.276 40.852 37.276C39.0427 37.276 38.138 36.54 38.138 35.068V2.454ZM24.154 35.068C24.154 36.54 23.234 37.276 21.394 37.276C19.5847 37.276 18.68 36.54 18.68 35.068V2.454C18.68 0.981999 19.5847 0.245999 21.394 0.245999C23.234 0.245999 24.154 0.981999 24.154 2.454V35.068ZM34.918 18.002C34.918 19.0753 34.55 19.98 33.814 20.716C33.078 21.452 32.1733 21.82 31.1 21.82C30.0573 21.82 29.168 21.452 28.432 20.716C27.696 19.98 27.328 19.0753 27.328 18.002C27.328 16.9287 27.696 16.024 28.432 15.288C29.168 14.552 30.0573 14.184 31.1 14.184C32.1733 14.184 33.078 14.552 33.814 15.288C34.55 16.024 34.918 16.9287 34.918 18.002Z" fill="black"/>
</svg>

</div>
          <div className=" col-md-4 col-7 mb-5">
            <h3 className="mb-4">CONTACT</h3>
            <ul className="social">
              <Link
                className="d-flex align-items-center socialItems"
                to="mailto: huseynlimran@gmail.com"
                id=""
              >
                <GrMail className="me-2 socialIcon" /> huseynlimran@gmail.com
              </Link>
              <Link
                className="d-flex align-items-center socialItems"
                to="/"
                id=""
              >
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
