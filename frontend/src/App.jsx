import React from 'react'
import TvTemp from './components/tv/TvTemp'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import CardLayout from './components/cardlayout/CardLayout'

const App = () => {
  return (
    <div>
      <Navbar/>
      <TvTemp/>
      <CardLayout/>
      <Footer/>
      
    </div>
  )
}

export default App
