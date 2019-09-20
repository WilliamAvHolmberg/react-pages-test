import React from 'react'
import './social-section.scss'

function SocialSection(){
  return (
    <div id="social" className="section social-section">
        <div className="left-side">
          <p className="section-title"> What? </p>
          <span className={'divider '}></span>
        </div>
        <div className="right-side">

          <div className="info-row">
            <p className="info-label"> Social Gathering & <br/>Mini Table Tennis Tournament </p>
            <img src="https://blog.joypixels.com/content/images/2019/06/clinking_beer_mugs_1024.gif" style={{height: '150px', marginLeft:'20px'}}/>
          </div>
          <p className="info-text">
            Enjoy a night of <strong>music</strong>, <strong>food</strong> and <strong>drinks</strong> while meeting new people and <strong>compete</strong> for the grand prize in our first ever tournament!
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
        <div className="read-more-button-container">
        <p onClick={() => {
          var elmnt = document.getElementById("social");
          elmnt.scrollIntoView({
            behavior: 'smooth'
          });
        }}className={'read-more-button '}> Get To Know More </p>
      </div>
    </div>
  )
}

export default SocialSection;