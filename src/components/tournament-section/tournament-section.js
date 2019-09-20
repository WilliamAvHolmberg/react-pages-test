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
          <p className='info-label'>Played on 4 mini tables by Stiga</p>
        </div>
        <div className='info-row'>
          <p className='info-label'>Professional match balls</p>
        </div>
        <div className='info-row'>
          <p className='info-label'>Courts with judges tables and scoreboards</p>
        </div>
        <div className='info-row'>
          <p className='info-label'>Winner, winner, ping pong dinner</p>
        </div>
      </div>
    </div>
  )
}

export default TournamentSection
