import React from 'react'
import './start-page.scss'
import Hero from '../../components/hero/hero'
import TournamentSection from '../../components/tournament-section/tournament-section'
import SocialSection from '../../components/social-section/social-section'
import WhenWhereSection from '../../components/when-where-section/when-where-section'
import FaqSection from '../../components/faq-section/faq-section'
import SignUpForm from '../../components/sign-up-section/sign-up-section'

function StartPage () {
  return (
    <div className='App'>
      <Hero />
      <SocialSection />
      <WhenWhereSection />
      <TournamentSection />
      <FaqSection />
      <SignUpForm />
    </div>
  )
}

export default StartPage
