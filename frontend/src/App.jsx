import React from 'react'
import GridControl from './components/GridControl'
import TV from './components/tv/Tv'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import CardLayout from './components/cardlayout/CardLayout'

const App = () => {
  return (
    <div>
      <Navbar/>
      <TV/>
      <CardLayout/>
      <Footer/>
      
    </div>
  )
}

export default App
