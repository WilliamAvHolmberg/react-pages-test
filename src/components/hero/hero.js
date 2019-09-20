import React, {useEffect, useState} from 'react'
import './hero.scss'
import Form from '../form/form'
import TextLoop from '../text-loop/text-loop'

function Hero(){

  const [siteLoaded, setLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [array, setArray] = useState(["The first ever King of Pong", "Music, Food & Drinks", "asdasd"]);

  

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="section hero">
      <div className="left-side">
        <h1 className={'hero-date ' + (siteLoaded? 'show' : 'hidden') }> 23 October</h1>
        <span className={'divider ' + (siteLoaded? 'show' : 'hidden')}></span>
      </div>
      <div className={'right-side'}>
        <div className={'right-side-content '+ (siteLoaded? 'show ' : 'hidden ') + (showForm? 'show-form ' : 'hide-form ')}>
          <TextLoop array={array} interval={3500}/>
          <div onClick={() => setShowForm(true)}className="show-interest-button button">
            <p>Sign up Now</p>
          </div>
          <div className={'form-side ' + (showForm? 'show-form ': 'hide-form')}>
              <Form/>
              <p className="close button" onClick={() => setShowForm(false)}>
                X
              </p>
          </div>
        </div>
      </div>
      <div className="read-more-button-container">
        <p onClick={() => {
          var elmnt = document.getElementById("social");
          elmnt.scrollIntoView({
            behavior: 'smooth'
          });
        }}className={'read-more-button ' + (siteLoaded? 'show' : 'hidden' )}> Get To Know More </p>
      </div>
  </div>
  )
}

export default Hero;