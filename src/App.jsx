import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './section/About'
import Projects from './section/Projects'


const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
    </main>
  )
}

export default App
