import React from 'react';
import { Link } from 'react-router-dom';
import Ulogo from '../../assets/Ulogo.png';
import { loginStatus } from '../../App';
import { useContext } from 'react';


const Expertnav = () => {
    const {setIsLoggedIn} = useContext(loginStatus);
    setIsLoggedIn(true)


  return (
    <div className="nav-whole">
    <div className="site-logo">
    <img src={Ulogo} />
    </div>
    <div className="nav-sign-container">
      <nav className="nav-links-container"> 
        <ul>
          <li><Link to= '/Resources'>Resources</Link></li>
          <li><Link to= '/Assessment'>Assessment</Link></li>
          <li><Link to= '/Appointment'>Appointments</Link></li>
        </ul> 
      </nav>
      <div className="signup">
      {/* <p><Link to='/Signin'>Sign in</Link></p>    */}
      {/* <button id='nav-button'><Link to = '/Signup'>Sign up</Link></button> */}
      <button id='nav-button' onClick={{setIsLoggedIn}}><Link to = '/'>Log out</Link></button>
      </div>
    </div>
    </div>
  )
}

export default Expertnav