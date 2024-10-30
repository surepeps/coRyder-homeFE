import React from 'react'
import ContactHeader from './contactPages/ContactHeader'
import Header from './homePages/Header'
import Content from './contactPages/Content'
import Subscribe from './homePages/Subscribe'
import Footer from './homePages/Footer'

function Contact() {
  return (
    <div>
        <Header />
        <ContactHeader />
        <Content />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Contact