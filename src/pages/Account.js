import React, { Component } from 'react'

export default class Account extends Component {
    render() {
        return (
            <>
  {/* page-head start */}
  <section id="up" className="page-head flex-min-height-box dark-bg-2 typewriter-home">
    {/* page-head-bg */}
    <div className="page-head-bg" style={{backgroundImage: 'url(assets/images/backgrounds/accounting.jpg)'}} />
    {/* flex-min-height-inner start */}
    <div className="flex-min-height-inner">
      {/* container start */}
      <div className="container top-bottom-padding-120">
        <h2 className="overlay-loading2 medium-title red-color">Quickbooks, Sage &amp; Freshbooks Integration Services</h2>
        <h3 className="text-color-4">
          <span className="overlay-loading2 overlay-light-bg-1 tr-delay01">Data Import/Export &amp; Custom Accounting System Integration</span><br />
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
  <div id="down" className="single-post container bottom-padding-30 top-padding-120 light-bg-1" data-midnight="black">
    {/* flex-container start */}
    <div className="flex-container">
      {/* column start */}
      <div className>
        {/* single-post-content start */}
        <div className>
          <img src="assets/images/backgrounds/front-accounts.png" alt="title" style={{width: '60%'}} />
          {/* content-margin-block start */}
          <div className="content-margin-block">
            <div className="flex-container">
              <div className="six-columns">
                <h2 className="title-style text-color-1 top-margin-30 text-center">Challenge</h2>
                <p className="p-style-medium text-color-0 text-center">A general platform was needed where people can do the transactions anywhere and can post and sync them on the Accounting Platforms namely; QuickBooks, FreshBooks, and Sage either for each transaction or post accrued transactions in bulk..</p>
              </div>
              <div className="six-columns">
                <h2 className="title-style text-color-1 top-margin-30 text-center">Solution</h2>
                <p className="p-style-medium text-color-0 text-center">Our solution enable users to do mobile transactions anywhere and post them to their accounting system like QuickBooks, FreshBooks, and Sage right away either individual transaction or in batch format.</p>
              </div>
            </div>
          </div>{/* post-comments end */}
        </div>{/* column end */}
      </div>{/* flex-container end */}
    </div>
  </div>{/* single-post end */}
  <section id="quick-books">
    <div className="flex-container">
      <div className="five-columns">
        <div className="quick" />
      </div>
      <div className="six-columns quick-text">
        <h1 className="main-text">QuickBooks® Custom Integration Services </h1>
        <p>Intuit QuickBooks® help businesses to maintain their business data and run its operations smoothly.
          As the business needs change among diverse businesses and hence at times some particular needs may
          not be answered by the QuickBooks out of the box.</p>
        <p>We enable QuickBooks® users with customization service that are specific to their situation and are
          not met as such with the standard QuickBooks® package.</p>
        <p>-We help with QuickBooks® data import and export to the businesses in need.<br />
          -We deliver Custom Accounting System Integration of QuickBooks with your other systems.<br />
          -Rest API interface integration to communicate with QuickBooks® Server.
        </p>
      </div>
    </div>
  </section>
  {/* post-comments start */}
  <section id="sage">
    <div className>
      <div className="flex-container">
        <div className="five-columns">
          <div className="sage" />
        </div>
        <div className="six-columns quick-text">
          <h1 className="main-text">Sage® Customization and Integration</h1>
          <p>Quntilytics have thorough expertise in the customization and integration of Sage Accounts System.
            There may be a business system that needs integration with Sage Accounting System which our
            expert developers can accomplish with ease. Hnh Tech Solutions Experts’ has thorough expertise and
            knowledge of the Sage Evolution Platform to integrate it with various third party software.</p>
          <p>At very basic level the sage integration can be achieved by exporting data from any system into
            properly formatted CSV file and then importing it to the Sage system. Although it is simpler
            approach but has few limitations.</p>
          <p>The second approach used by Quntilytics developer is to use Sage SDK to create custom solutions
            to directly write new entries in Sage Accounting system file. </p>
        </div>
      </div>
    </div>
  </section>
  <section id="fresh-books">
    <div className>
      <div className="flex-container">
        <div className="five-columns">
          <div className="fresh-books" />
        </div>
        <div className="six-columns quick-text">
          <h1 className="main-text">FreshBooks® Custom Integration Services</h1>
          <p>FreshBooks® help businesses to maintain their accounting data to run its accounting activities
            seamlessly. As a matter of fact, a readymade package like FreshBooks® may not be suitable for
            every business scenario in every business and would call some customization. That’s where we
            come in and offer FreshBooks® customization and integration with other third party tools.</p>
          <p>We help FreshBooks® users with customization service that are tailored to their situation and are
            not met as such with the standard FreshBooks® package.</p>
          <p>-We help with FreshBooks® data import and export to the businesses in need.<br />
            -We deliver Custom Accounting System Integration of FreshBooks® with your other systems.
          </p>
        </div>
      </div>
    </div>
  </section>
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
