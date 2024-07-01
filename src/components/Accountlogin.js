import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Sideimage from '../components/images/Side-Image.png';

const Accountlogin = () => {
    const [formData, setFormData] = useState({
        emailOrPhone: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let errors = {};
        if (!formData.emailOrPhone) {
            errors.emailOrPhone = 'Email or Phone Number is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.emailOrPhone) && !/^\d{10}$/.test(formData.emailOrPhone)) {
            errors.emailOrPhone = 'Email or Phone Number is invalid';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Submit form
            console.log('Form submitted:', formData);
        }
    };

    return (
        <section className='signup-wrapper login-wrapper'>
            <Container fluid>
                <Row>
                    <Col md='7'>
                        <div className='signup-image'>
                            <img src={Sideimage} alt="Side Image" />
                        </div>
                    </Col>
                    <Col md='5' className='account-content-box'>
                        <div className='account-content'>
                            <div className='account-title title-box'>
                                <h3>Log in to Exclusive</h3>
                                <span>Enter your details below</span>
                            </div>
                            <div className='account-details'>
                                <form onSubmit={handleSubmit}>
                                    <div className='input-box'>
                                        <input
                                            type='text'
                                            name='emailOrPhone'
                                            placeholder='Email or Phone Number'
                                            value={formData.emailOrPhone}
                                            onChange={handleChange}
                                        />
                                        {errors.emailOrPhone && <div className="error">{errors.emailOrPhone}</div>}
                                    </div>
                                    <div className='input-box'>
                                        <input
                                            type='password'
                                            name='password'
                                            placeholder='Password'
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && <div className="error">{errors.password}</div>}
                                    </div>
                                    <div className='slider-btn login-btn'>
                                        <button type='submit'>Log In</button>
                                        <a href='#' className='forget-btn'>Forget Password?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Accountlogin;
