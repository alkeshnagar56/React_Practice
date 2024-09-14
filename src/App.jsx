import React from 'react'
import './App.css'
// import Navbar from './Navbar'
// import Footer from './Footer'
// import Header from './header'
// import Info_Section from './Info_Section'
// import Login from './Login'
// import Signup from './signup'
// import ParProps from './ParProps'
// import Usestate from '../Hooks/Usestate'
import ToggleFun from '../Hooks/ToggleFun'
import { OnOff } from '../Hooks/ToggleFun'

const App = () => {
  return (
    <div className='parent'>
        {/* <Login />
        <Signup />
        <Navbar />
        <Header />
        <Info_Section />
        <Footer />
        <ParProps /> */}
        {/* <Usestate /> */}
        <ToggleFun />
        <OnOff />
    </div>
  )
}

export default App