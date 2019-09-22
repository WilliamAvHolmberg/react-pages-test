import React from 'react'
import './tournament-section.scss'

function TournamentSection () {
  return (
    <div id='tournament' className='section tournament-section'>
      <div className='left-side'>
        <p className='section-title'> The Tournament </p>
        <span className={'divider '} />
      </div>
      <div className='right-side'>
        <div className='info-row'>
          <p className='info-text'>Played on 4 mini tables by Stiga</p>
        </div>
        <div className='info-row'>
          <p className='info-text'>Professional match balls</p>
        </div>
        <div className='info-row'>
          <p className='info-text'>Courts with judges tables and scoreboards</p>
        </div>
        <div className='info-row'>
          <p className='info-text'>Prizes (TODO: ...)</p>
        </div>
      </div>
      <div className='read-more-button-container'>
        <p onClick={() => {
          var elmnt = document.getElementById('faq')
          elmnt.scrollIntoView({
            behavior: 'smooth'
          })
        }}className={'read-more-button '}>Get To Know More</p>
      </div>
    </div>
  )
}

export default TournamentSection
