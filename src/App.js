import React from 'react';
import { Navbar, Foot, Usernav, Expertnav } from './components';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Resources from './pages/Resources/Resources';
import Contact from './pages/Contact/Contact';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import ExpertHome from './pages/ExpertHome/ExpertHome';
import Assessment from './pages/Assessment/Assessment';
import Userhome from './pages/Userhome/Userhome';
import Userserve from './pages/Userserve/Userserve';
import Usercontact from './pages/Usercontact/Usercontact';
import Userabout from './pages/Userabout/Userabout';
import Appointment from './pages/Appointment/Appointment';

export const loginStatus = React.createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('user');  return (
   
   <>
      <loginStatus.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {isLoggedIn ? (
        userType === 'user' ?(
<Usernav /> 
        ): (<Expertnav />)
      ):(
        <Navbar />)}

    <Routes >
    <Route index element = { < Home /> }/> 
    <Route path = '/about' element = { < About /> }/> 
    <Route path = '/Services'element = { < Services /> } /> 
    <Route path = '/Resources' element = { < Resources /> }/> 
    <Route path = '/Contact'element = { < Contact /> }/> 
    <Route path = '/Signup' element = { < Signup /> } /> 
    <Route path = '/Signin' element = { < Signin /> } />
  {userType === 'user' ? (
  <>
  <Route path = '/Assessment' element = { < Assessment /> } />
    <Route path = '/Userhome' element = { < Userhome /> } />
    <Route path = '/Usercontact' element = { < Usercontact /> } />
    <Route path = '/Userabout' element = { < Userabout /> } />
    <Route path = '/Userserve' element = { < Userserve /> } />
  </>  
  ):(
    <>
        <Route path='/Appointment' element = {<Appointment />} />
        <Route path='/ExpertHome' element = {<ExpertHome />} />


    </>
  )
  }
    

    </Routes> 
    <Foot />
    </loginStatus.Provider>
       
    </>
  )
}

export default App







