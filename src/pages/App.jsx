import React, { Component } from 'react'
import Landing  from '../pages/landing/index'
import About from '../pages/about/index'
import Experience from '../pages/experience/index'
import Projects from '../pages/projects/index'
import Navigation from '../pages/navigation/index'
import Contact from '../pages/contact/index'

const App = () => {
  return (
    <div className='app'>
      <Navigation />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App