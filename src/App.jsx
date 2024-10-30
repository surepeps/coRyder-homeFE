import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Terms from './components/Terms'
import Contact from './components/Contact'
import Traveller from './components/Traveller'
import Driver from './components/Driver'
import Home from './components/home'

function App() {

  return (
    <main>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/driver" element={<Driver />} />
      <Route path="/traveller" element={<Traveller />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      </Routes>
    </main>
  )
}

export default App
