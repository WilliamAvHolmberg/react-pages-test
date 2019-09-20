import React from 'react'
import './when-where-section.scss'

function WhenWhereSection () {
  return (
    <div id='when-where' className='section when-where-section'>
      <div className='left-side'>
        <h2 className='section-title'>When & Where</h2>
        <span className={'divider '} />
      </div>
      <div className='right-side'>
        <div className='info-row'>
          <p className='info-label'>Time: <strong>18:00</strong></p>
        </div>
        <div className='info-row'>
          <p className='info-label'>Date: <strong>23 October</strong></p>
        </div>
        <div className='info-row'>
          <p className='info-label'>Address: <strong>Första Långgatan 22, Gothenburg</strong></p>
        </div>
        <div className='info-row'>
          <p className='info-label'>Place: <strong>The office of Dotnet Mentor on the 7th floor</strong></p>
        </div>
      </div>
    </div>
  )
}

export default WhenWhereSection
