import React, { Component } from 'react'
import ClientLogo from '../component/ClientLogo'

export default class LogoDesign extends Component {
    render() {
        return (
            <>
  {/* page-head start */}
  <section id="up" className="page-head flex-min-height-box dark-bg-2 typewriter-home">
    {/* page-head-bg */}
    <div className="page-head-bg" style={{backgroundImage: 'url(assets/images/backgrounds/Logo-Designing-Urdu-Tutorial.jpg)'}} />
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
    {/* flex-min-height-inner start */}
    <div className="top-bottom-padding-30">
      {/* container start */}
      <div className="container" data-animation-container>
        <div>
          <h2 className="medium-title">Good Design Brings Good Business</h2>
          <p className>The logo is the face of your Brand. We have the most talented and experienced logo designers, who approach every logo design project with an inspired dedication with a complete thought process. Being a focus based quality branding agency in UK, we have been designing logos and brand identities for many reputed companies and that’s something we are good at.</p>
        </div>
        <div className="text-center top-padding-40">
          <h2 className="medium-title">Logo Designing
            Services</h2>
          <p className>Our digital development services are excellent at solving business problems. Our professionals can automate all types of business processes and enable companies to focus more on their core operations. Choose a relevant software development service and you will find the most cost-effective solution for your digital needs.</p>
        </div>
      </div>{/* container end */}
    </div>{/* flex-min-height-inner end */}
    <div className="flex-container container">
      <div className="six-columns">
        <img src="assets/images/backgrounds/print.png" alt="" style={{width: '50%'}} />
      </div>
      <div className="six-columns">
        <h1>Print Design</h1>
        <p>Your printed marketing material can make a significant impact on your company’s image. We provide quality print design services to make sure that your business cards, letterheads, envelopes, brochures, and other marketing materials stand out in every sales meeting, face-to-face encounters and direct mailings.</p>
      </div>
      <div className="six-columns top-padding-40">
        <h1>Brand &amp; Stationery Design</h1>
        <p>We offer a complete range of quality brand identity design services, stationery design services, company rebranding services, brand guidelines services, and branding consultation. Defining your brand’s identity is key in marketing, therefore our dedicated team ensures that they build out your brand visually. Buzz Interactive is a creative brand agency you will ever need to stand out your brand image.</p>
      </div>
      <div className="six-columns text-center top-padding-40">
        <img src="assets/images/backgrounds/Branding.jpg" alt="" style={{width: '80%', margin: 'auto'}} />
      </div>
    </div>
  </section>{/* flex-min-height-box end */}
  <ClientLogo></ClientLogo>
</>

        )
    }
}
