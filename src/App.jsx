import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './section/About'


const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero/>
      <About/>
    </main>
  )
}

export default App
