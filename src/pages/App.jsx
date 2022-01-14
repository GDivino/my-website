import React, { useEffect } from 'react'
import Landing  from '../pages/landing/index'
import About from '../pages/about/index'
import Experience from '../pages/experience/index'
import Projects from '../pages/projects/index'
import Navigation from '../pages/navigation/index'
import Contact from '../pages/contact/index'
import Aos from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    Aos.init({duration: 600})
  }, [])

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