import React from 'react'
import logo from '../../logo.svg';
import './hero.scss'

function Hero(){
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-date"> 23 October</h1>
        <h1 className="hero-desc"> Be part of the first <br/> King of Pong event! </h1>
        <div className="show-interest-button">
          <p>Sign up Now</p>
        </div>
      </div>
  </div>
  )
}

export default Hero;