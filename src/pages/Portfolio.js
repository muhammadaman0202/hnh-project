import React, { Component } from 'react'

export default class Portfolio extends Component {
    render() {
        return (
            <>
  {/* page-head start */}
  <section id="up" className="page-head flex-min-height-box dark-bg-1">
    {/* page-head-bg */}
    <div className="page-head-bg overlay-loading2" style={{backgroundImage: 'url(assets/images/backgrounds/brandi-redd-aJTiW00qqtI-unsplash.jpg)'}} />
    {/* flex-min-height-inner start */}
    <div className="flex-min-height-inner">
      {/* flex-container start */}
      <div className="container top-bottom-padding-120 flex-container response-999">
        {/* column start */}
        <div className="six-columns six-offset">
          <div className="content-left-margin-40">
            <h2 className="large-title-bold">
              <span className="load-title-fill tr-delay03" data-text="new approach">new approach</span><br />
              <span className="load-title-fill tr-delay04" data-text="to design">to design</span><br />
              <span className="load-title-fill tr-delay05" data-text="& marketing">&amp; marketing</span>
            </h2>
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
  {/* dark-bg-2 start */}
  <section id="down" className="dark-bg-2 top-bottom-padding-120">
    {/* container start */}
    <div className="container">
      <div className="text-center">
        <h2 className="large-title text-height-10 title-fill" data-animation="title-fill-anim" data-text="Recent Works">Recent Works</h2><br />
      </div>
      {/* filter-buttons start */}
      <div className="filter-buttons top-padding-90">
        <button className="filter-button-box pointer-small active" data-filter="*">
          <span className="filter-button-flip" data-text="All">All</span>
        </button>
        <button className="filter-button-box pointer-small" data-filter=".websites">
          <span className="filter-button-flip" data-text="Websites">Websites</span>
        </button>
        <button className="filter-button-box pointer-small" data-filter=".mobile">
          <span className="filter-button-flip" data-text="Mobile App">Mobile App</span>
        </button>
        <button className="filter-button-box pointer-small" data-filter=".branding">
          <span className="filter-button-flip" data-text="Branding">Branding</span>
        </button>
        <button className="filter-button-box pointer-small" data-filter=".vfx">
          <span className="filter-button-flip" data-text="VFX / 2D Animations">VFX / 2D Animations</span>
        </button>
        <button className="filter-button-box pointer-small" data-filter=".logos">
          <span className="filter-button-flip" data-text="Logo">Logo</span>
        </button>
        <button className="filter-button-box pointer-small" data-filter=".post">
          <span className="filter-button-flip" data-text="Post">Post</span>
        </button>
        <button className="filter-button-box pointer-small" data-filter=".seo">
          <span className="filter-button-flip" data-text="Seo">Seo</span>
        </button>
      </div>
      {/* filter-buttons end */}
      {/* works start */}
      <div className="works">
        {/* grid-item start */}
        <a href="amnayaweb.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/21.webp" alt="" />
            <div className="works-content">
              <h3 className=" red-color work-title-overlay">Amnaya</h3>
              <h5 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Plant Management and</span><br />
                <span className="work-title-overlay work-title-delay02">information sharing network</span><br />
              </h5>
            </div>
          </div>
        </a>{/* grid-item end */}
        {/* grid-item start */}
        <a href="360app.php" className="animsition-link grid-item mobile">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/360/iport.png" alt="" />
            <div className="works-content">
              <h3 className=" red-color work-title-overlay">360 app</h3>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">E-commerce</span><br />
              </h3>
            </div>
          </div>
        </a>{/* grid-item end */}
        {/* grid-item start */}
        <a href="ateamtransport.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/2.webp" alt="" />
            <div className="works-content">
              <h3 className=" red-color work-title-overlay">Ateam Transport</h3>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">medical transportation services</span><br />
              </h3>
            </div>
          </div>
        </a>{/* grid-item end */}
        {/* grid-item start */}
        <a href="americren.php" className="animsition-link grid-item mobile">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/americren_app/iportfolio.png" alt="" />
            <div className="works-content">
              <h3 className=" red-color work-title-overlay">Americren</h3>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Real-estate App</span><br />
              </h3>
            </div>
          </div>
        </a>{/* grid-item end */}
        {/* grid-item start */}
        <a href="cyptogram.php" className="animsition-link grid-item mobile">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/cypto/iportfolio.png" alt="" />
            <div className="works-content">
              <h3 className=" red-color work-title-overlay">Cyptogram</h3>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Financial network services for investors</span><br />
              </h3>
            </div>
          </div>
        </a>{/* grid-item end */}
        {/* grid-item start */}
        <a href="autoclub.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/3.webp" alt="" />
            <div className="works-content">
              <h3 className=" red-color work-title-overlay">AutoClub</h3>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Vehicle Management System</span><br />
              </h3>
            </div>
          </div>
        </a>{/* grid-item end */}
        {/* grid-item start */}
        <a href="ezigo.php" className="animsition-link grid-item mobile">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/ezigo/iportfolio.png" alt="" />
            <div className="works-content">
              <h3 className=" red-color work-title-overlay">Ezigo</h3>
              <h3 className="title-style text-color-4">
              </h3>
            </div>
          </div>
        </a>{/* grid-item end */}
        {/* grid-item start */}
        <a href="cornic.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/4.webp" alt="" />
            <div className="works-content">
              <h3 className=" red-color work-title-overlay">Cornic</h3>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Online Sports Betting platform
                </span><br />
              </h3>
            </div>
          </div>
        </a>{/* grid-item end */}
        {/* grid-item start */}
        <a href="drivementor.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/5.webp" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="jeepsapp.php" className="animsition-link grid-item mobile">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/jeeps_unlimited/iportfolio.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="farmer.php" className="animsition-link grid-item mobile">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/farmer_app/iportfolio.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="assets/video/vfx1.mp4" className="popup-youtube grid-item vfx">
          <div className="work_item pointer-large hover-box hidden-box">
            <video style={{width: '100%'}} muted autoPlay>
              <source src="assets/video/vfx1.mp4" type="video/mp4" />
            </video>
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Vfx / 2D Anmations</span>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="eastwestfurniture.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/6.webp" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="hemid.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/7.webp" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="opdapp.php" className="animsition-link grid-item mobile">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/opd/iportfolio.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="assets/video/vfx2.mp4" className="popup-youtube grid-item vfx">
          <div className="work_item pointer-large hover-box hidden-box">
            <video style={{width: '100%'}} muted autoPlay>
              <source src="assets/video/vfx2.mp4" type="video/mp4" />
            </video>
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Vfx / 2D Anmations</span>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="inventorymanagement.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/8.webp" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="tekkertv.php" className="animsition-link grid-item mobile">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/takker-tv/iportfolio.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="safetyworkerapp.php" className="animsition-link grid-item mobile">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/safety_worker/iportfolio.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="legalland.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/12.webp" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item end */}
        <a href="attendancemanagementsystem.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/1.webp" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="assets/video/vfx3.mp4" className="popup-youtube grid-item vfx">
          <div className="work_item pointer-large hover-box hidden-box">
            <video style={{width: '100%'}} muted autoPlay>
              <source src="assets/video/vfx3.mp4" type="video/mp4" />
            </video>
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Vfx / 2D Anmations</span>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="wemalta.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/20.webp" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="tradeday.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/19.webp" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="stormbrown.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/18.webp" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="stately.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/17.webp" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        <a href="spring-living.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/16.webp" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="assets/video/vfx4.mp4" className="popup-youtube grid-item vfx">
          <div className="work_item pointer-large hover-box hidden-box">
            <video style={{width: '100%'}} muted autoPlay>
              <source src="assets/video/vfx4.mp4" type="video/mp4" />
            </video>
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Vfx / 2D Anmations</span>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="pslsoftball.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/15.webp" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="photography.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/14.webp" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        <a href="klinvesto.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/11.webp" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item start */}
        <a href="assets/video/vfx5.mp4" className="popup-youtube grid-item vfx">
          <div className="work_item pointer-large hover-box hidden-box">
            <video style={{width: '100%'}} muted autoPlay>
              <source src="assets/video/vfx5.mp4" type="video/mp4" />
            </video>
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Vfx / 2D Anmations</span>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item end */}
        <a href="jks.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/10.webp" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="jeepsweb.php" className="animsition-link grid-item websites">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/web-p/9.webp" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/*logo*/}
        {/* grid-item start */}
        <a href="360app.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/360logo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="americren.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/americrenlogo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="amnayaapp.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/amnayalogo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="assets/video/vfx9.mp4" className="popup-youtube grid-item vfx">
          <div className="work_item pointer-large hover-box hidden-box">
            <video style={{width: '100%'}} muted autoPlay>
              <source src="assets/video/vfx9.mp4" type="video/mp4" />
            </video>
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Vfx / 2D Anmations</span>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="ateamtransport.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/ateamlogo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="cornic.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/corniclogo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="cyptogram.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/cyptologo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="drivementor.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/drivelogo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="ezigo.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/ezigologo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="assets/video/vfx8.mp4" className="popup-youtube grid-item vfx">
          <div className="work_item pointer-large hover-box hidden-box">
            <video style={{width: '100%'}} muted autoPlay>
              <source src="assets/video/vfx8.mp4" type="video/mp4" />
            </video>
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Vfx / 2D Anmations</span>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="jeepsweb.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/jeepslogo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item end */}
        <a href="jks.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/jkslogo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="legalland.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/legallogo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        {/* grid-item start */}
        <a href="assets/video/vfx11.mp4" className="popup-youtube grid-item vfx">
          <div className="work_item pointer-large hover-box hidden-box">
            <video style={{width: '100%'}} muted autoPlay>
              <source src="assets/video/vfx11.mp4" type="video/mp4" />
            </video>
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Vfx / 2D Anmations</span>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="likeheartedtribe.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/likelogo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="opdapp.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/opdlogo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="pslsoftball.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/psllogo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="safetyworkerapp.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/safetylogo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        <a href="spring-living.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/springlogo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="stately.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/statelylogo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="tekkertv.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/tekkerlogo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        <a href="tradeday.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/tradelogo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a href="wemalta.php" className="animsition-link grid-item branding">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/project/logos/wemaltalogo.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">uiux design</span>
              <h3 className="title-style text-color-4">
                <span className="work-title-overlay work-title-delay01">Bushwick selfies</span><br />
                <span className="work-title-overlay work-title-delay02">pork belly lyft</span><br />
                <span className="work-title-overlay work-title-delay03">brooklyn messeng</span>
              </h3>
            </div>
          </div>
        </a>
        {/*seo*/}
        <a className="grid-item seo" onclick=" window.open('assets/pdf/AiQSEO.pdf'); return true;">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/seo/resz.jpg" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        {/*post*/}
        {/* grid-item end */}
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/logoDesigne/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/logoDesigne/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/logoDesigne/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/logoDesigne/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/logoDesigne/6.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/logoDesigne/7.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/logoDesigne/8.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/logoDesigne/9.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/logoDesigne/10.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/logoDesigne/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/logoDesigne/11.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/logoDesigne/12.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobileapp/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobileapp/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobileapp/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobileapp/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobileapp/6.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobileapp/7.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobileapp/8.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobileapp/9.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobileapp/10.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobileapp/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobiletablet/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobiletablet/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobiletablet/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobiletablet/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobiletablet/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobiletablet/6.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobiletablet/7.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobiletablet/8.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobiletablet/9.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mobiletablet/10.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mycrm/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mycrm/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mycrm/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mycrm/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mycrm/6.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mycrm/7.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mycrm/8.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mycrm/9.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mycrm/10.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/mycrm/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/OPD/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/OPD/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/OPD/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/OPD/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/OPD/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/OPD/6.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/OPD/7.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/OPD/8.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/OPD/9.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/OPD/10.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/OPD/11.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/OPD/12.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/OPD/13.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/OPD/14.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/OPD/15.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/spss/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/spss/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/spss/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/spss/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/spss/6.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/spss/7.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/spss/8.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/spss/9.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/spss/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/webdevelopment/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/webdevelopment/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/webdevelopment/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/webdevelopment/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/webdevelopment/6.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/webdevelopment/7.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/webdevelopment/8.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/webdevelopment/9.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/webdevelopment/10.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/webdevelopment/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/webdevelopment/11.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/webdevelopment/12.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/webdevelopment/13.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/webdevelopment/14.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item post">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/post-portfolio/webdevelopment/15.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        {/* logos */}
        {/* grid-item end */}
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/business/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/business/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/business/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/business/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/business/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/business/6.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/business/7.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/business/8.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/business/9.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/construction/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/construction/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/construction/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/construction/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/construction/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/education/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/education/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/education/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/education/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/education/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/education/6.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/education/7.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/education/8.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/education/9.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/education/10.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/gaming/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/gaming/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/gaming/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/gaming/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/gaming/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/gaming/6.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/gaming/7.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/gaming/8.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        {/* grid-item end */}
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/GYM/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/GYM/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/GYM/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/GYM/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/GYM/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/GYM/6.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/GYM/7.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/GYM/8.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/healthcare/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/healthcare/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/healthcare/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/healthcare/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/healthcare/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/healthcare/6.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/healthcare/7.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/healthcare/8.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/healthcare/9.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/healthcare/10.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/jewelary/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/jewelary/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/jewelary/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/jewelary/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/jewelary/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/jewelary/6.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/jewelary/7.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/jewelary/8.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/lawncare/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/lawncare/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/lawncare/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/lawncare/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/lawncare/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/lawncare/6.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/lawncare/7.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/lawncare/8.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/photography/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/photography/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/photography/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/photography/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/photography/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/realstate/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/realstate/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/realstate/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/realstate/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/realstate/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/realstate/6.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/realstate/7.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/realstate/8.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/realstate/9.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/realstate/10.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/realstate/11.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/realstate/12.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/resturant/1.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/resturant/2.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/resturant/3.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/resturant/4.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/resturant/5.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/resturant/6.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/resturant/7.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/resturant/8.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/resturant/9.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/resturant/10.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
        <a className="grid-item logos">
          <div className="work_item pointer-large hover-box hidden-box">
            <img className="hover-img" src="assets/images/logos-portfolio/resturant/11.png" alt="" />
            <div className="works-content">
              <span className="small-title-oswald red-color work-title-overlay">Quantilytics</span>
            </div>
          </div>
        </a>
      </div>{/* works end */}
    </div>{/* container end */}
  </section>{/* dark-bg-2 end */}
</>

        )
    }
}
