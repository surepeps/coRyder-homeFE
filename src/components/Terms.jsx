import React from 'react'
import Header from './homePages/Header'
import TermsHeader from './termsPages/TermsHeader'
import Content from './termsPages/Content'
import Subscribe from './homePages/Subscribe'
import Footer from './homePages/Footer'
import AnimatedSection from './AnimatedSection'

function Terms() {
  return (
    <div>
        <Header />
        <AnimatedSection><TermsHeader /></AnimatedSection>
        <AnimatedSection><Content /></AnimatedSection>
        <AnimatedSection><Subscribe /></AnimatedSection>
        <Footer />
    </div>
  )
}

export default Terms