import React from 'react'
import About from './travellerPages/About'
import Header from './homePages/Header'
import Register from './travellerPages/Register'
import Benefit from './travellerPages/Benefit'
import Testimony from './travellerPages/Testimony'
import Assurance from './travellerPages/Assurance'
import Subscribe from './homePages/Subscribe'
import Footer from './homePages/Footer'

function Traveller() {
  return (
    <div>
        <Header />
        <About />
        <Register />
        <Benefit />
        <Testimony />
        <Assurance />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Traveller