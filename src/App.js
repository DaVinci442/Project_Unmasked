import React from 'react';
import { Navbar, Foot} from './components';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Advice from './pages/Advice/Advice';
import Contact from './pages/Contact/Contact';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
function App() {
  return (
    <>
       <Navbar />
    <Routes >
    <Route index element = { < Home /> }/> 
    <Route path = '/about' element = { < About /> }/> 
    <Route path = '/Services'element = { < Services /> } /> 
    <Route path = '/Advice' element = { < Advice /> }/> 
    <Route path = '/Contact'element = { < Contact /> }/> 
    <Route path = '/Signup' element = { < Signup /> } /> 
    <Route path = '/Signin' element = { < Signin /> } />
    </Routes> 
    <Foot />
       
    </>
  )
}

export default App







