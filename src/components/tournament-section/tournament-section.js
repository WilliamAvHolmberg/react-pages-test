import React from 'react'
import './tournament-section.scss'

function TournamentSection(){
  return (
    <div id="tournament" className="tournament-section">
        <div className="left-side">
          <p className="section-title"> The Tournament </p>
          <span className={'malin '}></span>
        </div>
        <div className="right-side">
          <div className="info-row">
            <img src="" style={{height: '150px'}}/>
            <p className="info-label"> Official Matchballs</p>
          </div>
          <div className="info-row">
            <p className="info-label"> Borrow or bring your own certified Racket</p>
            <img src="" style={{height: '125px', float: 'right'}}/>
          </div>
          <div className="info-row">
            <img src="" style={{height: '150px'}}/>
            <p className="info-label"> Lorum Ipsum</p>
          </div>
        </div>
    </div>
  )
}

export default TournamentSection;