import React from 'react'
import Header from './homePages/Header'
import About from './driverPages/About'
import Regsiter from './driverPages/Regsiter'
import Benefit from './driverPages/Benefit'
import Testimony from './driverPages/Testimony'
import Subscribe from './homePages/Subscribe'
import Footer from './homePages/Footer'
import Assurance from './driverPages/Assurance'

function Driver() {
  return (
    <div>
        <Header />
        <About />
        <Regsiter />
        <Benefit />
        <Testimony />
        <Assurance />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Driver