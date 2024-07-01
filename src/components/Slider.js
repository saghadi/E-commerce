import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col } from 'react-bootstrap';
import Sliderimage from '../components/images/slider-tag.png'
import Buttonimage from '../components/images/icons arrow-right.svg'
import BannerImage from '../components/images/hero_endframe__cvklg0xk3w6e_large 2.png'



const Slider = () => {
    return (
        <div className='slider-wrapper'>
            <div className='slider-content'>
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            <Col md='6'>
                                <div className='banner-slider'>
                                    <div className='slider-image-tag'>
                                        <img src={Sliderimage} alt="" />
                                    </div>
                                    <div className='banner-title'>
                                        <h1>
                                            Up to 10%
                                            <br />
                                            off Voucher
                                        </h1>
                                        <a href='#'>
                                            Shop Now
                                            <img src={Buttonimage} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col md='6'>
                                <div className='banner-hero-image'>
                                    <img src={BannerImage} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col md='6'>
                                <div className='banner-slider'>
                                    <div className='slider-image-tag'>
                                        <img src={Sliderimage} alt="" />
                                    </div>
                                    <div className='banner-title'>
                                        <h1>
                                            Up to 10%
                                            <br />
                                            off Voucher
                                        </h1>
                                        <a href='#'>
                                            Shop Now
                                            <img src={Buttonimage} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col md='6'>
                                <div className='banner-hero-image'>
                                    <img src={BannerImage} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col md='6'>
                                <div className='banner-slider'>
                                    <div className='slider-image-tag'>
                                        <img src={Sliderimage} alt="" />
                                    </div>
                                    <div className='banner-title'>
                                        <h1>
                                            Up to 10%
                                            <br />
                                            off Voucher
                                        </h1>
                                        <a href='#'>
                                            Shop Now
                                            <img src={Buttonimage} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col md='6'>
                                <div className='banner-hero-image'>
                                    <img src={BannerImage} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col md='6'>
                                <div className='banner-slider'>
                                    <div className='slider-image-tag'>
                                        <img src={Sliderimage} alt="" />
                                    </div>
                                    <div className='banner-title'>
                                        <h1>
                                            Up to 10%
                                            <br />
                                            off Voucher
                                        </h1>
                                        <a href='#'>
                                            Shop Now
                                            <img src={Buttonimage} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col md='6'>
                                <div className='banner-hero-image'>
                                    <img src={BannerImage} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col md='6'>
                                <div className='banner-slider'>
                                    <div className='slider-image-tag'>
                                        <img src={Sliderimage} alt="" />
                                    </div>
                                    <div className='banner-title'>
                                        <h1>
                                            Up to 10%
                                            <br />
                                            off Voucher
                                        </h1>
                                        <a href='#'>
                                            Shop Now
                                            <img src={Buttonimage} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col md='6'>
                                <div className='banner-hero-image'>
                                    <img src={BannerImage} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Slider