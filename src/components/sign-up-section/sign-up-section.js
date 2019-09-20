import React from 'react'
import Form from '../form/form'
import './sign-up-section.scss'

function SignUpSection () {
  return (
    <div id='sign-up' className='section sign-up-section'>
      <div className='left-side'>
        <h2 className='section-title'>Sign up</h2>
        <span className={'divider'} />
      </div>
      <div className='right-side'>
        <Form />
      </div>
    </div>
  )
}

export default SignUpSection
