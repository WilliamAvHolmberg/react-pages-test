import React, { useState } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import './faq-section.scss'

function FaqSection () {
  const [activeIndex, setActiveIndex] = useState(null)
  var test = [
    {
      question: 'Who\'s this event for for?',
      answer: 'Everyone! Of all genders, ages and personalities.'
    },
    {
      question: 'Can I bring a friend?',
      answer: 'Sure, just make sure they register as an attendee for the event.'
    },
    {
      question: 'Is there an entry fee?',
      answer: 'No! We do this for the love of the game and to bring likeminded people together for a night of fun and ping pong.'
    },
    // {
    //   question: 'Will there be any prizes?',
    //   answer: ' TBA'
    // },
    {
      question: 'When do I need to arrive?',
      answer: "If you're competing, you need to register at least 30 minutes before the tournament starts. In other words, you need to be there at 17.30."
    },
    {
      question: 'Do I need to bring a bat?',
      answer: (<span>If you have a bat with <a href='https://ittf.cdnomega.com/eu/2019/05/LARC-2019A-FINAL.pdf' target='_blank'>ITTF approved rubbers</a>, you should bring it. However, there will be a limited number of bats to borrow if you don't have one.</span>)
    },
    {
      question: 'Can I wear anything I want?',
      answer: 'Anything but white is OK. However, we suggest dressing for comfort in your finest sporting outfit.'
    },
    {
      question: 'What match balls will be used?',
      answer: 'Stiga Perform 40+ (white)'
    },
    {
      question: 'Where can I learn about the rules?',
      answer: (<span>We use the rules of <a href='http://www.svenskbordtennis.com/' target='_blank'>SBTF</a>  with adjustments for the size and net height of a mini table. <a href='http://www.svenskbordtennis.com/globalassets/svenska-bordtennisforbundet/dokument/tavlingsdokument/2-spelregler.pdf' target='_blank'>You'll find the rules here.</a></span>)
    },
    {
      question: 'What kind of tables will we be playing on?',
      answer: 'TBA'
    },
    {
      question: 'What format is used for the tournament?',
      answer: 'Our goal is to play in groups of 4 with 2 players advancing to a knockout stage. This might change depnding on the number of entries.'
    },
    {
      question: "Who's judging the competition?",
      answer: 'In group games, players take turn judging the matches. In the knockout stage, a judge will be provided for you.'
    },
    {
      question: 'How many sets are played?',
      answer: 'Best of 3 sets in group matches and best of 5 in the knockout stage.'
    },
    {
      question: 'Are sets played to 21 like in the good old days?',
      answer: 'Sets are played to 11. Players take turn serving 2 serves each. If there is a tie at 10-10, players take turn serving 1 serve each until one player wins the set by 2 points.'
    },
    {
      question: 'Is coaching allowed?',
      answer: 'Yes, coaching between sets are allowed.'
    },
    {
      question: 'What about timeouts?',
      answer: '1 timeout per match and player is allowed. A timeout must not last longer than 1 minute.'
    },
    {
      question: 'Are you using any tournament software?',
      answer: (<span>Yes, <a href='http://www.konkuri.com/' target='_blank'>Konkuri</a> will be used to draw groups and to generate the knockout tree.</span>)
    },
    {
      question: 'Who is Dotnet Mentor?',
      answer: (<span>We are an IT consulting and product development company based in Gothenburg. Read more about us at <a href='http://dotnetmentor.se/' target='_blank'>dotnetmentor.se</a>.</span>)
    },
    {
      question: 'What if I need to cancel?',
      answer: (<span><strong>Please let us know as soon as possible if you're unable to attend.</strong> This will free up spots for others to attend and will help keep food waste to a minimum. Send an email to <a href='mailto:info@dotnetmentor.se?subject=King Of Pong - Cancellation'>info@dotnetmentor.se</a> or drop us a text at <i>070-2969650</i>.</span>)
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
                  active={activeIndex === index}
                  index={index}
                  onClick={() => {
                    setActiveIndex(((activeIndex === index) ? -1 : index))
                  }}>
                  <Icon name='dropdown' />
                  {item.question}
                </Accordion.Title>
                <Accordion.Content style={{ height: 'auto' }} active={activeIndex === index}>
                  <p>
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
