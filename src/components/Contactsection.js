import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Phoneimage from '../components/images/icons-phone.svg'
import Mailimage from '../components/images/icons-mail.svg'

const Contactsection = () => {
    return (
        <section className='contact-wrapper our-gaping'>
            <Container>
                <Row>
                    <Col md='4'>
                        <div className='contact-details'>
                            <div className='contact-call'>
                                <div className='call-icon'>
                                    <a href='#'>
                                        <img src={Phoneimage} alt="" />
                                        Call To Us
                                    </a>
                                </div>
                                <div className='call-detials'>
                                    <p>We are available 24/7, 7 days a week.</p>
                                    <a href='#'>Phone: +8801611112222</a>
                                </div>
                            </div>
                            <div className='contact-call write-mail'>
                                <div className='call-icon'>
                                    <a href='#'>
                                        <img src={Mailimage} alt="" />
                                        Write To US
                                    </a>
                                </div>
                                <div className='call-detials'>
                                    <p>Fill out our form and we will contact you within 24 hours.</p>
                                    <a href='#'>Phone: +8801611112222</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md='8'>
                        <div className='contact-form'>
                            <form action=''>
                                <div className='contact-input-box'>
                                    <Row>
                                        <Col md='4'>
                                            <div className='contact-input'>
                                                <input type='text' placeholder='Your name *' />
                                            </div>
                                        </Col>
                                        <Col md='4'>
                                            <div className='contact-input'>
                                                <input type='text' placeholder='Your name *' />
                                            </div>
                                        </Col>
                                        <Col md='4'>
                                            <div className='contact-input'>
                                                <input type='text' placeholder='Your name *' />
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className='massage-textarea'>
                                        <textarea name="postContent" rows={6} cols={40} />
                                    </div>
                                    <div className='slider-btn send-btn'>
                                        <button>
                                            Send Massage
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contactsection