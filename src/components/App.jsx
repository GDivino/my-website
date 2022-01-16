import React, { useEffect } from 'react'
import Landing  from '../components/landing/index'
import About from '../components/about/index'
import Experience from '../components/experience/index'
import Projects from '../components/projects/index'
import Navigation from '../components/navigation/index'
import Contact from '../components/contact/index'
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