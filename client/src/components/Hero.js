import React from 'react';
import BannerImg from '../assets/images/hero1.png';
export default function Hero() {
    return (
        <div className="container justify-center">
            
            <div className="row  d-flex-row">
               
                
    
                <div className="col align-items-center">
                    <div>
                        <span className="hero-title">The Ultimate Classic Bugrito</span>
                        <p className="hero-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quisque quis fermentum massa.  
                        </p>
                        
                        <button className="btn-hero price">Shop now</button>
                    </div>
                    
                </div>
                <div className="col align-items-center">
                    <img  className="hero-img" src={BannerImg} alt="bugrito"  ></img>
                </div>

            </div>
            
            
            
        </div>
        
    )
}
