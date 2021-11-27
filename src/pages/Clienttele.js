import React, { Component } from 'react'
import ClientLogo from '../component/ClientLogo'

export default class Clienttele extends Component {
    render() {
        return (
            <>
  {/* page-head start */}
  <section id="up" className="page-head flex-min-height-box dark-bg-2 typewriter-home">
    {/* page-head-bg */}
    <div className="page-head-bg" style={{backgroundImage: 'url(assets/images/backgrounds/client-header.png)'}} />
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
  {/* flex-min-height-box start */}
  <section id="down" className="light-bg-1 about-page">
    <div className="container top-bottom-padding-120">
      <h1 className="large-title-bold">The Core Of Our Revolution</h1>
      <h4 className>The complete digital solution to any business, anywhere. From product development to sales. We provide all the services for your business optimization.</h4>
    </div>
    <img src="assets/images/backgrounds/2019.png" alt="" />
    <img src="assets/images/backgrounds/2018.png" alt="" />
    <img src="assets/images/backgrounds/2017.png" alt="" />
    <img src="assets/images/backgrounds/2016.png" alt="" />
  </section>{/* flex-min-height-box end */}
  <ClientLogo></ClientLogo>
</>

        )
    }
}
