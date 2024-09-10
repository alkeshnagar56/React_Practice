import React from 'react'
// import Navbar from './Navbar'
import './App.css'
// import Footer from './Footer'
// import Header from './header'
// import Info_Section from './Info_Section'
import Login from './Login'
import Signup from './signup'

const App = () => {
  return (
    <div className='parent'>
      <Login />
      <Signup />
        {/* <Navbar />
        <Header />
        <Info_Section />
        <Footer /> */}
    </div>
  )
}

export default App