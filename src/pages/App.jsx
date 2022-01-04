import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { default as Landing } from '../pages/landing/index'
import { default as Navigation } from '../pages/navigation/index'

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </Router>
  )
}

export default App