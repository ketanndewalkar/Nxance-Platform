import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import WhatIsNxance from './components/WhatIsNxance'
import ProblemSection from './components/ProblemSection'
import CoverageAndAudience from './components/CoverageAndAudience'
import ProcessSteps from './components/ProcessSteps'
import CorePrinciples from './components/CorePrinciples'
import TechnologyApproach from './components/TechnologyApproach'
import FounderSection from './components/Founder'
import AccessSection from './components/AccessSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="relative min-h-screen overflow-hidden">
      
      {/* GLOBAL ANIMATED BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-hero-gradient animate-gradient" />

      {/* PAGE CONTENT */}
      <Navbar />
      <Hero />
      <WhatIsNxance/>
      <ProblemSection/>
      <CoverageAndAudience/>
      <ProcessSteps/>
      <CorePrinciples/>
      <TechnologyApproach/>
      <FounderSection/>
      <AccessSection/>
      <FaqSection/>
      <Footer/>
    </div>
    </>
  )
}

export default App
