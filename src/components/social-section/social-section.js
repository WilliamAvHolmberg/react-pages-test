import React from 'react'
import './social-section.scss'
import ReadMoreButton from '../read-more-button/read-more-button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

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
          <div className='info-row'>
            <p className='info-text'>
              Check out our facebook event for news and updates.<br /><br />
              <a href='https://www.facebook.com/events/2427690890842280/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faFacebookSquare} style={{ marginRight: '5px' }} /> event</a>
              &nbsp;&nbsp;&nbsp;
              <a href='http://fb.me/kingofpongsweden' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faFacebookSquare} style={{ marginRight: '5px' }} /> page</a>
            </p>
          </div>
        </div>
      </div>
      <ReadMoreButton targetElement={'when-where'} />
    </div>
  )
}

export default SocialSection
