import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vr31jeu",
        "template_br1oo5x",
        form.current,
        "HsLEZF3V0mw3EqPr4"
      )
      .then(
        (result) => {
          console.log(result.text);
          const succes = document.querySelector(".succes");
          succes.classList.add("activeSucces");
          setTimeout(() => {
            succes.classList.remove("activeSucces");
          }, 1500);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div
        className="containerl"
        aria-label=""
        data-scroll
        data-scroll-direction="vertical"
        data-scroll-speed="3"
      >
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2 className=" mb-5">Contact Me</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="contact-item d-flex mb-3">
              <div className="icon fs-4 text-danger">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="text">
                <h3 className="fs-5">Email</h3>
                <p className="mt-2">huseynlimran@gmail.com</p>
              </div>
            </div>

            <div className="contact-item d-flex mb-3">
              <div className="icon fs-4 text-danger">
                <i className="fas fa-phone"></i>
              </div>
              <div className="text">
                <h3 className="fs-5">Phone</h3>
                <p className="mt-2">+994 55 620 62 24</p>
              </div>
            </div>

            <div className="contact-item d-flex align-items-center mb-3">
              <div className="icon fs-4 text-danger">
                <i className="bi bi-file-earmark-person"></i>
              </div>
              <div className="text">
                <a href="img/Imran CV.pdf" className="cv fs-5" download>
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row d-flex input1">
                  <div className="col-lg-6 mb-4">
                    <div className="inputAni">
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="inputs w-100 text-white"
                      ></input>
                      <span></span>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="inputAni">
                      <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="inputs w-100 text-white"
                      ></input>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <div className="inputAni">
                      <input
                        type="text"
                        id="toSubject"
                        placeholder="Subject"
                        className="inputs w-100 text-white"
                      ></input>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <div className="inputAni">
                      <textarea
                        rows="5"
                        name="message"
                        placeholder="Your Message"
                        className="w-100 text-white"
                      ></textarea>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <button className="btnSend">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
          <div className="succes">
            <div className="box">
              <h3>Completed</h3>
            </div>
          </div>
      </div>
      <img src="img/Illustration.png" className="img-fluid ki" alt=""></img>
    </section>
  );
}
