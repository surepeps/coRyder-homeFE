import React from 'react'
import About from './travellerPages/About'
import Header from './homePages/Header'
import Register from './travellerPages/Register'
import Benefit from './travellerPages/Benefit'
import Testimony from './homePages/Testimony'
import Assurance from './travellerPages/Assurance'
import Subscribe from './homePages/Subscribe'
import Footer from './homePages/Footer'
import AnimatedSection from './AnimatedSection'

function Traveller() {
  return (
    <div>
        <Header />
        <AnimatedSection><About /></AnimatedSection>
        <AnimatedSection><Register /></AnimatedSection>
        <AnimatedSection><Benefit /></AnimatedSection>
        <AnimatedSection><Testimony /></AnimatedSection>
        <AnimatedSection><Assurance /></AnimatedSection>
        <AnimatedSection><Subscribe /></AnimatedSection>
        <Footer />
    </div>
  )
}

export default Traveller