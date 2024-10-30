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


function Home() {
  return (
    <main>
        <Header />
        <About />
        <Register />
        <Benefit />
        <Testimony />
        <Partners />
        <Question />
        <Subscribe />
        <Footer />
    </main>
  )
}

export default Home