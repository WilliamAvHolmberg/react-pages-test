import React, { useState } from 'react'
import './form.scss'
function SignupForm () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const isEnabled = email.length > 0 && name.length > 0 && phone.length > 0

  console.log(isEnabled)

  return (
    <form action='https://formcarry.com/s/Ch1BYV2BzLV' method='POST' acceptCharset='UTF-8' >
      <input onChange={e => setName(e.target.value)} type='text' name='name' placeholder='Name' />
      <input onChange={e => setEmail(e.target.value)} type='email' name='email' placeholder='Email' />
      <input onChange={e => setPhone(e.target.value)} type='text' name='phone' placeholder='Phone' />
      <div className='radio-wrapper'>
        <div className='radio-container'>
          <div className='radio-buttons'>
            <p>I'm:</p>
            <div className='radio-button'>
              <input type='radio' id='occupation-working' name='occupation' value='working' checked /><label for='occupation-working'>Working</label>
            </div>
            <div className='radio-button'>
              <input type='radio' id='occupation-school' name='occupation' value='school' /><label for='occupation-school'>In school</label>
            </div>
            <div className='radio-button'>
              <input type='radio' id='occupation-other' name='occupation' value='other' /><label for='occupation-other'>Other</label>
            </div>
          </div>
        </div>
        <div className='radio-container'>
          <div className='radio-buttons'>
            <p>I want to:</p>
            <div className='radio-button'>
              <input type='radio' name='event_role' id='role-competitor' value='competitor' checked /><label for='role-competitor'>Compete</label>
            </div>
            <div className='radio-button'>
              <input type='radio' name='event_role' id='role-attendee' value='attendee' /><label for='role-attendee'>Just attend</label>
            </div>
          </div>
        </div>
      </div>
      <div className='food-pref'>
        <p>Questions? Food preferences? Leave us a message!</p>
        <textarea rows='3' cols='40' name='message' />
      </div>
      <input onChange={e => setName(e.target.value)} type='hidden' name='_gotcha' />
      <button disabled={!isEnabled} className={(isEnabled ? 'button enabled' : 'disabled')}>Sign me up</button>
    </form>
  )
}

export default SignupForm
