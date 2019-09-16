import React, {useEffect, useState} from 'react'
import logo from '../../logo.svg';
import './hero.scss'

function Hero(){

  const [siteLoaded, setLoaded] = useState(false);
  useEffect(() => {
    console.log("SITE INITIALIZED");
    setLoaded(true);
  }, []);

  return (
    <div className="hero">
      <div className="hero-left-side">
        <h1 className={'hero-date ' + (siteLoaded? 'show' : 'hidden') }> 23 October</h1>
        <span className={'malin ' + (siteLoaded? 'show' : 'hidden')}></span>
      </div>
      <div className={'hero-right-side ' + (siteLoaded? 'show' : 'hidden')}>
        <h1 className="hero-desc"> The first King of Pong event </h1>
        <div className="show-interest-button">
          <p>Sign up Now</p>
        </div>
      </div>
      <p onClick={() => {
        var elmnt = document.getElementById("social");
        elmnt.scrollIntoView({
          behavior: 'smooth'
        });
      }}className={'malins-knapp ' + (siteLoaded? 'show' : 'hidden' )}> Get To Know More </p>
  </div>
  )
}

export default Hero;