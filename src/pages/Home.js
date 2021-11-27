import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
import Footer from '../component/Footer';
import Portfolio from '../component/Portfolio'
import SwiperSlidee from '../component/SwiperSlidee'
export default class Home extends Component {
    render() {
        return (
 
<>
  {/* page-head start */}
  <section id="up" className="page-head video-bg-box flex-min-height-box">
    {/* video-bg */}
    <video src="./assets/video/hnh.mp4" type="video/mp4" muted loop autoPlay />
    {/* bg-overlay */}
    <div className="bg-overlay" style={{background: 'rgba(0, 0, 0, 0.05)'}} />
    {/* flex-min-height-inner start */}
    <div className="flex-min-height-inner">
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
  <section id="down" className="home-slider bottom-padding-30 top-padding-120 " style={{background: '#f5f5f5 !important'}} data-midnight="black">
    {/* container start */}
    <div data-animation-container className="container small bottom-padding-60 text-center">
      <h1 data-animation-child className="large-title text-height-10 text-color-1 overlay-anim-box2" data-animation="overlay-anim2">Recent Work</h1><br />
      <h4 data-animation-child className="fade-anim-box tr-delay02 text-color-1 xsmall-title-oswald top-margin-5" data-animation="fade-anim">We build powerful digital solutions and experiences.</h4>
    </div>{/* container end */}
  </section>
  {/* dark-bg-2 start */}
  <section id="up" className="dark-bg-2 flex-min-height-box" style={{display: 'none'}}>
    <div className="container">
      <div className="flex-container response-999 top-padding-60">
        {/* column start */}
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="360app.php" className="content-right-margin-20 hover-box pointer-large d-block light-bg-2 animated">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box animated overlay-anim2" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/360/iport.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="medium-title-oswald text-color-1 hover-content fade-anim-box tr-delay01 animated fade-anim" data-animation="fade-anim">360 Website and Mobile App</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02 animated fade-anim" data-animation="fade-anim">An ecommerce mobile app aim at providing an immersive and unique experience that makes online shopping a much simpler and seamless process.</p>
            </div>
          </a>
        </div>{/* column end */}
        {/* column start */}
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="amnayaapp.php" className="content-left-right-margin-10 hover-box pointer-large d-block light-bg-2 animated">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box animated overlay-anim2" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/amnaya/iportfolio.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="medium-title-oswald text-color-1 hover-content fade-anim-box tr-delay01 animated fade-anim" data-animation="fade-anim">Amnaya App</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02 animated fade-anim" data-animation="fade-anim">A web and app base open content online botanical encyclopedia created through the collaborative effort of a community of users known as contributor, reader and admin</p>
            </div>
          </a>
        </div>{/* column end */}
        {/* column start */}
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="americren.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2 animated">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box animated overlay-anim2" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/americren_app/iportfolio.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="medium-title-oswald text-color-1 hover-content fade-anim-box tr-delay01 animated fade-anim" data-animation="fade-anim">Americren App</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02 animated fade-anim" data-animation="fade-anim">The American Consumer Real Estate Network. Americren is the first and only web site dedicated with quickly and easily connecting the consumer with the top producing Realtor or Real Estate Agent in the consumer’s marketplace.</p>
            </div>
          </a>
        </div>{/* column end */}
        {/* column start */}
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="hemid.php" className="content-right-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/hemid/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="medium-title-oswald text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">HemID</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">With the use of our creative 3D visualization skills and Virtual Reality design, It helps you as an architect, interior designer,</p>
            </div>
          </a>
        </div>{/* column end */}
        {/* column start */}
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="amnayaweb.php" className="content-left-right-margin-10 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/amnaya/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="medium-title-oswald text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">Amnaya Web</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">A web and app base open content online botanical encyclopedia created through the collaborative effort of a community of users known as contributor, reader and admin</p>
            </div>
          </a>
        </div>{/* column end */}
        {/* column start */}
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="cornic.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/cornic/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">Cornic</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">Cornic is an online gambling website offering sports betting and casino type games. Cornic also offers an on-course bookmaking service.</p>
            </div>
          </a>
        </div>{/* column end */}
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="cyptogram.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/cypto/iportfolio.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">Cryptogram </h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">Cryptogram is an app base project for crypto currencies trading and exchange where traders, financial experts and investors’ meets at a common platform, </p>
            </div>
          </a>
        </div>{/* column end */}
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="drivementor.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/drive-mentor/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">Drive Mentor</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">DriveMentor is a professional website perfect for driving instructors or other training professionals. It is also a service booking web for finding driving instructors for all over the UK with trainee and trainer portals.</p>
            </div>
          </a>
        </div>{/* column end */}
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="eastwestfurniture.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/east_west/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">East &amp; West Furniture</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">An ecommerce website aim at providing an immersive and unique experience that makes online furniture shopping a much simpler and seamless process. </p>
            </div>
          </a>
        </div>{/* column end */}
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="ezigo.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/ezigo/iportfolio.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">Ezigo </h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">Ezigo is an app-based car service that connects people to rides. The Company designs an online booking platform that connects passengers with local drivers.</p>
            </div>
          </a>
        </div>
        {/* column end */}
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="farmer.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/farmer_app/iportfolio.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">A Farmer App</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">A Farmer App is a type of app and website where the content is presented in reverse chronological order (newer content appear first). </p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="tradeday.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/trade_day/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">Trade Day</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">Trade Day is one of the popular cryptocurrency exchanges that offers trading in more than 45 virtual coins including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC)</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="jeepsapp.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/jeeps_unlimited/iportfolio.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">jeep Unlimited</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">The S.M Motors is a complete ecommerce portal for online Car Parts Store UK. Customers can find a variety of genuine &amp; replacement</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="jeepsweb.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/jeeps_unlimited/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">jeep Unlimited</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">The S.M Motors is a complete ecommerce portal for online Car Parts Store UK. Customers can find a variety of genuine &amp; replacement car parts at our website where they can conveniently</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="jks.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/jks/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">JKS</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">a FASHION MARKETPLACE where fashion enthusiasts come together to BUY AND SELL designer brands, labels and accessories from TOP DESIGNERS AND BRANDS.</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="likeheartedtribe.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/like-hearted-tribe/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">Like hearted tribe</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">An online counseling booking service provides renowned psychologists, psychiatrists to contribute their thoughts and ideas.</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="klinvesto.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/kl/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">KL Investo</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">An Online Asset allocation and investment website which provides a portal for investors and fund managers to interact each other to grow their investment it includes latest web design techniques,</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="legalland.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/legal_lands/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">LegalLands</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">A corporate website for a law firm which provides legal information and services rendered by lawyers and solicitors.</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="safetyworkerapp.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/safety_worker/iportfolio.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">Safety Worker App</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">An online app for safety hazards at workplace specifically design with online alerts, warnings and safety measures while exploring mercury.</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="ateamtransport.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/ateam_transports/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">ATEAM Transport Services</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">ATEAM Transport Services is a Veteran-Owned non-emergency medical transportation (NEMT) company based in Indianapolis, Indiana. At ATEAM,</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="attendancemanagementsystem.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/attendance_management/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">Attendance Management System</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">An online portal of students’ attendance and leave management system lets you handle complex tasks with easy-to-use automation tools.</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="photography.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/photography/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">PhotoGraphy</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">An online service booking platform for finding and hiring professional photographer after looking at their portfolios and albums.</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="pslsoftball.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/psl_softball/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">PSL Softball</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">An online platform to participate different regional teams for baseball tournaments in different seasons to win and bid points including complete data base with statistical analysis.</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="stately.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/stately/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">Stately</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">A Fashion designing online service and delivery website to assists with the production of clothing, shoes and accessories, identifies trends, and selects styles, fabrics, colors, prints and trims for a collection as per customers requirement.</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="inventorymanagement.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/inventory_management_sys/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">Inventory management</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">Inventory management software to regulate stock levels, control assets and inventory, and manage consumables in and out of the company</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="spring-living.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/spring/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">Spring Living</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">Springliving is an online property portal in UK. The site lists real estate dealers, developers, agencies, and properties for sale and rent including property valuation and live maps.</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="stormbrown.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/storm_and_brown/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">Storm &amp; Brown Consultancy</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">A call detail record (CDR) provides information about calls made over a phone service. A CDR report can offer businesses exact answers about where, when, and how calls are made for reporting and billing purposes.</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="tekkertv.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/takker-tv/iportfolio.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">Tekker Tv</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">It is a fun app that allows for creating and sharing short lip-sync, comedy, and talent videos.</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="wemalta.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/wemalta_website/1.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">We Malta</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">We Malta is an online marketplace and logistics website. It operates e-commerce platforms and logistics services in Malta. Vendors can register themselves and open their stores online and display their products and services.</p>
            </div>
          </a>
        </div>
        <div className="four-columns bottom-padding-60">
          <a data-animation-container href="opdapp.php" className="content-left-margin-20 hover-box pointer-large d-block light-bg-2">
            <div data-animation-child className="overlay-anim-box2 overlay-dark-bg-2 expertise-img-box" data-animation="overlay-anim2">
              <img className="hover-img" src="assets/images/project/opd/iportfolio.png" alt="Digital products" />
            </div>
            <div className="expertise content-padding-l-r-20 content-padding-bottom-20">
              <h3 data-animation-child className="text-color-1 hover-content fade-anim-box tr-delay01" data-animation="fade-anim">OPD App</h3><br />
              <p data-animation-child className="p-style-xsmall text-color-1 hover-content fade-anim-box tr-delay02" data-animation="fade-anim">OPD is more than an app for finding doctors. Whether it’s booking doctor appointments, ordering medicines, scheduling diagnostic tests or having an online consultation with your doctor, </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="home-slider">
    <SwiperSlidee/>
  </section>
  {/* section start */}
  {/*?php include ("clients-logo.php")?*/}
  {/* section end */}
  <section className="dark-bg-1 top-bottom-padding-120">
    {/* portfolio-slider2 start */}
      <Portfolio/>
    {/* portfolio-slider2 end */}
  </section>
  
  <section className="home-slider bottom-padding-30 top-padding-120 " style={{background: '#f5f5f5 !important'}} data-midnight="black">
    {/* container start */}
    <div data-animation-container className="container small bottom-padding-60 text-center">
      <h1 data-animation-child className="large-title text-height-10 text-color-1 overlay-anim-box2" data-animation="overlay-anim2">Why HnH Tech Solutions</h1><br />
      <h4 data-animation-child className="fade-anim-box tr-delay02 text-color-1 xsmall-title-oswald top-margin-5" data-animation="fade-anim">We build powerful digital solutions and experiences.</h4>
    </div>{/* container end */}
  </section>
  <div className="video-content-bg why-video" style={{}}>
    <video src="./assets/video/why-hnh.mp4" type="video/mp4" muted loop />
  </div>
  {/* section end */}
  <section className="dark-bg-1  top-bottom-padding-120">
    <div data-animation-container className="container small bottom-padding-60 text-center">
      <h1 data-animation-child className="large-title text-height-10 text-color-4 overlay-anim-box2" data-animation="overlay-anim2">Hnh tech solutions explain itself through animation</h1><br />
    </div>{/* container end */}
    <div className="flex-min-height-box mt-5" style={{marginTop:"15%"}}>
      <div className="four-columns">
        <div className="content-right-margin-20">
          <video src="./assets/video/hnh3.mp4" width="440" type="video/mp4" muted loop autoPlay />
        </div>
      </div>
      <div className="four-columns">
        <div className="content-right-margin-20">
          <video src="./assets/video/hnh4.mp4" width="440" type="video/mp4" muted loop autoPlay />
        </div>
      </div>
      <div className="four-columns">
        <div className>
          <video src="./assets/video/hnh5.mp4" width="440" type="video/mp4" muted loop autoPlay />
        </div>
      </div>
    </div>
  </section>{/* dark-bg-2 end */}
  <section className="price-table top-padding-120 bottom-padding-30" data-midnight="black">
    {/* container start */}
    <div className="container small">
      {/* text-center start */}
      <div data-animation-container className="text-center">
        <h2 data-animation-child className="large-title text-height-10 text-color-1 overlay-anim-box2" data-animation="overlay-anim2">Our Services</h2><br />
        <p data-animation-child className="fade-anim-box tr-delay02 text-color-1 xsmall-title-oswald top-margin-5" data-animation="fade-anim">We Provide the Best Prices for Business</p>
      </div>{/* text-center end */}
      {/* flex-container start */}
      <div className="flex-container top-padding-60">
        {/* column start */}
        <div className="four-columns bottom-padding-90">
          <div className="content-right-margin-20 dark-bg-2 price-details price-details-margins">
            <div className="pricing-title">
              <h3 className="small-title-oswald text-color-0">Contact Please</h3>
            </div>
            <h4 className="price-content">
              <span className="large-title light-text text-color-4">Logo </span><br />
              <span className="light-text text-color-4">Designing</span>
            </h4>
            <ul data-animation-container className="price-list">
              <li>
                <span data-animation-child className="p-style-small text-color-4 fade-anim-box tr-delay01" data-animation="fade-anim">Excellence in custom logo design</span>
              </li>
              <li>
                <span data-animation-child className="p-style-small text-color-4 fade-anim-box tr-delay02" data-animation="fade-anim">Catering to businesses of all sizes</span>
              </li>
              <li>
                <span data-animation-child className="p-style-small text-color-4 fade-anim-box tr-delay03" data-animation="fade-anim">Design made from scratch</span>
              </li>
              <li>
                <span data-animation-child className="p-style-small text-color-4 fade-anim-box tr-delay04" data-animation="fade-anim">Creating logos of varied concepts</span>
              </li>
              <li>
                <span data-animation-child className="p-style-small text-color-4 fade-anim-box tr-delay05" data-animation="fade-anim">Highly-skilled and creative designers</span>
              </li>
            </ul>
            <div className="price-btn-box pointer-large">
              <a href="contact.php" className="price-btn">Sign up</a>
            </div>
          </div>
        </div>{/* column end */}
        {/* column start */}
        <div className="four-columns bottom-padding-90">
          <div className="content-left-right-margin-10 dark-bg-2 price-details">
            <div className="pricing-title price-title-paddings">
              <h3 className="small-title-oswald text-color-0">Contact Please</h3>
            </div>
            <h4 className="price-content">
              <span className="large-title light-text text-color-4">Web</span><br />
              <span className="light-text text-color-4">Development</span>
            </h4>
            <ul data-animation-container className="price-list">
              <li>
                <span data-animation-child className="p-style-small text-color-4 fade-anim-box tr-delay01" data-animation="fade-anim">Affordable Website Design &amp; Maintenance Services</span>
              </li>
              <li>
                <span data-animation-child className="p-style-small text-color-4 fade-anim-box tr-delay02" data-animation="fade-anim">Design to Website Conversion</span>
              </li>
              <li>
                <span data-animation-child className="p-style-small text-color-4 fade-anim-box tr-delay03" data-animation="fade-anim">Pre-Made Theme Setup &amp; Customization
                  (WordPress, Shopify &amp; Others)</span>
              </li>
              <li>
                <span data-animation-child className="p-style-small text-color-4 fade-anim-box tr-delay04" data-animation="fade-anim">Top SEO Ranking &amp; High Conversion</span>
              </li>
              <li>
                <span data-animation-child className="p-style-small text-color-4 fade-anim-box tr-delay05" data-animation="fade-anim">Custom Website Design
                  Service</span>
              </li>
            </ul>
            <div className="price-btn-box price-btn-bg pointer-large">
              <a href="contact.php" className="price-btn">Sign up</a>
            </div>
          </div>
        </div>{/* column end */}
        {/* column start */}
        <div className="four-columns bottom-padding-90">
          <div className="content-left-margin-20 dark-bg-2 price-details price-details-margins">
            <div className="pricing-title">
              <h3 className="small-title-oswald text-color-0">Contact Please</h3>
            </div>
            <h4 className="price-content">
              <span className="large-title light-text text-color-4">Mobile</span><br />
              <span className="light-text text-color-4">Development</span>
            </h4>
            <ul data-animation-container className="price-list">
              <li>
                <span data-animation-child className="p-style-small text-color-4 fade-anim-box tr-delay01" data-animation="fade-anim">Enterprise Application Development</span>
              </li>
              <li>
                <span data-animation-child className="p-style-small text-color-4 fade-anim-box tr-delay02" data-animation="fade-anim">Consumer Mobile App Development</span>
              </li>
              <li>
                <span data-animation-child className="p-style-small text-color-4 fade-anim-box tr-delay03" data-animation="fade-anim">iOS mobile app development</span>
              </li>
              <li>
                <span data-animation-child className="p-style-small text-color-4 fade-anim-box tr-delay04" data-animation="fade-anim">Cross-platform app development</span>
              </li>
              <li>
                <span data-animation-child className="p-style-small text-color-4 fade-anim-box tr-delay05" data-animation="fade-anim">Android mobile app development</span>
              </li>
            </ul>
            <div className="price-btn-box pointer-large">
              <a href="contact.php" className="price-btn">Sign up</a>
            </div>
          </div>
        </div>{/* column end */}
      </div>{/* flex-container end */}
    </div>{/* container end */}
  </section>
  {/* price-table end */}
  {/* <Footer/> */}
</>
        )
    }
}
