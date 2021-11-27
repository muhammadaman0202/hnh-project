import React, { Component } from 'react'
import ClientLogo from '../component/ClientLogo'

export default class Platform extends Component {
    render() {
        return (
            <>
            {/* page-head start */}
            <section id="up" className="page-head flex-min-height-box dark-bg-2">
              {/* page-head-bg */}
              <div className="page-head-bg overlay-loading2" data-midnight="black" style={{backgroundImage: 'url(assets/images/backgrounds/plat.png)'}} />
              {/* flex-min-height-inner start */}
              <div className="flex-min-height-inner">
                {/* flex-container start */}
                <div className="container top-bottom-padding-120 flex-container response-999">
                  {/* column start */}
                  <div className="six-columns six-offset">
                    <div className="content-left-margin-40">
                      <h2 className="large-title-bold">
                        <span className="load-title-fill tr-delay03" data-text="PLATFORM">PLATFORM</span><br />
                      </h2>
                      <p className="p-style-bold-up text-height-20 d-flex-wrap">
                        <span className="load-title-fill tr-delay08" data-text="Industries made better">Industries made better</span>
                        <span className="load-title-fill tr-delay09" data-text=" with our mobile"> with our mobile</span>
                        <span className="load-title-fill tr-delay10" data-text="application development service">application development service</span>
                      </p>
                    </div>
                  </div>{/* column end */}
                </div>{/* flex-container end */}
              </div>{/* flex-min-height-inner end */}
              {/* scroll-btn start */}
              <a href="#down" className="scroll-btn pointer-large">
                <div className="scroll-arrow-box">
                  <span className="scroll-arrow" />
                </div>
                <div className="scroll-btn-flip-box">
                  <span className="scroll-btn-flip" data-text="Scroll">Scroll</span>
                </div>
              </a>{/* scroll-btn end */}
            </section>{/* page-head end */}
            {/* section start */}
            <section id="down" className="dark-bg-1 top-bottom-padding-120">
              {/* container start */}
              <div className="container text-center" data-animation-container>
                <h2 className="large-title title-fill" data-animation="title-fill-anim" data-text="Business Process">Business Process</h2>
                <div className="progress-box" style={{width: '40%', margin: '20px auto', borderRadius: '5px'}}>
                  <div className="progress-zero" data-progress="63%">
                    <div className="progress-full" data-animation-child data-animation="slide-progress" />
                    <div className="progress-full progress-full-red" data-animation-child data-animation="slide-progress" data-animation-delay="200ms" />
                  </div>
                </div>
              </div>{/* container end */}
              {/* top-padding-90 start */}
              <div className="top-padding-90">
                {/* container start */}
                <div className="container">
                  <div className="services-bg" style={{backgroundImage: 'url(assets/images/services/achievement-brainstorming-branding-1162968.jpg)'}} />
                </div>{/* container end */}
                {/* flex-container start */}
                <div className="container small top-padding-60 flex-container response-999 services-content">
                  <div className>
                    <div className="content-left-margin-20">
                      <h2><span className="load-title-fill tr-delay08" data-text="We ensure that once we take a project on-board, we provide 360 degree solutions.">We ensure that once we take a project on-board, we provide 360 degree solutions.</span></h2>
                      <p className="p-style-large text-color-5 fade-anim-box tr-delay04" data-animation="fade-anim">As Hnh Tech Solutions is technological hub, we give your project the ultimate platform it needs to be become scalable and successful.
                        We create asthetically pleasing web apps tailored to your needs.</p>
                    </div>
                  </div>{/* column end */}
                </div>{/* flex-container end */}
              </div>{/* top-padding-90 end */}
            </section>{/* section end */}
            {/* light-bg-2 start */}
            <div className="light-bg-2 top-bottom-padding-120" data-midnight="black" style={{display: 'none'}}>
              <div className="container small">
                <div className="tabs">
                  <ul className="tabs-nav text-center">
                    <li><a href="#tab-1" className=" pointer-small"><h3>Features</h3></a></li>
                    <li><a href="#tab-2" className="pointer-small"><h3>Features</h3></a></li>
                    <li><a href="#tab-3" className="pointer-small"><h3>Features</h3></a></li>
                    <li><a href="#tab-4" className="pointer-small"><h3>Features</h3></a></li>
                    <li><a href="#tab-5" className="pointer-small"><h3>Features</h3></a></li>
                  </ul>
                  <div className="tabs-stage">
                    <div id="tab-1">
                      <p className="p-style-large text-color-4 fade-anim-box tr-delay04" data-animation="fade-anim">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec neque nisi, dictum aliquet lectus.</p>
                    </div>
                    <div id="tab-2">
                      <p className="p-style-large text-color-4 fade-anim-box tr-delay04" data-animation="fade-anim">Phasellus pharetra aliquet viverra. Donec scelerisque tincidunt diam, eu fringilla urna auctor at.</p>
                    </div>
                    <div id="tab-3">
                      <p className="p-style-large text-color-4 fade-anim-box tr-delay04" data-animation="fade-anim">Phasellus pharetra aliquet viverra. Donec scelerisque tincidunt diam, eu fringilla urna auctor at.</p>
                    </div>
                    <div id="tab-4">
                      <p className="p-style-large text-color-4 fade-anim-box tr-delay04" data-animation="fade-anim">Phasellus pharetra aliquet viverra. Donec scelerisque tincidunt diam, eu fringilla urna auctor at.</p>
                    </div>
                    <div id="tab-5">
                      <p className="p-style-large text-color-4 fade-anim-box tr-delay04" data-animation="fade-anim">Phasellus pharetra aliquet viverra. Donec scelerisque tincidunt diam, eu fringilla urna auctor at.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* testimonials-slider start */}
            </div>
            {/* light-bg-2 end */}
            <ClientLogo></ClientLogo>
          </>
          
        )
    }
}
