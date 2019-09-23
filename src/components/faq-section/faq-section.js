import React, {useState} from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import './faq-section.scss'

function FaqSection () {
  const [activeIndex, setActiveIndex] = useState(null);
  var myMap = new Map();
  var test = [{
      question: "What matchballs will be used?",
      answer : "Stiga Perform 40+ (white)"
    },
    { 
      question: "What tables will we be playing on?",
      answer: "4 tables of type X (size) (TODO: ...)"
    },
    {
      question: "What format is used for the tournament?",
      answer: "Groups with 2 players advancing to the knockout stage."
    },
    {
      question: "Will there be any prizes?",
      answer: " (TODO: ...)"
    },
    {
      question: "Who's judging the competition?",
      answer: "In group games, players take turn judging the matches. In the knockout stage, a judge will be provided for you."
    },
    {
      question: "When do I need to arrive?",
      answer: "If you're competing, you need to register at least 30 minutes before the tournament starts. In other words, you need to be there at 17.30."
    },
    {
      question: "Are you using any tournament software?",
      answer: "Yes, Konkuri will be used to draw groups and to generate the knockout tree. (TODO: ...)"
    },
    {
      question: "Do I need to bring a bat?",
      answer: "If you have an ITTF approved table tennis bat, you should bring it. However, there will be a limited number of bats to borrow if you don't have one. (TODO: ...)"
    },
    {
      question: "Can I wear anything I want?",
      answer: "Anything but white is OK. However, we suggest dressing for comfort in your finest sporting outfit."
    },
    {
      question: "Is there an entry fee?",
      answer: "No! We do this for the love of the game and to bring likeminded people together for a night of fun and ping pong."
    },
    {
      question: "Can I bring a friend?",
      answer: "Sure, just make sure they register as an attendee for the event. (TODO: ...)"
    },
    {
      question: "How many sets are played?",
      answer: "Best of 3 sets in group matches and best of 5 in the knockout stage. (TODO: Kolla Konkuri först)"
    },
    {
      question: "Are sets played to 21 like in the good old days?",
      answer: "Sets are played to 11. Players take turn serving 2 serves each. If there is a tie at 10-10, players take turn serving 1 serve each until one player wins the set by 2 points."
    },
    {
      question: "Where can I learn about the rules?",
      answer: (<span>We use the rules of  <a href='http://www.svenskbordtennis.com/' target='_blank'>SBTF</a>  with adjustments for the size and net height of a mini table. <a href='http://www.svenskbordtennis.com/globalassets/svenska-bordtennisforbundet/dokument/tavlingsdokument/2-spelregler.pdf' target='_blank'>You'll find the rules here.</a></span>)
    },
    {
      question: "Is coaching allowed?",
      answer: "Yes, coaching between sets are allowed."
    },
    {
      question: "What about timeouts?",
      answer: "1 timeout per match and player is allowed. A timeout must not last longer than 1 minute."
    }
  ]
  return (
    <div id='faq' className='section faq-section'>
      <div className='left-side'>
        <h2 className='section-title'>FAQ</h2>
        <span className={'divider '} />
      </div>
      <div className='right-side'>
        <Accordion styled>
        
        {test.map((item, index) => {
          return (
            <div>
              <Accordion.Title 
              style={{fontSize: '18px'}}
              active = {activeIndex === index}
              index = {index}
              onClick={() => {
                setActiveIndex(((activeIndex === index)? -1 : index))
              }}
              >
              <Icon name='dropdown'/>
              {item.question}
              </Accordion.Title>
              <Accordion.Content style={{height: 'auto'}} active={activeIndex === index}>
                <p style={{fontSize: '18px'}}>
                  {item.answer}
                </p>
              </Accordion.Content>
            </div>
          )
        })}
      </Accordion>
      </div>
    </div>
  )
}

export default FaqSection
