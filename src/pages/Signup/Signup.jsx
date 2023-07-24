import React from 'react';
import{useRef, useState, useEffect} from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Foot } from '../../components';
import Ulogo from '../../assets/Ulogo.png';
import blackwoman from '../../assets/blackwoman.jpg';
import './signup.css';

//  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/register';
 
   const Signup = () => {
   const [email , setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [name, setName] = useState('')

   const handleInput = (em) =>   {
    em.preventDefault();
    console.log(email , password, name)
   }
  return (
    <>
<div className="navbar">
            <Navbar />
        </div> 

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

<h4>"Your partner in mental health and well-being."</h4>

      {/*  form starts here*/}
      <div className="input-form">
        <div className="form-cover">
        <form onSubmit={handleInput}>
        <label htmlFor='name'>Fullname </label>
        <input value={name}  onChange={(txt) =>  {setName(txt.target.value)}} type='text' placeholder='your full name' id='input-name' name='text' /><br/>
        <label htmlFor='email'>Email </label>
        <input value={email} onChange={(em) => {setEmail(em.target.value)}} type='email' placeholder='your email' id='input-email' name='email' />
        <label htmlFor='password'>Password </label>
        <input value={password} onChange={(pass) => {setPassword(pass.target.value)}} type='password' placeholder='your password' id='input-password' name='password' /> 
        <button type='submit'>Signup</button>
        </form>
        </div>
        <p id='already-login'>Already have an account? Login here</p>
      </div>
      </div> 
    </div>
   </div>
   <div className="cube2"></div>
 </div>
</div>
<div>
<Foot />

</div>

</>


         )
}

export default Signup