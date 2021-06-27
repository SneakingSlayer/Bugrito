import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaYoutube} from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="container justify-center footer">
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
            
        </div>
    )
}
