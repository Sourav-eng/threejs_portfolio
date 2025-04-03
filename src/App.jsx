import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <RouterProvider router={router}/>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </main>
  )
}

export default App
