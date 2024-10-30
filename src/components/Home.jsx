import React from 'react'
import Header from './homePages/Header'
import About from './homePages/About'
import Register from './homePages/Register'
import Benefit from './homePages/Benefit'
import Testimony from './homePages/Testimony'
import Partners from './homePages/Partners'
import Subscribe from './homePages/Subscribe'
import Footer from './homePages/Footer'
import Question from './homePages/Question'
import AnimatedSection from './AnimatedSection'


function Home() {
  return (
    <main>
      <Header />
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection><Register /></AnimatedSection>
      <AnimatedSection><Benefit /></AnimatedSection>
      <AnimatedSection><Testimony /></AnimatedSection>
      <AnimatedSection><Partners /></AnimatedSection>
      <AnimatedSection><Question /></AnimatedSection>
      <AnimatedSection><Subscribe /></AnimatedSection>
      <Footer />
    </main>
  )
}

export default Home