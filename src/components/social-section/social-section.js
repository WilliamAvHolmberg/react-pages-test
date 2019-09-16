import React from 'react'
import './social-section.scss'

function SocialSection(){
  return (
    <div className="social-section">
        <div className="teaser">
          {/*}
          <p> Bracket with limited number of players </p>
          <img src="https://www.samplewords.com/docthumbs/home-social-32-thumb.jpg"/> 
          */}
        </div>
        <div className="info">
          <p class="section-title"> Social Event </p>
          <div className="info-row">
            <img style={{height: '150px', marginleft:'40px'}} src="https://image.spreadshirtmedia.com/image-server/v1/mp/designs/13512299,width=178,height=178,version=1496199967/we-go-together-like-beer-and-pizza-relationship.png"/>
            <p className="info-label"> Beer & Food</p>
          </div>
          <div className="info-row" style={{justifyContent: 'flex-end'}}>
            <p className="info-label"> Soundsystem & Spotlights</p>
            <img src="https://cdn.pixabay.com/photo/2017/07/18/17/30/surround-2516480_960_720.png" style={{height: '125px', float: 'right', marginRight: '-10px'}}/>
          </div>
          <div className="info-row">
            <img style={{height: '150px'}} src="https://tablegameshub.com/wp-content/uploads/2017/10/boy-1299876_1280.png"/>
            <p className="info-label"> Warmup around the Table</p>
          </div>
        </div>
    </div>
  )
}

export default SocialSection;