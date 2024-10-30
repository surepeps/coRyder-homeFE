import React from 'react'
import ContactHeader from './contactPages/ContactHeader'
import Header from './homePages/Header'
import Content from './contactPages/Content'
import Subscribe from './homePages/Subscribe'
import Footer from './homePages/Footer'
import AnimatedSection from './AnimatedSection'

function Contact() {
  return (
    <div>
        <Header />
        <AnimatedSection><ContactHeader /></AnimatedSection>
        <AnimatedSection><Content /></AnimatedSection>
        <AnimatedSection><Subscribe /></AnimatedSection>
        <Footer />
    </div>
  )
}

export default Contact