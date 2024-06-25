import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Servicesimage from '../components/images/Services.svg'


const Delivery = () => {
    return (
        <section className='deliver-wrapper our-gaping'>
            <Container>
                <div className='deliver-content'>
                    <Row>
                        <Col md='4'>
                            <div className='deliver-card'>
                                <div className='deliver-img'>
                                    <img src={Servicesimage} alt="" />
                                </div>
                                <div className='deliver-text'>
                                    <h4>
                                        FREE AND FAST DELIVERY
                                    </h4>
                                    <p>
                                        Free delivery for all orders over $140
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md='4'>
                            <div className='deliver-card'>
                                <div className='deliver-img'>
                                    <img src={Servicesimage} alt="" />
                                </div>
                                <div className='deliver-text'>
                                    <h4>
                                        FREE AND FAST DELIVERY
                                    </h4>
                                    <p>
                                        Free delivery for all orders over $140
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md='4'>
                            <div className='deliver-card'>
                                <div className='deliver-img'>
                                    <img src={Servicesimage} alt="" />
                                </div>
                                <div className='deliver-text'>
                                    <h4>
                                        FREE AND FAST DELIVERY
                                    </h4>
                                    <p>
                                        Free delivery for all orders over $140
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>
            </Container>
        </section>
    )
}

export default Delivery