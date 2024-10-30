import React from 'react'
import Header from './homePages/Header'
import TermsHeader from './termsPages/TermsHeader'
import Content from './termsPages/Content'
import Subscribe from './homePages/Subscribe'
import Footer from './homePages/Footer'

function Terms() {
  return (
    <div>
        <Header />
        <TermsHeader />
        <Content />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Terms