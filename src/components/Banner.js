import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from './Slider';

const Banner = () => {
  return (
    <div className='banner-wraapper'>
      <Container>
        <Row>
          <Col md={3}>
            <div className='banner-listing'>
              <ul className='listing-box'>
                <li className=''>
                  <a href='#'>
                    Woman’s Fashion
                  </a>
                </li>
                <li className=''>
                  <a href='#'>
                    Men’s Fashion
                  </a>
                </li>
                <li className=''>
                  <a href='#'>
                    Electronics
                  </a>
                </li>
                <li className=''>
                  <a href='#'>
                    Home & Lifestyle
                  </a>
                </li>
                <li className=''>
                  <a href='#'>
                    Medicine
                  </a>
                </li>
                <li className=''>
                  <a href='#'>
                    Sports & Outdoor
                  </a>
                </li>
                <li className=''>
                  <a href='#'>
                    Baby’s & Toys
                  </a>
                </li>
                <li className=''>
                  <a href='#'>
                    Groceries & Pets
                  </a>
                </li>
                <li className=''>
                  <a href='#'>
                    Health & Beauty
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={9}>
            <Slider />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner