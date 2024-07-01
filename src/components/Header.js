import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Mainlogo from '../components/images/Logo (2).svg'
import Downarrow from '../components/images/downarrow.svg'
import Searchinput from '../components/images/search-icon.svg'
import Shortlist from '../components/images/shortlist.svg'
import Trolleybag from '../components/images/trolley-bag.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='main-header'>
            <div className='top-header'>
                <Container>
                    <Row>
                        <Col md={10}>
                            <p className='top-text-box'>
                                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                                <a href='#'> ShopNow </a>
                            </p>
                        </Col>
                        <Col md={2}>
                            <div className='top-right'>
                                <p> English </p>
                                <img src={Downarrow} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='header-main-box'>
                <Container>
                    <Row className='align-items-center'>
                        <Col md={3}>
                            <img src={Mainlogo} alt="" />
                        </Col>
                        <Col md={5}>
                            <ul className='nav-menu'>
                                <li>
                                    <NavLink to='/'>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/Contact'>
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about'>
                                        About
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/SignUp'>
                                        Sign Up
                                    </NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <div className='nav-input-box'>
                                <div className='input-box'>
                                    <form>
                                        <input type='text' placeholder='What are you looking for?' />
                                        <img src={Searchinput} alt="" />
                                    </form>
                                </div>
                                <div className='nav-icon'>
                                    <button>
                                        <img src={Shortlist} alt="" />
                                    </button>
                                    <button>
                                        <img src={Trolleybag} alt="" />
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    )
}

export default Header