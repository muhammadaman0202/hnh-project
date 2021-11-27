import React, { Component } from 'react'

export default class BlockChain extends Component {
    render() {
        return (
            <>
            {/* page-head start */}
            <section id="up" className="page-head flex-min-height-box dark-bg-2 typewriter-home">
              {/* page-head-bg */}
              <div className="page-head-bg" style={{backgroundImage: 'url(assets/images/backgrounds/block.jpg)'}} />
              <div className="bg-overlay" />
              {/* flex-min-height-inner start */}
              <div className="flex-min-height-inner">
                {/* container start */}
                <div className="container top-bottom-padding-120">
                  <h2 className="overlay-loading2 medium-title red-color">Custom Blockchain Development</h2>
                  <h3 className="text-color-4">
                    <span className="overlay-loading2 overlay-light-bg-1 tr-delay01">Tailor-made to your specific business needs</span><br />
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
            {/* single-post start */}
            <section id="down" className="blockchain-dev&quot;">
              <div className="container">
                <div className="flex-container software-part">
                  <div className="twelve-columns" style={{marginTop: '155px'}}>
                    <h1 className="main-heading text-left">
                      Advanced Smart Contract And Blockchain
                    </h1>
                    <h1 className="sub-text text-left">
                      Development Services...
                    </h1>
                    <p className="text-left" style={{marginBottom: '100px !important'}}>We focus on custom smart contracts,
                      blockchain, and crypto currency applications development for web and mobile. We are poised to
                      develop any blockchain technology of your choice. We can help you with your ICO, smart contract
                      controlled lending and trading applications. We also have solid track record in offering complete
                      ICO website functionality covering Web Design, HTML, Investor Panel and Admin Panel. We can make
                      your next ICO website Design or any other Custom Blockchain Software Development project more like a
                      breeze.</p>
                  </div>
                </div>
              </div>
            </section>
            <div id="why-choose-blockchain">
              <div className="flex-container">
                <div className="twelve-columns">
                  <div className="large-title-bold text-center" style={{lineHeight: 2}}>
                    Why Choose Us?
                  </div>
                </div>
              </div>
              <div className="flex-container">
                <div className="twelve-columns">
                  <div className="flex-container">
                    <div className="four-columns" style={{marginBottom: '50px'}}>
                      <div className="blockchain-count">1</div>
                      <p>Hnh tech solutions is one of the top rated blockchain solution company in Pakistan. We aim to deliver
                        best experience to our clients through our innovative approach and deliver value that is
                        beyond expectation.</p>
                    </div>
                    <div className="four-columns" style={{marginBottom: '50px'}}>
                      <div className="blockchain-count">2</div>
                      <p>We are proud to have the most capable team onboard that can deliver simple to complex
                        blockchain solutions with total ease</p>
                    </div>
                    <div className="four-columns" style={{marginBottom: '50px'}}>
                      <div className="blockchain-count">3</div>
                      <p>Our experts can help you with every phase of your project. We can help you to develop right
                        specifications for your blockchain system needs and can deliver the solutions that perfectly
                        satiate those needs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-post container bottom-padding-30 top-padding-120 light-bg-1" data-midnight="black">
              <section className="top-bottom-padding-90 flex-container">
                <div className="twelve-columns text-center top-bottom-padding-30">
                  <h2 className="medium-title text-height-12 text-color-0">
                    TURNING COMPLEX IDEAS INTO
                  </h2>
                  <h2 className="large-title text-height-12">
                    <span data-animation-child className="title-fill animated title-fill-anim" data-animation="title-fill-anim" data-text="Simple, Graceful & Functional Mobile">Simple, Graceful &amp; Functional Mobile</span><br />
                    <span data-animation-child className="title-fill tr-delay01 animated title-fill-anim" data-animation="title-fill-anim" data-text="App Solutions">App Solutions</span>
                  </h2>
                </div>
                {/* comments-form-box start */}
                <div className="comments-form-box eight-columns" style={{margin: 'auto'}}>
                  <form className="comments-form top-margin-30 flex-container">
                    <input type="text" className="comment-form-control pointer-small four-columns" placeholder="Full Name" />
                    <input type="email" className="comment-form-control pointer-small four-columns" placeholder="Email Address" />
                    <input type="text" className="comment-form-control pointer-small four-columns" placeholder="Phone Number" />
                    <textarea className="comment-form-control pointer-small" placeholder="Comment" defaultValue={""} />
                    <button className="arrow-btn-box pointer-large" style={{margin: 'auto'}}>
                      <span className="arrow-btn">Get A Free Quote</span>
                    </button>
                  </form>
                </div>{/* comments-form-box end */}
              </section>
              {/* comments-box end */}
            </div>
            </>          
        )
    }
}
