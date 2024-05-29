import React from 'react'
import { useState , useEffect } from 'react';
import { Usernav } from '../../components';
import supabase from '../../config/supabaseClient';
import './usercontact.css';

const Usercontact = () => {

    const [cname , setCname] = useState('');
    const [caddress, setCaddress] = useState('');
    const [cemail , setCemail] = useState('');
    const [cphone , setCphone] = useState('');
    const [csubject , setCsubject] = useState('');
    const [cmessage , setCmessage] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [formError, setFormError] = useState(null)
    
    const resetForm = () => {
      setCname('');
      setCaddress('');
      setCemail('');
      setCphone('');
      setCsubject('');
      setCmessage('');
    };
    
    const handlePhoneInput = (event) => {
      const value = event.target.value;
       
      if (value && !/^\d+$/.test(value)) {
        setPhoneError('Phone number must be an integer.');
      } else {
        setPhoneError('');
      }
    };
    
    const handleCsubmit = async(e) => {
      e.preventDefault()
       
      if(!cname || !cemail || !cmessage) {
       setFormError('Please fill in all required fields correctly !!')
      }
      
    // Prepare the data to be submitted
    const data = {
      name: cname,
      address: caddress,
      email: cemail,
      phone: cphone,
      subject: csubject,
      message: cmessage,
    };
    
    try {
      // Insert the data into the Superbase table
      const { data: newRecord, error } = await supabase
        .from('contactUs')
        .insert([data]);
    
      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted successfully:', newRecord);
        // Reset the form after successful submission
        resetForm();
      }
    } catch (error) {
      console.error('Error inserting data:', error);
    }
    };


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
    {/* form start here */}
    <div className="contact-form">

      <form id='form-contact' onSubmit={handleCsubmit} >
      {formError && <p className='form-error'>{formError}</p>}

    <label htmlFor='name'>Name*</label>
    <input value={cname} onChange={ (cname) => {setCname(cname.target.value)}} type='text' placeholder='Enter your name' required/>

    <label htmlFor='email'>Address </label>
    <input  value={caddress} onChange={(caddress) => {setCaddress(caddress.target.value)}} type='text' placeholder='Enter your address' />
    <div className="email-phone">
      <div className="email">
      <label htmlFor='email'> Email*</label>
      <input value={cemail} onChange={(cemail) => {setCemail(cemail.target.value)}} type='text' placeholder='Enter your phone email' />
     </div>
     <div className="phone">
     <label htmlFor='phone'> Phone </label>
      <input value={cphone} onChange={(cphone) => {setCphone(cphone.target.value)}} type='tel'  onInput={handlePhoneInput} placeholder='Enter your phone number' />
      {phoneError && <p className="phone-error">{phoneError}</p>}
     </div>
      </div> 
      <label htmlFor='subject'>Subject</label>
     <textarea value={csubject} onChange={(csubject) => {setCsubject(csubject.target.value)}} id='contact-subject'></textarea>

     <label htmlFor='message'>Message*</label>
     <textarea value={cmessage} onChange={(cmessage) => setCmessage(cmessage.target.value)} id='contact-message' required></textarea>
   
     <div className="button-subreset">
      <button type='submit' id='sub'>Submit</button>
     <button onClick={resetForm}  type='reset' id='reset' >Reset</button>
      </div>  


      </form>
    </div>
  </div>
</div>

    </>  )
}

export default Usercontact