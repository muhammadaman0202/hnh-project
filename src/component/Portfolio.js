import React from 'react'
import {NavLink} from 'react-router-dom';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y ,Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);
export default function Portfolio() {
    
    return (
        
        <Swiper className="top-bottom-padding-90 portfolio-slider2"
            spaceBetween={30}
            slidesPerView={2}
            speed={1400}
            autoplay={{ delay: 5000 }}
            centeredSlides={true}
            freeMode={true}
            breakpoints={{
                992: {
                    slidesPerView: 2
                }
            }}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }}

        >
            <SwiperSlide className="hover-box animsition-link pointer-large">
                <div className="hidden-box">
                    <img className="hover-img"  src="assets/images/services/1-01.jpg" alt="project" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="hover-box animsition-link pointer-large">
                <div className="hidden-box">
                    <img className="hover-img" src="assets/images/services/2-01.jpg" alt="project" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="hover-box animsition-link pointer-large">
                <div className="hidden-box">
                    <img className="hover-img" src="assets/images/services/4-01.jpg" alt="project" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="hover-box animsition-link pointer-large">
                <div className="hidden-box">
                    <img className="hover-img" src="assets/images/services/5-01.jpg" alt="project" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="hover-box animsition-link pointer-large">
                <div className="hidden-box">
                    <img className="hover-img" src="assets/images/services/6-01.jpg" alt="project" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="hover-box animsition-link pointer-large">
                <div className="hidden-box">
                    <img className="hover-img" src="assets/images/services/7-01.jpg" alt="project" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="hover-box animsition-link pointer-large">
                <div className="hidden-box">
                    <img className="hover-img" src="assets/images/services/8-01.jpg" alt="project" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="hover-box animsition-link pointer-large">
                <div className="hidden-box">
                    <img className="hover-img" src="assets/images/services/9-01.jpg" alt="project" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="hover-box animsition-link pointer-large">
                <div className="hidden-box">
                    <img className="hover-img" src="assets/images/services/10-01.jpg" alt="project" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="hover-box animsition-link pointer-large">
                <div className="hidden-box">
                    <img className="hover-img" src="assets/images/services/12-01.jpg" alt="project" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="hover-box animsition-link pointer-large">
                <div className="hidden-box">
                    <img className="hover-img" src="assets/images/services/13-01.jpg" alt="project" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="hover-box animsition-link pointer-large">
                <div className="hidden-box">
                    <img className="hover-img" src="assets/images/services/14-01.jpg" alt="project" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="hover-box animsition-link pointer-large">
                <div className="hidden-box">
                    <img className="hover-img" src="assets/images/services/15-01.jpg" alt="project" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="hover-box animsition-link pointer-large">
                <div className="hidden-box">
                    <img className="hover-img" src="assets/images/services/3-01.jpg" alt="project" />
                </div>
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
    
        </Swiper>
    )
}
