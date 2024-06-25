import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Phoneimage from '../components/images/Category-CellPhone.svg'


const Categories = () => {
    return (
        <section className='categories-wrapper our-gaping'>
            <Container>
                <div className='categories-content'>
                    <div className='todays-title title-box'>
                        <h3>
                            <span>
                                Categories
                            </span>
                            Browse By Category
                        </h3>
                    </div>
                    <div className='categories-slider'>
                        <Swiper
                            slidesPerView={6}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='category-listing-box'>
                                    <img src={Phoneimage} alt="" />
                                    <h4>Phones</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='category-listing-box'>
                                    <img src={Phoneimage} alt="" />
                                    <h4>Phones</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='category-listing-box'>
                                    <img src={Phoneimage} alt="" />
                                    <h4>Phones</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='category-listing-box'>
                                    <img src={Phoneimage} alt="" />
                                    <h4>Phones</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='category-listing-box'>
                                    <img src={Phoneimage} alt="" />
                                    <h4>Phones</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='category-listing-box'>
                                    <img src={Phoneimage} alt="" />
                                    <h4>Phones</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='category-listing-box'>
                                    <img src={Phoneimage} alt="" />
                                    <h4>Phones</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='category-listing-box'>
                                    <img src={Phoneimage} alt="" />
                                    <h4>Phones</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='category-listing-box'>
                                    <img src={Phoneimage} alt="" />
                                    <h4>Phones</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='category-listing-box'>
                                    <img src={Phoneimage} alt="" />
                                    <h4>Phones</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='category-listing-box'>
                                    <img src={Phoneimage} alt="" />
                                    <h4>Phones</h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='category-listing-box'>
                                    <img src={Phoneimage} alt="" />
                                    <h4>Phones</h4>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Categories