import React, { Component } from 'react'
import ClientLogo from '../component/ClientLogo'

export default class Effective extends Component {
    render() {
        return (
            <>
            {/* page-head start */}
            <section id="up" className="page-head flex-min-height-box dark-bg-2 typewriter-home">
              {/* page-head-bg */}
              <div className="page-head-bg" style={{backgroundImage: 'url(assets/images/backgrounds/header-eff-sol.jpg)'}} />
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
                      Organizational Effectiveness
                      With Our Business Efficiency Solutions</h2>
                    <p className>We offer the ideal digital development services that offer effective solutions for every personal and professional need. Our experienced professionals employ proven development methodologies that result in assuring the quality of the delivered digital solutions. With our experience, we always deliver on our promise!</p>
                  </div>
                  <div className=" top-padding-40 text-center">
                    <h1 className>SHARE, ORGANIZE, &amp; COLLABORATE WITH JUST FEW MOUSE CLICKS
                      Services</h1>
                  </div>
                </div>{/* container end */}
              </div>{/* flex-min-height-inner end */}
              <div className="container">
                <div className="services-bg" style={{backgroundImage: 'url(assets/images/backgrounds/effective-eff-sol.jpg)'}} />
                {/* flex-min-height-inner start */}
                <div className="top-bottom-padding-30">
                  {/* container start */}
                  <div className="container" data-animation-container>
                    <div>
                      <h2 className="medium-title">
                        Effective Solutions</h2>
                      <p className>Our digital development experts deliver products and services that shorten your time-to-market. With years of experience in mobile application development and web development services, our solutions bring satisfaction to our clients and joy to their customers. Experience the power of our agile software development services to get you the results you expect and deserve.
                      </p>
                    </div>
                  </div>{/* container end */}
                </div>{/* flex-min-height-inner end */}
              </div>
              <div className="flex-container container">
                <div className="six-columns">
                  <img src="assets/images/backgrounds/BusinessIntelligenceImplementation-eff-sol.png" alt="" />
                </div>
                <div className="six-columns">
                  <h1>Business Intelligence Implementation</h1>
                  <p>Today, most of the manual business management processes have been digitized. However, many companies are not reaping real benefits from digitization because they don’t have business management software designed that exactly correspond to their business SOPs. hnhtechsolutions provides customized business intelligence software for performance evaluations, data sharing, resource allocation, time-line management, project health indications etc., they all are available on demand.</p>
                </div>
              </div>
            </section>{/* flex-min-height-box end */}
            <ClientLogo></ClientLogo>
          </>
          
        )
    }
}
