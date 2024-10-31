import React from 'react'
import Header from './homePages/Header'
import About from './driverPages/About'
import Regsiter from './driverPages/Regsiter'
import Benefit from './driverPages/Benefit'
import Testimony from './homePages/Testimony'
import Subscribe from './homePages/Subscribe'
import Footer from './homePages/Footer'
import Assurance from './driverPages/Assurance'
import AnimatedSection from './AnimatedSection'

function Driver() {
  return (
    <div>
        <Header />
        <AnimatedSection><About /></AnimatedSection>
        <AnimatedSection><Regsiter /></AnimatedSection>
        <AnimatedSection><Benefit /></AnimatedSection>
        <AnimatedSection><Testimony /></AnimatedSection>
        <AnimatedSection><Assurance /></AnimatedSection>
        <AnimatedSection> <Subscribe /></AnimatedSection>
        <Footer />
    </div>
  )
}

export default Driver