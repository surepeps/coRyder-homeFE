import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import Terms from './components/Terms'
import Contact from './components/Contact'
import Traveller from './components/Traveller'
import Driver from './components/Driver'
import Home from './components/Home'
import { ModalService } from './components/context/ModalService';
import { LoadingProvider  } from './components/context/LoadingContext';
import SureModal from './components/resources/SureModal';

function App() {
  

  return (
    <LoadingProvider>
      <ModalService>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/driver" element={<Driver />} />
            <Route path="/traveller" element={<Traveller />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>

          <SureModal /> 
        </main>
      </ModalService>
    </LoadingProvider>
  )
}

export default App