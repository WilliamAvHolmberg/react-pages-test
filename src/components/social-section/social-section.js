import React from 'react'
import './social-section.scss'
import ReadMoreButton from '../read-more-button/read-more-button'

function SocialSection () {
  return (
    <div id='social' className='section social-section'>
      <div className='left-side'>
        <h2 className='section-title'>What</h2>
        <span className={'divider '} />
      </div>
      <div className='right-side'>
        <div className='info-row'>
          <h3 className='info-label'>Social Gathering & <br />Mini Table Tennis Tournament</h3>
        </div>
        <div className='info-row'>
          <p className='info-text'>
              Enjoy a night of <strong>music</strong>, <strong>food</strong> and <strong>drinks</strong> while meeting new people and <strong>competing</strong> for the grand prize in our first ever tournament!
          </p>
        </div>
      </div>
      <ReadMoreButton 
        targetElement={'when-where'}
        show={true}
        top={200}/>
    </div>
  )
}
// <img src='https://blog.joypixels.com/content/images/2019/06/clinking_beer_mugs_1024.gif' style={{ height: '150px', marginLeft: '20px' }} />

export default SocialSection
