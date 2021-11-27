import React, { Component } from 'react'
import ClientLogo from '../component/ClientLogo'

export default class Seo extends Component {
    render() {
        return (
            <>
  {/* page-head start */}
  <section id="up" className="page-head flex-min-height-box dark-bg-2 typewriter-home">
    {/* page-head-bg */}
    <div className="page-head-bg" style={{backgroundImage: 'url(assets/images/backgrounds/SEO-article-header-1280x720.png)'}} />
    <div className="bg-overlay" />
    {/* flex-min-height-inner start */}
    <div className="flex-min-height-inner">
      {/* container start */}
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
  <section className>
    {/* container start */}
    <div data-animation-container className="container bottom-padding-60 top-padding-60">
      <div className="text-center">
        <h2 data-animation-child className="medium-title text-color-0 overlay-anim-box2" data-animation="overlay-anim2">Leading SEO Company in UK</h2>
      </div>
      <div data-animation-container className="flex-container top-margin-30">
        <div className="three-columns" style={{margin: 'auto', textAlign: 'center'}}>
          <img src="./assets/images/backgrounds/favorite.png" style={{width: '15% !important'}} /><br />
          <h4 data-animation-child className=" small-title text-color-0 top-margin-10">Qualified Lead Generation for Your Business</h4>
        </div>
        <div className="three-columns" style={{margin: 'auto', textAlign: 'center'}}>
          <img src="./assets/images/backgrounds/supermarket.png" style={{width: '15% !important'}} /><br />
          <h4 data-animation-child className=" small-title text-color-0 top-margin-10">Growth Hacking Strategies to Boost Your Sales</h4>
        </div>
        <div className="three-columns" style={{margin: 'auto', textAlign: 'center'}}>
          <img src="./assets/images/backgrounds/pin.png" style={{width: '15% !important'}} /><br />
          <h4 data-animation-child className="small-title text-color-0 top-margin-10">Drive Targeted Traffic to Your Website with Effective Marketing</h4>
        </div>
        <div className="three-columns" style={{margin: 'auto', textAlign: 'center'}}>
          <img src="./assets/images/backgrounds/graphic.png" style={{width: '15% !important'}} /><br />
          <h4 data-animation-child className=" small-title text-color-0 top-margin-10">KPI Based SEO Services to Quantify Our Accomplishments</h4>
        </div>
      </div>
    </div>{/* container end */}
    {/* about-slider start */}
  </section>
  {/* flex-min-height-box start */}
  <section id="down" className="dark-bg-1 flex-min-height-box about-page">
    {/* flex-min-height-inner start */}
    <div className="flex-min-height-inner">
      {/* container start */}
      <div className="container small top-bottom-padding-120">
        {/* flex-container start */}
        <div data-animation-container className="flex-container">
          {/* column start */}
          <img src="assets/images/backgrounds/seo-before-after.gif" alt="" />
        </div>{/* flex-container end */}
      </div>{/* container end */}
    </div>{/* flex-min-height-inner end */}
  </section>{/* flex-min-height-box end */}
  <ClientLogo></ClientLogo>
</>

        )
    }
}
