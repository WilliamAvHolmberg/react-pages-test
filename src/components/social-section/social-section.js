import React from 'react'
import './social-section.scss'

function SocialSection(){
  return (
    <div id="social" className="social-section">
        <div className="left-side">
          <p className="section-title"> Social Event </p>
          <span className={'malin '}></span>
        </div>
        <div className="right-side">

          <div className="info-row">
            <p className="info-label"> Welcome to our Social Event! </p>
            <img src="https://blog.joypixels.com/content/images/2019/06/clinking_beer_mugs_1024.gif" style={{height: '150px', marginLeft:'20px'}}/>
          </div>
          <p className="info-text">
            We will be serving Beer and Food and 
            for everybodies enjoyment there will be a Soundsystem as well as Spotlights, its going to be a party - to say the least. 
            <br/> Don't forget the Pong Tournament! 
          </p>

          {/*<div className="info-row" style={{justifyContent: 'flex-end'}}>
            <p className="info-label"> Soundsystem & Spotlights</p>
            <img src="" style={{height: '125px', float: 'right', marginRight: '-10px'}}/>
          </div>
          <div className="info-row">
            <img style={{height: '150px'}} src=""/>
            <p className="info-label"> Warmup around the Table</p>
          </div>*/}
        </div>
        <p onClick={() => {
          var elmnt = document.getElementById("tournament");
          elmnt.scrollIntoView({
            behavior: 'smooth'
          });
        }}className={'malins-knapp '}> About The Tournament </p>
    </div>
  )
}

export default SocialSection;