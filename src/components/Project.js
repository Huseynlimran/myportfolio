import React from "react";
import { Link } from "react-router-dom";

export default function Project() {
  return (
    <section className="project" id="project" aria-label="" data-scroll-section
    >
      <h1 className="tittle" data-scroll
    data-scroll-direction="vertical"
    data-scroll-speed="3">My Project</h1>

      <div className="container-fluid  m-0">
        <div
          className="row mt-5"
          id="data"
          aria-label=""
          data-scroll
          data-scroll-direction="vertical"
          data-scroll-speed="3"
        >
          <div className="col-md-3 col-6 left mt-md-0 px-0">
            <div className="muncim">
              <img src="img/muncim.ro.png" className="img-fluid " alt=""></img>
              <Link to="/muncim" className="muncimLink" rel="noreferrer">
                Visit my project
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-6 left my-md-0 px-0">
            <div className="muncim">
              <img src="img/Nike.png" className="img-fluid " alt=""></img>
              <Link
                to="https://huseynlimran.github.io/NikeProject"
                target="_blank"
                rel="noreferrer"
                className="muncimLink"
              >
                Visit my project
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-6 left my-md-0 px-0">
            <div className="muncim">
              <img src="img/Room.png" className="img-fluid " alt=""></img>
              <Link
                to="https://huseynlimran.github.io/Room/"
                className="muncimLink"
                target="_blank"
                rel="noreferrer"
              >
                Visit my project
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-6 left my-md-0 px-0">
            <div className="muncim">
              <img src="img/Forten.png" className="img-fluid " alt=""></img>
              <Link
                to="https://huseynlimran.github.io/Forten/"
                className="muncimLink"
                target="_blank"
                rel="noreferrer"
              >
                Visit my project
              </Link>
            </div>
          </div>

          <div className="col-md-3 col-6 left mt-md-0 px-0">
            <div className="muncim">
              <img src="img/x-zone.png" className="img-fluid " alt=""></img>
              <Link
                to="https://huseynlimran.github.io/X-zone/"
                className="muncimLink"
                target="_blank"
                rel="noreferrer"
              >
                Visit my project
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-6 left my-md-0 px-0">
            <div className="muncim">
              <img src="img/Dudeshape.png" className="img-fluid " alt=""></img>
              <Link
                to="https://huseynlimran.github.io/DudeShape/"
                target="_blank"
                rel="noreferrer"
                className="muncimLink"
              >
                Visit my project
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-6 left my-md-0 px-0">
            <div className="muncim">
              <img src="img/aiman.png" className="img-fluid " alt=""></img>
              <Link
                to="https://aimanimr.netlify.app"
                className="muncimLink"
                target="_blank"
                rel="noreferrer"
              >
                Visit my project
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-6 left my-md-0 px-0">
            <div className="muncim">
              <img src="img/avasite.PNG" className="img-fluid " alt=""></img>
              <Link
                to="https://huseynlimran.github.io/ava/"
                className="muncimLink"
                target="_blank"
                rel="noreferrer"
              >
                Visit my project
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-center p-0">
            <div className="col-md-3 d-flex justify-content-md-center col-6 left mt-md-0 px-0">
              <div className="muncim">
                <img
                  src="img/2022-01-21-10-11-huseynlimran.github.io.png"
                  className="img-fluid "
                  alt=""
                ></img>
                <Link
                  to="https://huseynlimran.github.io/Webovio/"
                  className="muncimLink"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit my project
                </Link>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-md-center col-6 left mt-md-0 px-0">
              <div className="muncim">
                <img src="img/nft.png" className="img-fluid " alt=""></img>
                <Link
                  to="https://huseynlimran.github.io/BaseNft/"
                  className="muncimLink"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit my project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
}
