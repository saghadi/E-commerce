import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Sideimage from '../components/images/Side-Image.png';
import Googleimage from '../components/images/Icon-Google.svg';
import { NavLink } from 'react-router-dom';

const Accountsign = () => {
    const [formData, setFormData] = useState({
        name: '',
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
        if (!formData.name) {
            errors.name = 'Name is required';
        }
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
        <section className='signup-wrapper'>
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
                                <h3>Create an account</h3>
                                <span>Enter your details below</span>
                            </div>
                            <div className='account-details'>
                                <form onSubmit={handleSubmit}>
                                    <div className='input-box'>
                                        <input
                                            type='text'
                                            name='name'
                                            placeholder='Name'
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        {errors.name && <div className="error">{errors.name}</div>}
                                    </div>
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
                                    <div className='slider-btn account-btn'>
                                        <button type='submit'>Create Account</button>
                                    </div>
                                </form>
                                <div className='google-btn'>
                                    <a href='#'>
                                        <img src={Googleimage} alt="Google Icon" />
                                        Sign up with Google
                                    </a>
                                </div>
                                <div className='login-btn'>
                                    <span>
                                        Already have an account?
                                        <NavLink to='/login'> Log in</NavLink>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Accountsign;
