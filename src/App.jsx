import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import './App.css'
// import ConnectAI from './components/ConnectAi'
// import Footer from './components/Footer'
import FooterWithConnect from './components/FooterWithConnect'
import HeroSection from './components/HeroSection'
import LaunchSteps from './components/LaunchSteps'
import Navbar from './components/NavBar'
import ResultsSection from './components/ResultsSection'
import TestimonialSection from './components/TestimonialSection'
import TrustedBy from './components/TrustedBy'
import WhyChooseUs from './components/WhyChooseUs'

gsap.registerPlugin(ScrollToPlugin)

function App() {
  useEffect(() => {
    // Enable smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href')
        if (href !== '#') {
          e.preventDefault()
          gsap.to(window, {
            scrollTo: {
              y: href,
              autoKill: false
            },
            duration: 1.5,
            ease: 'power2.inOut'
          })
        }
      })
    })
  }, [])

  return (
    <div className=''>
      <HeroSection />
      <Navbar />
      <TrustedBy />
      <WhyChooseUs />
      <LaunchSteps />
      <TestimonialSection />
      <ResultsSection />
      {/* <ConnectAI /> */}
      {/* <Footer /> */}
      <FooterWithConnect />
    </div>
  )
}

export default App
