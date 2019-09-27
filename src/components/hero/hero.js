import React, { useEffect, useState } from 'react'
import './hero.scss'
import TextLoop from '../text-loop/text-loop'
import ReadMoreButton from '../read-more-button/read-more-button'

function Hero () {
  const [siteLoaded, setLoaded] = useState(false)
  const [array] = useState(['The first ever King of Pong', 'Music, Food & Drinks', '23 October'])

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className='section hero'>
      <div className='main'>
        <h1 className='logo'>KING OF PONG</h1>
        <div className={'tagline ' + (siteLoaded ? 'show' : 'hidden')}>
          <h2>MINI TABLE TENNIS<br />CHAMPIONSHIP</h2>
          <h3>FOR THE IT CROWD</h3>
        </div>
        <div className={'divider ' + (siteLoaded ? 'show' : 'hidden')} />
        <div className={'roller ' + (siteLoaded ? 'show ' : 'hidden ')}>
          <TextLoop array={array} interval={3500} />
          <div onClick={() => {
            var elmnt = document.getElementById('sign-up')
            elmnt.scrollIntoView({
              behavior: 'smooth'
            })
          }}className='show-interest-button button'>
            <p style={{ lineHeight: '60px' }}>Sign up Now</p>
          </div>
        </div>
      </div>
      <ReadMoreButton
        targetElement={'social'}
        show={siteLoaded}
        top={100} />
    </div>
  )
}

export default Hero
