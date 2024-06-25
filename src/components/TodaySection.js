import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import Counter from './Counter';
import Todayslider from './Todayslider';

const TodaySection = () => {
    return (
        <section className='todays-wrapper our-gaping'>
            <Container>
                <div className='todays-main-content'>
                    <div className='todays-content'>
                        <div className='todays-title title-box'>
                            <h3>
                                <span>
                                    Today’s
                                </span>
                                Flash Sales
                            </h3>
                        </div>
                        <div>
                            <Counter />
                        </div>
                    </div>
                </div>
            </Container>
            <Todayslider />
            <Container>
                <div className='slider-btn'>
                    <a href='#'>
                        View All Products
                    </a>
                </div>
            </Container>
        </section>
    )
}

export default TodaySection