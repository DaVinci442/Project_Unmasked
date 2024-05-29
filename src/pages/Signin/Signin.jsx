import React, { useContext } from 'react';
import supabase from '../../config/supabaseClient';
import{useRef, useState, useEffect} from 'react';
import { Navbar} from '../../components';
import Ulogo from '../../assets/Ulogo.png';
import blackwoman from '../../assets/blackwoman.jpg';
import { Link , useNavigate} from 'react-router-dom';
import { loginStatus } from '../../App';
import './signin.css';
 
   const Signin = () => {
   const [lemail , setLemail] = useState('');
   const [lpassword, setLpassword] = useState('');
   const {setIsLoggedIn} = useContext(loginStatus);
   const [userType, setUserType] = useState('user');
   let lNavigate = useNavigate()


   const resetForm = () => {
    setLemail('');
    setLpassword('');
   }

   const handleInput = async (event) => {
    event.preventDefault();
try {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: lemail,
    password: lpassword,
  })
  
  if (error){
 throw error
  }
  setIsLoggedIn(true)

  console.log(data)
  if (userType === 'user') {
    lNavigate('/Userhome');
  } else if (userType === 'expert') {
    lNavigate('/ExpertHome');
  }




} catch (error) {
  alert(error)


}
resetForm()
  };

// const handleForgot = async (event) => {
//    event.preventDefault();

//   try {
//     prompt('Enter email used in creating account')
//     const { data, error } = await supabase.auth
//   .resetPasswordForEmail({lemail})
//   alert('checkyour email to reset your password')
//   } catch (error) {
//     alert(error)
//   }
// }


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
        <input value={lemail} onChange={(lemail) => {setLemail(lemail.target.value)}} type='email' placeholder='your email' id='input-email' name='email' /><br/>
        <label htmlFor='password'>Password </label>
        <input value={lpassword} onChange={(lpassword) => {setLpassword(lpassword.target.value)}} type='password' placeholder='your password' id='input-password' name='password' /> 
        <label htmlFor='userType'>User Type</label>
       <select value={userType} onChange={(event) => setUserType(event.target.value)}>
    <option value='user'>User</option>
     <option value='expert'>Health Expert</option>
  </select>
        <button type='submit' >Login</button>
        </form>
        </div>
        <p id='already-login'>Don't have an account? <Link to= '/Signup' id='log'>Signup</Link></p>
        <p id= 'already-login' className = 'forgot'>forgot password?</p>


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