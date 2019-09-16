import React from 'react'
import './tournament-section.scss'

function TournamentSection(){
  return (
    <div className="tournament-section">
        <div className="teaser">
          {/*}
          <p> Bracket with limited number of players </p>
          <img src="https://www.samplewords.com/docthumbs/home-tournament-32-thumb.jpg"/> 
          */}
        </div>
        <div className="info">
          <p class="section-title"> The Tournament </p>
          <div className="info-row">
            <img src="https://cdn.shopify.com/s/files/1/0114/5359/5705/products/10pcs-bag-Professional-Table-Tennis-Ball-40mm-Diameter-2-9g-3-Star-Ping-Pong-Balls-for_9dffba58-dc41-44e3-be29-b90fb3410342.jpg?v=1539776114" style={{height: '150px'}}/>
            <p className="info-label"> Official Matchballs</p>
          </div>
          <div className="info-row" style={{justifyContent: 'flex-end'}}>
            <p className="info-label"> Borrow or bring your own certified Racket</p>
            <img src="https://www.picclickimg.com/00/s/MTAwMFgxMDAw/z/Xf4AAOSwOwJdIeTh/$_12.PNG?set_id=880000500F" style={{height: '125px', float: 'right'}}/>
          </div>
          <div className="info-row">
            <img src="https://via.placeholder.com/150" style={{height: '150px', marginLeft:'90px'}}/>
            <p className="info-label"> Lorum Ipsum</p>
          </div>
        </div>
    </div>
  )
}

export default TournamentSection;