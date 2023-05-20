import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import Footer from './components/footer/footer'
import Navbar from './components/Navbar/Navbar'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <ItemListConteiner greeting={'WELCOME'}/>
    <Footer />
    </>
  )
}

export default App
