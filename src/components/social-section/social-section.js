import React from 'react'
import './social-section.scss'
import ReadMoreButton from '../read-more-button/read-more-button'

function SocialSection () {
  return (
    <div id='social' className='section social-section'>
      <div className='content-container'>
        <div className='left-side'>
          <h2 className='section-title'>What</h2>
          <span className={'divider '} />
        </div>
        <div className='right-side'>
          <div className='info-row'>
            <h3 className='info-label'>A Social Gathering & <br />Mini Table Tennis Tournament</h3>
          </div>
          <div className='info-row'>
            <p className='info-text'>
                Enjoy a night of <strong>music</strong>, <strong>food</strong> and <strong>drinks</strong> while meeting new people and <strong>competing</strong> for the grand prize in our first ever tournament!
            </p>
          </div>
        </div>
      </div>
      <ReadMoreButton targetElement={'when-where'} />
    </div>
  )
}

export default SocialSection
