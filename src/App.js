import React from 'react'
import NavBar from './NavBar'
import MainBanner from './MainBanner'
import './style.css';
import About from './About';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <MainBanner/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
