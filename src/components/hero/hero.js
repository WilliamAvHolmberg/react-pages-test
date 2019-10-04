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
      <div className='content-container'>
        <div className='main'>
          <h1 className='logo'><img src='/img/logo-white.png' alt='King Of Pong - Mini Table Championship for the IT crowd' /></h1>
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
      </div>
      <ReadMoreButton targetElement={'social'} />
    </div>
  )
}

export default Hero
