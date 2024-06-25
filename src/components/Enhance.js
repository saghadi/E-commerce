import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Jblmusic from '../components/images/JBL_BOOMBOX.png'
import styled from 'styled-components';
import backgroundImage from '../components/images/enhance-bg.png'
import Counter from './Counter';

const BackgroundDiv = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;  
  background-repeat: no-repeat;  
  background-position: center;  
`;

const Enhance = () => {
    return (
        <section className='enhance-wrapper our-gaping'>
            <Container>
                <div className='enhance-content'>
                    <Row>
                        <Col md='6'>
                            <div className='enhance-details'>
                                <div className='enhance-title title-box'>
                                    <h3>
                                        <span>
                                            Categories
                                        </span>
                                        Enhance Your
                                        <br />
                                        Music Experience
                                    </h3>
                                </div>
                                <div className='enhance-counter'>
                                    <Counter />
                                </div>
                                <div className='slider-btn enhance-btn'>
                                    <a href='#'>
                                        Buy Now!
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md='6'>
                            <BackgroundDiv className='enhance-image-box'>
                                <div className='enhance-img'>
                                    <img src={Jblmusic} alt="" />
                                </div>
                            </BackgroundDiv>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Enhance