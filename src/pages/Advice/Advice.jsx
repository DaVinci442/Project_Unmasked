import React from 'react'
import { Link } from 'react-router-dom';
import Ulogo from '../../assets/Ulogo.png';
import './advice.css'

const Advice = () => {
  return (
<div className="nav-whole">
      <div className="site-logo">
      <img src={Ulogo} />
      </div>
      <div className="nav-sign-container">
        <nav className="nav-links-container"> 
          <ul>
            <li><Link to= '/'>Home</Link></li>
            <li><Link to= '/Services'>Services</Link></li>
            <li><Link to= '/Advice'>Advice</Link></li>
            <li><Link to= '/About'>About</Link></li>
            <li><Link to= '/Contact'>Contact</Link></li>
          </ul>
        </nav>
        <div className="signup">
        <p><Link to='/'>Sign in</Link></p>
        <button><Link to = '/signup'>Sign up</Link></button>
        </div>
      </div> 
      </div> )
}

export default Advice