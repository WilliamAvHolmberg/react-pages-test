import React from 'react'
import './when-where-section.scss'

function WhenWhereSection(){
  return (
    <div id="when-where" className="section when-where-section">
        <div className="left-side">
          <p className="section-title"> When & Where </p>
          <span className={'divider '}></span>
        </div>
        <div className="right-side">
          <div className="info-row">
            <p className="info-label"> Time: <strong>18:00</strong></p>
            <img src="" style={{height: '125px', float: 'right'}}/>
          </div>
          <div className="info-row">
            <img src="" style={{height: '150px'}}/>
            <p className="info-label"> Date: <strong>23 October</strong></p>
          </div>
          <div className="info-row">
            <img src="" style={{height: '150px'}}/>
            <p className="info-label"> Address: <strong>Första Långgatan 22, Gothenburg</strong></p>
          </div>
          <div className="info-row">
            <img src="" style={{height: '150px'}}/>
            <p className="info-label"> Place: <strong>The office of Dotnet Mentor on the 7th floor</strong></p>
          </div>
        </div>
    </div>
  )
}

export default WhenWhereSection;