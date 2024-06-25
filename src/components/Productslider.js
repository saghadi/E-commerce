import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Sliderimage from '../components/images/slider-image.png'
import Shortlist from '../components/images/shortlist-slider.svg'
import Eyeimage from '../components/images/eye.svg'
import Starimage from '../components/images/star-icon.svg'

const Productslider = () => {
    return (
        <div className='slider-wrapper-main'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='slider-main-box'>
                        <div className='slider-image-box'>
                            <div className='slider-img'>
                                <img src={Sliderimage} alt="" />
                            </div>
                            <div className='slider-img-icon'>
                                <div className='slider-sale-tag'>
                                    <span>-40%</span>
                                </div>
                                <div className='slider-icon'>
                                    <img src={Shortlist} alt="" />
                                    <img src={Eyeimage} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='slider-content-box'>
                            <div className='slider-title'>
                                <h4>
                                    HAVIT HV-G92 Gamepad
                                </h4>
                            </div>
                            <div className='slider-price'>
                                <p>
                                    $120
                                    <span>
                                        $160
                                    </span>
                                </p>
                            </div>
                            <div className='content-icon-box'>
                                <div className='star-icon'>
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                </div>
                                <div className='start-text'>
                                    <p>(88)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-main-box'>
                        <div className='slider-image-box'>
                            <div className='slider-img'>
                                <img src={Sliderimage} alt="" />
                            </div>
                            <div className='slider-img-icon'>
                                <div className='slider-sale-tag'>
                                    <span>-40%</span>
                                </div>
                                <div className='slider-icon'>
                                    <img src={Shortlist} alt="" />
                                    <img src={Eyeimage} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='slider-content-box'>
                            <div className='slider-title'>
                                <h4>
                                    HAVIT HV-G92 Gamepad
                                </h4>
                            </div>
                            <div className='slider-price'>
                                <p>
                                    $120
                                    <span>
                                        $160
                                    </span>
                                </p>
                            </div>
                            <div className='content-icon-box'>
                                <div className='star-icon'>
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                </div>
                                <div className='start-text'>
                                    <p>(88)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-main-box'>
                        <div className='slider-image-box'>
                            <div className='slider-img'>
                                <img src={Sliderimage} alt="" />
                            </div>
                            <div className='slider-img-icon'>
                                <div className='slider-sale-tag'>
                                    <span>-40%</span>
                                </div>
                                <div className='slider-icon'>
                                    <img src={Shortlist} alt="" />
                                    <img src={Eyeimage} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='slider-content-box'>
                            <div className='slider-title'>
                                <h4>
                                    HAVIT HV-G92 Gamepad
                                </h4>
                            </div>
                            <div className='slider-price'>
                                <p>
                                    $120
                                    <span>
                                        $160
                                    </span>
                                </p>
                            </div>
                            <div className='content-icon-box'>
                                <div className='star-icon'>
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                </div>
                                <div className='start-text'>
                                    <p>(88)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-main-box'>
                        <div className='slider-image-box'>
                            <div className='slider-img'>
                                <img src={Sliderimage} alt="" />
                            </div>
                            <div className='slider-img-icon'>
                                <div className='slider-sale-tag'>
                                    <span>-40%</span>
                                </div>
                                <div className='slider-icon'>
                                    <img src={Shortlist} alt="" />
                                    <img src={Eyeimage} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='slider-content-box'>
                            <div className='slider-title'>
                                <h4>
                                    HAVIT HV-G92 Gamepad
                                </h4>
                            </div>
                            <div className='slider-price'>
                                <p>
                                    $120
                                    <span>
                                        $160
                                    </span>
                                </p>
                            </div>
                            <div className='content-icon-box'>
                                <div className='star-icon'>
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                </div>
                                <div className='start-text'>
                                    <p>(88)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-main-box'>
                        <div className='slider-image-box'>
                            <div className='slider-img'>
                                <img src={Sliderimage} alt="" />
                            </div>
                            <div className='slider-img-icon'>
                                <div className='slider-sale-tag'>
                                    <span>-40%</span>
                                </div>
                                <div className='slider-icon'>
                                    <img src={Shortlist} alt="" />
                                    <img src={Eyeimage} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='slider-content-box'>
                            <div className='slider-title'>
                                <h4>
                                    HAVIT HV-G92 Gamepad
                                </h4>
                            </div>
                            <div className='slider-price'>
                                <p>
                                    $120
                                    <span>
                                        $160
                                    </span>
                                </p>
                            </div>
                            <div className='content-icon-box'>
                                <div className='star-icon'>
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                </div>
                                <div className='start-text'>
                                    <p>(88)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-main-box'>
                        <div className='slider-image-box'>
                            <div className='slider-img'>
                                <img src={Sliderimage} alt="" />
                            </div>
                            <div className='slider-img-icon'>
                                <div className='slider-sale-tag'>
                                    <span>-40%</span>
                                </div>
                                <div className='slider-icon'>
                                    <img src={Shortlist} alt="" />
                                    <img src={Eyeimage} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='slider-content-box'>
                            <div className='slider-title'>
                                <h4>
                                    HAVIT HV-G92 Gamepad
                                </h4>
                            </div>
                            <div className='slider-price'>
                                <p>
                                    $120
                                    <span>
                                        $160
                                    </span>
                                </p>
                            </div>
                            <div className='content-icon-box'>
                                <div className='star-icon'>
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                </div>
                                <div className='start-text'>
                                    <p>(88)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-main-box'>
                        <div className='slider-image-box'>
                            <div className='slider-img'>
                                <img src={Sliderimage} alt="" />
                            </div>
                            <div className='slider-img-icon'>
                                <div className='slider-sale-tag'>
                                    <span>-40%</span>
                                </div>
                                <div className='slider-icon'>
                                    <img src={Shortlist} alt="" />
                                    <img src={Eyeimage} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='slider-content-box'>
                            <div className='slider-title'>
                                <h4>
                                    HAVIT HV-G92 Gamepad
                                </h4>
                            </div>
                            <div className='slider-price'>
                                <p>
                                    $120
                                    <span>
                                        $160
                                    </span>
                                </p>
                            </div>
                            <div className='content-icon-box'>
                                <div className='star-icon'>
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                </div>
                                <div className='start-text'>
                                    <p>(88)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-main-box'>
                        <div className='slider-image-box'>
                            <div className='slider-img'>
                                <img src={Sliderimage} alt="" />
                            </div>
                            <div className='slider-img-icon'>
                                <div className='slider-sale-tag'>
                                    <span>-40%</span>
                                </div>
                                <div className='slider-icon'>
                                    <img src={Shortlist} alt="" />
                                    <img src={Eyeimage} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='slider-content-box'>
                            <div className='slider-title'>
                                <h4>
                                    HAVIT HV-G92 Gamepad
                                </h4>
                            </div>
                            <div className='slider-price'>
                                <p>
                                    $120
                                    <span>
                                        $160
                                    </span>
                                </p>
                            </div>
                            <div className='content-icon-box'>
                                <div className='star-icon'>
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                </div>
                                <div className='start-text'>
                                    <p>(88)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-main-box'>
                        <div className='slider-image-box'>
                            <div className='slider-img'>
                                <img src={Sliderimage} alt="" />
                            </div>
                            <div className='slider-img-icon'>
                                <div className='slider-sale-tag'>
                                    <span>-40%</span>
                                </div>
                                <div className='slider-icon'>
                                    <img src={Shortlist} alt="" />
                                    <img src={Eyeimage} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='slider-content-box'>
                            <div className='slider-title'>
                                <h4>
                                    HAVIT HV-G92 Gamepad
                                </h4>
                            </div>
                            <div className='slider-price'>
                                <p>
                                    $120
                                    <span>
                                        $160
                                    </span>
                                </p>
                            </div>
                            <div className='content-icon-box'>
                                <div className='star-icon'>
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                    <img src={Starimage} alt="" />
                                </div>
                                <div className='start-text'>
                                    <p>(88)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Productslider