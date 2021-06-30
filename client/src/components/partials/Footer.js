import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaYoutube} from 'react-icons/fa';
import {Navbar, Container, Dropdown, Nav, Row, Col} from 'react-bootstrap'
export default function Footer() {
    return (
        <>
        <Navbar className="no-shadow" collapseOnSelect expand="lg">
        <Container className="footer-cont d-flex align-items-baseline">
            <Navbar.Brand className="navbrand">
                <a href='/'>Bugrito's</a>
                <p className="reg-txt">© 2021 Bugrito's. All rights reserved</p>
                <p className="reg-txt">Policy | Terms | Privacy</p>
                <div className="socbrand">
                    <FaFacebookF/>
                    <FaInstagram/>
                    <FaTwitter/>
                    <FaPinterest/>
                    <FaYoutube/>
                </div>
            </Navbar.Brand>
            <Nav className="ml-auto footer">
                <Row className="foot-accordion">
                <Col className="d-flex justify-content-end col-foot">
               
                    <li>
                        Bugrito's
                        <ul className="foot-list-foot">
                            <li className="foot-item">Home</li>
                            <li  className="foot-item">Web App</li>
                            <li  className="foot-item">Mobile App</li>
                            <li  className="foot-item">Chrome Extension</li>
                        </ul>

                    </li>
                </Col>
                <Col className="d-flex justify-content-end col-foot" >
                
                    <li>
                        For Creators
                        <ul className="foot-list-foot">
                            <li  className="foot-item">Get Started</li>
                            <li  className="foot-item">Contact Us</li>
                        </ul>
                    </li>
                </Col>
                <Col className="d-flex justify-content-end col-foot">
                    <li>
                        For Business
                        <ul className="foot-list-foot">
                            <li  className="foot-item">Bugrito's for business</li>
                        </ul>

                    </li>
                </Col>
                <Col className="d-flex justify-content-end col-foot">
                    <li>
                        Resources
                        <ul className="foot-list-foot">
                            <li  className="foot-item">Support</li>
                            <li  className="foot-item">Blog</li>
                            <li  className="foot-item">Partners</li>
                        </ul>

                    </li>
                </Col>
                </Row>
            </Nav>
        </Container>
      </Navbar>


        {/**<div className="container justify-center footer">
            <div className="row">
                <div className="navbrand">
                    <a href='/'>Bugrito's</a>
                    <p className="reg-txt">© 2021 Bugrito's. All rights reserved</p>
                    <p className="reg-txt">Policy | Terms | Privacy</p>
                    <div className="socbrand">
                        <FaFacebookF/>
                        <FaInstagram/>
                        <FaTwitter/>
                        <FaPinterest/>
                        <FaYoutube/>
                    </div>
                </div>
                <ul className="foot-list">
                    <li>
                        Bugrito's
                        <ul className="foot-list-foot">
                            <li className="foot-item">Home</li>
                            <li  className="foot-item">Web App</li>
                            <li  className="foot-item">Mobile App</li>
                            <li  className="foot-item">Chrome Extension</li>
                        </ul>

                    </li>
                    <li>
                        For Creators
                        <ul className="foot-list-foot">
                            <li  className="foot-item">Get Started</li>
                            <li  className="foot-item">Contact Us</li>
                        </ul>
                    </li>
                    <li>
                        For Business
                        <ul className="foot-list-foot">
                            <li  className="foot-item">Bugrito's for business</li>
                        </ul>

                    </li>
                    <li>
                        Resources
                        <ul className="foot-list-foot">
                            <li  className="foot-item">Support</li>
                            <li  className="foot-item">Blog</li>
                            <li  className="foot-item">Partners</li>
                        </ul>

                    </li>
                </ul>
            </div>
            
        </div>*/}
        </>
        
    )
}
