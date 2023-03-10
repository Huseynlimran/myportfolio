import React from 'react'

export default function About() {
  return (
    <section className="about my-4 pt-2" id="aboutme" data-scroll-section >
        <div className="container-lg"  id="pinSection">
            <div className="row text-center">
                <div className="col-12">
                    <h2   aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="3" >About Me</h2>
                </div>
            </div>
            <div className="row justify-content-center" >
                <div className="col-lg-6 col-md-8 col-11 sd"   aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="7">
                    <p className="top" >
                        <i className="fas fa-quote-left"></i> Hi, my name is Imran. I'm 25 years old. I'm in the IT field
                        since 2017.I
                        have interests on learning new languages and framework. I studied
                        Front End Development by myself because of my enthusiasm. I've
                        learnt <span>HTML</span> ,<span>CSS/SCSS</span> , <span>BOOTSTRAP</span> ,
                        <span>JAVASCRIPT</span> and <span>REACT</span>
                        successfully. I love my job and I try to do my best to be the best guy
                        in the web development field. <i className="fas fa-quote-right"></i>
                    </p>
                    <div className="">
                        <img src="img/undraw_static_assets_rpm6 1 (2).svg" className="img-fluid " alt=""></img>
                    </div>
                </div>
            </div>
        </div>
        <img src="img/IMAGE.png"   aria-label=""
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-sticky data-scroll-target="#pinSection"
                    data-scroll-speed="3"
                     className="strs top" alt=""></img>


    </section>
  )
}
