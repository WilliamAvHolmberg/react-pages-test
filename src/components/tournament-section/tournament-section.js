import React from 'react'
import './tournament-section.scss'
import ReadMoreButton from '../read-more-button/read-more-button'

function TournamentSection () {
  return (
    <div id='tournament' className='section tournament-section'>
      <div className='content-container'>
        <div className='left-side'>
          <h2 className='section-title'> The Tournament </h2>
          <span className={'divider '} />
        </div>
        <div className='right-side'>
          <div className='info-row'>
            <p className='info-text'>For players of all levels</p>
          </div>
          <div className='info-row'>
            <p className='info-text'>Played on 4 mini tables by Stiga</p>
          </div>
          <div className='info-row'>
            <p className='info-text'>Match balls used by professionals</p>
          </div>
          <div className='info-row'>
            <p className='info-text'>Courts with judges tables and scoreboards</p>
          </div>
          <div className='info-row'>
            <p className='info-text'><strong>Be the first ever King of Pong</strong></p>
          </div>
        </div>
      </div>
      <ReadMoreButton targetElement={'faq'} />
    </div>
  )
}

export default TournamentSection
