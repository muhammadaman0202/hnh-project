import React, { Component } from 'react'
import ClientLogo from '../component/ClientLogo'

export default class Digital extends Component {
    render() {
        return (
            <>
            {/* page-head start */}
            <section id="up" className="page-head flex-min-height-box dark-bg-2 typewriter-home">
              {/* page-head-bg */}
              <div className="page-head-bg" style={{backgroundImage: 'url(assets/images/backgrounds/digi-header.jpg)'}} />
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
                    <h2 className="medium-title">
                      Digital Marketing Services
                      Company In The Digital Age</h2>
                    <p className>Leverage the skills of our company’s digital marketing services capable of delivering outstanding marketing strategies. We help our clients to engage, convert, and retain customers in the digital world through various digital marketing components such as inbound marketing, SEO, SEM, social media marketing, and more.</p>
                  </div>
                  <div className=" top-padding-40 text-center">
                    <h1 className>SHARE, ORGANIZE, &amp; COLLABORATE WITH JUST FEW MOUSE CLICKS
                      Services</h1>
                  </div>
                </div>{/* container end */}
              </div>{/* flex-min-height-inner end */}
              <div className="container">
                <img src="assets/images/backgrounds/digital-marketing.jpg" alt="" />
                {/* flex-min-height-inner start */}
                <div className="top-bottom-padding-30">
                  {/* container start */}
                  <div className="container" data-animation-container>
                    <div>
                      <h2 className="medium-title">
                        Marketing Services
                        In The Digital Age</h2>
                      <p className>Our digital development experts deliver products and services that shorten your time-to-market. With years of experience in mobile application development and web development services, our solutions bring satisfaction to our clients and joy to their customers. Experience the power of our agile software development services to get you the results you expect and deserve.
                        Affiliate
                        Marketing
                        Native
                        Advertising
                        Marketing
                        Automation
                      </p>
                    </div>
                  </div>{/* container end */}
                </div>{/* flex-min-height-inner end */}
              </div>
              <div className="flex-container container">
                <div className="six-columns">
                  <img src="assets/images/backgrounds/inbound.png" alt="" />
                </div>
                <div className="six-columns">
                  <h1>Inbound Marketing</h1>
                  <p>Let your business grow with the help of our inbound marketing service. We boost your brand awareness and strategically funnel your digital traffic to deliver the results you desire. With our carefully drafted content on all digital platforms, you can convert leads into loyal customers with total ease. Attract, engage, nurture, and convert leads into the legion of loyal followers.</p>
                </div>
              </div>
            </section>{/* flex-min-height-box end */}
            <ClientLogo></ClientLogo>
          </>
          
        )
    }
}
