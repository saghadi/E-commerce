import React from 'react'
import { Container } from 'react-bootstrap';
import Exploreslider from './Exploreslider';
import Productslider from './Productslider';


const Explore = () => {
    return (
        <section className='explore-wrapper our-gaping'>
            <Container>
                <div className='todays-main-content'>
                    <div className='todays-content'>
                        <div className='todays-title title-box'>
                            <h3>
                                <span>
                                    Our Products
                                </span>
                                Explore Our Products
                            </h3>
                        </div>
                    </div>
                    <Exploreslider />
                    <Productslider />
                    <div className='slider-btn'>
                        <a href='#'>
                            View All Products
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Explore