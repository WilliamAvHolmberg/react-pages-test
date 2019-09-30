import React, {useState} from 'react';
import './form.scss'
function SignupForm(){

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const isEnabled = email.length > 0 && name.length > 0 && phone.length > 0;

  console.log(isEnabled);

    return (
      <form action="https://formcarry.com/s/Ch1BYV2BzLV" method="POST" acceptCharset="UTF-8" >


      <input onChange={e => setName(e.target.value)} type="text" name="name" placeholder="Name"/>
      <input onChange={e => setEmail(e.target.value)} type="email" name="email" placeholder="Email"/>
      <input onChange={e => setPhone(e.target.value)} type="text" name="phone" placeholder="Phone"/>
      {<div className="food-pref">
        <p>Questions? Food preferences? Leave us a message!</p>
        <textarea rows={3} cols={40} name="message" placeholder="Gluten, vegetarian etc.."/>
    </div>}
      <div className="radio-wrapper">
        <div className="radio-container">
          <h2>Occupation:</h2>
          <div className="radio-buttons">
            <div className="radio-button">
              <input type="radio" name="occupation" value="it-field" checked/><p>IT-Field</p>
            </div>
            <div className="radio-button">
              <input type="radio" name="occupation" value="school"/><p>School</p>
            </div>
            <div className="radio-button">
              <input type="radio" name="occupation" value="other"/><p>Other</p>
            </div>
          </div>
        </div>
        <div className="radio-container">
          <h2>I want to:</h2>
          <div className="radio-buttons">
            <div className="radio-button">
              <input type="radio" name="event_role" value="competitor" checked/><p>Compete</p>
            </div>
            <div className="radio-button">
              <input type="radio" name="event_role" value="attendee"/><p>Just attend</p>
            </div>
          </div>
        </div>
      </div>
      <input onChange={e => setName(e.target.value)} type="hidden" name="_gotcha"/>

      <button disabled={!isEnabled} className={(isEnabled? 'button enabled' : 'disabled')}> Submit </button>
    </form>
    )
}

export default SignupForm;