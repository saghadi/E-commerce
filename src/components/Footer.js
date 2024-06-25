import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Footerlogo from '../components/images/Exclusive-footer.svg'
import Inputarrow from '../components/images/input-arrow.svg'
import Qriamge from '../components/images/Qr-Code.png'
import Googleplay from '../components/images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png'
import Appstore from '../components/images/download-appstore.png'
import Facebook from '../components/images/facebook.svg'
import Twitter from '../components/images/twiter.svg'
import Instagram from '../components/images/insta.svg'
import Linkedin from '../components/images/in.svg'


const Footer = () => {
    return (
        <footer className='main-footer'>
            <div className='footer-top'>
                <Container>
                    <Row className='alien-item-center'>
                        <Col md={3}>
                            <div className='footer-subscribe'>
                                <div className='footer-logo'>
                                    <a href='#'>
                                        <img src={Footerlogo} alt="" />
                                    </a>
                                    <h4>
                                        Subscribe
                                    </h4>
                                </div>
                                <div className='footer-input'>
                                    <span>Get 10% off your first order</span>
                                    <form>
                                        <input type='text' placeholder='Enter your email' />
                                        <img src={Inputarrow} alt="" />
                                    </form>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col md={4}>
                                    <div className='footer-listing'>
                                        <h3>
                                            Support
                                        </h3>
                                        <p>
                                            111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
                                        </p>
                                        <a href='mailto: exclusive@gmail.com'>
                                            exclusive@gmail.com
                                        </a>
                                        <a href='tel: +88015-88888-9999'>
                                            +88015-88888-9999
                                        </a>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='footer-listing'>
                                        <h3>
                                            Account
                                        </h3>
                                        <ul className='footer-menu'>
                                            <li>
                                                <a href='#'>
                                                    My Account
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#'>
                                                    Login / Register
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#'>
                                                    Cart
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#'>
                                                    Wishlist
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#'>
                                                    Shop
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className='footer-listing'>
                                        <h3>
                                            Quick Link
                                        </h3>
                                        <ul className='footer-menu'>
                                            <li>
                                                <a href='#'>
                                                    Privacy Policy
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#'>
                                                    Terms Of Use
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#'>
                                                    FAQ
                                                </a>
                                            </li>
                                            <li>
                                                <a href='#'>
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3}>
                            <div className='footer-listing'>
                                <h3>
                                    Download App
                                </h3>
                                <span>
                                    Save $3 with App New User Only
                                </span>
                                <div className='footer-img-box'>
                                    <div className='left-box'>
                                        <img src={Qriamge} alt="" />
                                    </div>
                                    <div className='right-box'>
                                        <img src={Googleplay} alt="" />
                                        <img src={Appstore} alt="" />
                                    </div>
                                </div>
                                <div className='footer-icon-box'>
                                    <ul className='social-icon'>
                                        <li>
                                            <a href='#'>
                                                <img src={Facebook} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <img src={Twitter} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <img src={Instagram} alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#'>
                                                <img src={Linkedin} alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='copy-right-box'>
                <p>
                    &copy; Copyright Rimel 2022. All right reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer