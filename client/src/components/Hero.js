import React from 'react';
import BannerImg from '../assets/images/hero1.png';
import {Container, Row, Col} from 'react-bootstrap'
export default function Hero() {
    return (
        <Container>
            <Row>
                <Col className="d-flex align-items-center hero-text" lg={6} xs={12} >
                    <div>
                        <span className="hero-title">The Ultimate Classic Bugrito</span>
                        <p className="hero-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Quisque quis fermentum massa.  
                        </p>
                        
                        <button className="btn-hero price">Shop now</button>
                    </div>
                           
                </Col>
                <Col lg={6 } xs={12}>
                    <img  className="hero-img" src={BannerImg} alt="bugrito"  ></img>
                </Col>
            </Row>
        </Container>
    )
}
