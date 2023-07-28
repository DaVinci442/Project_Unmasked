import React from 'react';
import {Navbar , Foot} from '../../components';
import './contact.css';

const Contact = () => {
  return (
    <>
{/* contact card section */}
<div className="contact-section">
  <div className="contact-outline">
    <div className="contact-details">
    <h3>Contact Us</h3>
    <p>Accra-Tema Motorway, Accra, Ghana</p>
    <p>(+233)-20-156-1474</p>
    </div>
    <div className="contact-form">
      <form id='form-contact'>
    <label htmlFor='name'>Name*</label>
    <input  type='text' placeholder='Enter your name' required/>

    <label htmlFor='email'>Address </label>
    <input type='text' placeholder='Enter your address' />
    <div className="email-phone">
      <div className="email">
      <label htmlFor='email'> Email*</label>
      <input type='text' placeholder='Enter your phone email' />
     </div>
     <div className="phone">
     <label htmlFor='phone'> Phone </label>
      <input type='tel' placeholder='Enter your phone number' />
     </div>
      </div> 
      <label htmlFor='subject'>Subject</label>
     <textarea id='contact-subject'></textarea>
     <label htmlFor='message'>Message*</label>
     <textarea id='contact-message' required></textarea>
   
     <div className="button-subreset">
      <button type='submit' id='sub'>Submit</button>
     <button type='reset' id='reset' >Reset</button>
      </div> 


      </form>
    </div>
  </div>
</div>

    </>
  )
}

export default Contact