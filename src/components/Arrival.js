import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ArrivalImage from '../components/images/ps5-slim-goedkope.png'
import AttractiveImage from '../components/images/attractive-woman.png'
import AmazonImage from '../components/images/amazon-echo-png.png'
import GucciImage from '../components/images/gucci.png'
import styled from 'styled-components';


const BackgroundDiv = styled.div`
  background-image: url(${ArrivalImage});
  background-size: auto;  
  background-repeat: no-repeat;  
  background-position: bottom;  
`;
const WomanDiv = styled.div`
  background-image: url(${AttractiveImage});
  background-size: auto;  
  background-repeat: no-repeat;  
  background-position: right;  
`;
const AmazonDiv = styled.div`
  background-image: url(${AmazonImage});
  background-size: auto;  
  background-repeat: no-repeat;  
  background-position: center;  
`;
const GucciDiv = styled.div`
  background-image: url(${GucciImage});
  background-size: auto;  
  background-repeat: no-repeat;  
  background-position: center;  
`;

const Arrival = () => {
    return (
        <section className='arrival-wrapper our-gaping'>
            <Container>
                <div className='arrival-content'>
                    <div className='todays-title title-box'>
                        <h3>
                            <span>
                                Featured
                            </span>
                            New Arrival
                        </h3>
                    </div>
                    <div className='arrival-card-main'>
                        <Row>
                            <Col md='6'>
                                <BackgroundDiv className='arrival-card-box'>
                                    <div className='arrival-card'>
                                        <h4>PlayStation 5</h4>
                                        <p>
                                            Black and White version of the PS5 coming out on sale.
                                        </p>
                                        <a href='#'>
                                            Shop Now
                                        </a>
                                    </div>
                                </BackgroundDiv>
                            </Col>
                            <Col md='6'>
                                <div className='women-card-box'>
                                    <WomanDiv className='arrival-card-box'>
                                        <div className='arrival-card'>
                                            <h4>Women’s Collections</h4>
                                            <p>
                                                Featured woman collections that give you another vibe.
                                            </p>
                                            <a href='#'>
                                                Shop Now
                                            </a>
                                        </div>
                                    </WomanDiv>
                                </div>
                                <div className='speaker-card-box'>
                                    <Row>
                                        <Col md='6'>
                                            <AmazonDiv className='arrival-card-box'>
                                                <div className='arrival-card'>
                                                    <h4>Speakers</h4>
                                                    <p>
                                                        Amazon wireless speakers
                                                    </p>
                                                    <a href='#'>
                                                        Shop Now
                                                    </a>
                                                </div>
                                            </AmazonDiv>
                                        </Col>
                                        <Col md='6'>
                                            <GucciDiv className='arrival-card-box'>
                                                <div className='arrival-card'>
                                                    <h4>Perfume</h4>
                                                    <p>
                                                        GUCCI INTENSE OUD EDP
                                                    </p>
                                                    <a href='#'>
                                                        Shop Now
                                                    </a>
                                                </div>
                                            </GucciDiv>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Arrival