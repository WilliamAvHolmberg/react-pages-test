import React from 'react'
import './faq-section.scss'

function FaqSection () {
  return (
    <div id='faq' className='section faq-section'>
      <div className='left-side'>
        <h2 className='section-title'>FAQ</h2>
        <span className={'divider '} />
      </div>
      <div className='right-side'>
        <div className='info-row'>
          <h3 className='info-label'>What matchballs will be used?</h3>
          <p className='info-text'>Stiga Perform 40+ (white)</p>
        </div>
        <div className='info-row'>
          <h3 className='info-label'>What tables will we be playing on?</h3>
          <p className='info-text'>4 tables of type X (size) (TODO: ...)</p>
        </div>
        <div className='info-row'>
          <h3 className='info-label'>What format is used for the tournament?</h3>
          <p className='info-text'>Groups with 2 players advancing to the knockout stage.</p>
        </div>
        <div className='info-row'>
          <h3 className='info-label'>Will there be any prizes?</h3>
          <p className='info-text'>(TODO: ...)</p>
        </div>
        <div className='info-row'>
          <h3 className='info-label'>Who's judging the competition?</h3>
          <p className='info-text'>In group games, players take turn judging the matches. In the knockout stage, a judge will be provided for you.</p>
        </div>
        <div className='info-row'>
          <h3 className='info-label'>When do I need to arrive?</h3>
          <p className='info-text'>If you're competing, you need to register at least 30 minutes before the tournament starts. In other words, you need to be there at 17.30.</p>
        </div>
        <div className='info-row'>
          <h3 className='info-label'>Are you using any tournament software?</h3>
          <p className='info-text'>Yes, Konkuri will be used to draw groups and to generate the knockout tree. (TODO: ...)</p>
        </div>
        <div className='info-row'>
          <h3 className='info-label'>Do I need to bring a bat?</h3>
          <p className='info-text'>If you have an ITTF approved table tennis bat, you should bring it. However, there will be a limited number of bats to borrow if you don't have one. (TODO: ...)</p>
        </div>
        <div className='info-row'>
          <h3 className='info-label'>Can I wear anything I want?</h3>
          <p className='info-text'>Anything but white is OK. However, we suggest dressing for comfort in your finest sporting outfit.</p>
        </div>
        <div className='info-row'>
          <h3 className='info-label'>Is there an entry fee?</h3>
          <p className='info-text'>No! We do this for the love of the game and to bring likeminded people together for a night of fun and ping pong.</p>
        </div>
        <div className='info-row'>
          <h3 className='info-label'>Can I bring a friend?</h3>
          <p className='info-text'>Sure, just make sure they register as an attendee for the event. (TODO: ...)</p>
        </div>
        <div className='info-row'>
          <h3 className='info-label'>How many sets are played?</h3>
          <p className='info-text'>Best of 3 sets in group matches and best of 5 in the knockout stage. (TODO: Kolla Konkuri först)</p>
        </div>
        <div className='info-row'>
          <h3 className='info-label'>Are sets played to 21 like in the good old days?</h3>
          <p className='info-text'>Sets are played to 11. Players take turn serving 2 serves each. If there is a tie at 10-10, players take turn serving 1 serve each until one player wins the set by 2 points.</p>
        </div>
        <div className='info-row'>
          <h3 className='info-label'>Where can I learn about the rules?</h3>
          <p className='info-text'>We use the rules of <a href='http://www.svenskbordtennis.com/' target='_blank'>SBTF</a> with adjustments for the size and net height of a mini table. <a href='http://www.svenskbordtennis.com/globalassets/svenska-bordtennisforbundet/dokument/tavlingsdokument/2-spelregler.pdf' target='_blank'>You'll find the rules here.</a></p>
        </div>
        <div className='info-row'>
          <h3 className='info-label'>Is coaching allowed?</h3>
          <p className='info-text'>Yes, coaching between sets are allowed.</p>
        </div>
        <div className='info-row'>
          <h3 className='info-label'>What about timeouts?</h3>
          <p className='info-text'>1 timeout per match and player is allowed. A timeout must not last longer than 1 minute.</p>
        </div>
      </div>
    </div>
  )
}

export default FaqSection
