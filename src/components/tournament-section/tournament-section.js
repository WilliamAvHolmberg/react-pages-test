import React from 'react'
import './tournament-section.scss'

function TournamentSection(){
  return (
    <div id="tournament" className="section tournament-section">
        <div className="left-side">
          <p className="section-title"> The Tournament </p>
          <span className={'divider '}></span>
        </div>
        <div className="right-side">
          <div className="info-row">
            <p className="info-label"> <strong>- Played on 4 Tables</strong></p>
            <img src="" style={{height: '125px', float: 'right'}}/>
          </div>
          <div className="info-row">
            <img src="" style={{height: '150px'}}/>
            <p className="info-label"> <strong>- Professional match balls</strong></p>
          </div>
          <div className="info-row">
            <img src="" style={{height: '150px'}}/>
            <p className="info-label"> <strong>- Courts with judges tables and scoreboards</strong></p>
          </div>
          <div className="info-row">
            <img src="" style={{height: '150px'}}/>
            <p className="info-label"> <strong>- Prices</strong></p>
          </div>
        </div>
    </div>
  )
}

export default TournamentSection;