import React from 'react'
import './when-where-section.scss'
import ReadMoreButton from '../read-more-button/read-more-button'

function WhenWhereSection () {
  return (
    <div id='when-where' className='section when-where-section'>
      <div className='left-side'>
        <h2 className='section-title'>When & Where</h2>
        <span className={'divider '} />
      </div>
      <div className='right-side'>
        <div className='info-row'>
          <p className='info-text'>Date: <strong>23 October, 2019</strong></p>
        </div>
        <div className='info-row'>
          <p className='info-text'>Time: <strong>18:00</strong></p>
        </div>
        <div className='info-row'>
          <p className='info-text'>Address: <strong>Första Långgatan 22, Gothenburg</strong></p>
        </div>
        <div className='info-row'>
          <p className='info-text'>Place: <strong>The office of Dotnet Mentor on the 7th floor</strong></p>
        </div>
      </div>
      <ReadMoreButton 
        targetElement={'tournament'}
        show={true}
        top={300}/>
    </div>
  )
}

export default WhenWhereSection
