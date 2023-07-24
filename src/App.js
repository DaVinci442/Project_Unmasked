import React from 'react';
import { Navbar, Welcome, Foot} from './components';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="navbar">
            <Navbar />
        </div>
        <div className='welcome'>
        <Welcome />
        </div>
        <div>
        <Foot />

        </div>
       
    </div>
  )
}

export default App













 {/* <Articles />
        <Services />
        <Advice />
        <Contact />
        <Footer /> */}