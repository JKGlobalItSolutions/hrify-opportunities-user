import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  

  return (
    <>
    <Navbar/>
    {/* <Login/> */}
    <Home/>
    <Footer/>
    </>
  )
}

export default App
