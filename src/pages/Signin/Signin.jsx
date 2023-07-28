import React from 'react';
import{useRef, useState, useEffect} from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Foot, Navbar } from '../../components';
import Ulogo from '../../assets/Ulogo.png';
import blackwoman from '../../assets/blackwoman.jpg';
import './signin.css';

//  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/register';
 
   const Signin = () => {
   const [email , setEmail] = useState('');
   const [password, setPassword] = useState('');
   const handleInput = (em) =>   {
    em.preventDefault();
    console.log(email , password)
   }
  return (
    <>
 <div className="signin-whole">
 <div className="cube-whole">
   <div className="cube1"></div>
   <div className="signbox">
    <div className="input-img">
      <img src={blackwoman} />
    </div>
    <div className="input-whole">
      <div className="input-holder">
      <div className="input-logo">
        <img src={Ulogo} alt='logo' />
      </div>
      <div className="input-form">
        <div className="form-cover">
        <form onSubmit={handleInput} id='form-signin'>
        <label htmlFor='email'>Email </label>
        <input value={email} onChange={(em) => {setEmail(em.target.value)}} type='email' placeholder='your email' id='input-email' name='email' /><br/>
        <label htmlFor='password'>Password </label>
        <input value={password} onChange={(pass) => {setPassword(pass.target.value)}} type='password' placeholder='your password' id='input-password' name='password' /> 
        <button type='submit' cur>Login</button>
        </form>
        </div>
        <p id='already-login'>Don't have an account? Signup here</p>

      </div>
      </div>
    </div>
   </div>
   <div className="cube2"></div>
 </div>
</div>

</>


         )
}

export default Signin