import React, { Component } from 'react'
import ClientLogo from '../component/ClientLogo'
import Footer from '../component/Footer'
export default class Hosting extends Component {
    render() {
        return (
            <>
  {/* page-head start */}
  <section id="up" className="page-head flex-min-height-box dark-bg-2 typewriter-home">
    {/* page-head-bg */}
    <div className="page-head-bg" style={{backgroundImage: 'url(assets/images/backgrounds/neonbrand-uq5RMAZdZG4-unsplash.jpg)'}} />
    {/* flex-min-height-inner start */}
    <div className="flex-min-height-inner">
      {/* container start */}
      <div className="container top-bottom-padding-120">
        <h2 className="overlay-loading2 medium-title red-color">DOMAIN</h2>
        <h3 className="large-title-bold text-color-4">
          <span className="overlay-loading2 overlay-light-bg-1 tr-delay01">HOSTING</span><br />
        </h3>
        <p className="d-flex-wrap top-margin-20 text-color-4">
          <span className="small-title-oswald text-height-20 fade-loading tr-delay04 top-margin-10">Creative team</span>
          <span className="small-title-oswald text-height-20 fade-loading tr-delay05 top-margin-10">Innovation ideas</span>
          <span className="small-title-oswald text-height-20 fade-loading tr-delay06 top-margin-10">Best services</span>
        </p>
      </div>{/* container end */}
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
  {/* page-head end */}
  <div id="down" className="light-bg-1 top-bottom-padding-120" data-midnight="black">
    <div className="container small text-center">
      <div className="exp-main-heading text-center">
        <h1>Domain Names in UK<br />
          <span>.Com , .Net, .Biz, .Org, .pk, .Com.pk</span></h1>
      </div>
    </div>
  </div>
  {/* flex-min-height-box start */}
  <div className="dark-bg-1 flex-min-height-box">
    {/* flex-min-height-inner start */}
    <div className="flex-min-height-inner">
      {/* flex-container start */}
      <div className="flex-container container small project-content top-padding-60 bottom-padding-60">
        {/* column start */}
        <div className="six-columns">
          <div className="content-right-margin-20">
            <h2 className="text-color-4 title-style"><strong>Hosting Details :</strong></h2>
            <ul className="list-dots">
              <li>
                <p data-animation-child className="p-style-medium text-color-3 fade-anim-box tr-delay03 animated fade-anim" data-animation="fade-anim">Shared Hosting</p>
              </li>
              <li>
                <p data-animation-child className="p-style-medium text-color-3 fade-anim-box tr-delay04 animated fade-anim" data-animation="fade-anim">C-panel Hosting.</p>
              </li>
              <li>
                <p data-animation-child className="p-style-medium text-color-3 fade-anim-box tr-delay04 animated fade-anim" data-animation="fade-anim">Word press Hosting</p>
              </li>
              <li>
                <p data-animation-child className="p-style-medium text-color-3 fade-anim-box tr-delay04 animated fade-anim" data-animation="fade-anim">VPS Hosting</p>
              </li>
              <li>
                <p data-animation-child className="p-style-medium text-color-3 fade-anim-box tr-delay04 animated fade-anim" data-animation="fade-anim">Dedicated Server</p>
              </li>
            </ul>
          </div>
        </div>{/* column end */}
        {/* column start */}
        <div className="six-columns text-center">
          <img src="assets/images/backgrounds/staticdesign.png" alt="" style={{width: '70%', margin: 'auto'}} />
          <img src="assets/images/backgrounds/dynamicdesign.png" alt="" style={{width: '70%', margin: 'auto'}} />
        </div>{/* column end */}
      </div>{/* flex-container end */}
    </div>{/* flex-min-height-inner end */}
  </div>{/* flex-min-height-box end */}
  <ClientLogo/>
  {/* <Footer/> */}
</>

        )
    }
}
