import React from 'react'
import Landing  from '../pages/landing/index'
import About from '../pages/about/index'
import Experience from '../pages/experience/index'
import Projects from '../pages/projects/index'
import Navigation from '../pages/navigation/index'

const App = () => {
  return (
    <div className='app'>
      <Navigation />
      <Landing />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default App