import React, {useEffect, useState} from 'react'
import './hero.scss'
import Form from '../form/form'

import useInterval from '../../utils/use-interval'

function Hero(){

  var a = ["The first King of Pong event", "The first blabo" , "BEER N FOOD"]

  const [siteLoaded, setLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [array, setArray] = useState(a);
  useInterval(() => {
    
    let items = [...array];
    items.unshift(items.pop())
    setArray(items);
  }, 10000);
  

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
          <div className="content">
            <h1 className={'hero-desc '}> The first King of Pong event</h1>
            {/*array.map((text,index) =>{
                return (<h1 className={'hero-desc ' + ((index === 0)? 'first ' : 'nein ')} style={{marginTop: (index===0)?'10px': '0px'}}> {text}</h1>)

            })*/}
            
          </div>
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