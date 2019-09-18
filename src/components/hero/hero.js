import React, {useEffect, useState} from 'react'
import './hero.scss'
import Form from '../form/form'
import TextLoop from '../text-loop/text-loop'

function Hero(){

  const [siteLoaded, setLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [array, setArray] = useState(["First ever King of Pong event", "Beer & Food will be Served" , "Save the date!"]);

  

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="hero">
      <div className="left-side">
        <h1 className={'hero-date ' + (siteLoaded? 'show' : 'hidden') }> 23 October</h1>
        <span className={'malin ' + (siteLoaded? 'show' : 'hidden')}></span>
      </div>
      <div className={'right-side ' + (siteLoaded? 'show ' : 'hidden ') + (showForm? 'show-form ' : 'hide-form ')}>
        <div className={'right-side-content'}>
          <TextLoop array={array} interval={7500}/>
        </div>
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