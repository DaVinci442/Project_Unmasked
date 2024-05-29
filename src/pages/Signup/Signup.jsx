import React from 'react';
import supabase from '../../config/supabaseClient';
import{useRef, useState, useEffect} from 'react';
import Ulogo from '../../assets/Ulogo.png';
import blackwoman from '../../assets/blackwoman.jpg';
import './signup.css';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components';
 
   const Signup = () => {

   const [semail , setSemail] = useState('');
   const [spassword, setSpassword] = useState('');
   const [sname, setSname] = useState('');

   const resetForm = () => {
    setSname('');
    setSemail('');
    setSpassword('');
   }

   const handleSignup = async (event) => {
    event.preventDefault();

try {
  
  const { data, error } = await supabase.auth.signUp(
    {
      email: semail,
      password: spassword,
      options: {
        data: {
          fullname: sname,
  
        }
      }
    }
  )
  alert('Check your email for verification link')
  resetForm()

} catch (error) {
  alert(error)
}
   
  };

  

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

<h4>"Your partner in mental health and well-being."</h4>

      {/*  form starts here*/}
      <div className="input-form">
        <div className="form-cover">
        <form onSubmit={handleSignup} id='form-signup'>
        <label htmlFor='name'>Fullname </label>
        <input value={sname}  onChange={(sname) =>  {setSname(sname.target.value)}} type='text' placeholder='your full name' id='input-name' name='text' /><br/>
        <label htmlFor='email'>Email </label>
        <input value={semail} onChange={(semail) => {setSemail(semail.target.value)}} type='email' placeholder='your email' id='input-email' name='email' />
        <label htmlFor='password'>Password </label>
        <input value={spassword} onChange={(spassword) => {setSpassword(spassword.target.value)}} type='password' placeholder='your password' id='input-password' name='password' /> 
        <button type='submit' >Signup</button>
        </form>
        </div>
        <p id='already-login'>Already have an account? <Link to= '/Signin' id='log'>Login</Link> </p>
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

export default Signup