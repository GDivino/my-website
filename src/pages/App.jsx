import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Landing  from '../pages/landing/index'
import About from '../pages/about/index'
import Navigation from '../pages/navigation/index'

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App