import React, { useEffect, useState } from 'react'
import './hero.scss'
import TextLoop from '../text-loop/text-loop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import ReadMoreButton from '../read-more-button/read-more-button'

function Hero () {
  const [siteLoaded, setLoaded] = useState(false)
  const [showForm] = useState(false)
  const [array] = useState(['The first ever King of Pong', 'Music, Food & Drinks', '23 October'])

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className='section hero'>
      <div className='left-side'>
        <div className={'tagline ' + (siteLoaded ? 'show' : 'hidden')}><h1>MINI TABLE TENNIS<br />CHAMPIONSHIP</h1><h2>FOR THE IT CROWD</h2></div>
        <span className={'divider ' + (siteLoaded ? 'show' : 'hidden')} />
      </div>
      <div className={'right-side'}>
        <div className={'right-side-content ' + (siteLoaded ? 'show ' : 'hidden ') + (showForm ? 'show-form ' : 'hide-form ')}>
          <TextLoop array={array} interval={3500} />
          <div onClick={() => {
          var elmnt = document.getElementById('sign-up')
          elmnt.scrollIntoView({
            behavior: 'smooth'
          })
        }}className='show-interest-button button'>
            <p style={{lineHeight: '60px'}}>Sign up Now</p>
          </div>
        </div>
      </div>
      <ReadMoreButton 
        targetElement={'social'}
        show={siteLoaded}
        top={100}/>
    </div>
  )
}

export default Hero
