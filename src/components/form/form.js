import React, { useState } from 'react'
import './form.scss'

function SignupForm () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [occupation, setOccupation] = useState('working')
  const [role, setRole] = useState('competitor')

  const isEnabled = email.length > 0 && name.length > 0 && phone.length > 0

  return (
    <form action='https://formspree.io/xrngbeyx' method='POST' acceptCharset='UTF-8' >
      <input onChange={e => setName(e.target.value)} type='text' name='name' placeholder='Name' />
      <input onChange={e => setEmail(e.target.value)} type='email' name='_replyto' placeholder='Email' />
      <input onChange={e => setPhone(e.target.value)} type='text' name='phone' placeholder='Phone' />
      <div className='radio-wrapper'>
        <div className='radio-container' onChange={e => setOccupation(e.target.value)}>
          <p>I'm:</p>
          <input type='radio' id='occupation-working' name='occupation' value='working' defaultChecked={occupation === 'working'} /><label htmlFor='occupation-working'>Working</label>
          <input type='radio' id='occupation-school' name='occupation' value='school' defaultChecked={occupation === 'school'} /><label htmlFor='occupation-school'>In school</label>
          <input type='radio' id='occupation-other' name='occupation' value='other' defaultChecked={occupation === 'other'} /><label htmlFor='occupation-other'>Other</label>
        </div>
        <div className='radio-container' onChange={e => setRole(e.target.value)}>
          <p>I want to:</p>
          <input type='radio' name='event_role' id='role-competitor' value='competitor' defaultChecked={role === 'competitor'} /><label htmlFor='role-competitor'>Compete</label>
          <input type='radio' name='event_role' id='role-attendee' value='attendee' defaultChecked={role === 'attendee'} /><label htmlFor='role-attendee'>Attend</label>
        </div>
      </div>
      <div className='food-pref'>
        <p>Questions or food preferences? Leave a message!</p>
        <textarea rows='3' cols='40' name='message' />
      </div>
      <input onChange={e => setName(e.target.value)} type='hidden' name='_gotcha' />
      <button disabled={!isEnabled} className={(isEnabled ? 'button enabled' : 'disabled')}>Sign me up</button>
    </form>
  )
}

export default SignupForm
