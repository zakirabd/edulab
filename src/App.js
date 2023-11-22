import React, { Component } from 'react'
import Header from './components/header/Header'
import HeaderSection from './components/sections/HeaderSection'
import PromotionsSection from './components/sections/PromotionsSection'
import WhoWeAreSection from './components/sections/WhoWeAreSection'
import AdvantagesSection from './components/sections/AdvantagesSection'
import BenefitsSection from './components/sections/BenefitsSection'
import TrainingSection from './components/sections/TrainingSection'
import TrainerSection from './components/sections/TrainerSection'
import Footer from './components/sections/Footer'

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HeaderSection />
        <PromotionsSection />
        <WhoWeAreSection />
        <AdvantagesSection />
        <BenefitsSection />
        <TrainingSection />
        <TrainerSection />
        <Footer />
      </div>
    )
  }
}

export default App