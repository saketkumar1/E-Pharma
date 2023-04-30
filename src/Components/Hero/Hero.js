import React from 'react'
//import Banner from  './Banner.png';
//import Banner from '../../public/assets/Banner.png';
import './Hero.css';

const HeroN = () => {
  return (
    <div className="hero flex_item">
        <div className='inner-hero flex_item'>
        <div className="left-h">
         <p className='headline'>ONLINE MEDICAL SUPPLIES</p>
          <p className='inner-text'>Get Your Vitamins</p>

          <p className='inner-text'>& Minerals</p>
        
         <buttons className="hero-buttons">
               SHOP NOW
          </buttons>
    </div>
    <div className="right-h">
        <img src="./assets/Banner.png" alt="" className='hero-image' />
    </div>
    </div>

        </div>
    
  )
}

export default HeroN