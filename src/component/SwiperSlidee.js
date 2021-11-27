import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);
const prgress = () => {
    const swiper = this;
    // const interleaveOffset = ;
    for (const i = 0; i < 5; i++) {
        const slideProgress = swiper.slides[i].progress;
        const innerOffset = swiper.width * 0.5;
        const innerTranslate = slideProgress * innerOffset;
        swiper.slides[i].querySelector(".slide-bg").style.transform =
            "translate3d(" + innerTranslate + "px, 0, 0)";
        console.log("function")
    }
}
const touchstart = () => {

}
export default function SwiperSlidee() {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            speed={1500}
            autoplay={{ delay: 5000 }}
            watchSlidesProgress={true}
            on={() => { prgress() }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }}

        >
            <SwiperSlide className="flex-min-height-box home-slide">
                <div className="slide-bg overlay-loading2 overlay-dark-bg-1" style={{ backgroundImage: 'url(assets/images/project/jks/1.png)' }} />
                <div className="home-slider-content flex-min-height-inner dark-bg-1">
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="JKS">JKS</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Online Buying and Selling ">Online Buying and Selling </span>
                                </h3>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    <span className="slider-overlay2 slider-tr-delay01">  We give our members access to thousands of US online stores and take the worry out of international shipping</span>
                                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="jks.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/drive-mentor/1.png)' }} />
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="DRIVE MENTOR">DRIVE MENTOR</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Learn defensive driving at Drive Mentor's Driving School.">Learn defensive driving at Drive Mentor's Driving School. </span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in Pakistan in 2016.">Established in Pakistan in 2016.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    <span className="slider-overlay2 slider-tr-delay01">At Our Driving School, our goal is to create
                                    <strong>confident, safe &amp; knowledgeable</strong>, drivers who succeed. We offer programs for
                                    both new drivers &amp; experienced ones!
                                    competitive space.</span>
                                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="drivementor.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/cornic/1.png)' }} />
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="CORNIC">CORNIC</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Cornic is a trusted guide to help ensure safe online betting">Cornic is a trusted guide to help ensure safe online betting </span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in Pakistan in 2016.">Established in Germany in 2016.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    <span className="slider-overlay2 slider-tr-delay01">The world's leading name in online Exciting live sports betting odds, online
                                    poker, games and casino
                                    <strong>betting and real money gaming.</strong> Exciting live sports betting odds, online
                                    poker, games and casino.</span>
                                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="cornic.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/kl/1.jpg)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="KL INVESTO">KL INVESTO</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Stone Token Sale">Stone Token Sale</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in Pakistan in 2016.">Established in the Pakistan in 2018.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    <span className="slider-overlay2 slider-tr-delay01">KL Investo has a major advantage with StoneFly's existing software, which have
                                    serve 2000 large enterprise include Disney, and Well fargo our software developed as direct
                                    response to our customer's need to manage growth and security of their data.</span>
                                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="klinvesto.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}
            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/spring/1.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="SPRING">SPRING</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Rent and Sales">Rent and Sales</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in Pakistan in 2016.">Established in Germany in 2016.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    <span className="slider-overlay2 slider-tr-delay01">Our customers loved using Housesimple as their We have nothing but positive
                                    comments about house simple.
                <strong>online estate agent.</strong> We have nothing but positive comments about house
                simple</span>
                                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="spring-living.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/trade_day/1.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="TRADE DAY">TRADE DAY</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Bitcoin Trading">Bitcoin Trading</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in Pakistan in 2016.">Established in Germany in 2016.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    Coinbase is the easiest place to buy, sell, and
              <strong>manage your cryptocurrency portfolio.</strong> Coinbase has a variety of features
              that make it the best place to start trading.
            </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="tradeday.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/360/iport.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="360 App">360 App</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="E-commerce">E-commerce</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in Pakistan in 2016.">Established in Germany in 2016.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    An ecommerce mobile app aim at providing an immersive and unique experience
                                    that makes online shopping a much simpler and seamless process. At the same time, it
                                    includes
                                    features that drive sales and boost revenues for your business.
            </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="360app.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}
            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/360/iport.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="360 App">360 App</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="E-commerce">E-commerce</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in Pakistan in 2016.">Established in Germany in 2016.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    An ecommerce mobile app aim at providing an immersive and unique experience
                                    that makes online shopping a much simpler and seamless process. At the same time, it
                                    includes
                                    features that drive sales and boost revenues for your business.
            </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="360app.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}
            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/hemid/1.jpg)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="HemID">HemID</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Virtual Reality">Virtual Reality</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in Pakistan in 2016.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    With the use of our creative 3D visualization skills and Virtual Reality design,
                                    It helps you as an architect, interior designer, building developer or real estate broker to
                                    visualize
            </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="hemid.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}
            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/americren_app/iportfolio.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Americren App">Americren App</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Real-estate App">Real-estate App</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in Pakistan in 2016.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    The American Consumer Real Estate Network. Americren is the first and only web
                                    site dedicated with quickly and easily connecting the consumer with the top producing
                                    Realtor or Real Estate Agent in the consumer’s marketplace.
            </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="americren.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}
            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/amnaya/iportfolio.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Amnaya App">Amnaya App</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Plant Management and information sharing network">Plant Management and information sharing network</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in Pakistan in 2016.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    A web and app base open content online botanical encyclopedia created through
                                    the collaborative effort of a community of users known as contributor, reader and admin.
                                    Anyone registered on the site can create an article for publication; registration is
                                    required to edit articles. (a Wikipedia type project).
            </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="amnayaapp.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/amnaya/1.jpg)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Amnaya Web">Amnaya Web</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Plant Management and information sharing network">Plant Management and information sharing network</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in Pakistan in 2016.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    A web and app base open content online botanical encyclopedia created through
                                    the collaborative effort of a community of users known as contributor, reader and admin.
                                    Anyone registered on the site can create an article for publication; registration is
                                    required to edit articles. (a Wikipedia type project).
            </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="amnayaweb.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}
            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/autoclub/lportfolio.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Auto Club">Auto Club</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Vehicle Management System">Vehicle Management System</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in Pakistan in 2016.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    AutoClub is a powerful yet very simple and easy-to-use tool that lets you
                                    quickly find or sell cars under the sun; anyone can come here to find a car or sell their
                                    old car, AutoClub connects buyers and sellers at a regional level within cities and delivers
                                    remarkable user experience for all communities. (an automobile ecommerce project).
            </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="autoclub.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/cypto/iportfolio.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Cryptogram">Cryptogram</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Vehicle Management System">Financial network services for investors</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in Pakistan in 2016.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    Cryptogram is an app base project for crypto currencies trading and exchange
                                    where traders, financial experts and investors’ meets at a common platform
            </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="cyptogram.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/ezigo/iportfolio.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Ezigo">Ezigo</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Rides and Courier service app(UBER CONCEPT)">Rides and Courier service app(UBER CONCEPT)</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    Ezigo is an app-based car service that connects people to rides. The Company
                                    designs an online booking platform that connects passengers with local drivers. A
                                    comprehensive transportation network also including, logistics and cash on delivery
                                    payments, parcels and payments efficiently
            </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="ezigo.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/east_west/lportfolio.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="East & West">East &amp; West</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Vehicle Management System">Online furniture sales services</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in Pakistan in 2016.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    An ecommerce website aim at providing an immersive and unique experience that
                                    makes online furniture shopping a much simpler and seamless process. East West Furniture,
                                    LLC is a furniture importer and distributor, specializing in fine dinette sets, wooden
                                    dining room furniture.
            </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="eastwestfurniture.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}
            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/farmer_app/iportfolio.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Farmer App">Farmer App</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Online portal for agricultural information and sale services">Online portal for agricultural information and sale services</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    A Farmer App is a type of app and website where the content is presented in
                                    reverse chronological order (newer content appear first). Blog content is often referred to
                                    as entries or “blog posts”. Blogs are typically run by an individual or a small group of
                                    people to present information and online sell of farming tools.
            </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="farmer.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/jeeps_unlimited/iportfolio.jpg)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Jeep Unlimited App">Jeep Unlimited App</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Auto Parts buying, selling & services">Auto Parts buying, selling &amp; services</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    The S.M Motors is a complete ecommerce portal for online Car Parts Store UK.
                                    Customers can find a variety of genuine &amp; replacement car parts at our website where they
                                    can conveniently place orders online and also receive quality aftermarket car parts at their
                                    preferred locations
                                    The SM Motors is an Ecommerce Website designed for customers with user friendly
                                    interface
            </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="jeepsapp.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/jeeps_unlimited/iportfolio.jpg)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Jeep Unlimited Web">Jeep Unlimited Web</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Auto Parts buying, selling & services">Auto Parts buying, selling &amp; services</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    The S.M Motors is a complete ecommerce portal for online Car Parts Store UK.
                                    Customers can find a variety of genuine &amp; replacement car parts at our website where they
                                    can conveniently place orders online and also receive quality aftermarket car parts at their
                                    preferred locations
                                    The SM Motors is an Ecommerce Website designed for customers with user friendly
                                    interface
            </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="jeepsweb.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/jeeps_unlimited/iportfolio.jpg)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Jeep Unlimited App">Jeep Unlimited App</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Auto Parts buying, selling & services">Auto Parts buying, selling &amp; services</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    The S.M Motors is a complete ecommerce portal for online Car Parts Store UK.
                                    Customers can find a variety of genuine &amp; replacement car parts at our website where they
                                    can conveniently place orders online and also receive quality aftermarket car parts at their
                                    preferred locations
                                    The SM Motors is an Ecommerce Website designed for customers with user friendly
                                    interface
                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="jeepsapp.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}
            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/jeeps_unlimited/iportfolio.jpg)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Jeep Unlimited Web">Jeep Unlimited Web</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Auto Parts buying, selling & services">Auto Parts buying, selling &amp; services</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    The S.M Motors is a complete ecommerce portal for online Car Parts Store UK.
                                    Customers can find a variety of genuine &amp; replacement car parts at our website where they
                                    can conveniently place orders online and also receive quality aftermarket car parts at their
                                    preferred locations
                                    The SM Motors is an Ecommerce Website designed for customers with user friendly
                                    interface
                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="jeepsweb.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}
            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/like-hearted-tribe/lportfolio.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Like Hearted Tribe">Like Hearted Tribe</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Online counseling booking service">Online counseling booking service</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    An online counseling booking service provides renowned psychologists,
                                    psychiatrists to contribute their thoughts and ideas.
                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="likeheartedtribe.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/legal_lands/lportfolio.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Legal Lands">Legal Lands</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Law Services">Law Services</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    A corporate website for a law firm which provides legal information and
                                    services rendered by lawyers and solicitors.
                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="legalland.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/safety_worker/iportfolio.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Safety Worker App">Safety Worker App</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Safety hazards alert app">Safety hazards alert app</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    An online app for safety hazards at workplace specifically design with online
                                    alerts, warnings and safety measures while exploring mercury.
                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="safetyworkerapp.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/ateam_transports/1.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="ATEAM Transport">ATEAM Transport</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Medical transportation services">Medical transportation services</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    ATEAM Transport Services is a Veteran-Owned non-emergency medical transportation
                                    (NEMT) company based in Indianapolis, Indiana.
                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="ateamtransport.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/attendance_management/1.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Attendance Management">Attendance Management</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Attendance management for student">Attendance management for student</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    An online portal of students’ attendance and leave management system lets you
                                    handle complex tasks with easy-to-use automation tools.
                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="attendancemanagementsystem.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/photography/1.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="PhotoGraphy">PhotoGraphy</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Online service booking platform for professional Photographers">Online service booking platform for professional Photographers</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    An online service booking platform for finding and hiring professional
                                    photographer after looking at their portfolios and albums.
                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="photography.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/psl_softball/1.jpg)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="PSL Softball">PSL Softball</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Online Sports league management Services">Online Sports league management Services</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    An online platform to participate different regional teams for baseball
                                    tournaments in different seasons to win and bid points including complete data base with
                                    statistical analysis.
                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="pslsoftball.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/stately/1.jpg)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Stately">Stately</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Online Sports league management Services">Online Fashion Designer Services</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    A Fashion designing online service and delivery website to assists with the
                                    production of clothing, shoes and accessories, identifies trends, and selects styles,
                                    fabrics, colors, prints and trims for a collection as per customers requirement.
                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="stately.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/inventory_management_sys/1.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Inventory management">Inventory management</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Supply Chain System">Supply Chain System</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    Inventory management software to regulate stock levels, control assets and
                                    inventory, and manage consumables in and out of the company
                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="inventorymanagement.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/spring/1.jpg)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Spring Living">Spring Living</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Supply Chain System">Online Realtors</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    Springliving is an online property portal in UK. The site lists real estate
                                    dealers, developers, agencies, and properties for sale and rent including property valuation
                                    and live maps.
                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="spring-living.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/storm_and_brown/1.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Storm & Brown Consultancy">Storm &amp; Brown Consultancy</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Supply Chain System">Call tracking management system (CDR)</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    A call detail record (CDR) provides information On calls made over a phone
                                    service.
                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="stormbrown.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/takker-tv/iportfolio.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="Tekker Tv">Tekker Tv</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Supply Chain System">Entertainment app (Tik ToK Concept)</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    It is a fun app that allows for creating and sharing short lip-sync, comedy, and
                                    talent videos.
                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="tekkertv.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/wemalta_website/1.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="WeMalta">WeMalta</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Supply Chain System">E-commerce( DARAZ.pk concept)</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    We Malta is an online marketplace and logistics website. It operates e-commerce
                                    platforms and logistics services in Malta. Vendors can register themselves and open their
                                    stores online and display their products and services.
                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="wemalta.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            <SwiperSlide className="flex-min-height-box home-slide">
                {/* slide-bg */}
                <div className="slide-bg" style={{ backgroundImage: 'url(assets/images/project/opd/iportfolio.png)' }} />
                {/* home-slider-content start */}
                <div className="home-slider-content flex-min-height-inner dark-bg-2">
                    {/* flex-container start */}
                    <div className="container top-bottom-padding-120 flex-container response-999">
                        {/* column start */}
                        <div className="six-columns six-offset">
                            <div className="content-left-margin-40">
                                <h2 className="large-title-bold">
                                    <span className="slider-overlay2 medium-title red-color" data-text="OPD App">OPD App</span><br />
                                </h2>
                                <h3>
                                    <span className="slider-overlay2  red-color" data-text="Medical booking services App">Medical booking services App</span>
                                </h3>
                                <h4>
                                    <span className="slider-overlay2  red-color" data-text="Established in 2019.">Established in 2019.</span>
                                </h4>
                                <p className="p-style-bold-up text-height-20 d-flex-wrap text-color-4 text-respons-slider">
                                    OPD is more than an app for finding doctors. Whether it’s booking doctor
                                    appointments, ordering medicines, scheduling diagnostic tests or having an online
                                    consultation with your doctor, OPD helps you find online medical services &amp; solutions to
                                    enable you to take better care of yourself.
                </p>
                                <div className="slider-fade slider-tr-delay07 top-margin-30">
                                    <div className="border-btn-box border-btn-red pointer-large">
                                        <div className="border-btn-inner">
                                            <a href="opdapp.php" className="border-btn" data-text="VIEW PROJECT">VIEW PROJECT</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* column end */}
                    </div>{/* flex-container end */}
                </div>{/* home-slider-content end */}

            </SwiperSlide>
            {/* swiper-button-next start */}
            <div className="swiper-button-next">
                <div className="slider-arrow-next-box">
                    <span className="slider-arrow-next" />
                </div>
            </div>{/* swiper-button-next end */}
            {/* swiper-button-prev start */}
            <div className="swiper-button-prev">
                <div className="slider-arrow-prev-box">
                    <span className="slider-arrow-prev" />
                </div>
            </div>{/* swiper-button-prev end */}
            {/* swiper-pagination */}
            {/*        <div class="swiper-pagination"></div>*/}
        </Swiper>

    )
}
