import React from 'react';
import './start-page.scss';
import Hero from '../../components/hero/hero'
import TournamentSection from '../../components/tournament-section/tournament-section'
import SocialSection from '../../components/social-section/social-section'

function StartPage() {
  return (
    <div className="App">
      <Hero/>
      <TournamentSection/>
      <SocialSection/>
    </div>
  );
}

export default StartPage;
