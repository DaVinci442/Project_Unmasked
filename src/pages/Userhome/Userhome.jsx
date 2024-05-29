
import React from 'react'
import { useState } from 'react';
import supabase from '../../config/supabaseClient';
import { Navbar } from '../../components';
import './userhome.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import hands from '../../assets/hands.jpg'
import ebonyhug from '../../assets/ebonyhug.jpg';

const Userhome = () => {


  const [showBiodataForm, setShowBiodataForm] = useState(false);
  const [showHistoryForm, setShowHistoryForm] = useState(false);

  const [bioData, setBioData] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    age: '',
    contactNumber: '',
    emailAddress: '',
    address: '',
    emergencyContactName: '',
    emergencyContactNumber: '',
  });

  const [mentalHealthHistory, setMentalHealthHistory] = useState({
    currentCondition: '',
    treatmentHistory: '',
    medicationHistory: '',
    familyHistory: '',
    lifeEvents: '',
    currentSymptoms: '',
    hospitalizationHistory: '',
    suicidalThoughts: ''
  });

  const resetForm = () => {
    mentalHealthHistory.currentCondition('')
    mentalHealthHistory.treatmentHistory('')
    mentalHealthHistory.medicationHistory('')
    mentalHealthHistory.familyHistory('')
    mentalHealthHistory.lifeEvents('')
    mentalHealthHistory.currentSymptoms('')
    mentalHealthHistory.hospitalizationHistory('')
    mentalHealthHistory.suicidalThoughts('')
    bioData.fullName('')
    bioData.gender('')
    bioData.dateOfBirth('')
    bioData.age('')
    bioData.contactNumber('')
    bioData.emailAddress('')
    bioData.address('')
    bioData.emergencyContactName('')
    bioData.emergencyContactNumber('')
  }

  let talkExpert = useNavigate()

  const handleBiodataChange = (e) => {
    setBioData({ ...bioData, [e.target.name]: e.target.value });
  };

  const handleHistoryChange = (e) => {
    setMentalHealthHistory({ ...mentalHealthHistory, [e.target.name]: e.target.value });
  };

  const handleBiodataSubmit = (e) => {
    e.preventDefault();
    setShowBiodataForm(false);
    setShowHistoryForm(true);
  };

  const handleHistorySubmit = async (e) => {
    e.preventDefault();
    setShowHistoryForm(false);
    try {
      const { data, error } = await supabase.from('userBioHistoryData').insert([
        { ...bioData, ...mentalHealthHistory }
        
      ]);
      if (error) {
        console.error('Error inserting data:', error);
        
      } else {
        console.log('Data inserted successfully:', data);
        talkExpert('/Appointment')
        resetForm()
        // Redirect to appointment page
      }
    } catch (error) {
      console.error('Error inserting data:', error);
      // Handle error case
    }
    
  };


  return (
    <>
    

    <div>

  
    {/* first section starts here */}

    <div className="firstw-section-user">
   
    <div className="first-section-image">
      <img src={hands} />
    </div>

    <div className='w-container'>
      <div className="wmessage-user">
        <p>    
        At <span>Un</span>masked, we believe in the power of connection, knowledge, and professional guidance. We offer a wealth of resources, tools, and a caring community to help you navigate life's challenges and nurture your mental well-being.

Remember, you're never alone on this journey. Our team of experts is just a click away. If you ever need personalized guidance or someone to talk to.
        </p>
      </div>
    </div>

    </div>


{/* second section starts here - Noam Shpancer  */} 
    <div className="second-section-user">

    <div className='ss-text-whole'>
      <div className="ss-message-user">
         <p>Whether you're seeking practical advice, coping strategies, or a compassionate ear, our experts are here to provide the support you need. We are committed to creating a safe and inclusive space where you can explore, learn, and thrive. </p></div>
         <p onClick={() => setShowBiodataForm(true)} id='talk-expert'>Talk to an expert ⤵ </p>
    </div>
      
    <div className="second-section-image">
      <img src={ebonyhug} />
    </div>
    </div>
  
  {/* form section starts here */}
    <div className='assess-form1'>
  {/* biodta form starts here  */}
    {showBiodataForm && (
        <div className='bio-form-whole' >
          <h2>Bio Data Form</h2>
          <form   id='bio-form'  onSubmit={handleBiodataSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder='Enter your fullname' value={bioData.fullName} onChange={handleBiodataChange} required />

            <label htmlFor="gender">Gender</label>
            <input type="text" id="gender" name="gender" placeholder='Male or Female' value={bioData.gender} onChange={handleBiodataChange} required/>

            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" value={bioData.dateOfBirth} onChange={handleBiodataChange} required/>

            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" placeholder='Enter age' value={bioData.age} onChange={handleBiodataChange}required />

            <label htmlFor="contactNumber">Contact Number</label>
            <input type="text" id="contactNumber" name="contactNumber" placeholder='Enter your contact' value={bioData.contactNumber} onChange={handleBiodataChange} required/>

            <label htmlFor="emailAddress">Email Address</label> 
            <input type="email" id="emailAddress" name="emailAddress" placeholder='Enter your email' value={bioData.emailAddress} onChange={handleBiodataChange} required/>

            <label htmlFor="address">Address</label>
            <textarea id="address" name="address" placeholder='Enter your address' value={bioData.address} onChange={handleBiodataChange} required />

            <label htmlFor="emergencyContactName">Emergency Contact Name</label>
            <input type="text" id="emergencyContactName" name="emergencyContactName" placeholder='Enter emergency contact name' value={bioData.emergencyContactName} onChange={handleBiodataChange} required/>

            <label htmlFor="emergencyContactNumber">Emergency Contact Number</label>
            <input id="emergencyContactNumber" type="text" name="emergencyContactNumber" placeholder='Enter emergency contact number' value={bioData.emergencyContactNumber} onChange={handleBiodataChange} required/>

required
            <button type="submit" >Next</button>
          </form>
        </div>
      )}

     {/* history section starts here  */}
      {showHistoryForm && (
        <div className='bio-form-whole'>
           <h2>Mental Health History Form</h2>
          <form id='bio-form' onSubmit={handleHistorySubmit}>
            <label htmlFor="currentCondition" >Current Condition</label>
            <textarea id="currentCondition" placeholder='Tell us about your current condition' required name="currentCondition" value={mentalHealthHistory.currentCondition}  onChange={handleHistoryChange} />

            <label htmlFor="treatmentHistory">Treatment History</label>
            <textarea id="treatmentHistory" placeholder='Do you have any past or present treatment?' required name="treatmentHistory" value={mentalHealthHistory.treatmentHistory} onChange={handleHistoryChange} />

            <label htmlFor="medicationHistory">Medication History</label>
            <textarea id="medicationHistory" placeholder='provide us with past or present medication history?' required name="medicationHistory" value={mentalHealthHistory.medicationHistory} onChange={handleHistoryChange} />

            <label htmlFor="familyHistory">Family History</label>
            <textarea id="familyHistory" placeholder='Are there any mental health conditions that run in your family?' required name="familyHistory" value={mentalHealthHistory.familyHistory} onChange={handleHistoryChange} />

            <label htmlFor="lifeEvents">Life Events</label>
            <textarea id="lifeEvents" placeholder='Any traumatic life events?' required name="lifeEvents" value={mentalHealthHistory.lifeEvents} onChange={handleHistoryChange} />

            <label htmlFor="currentSymptoms">Current Symptoms</label>
            <textarea  id="currentSymptoms"  placeholder='Any unusual symptoms observed>' required name="currentSymptoms"  value={mentalHealthHistory.currentSymptoms}  onChange={handleHistoryChange}  />

            <label htmlFor="hospitalizationHistory">Hospitalization History</label>
            <textarea id="hospitalizationHistory" placeholder='Ever been hospitalized? tell us about it' required name="hospitalizationHistory" value={mentalHealthHistory.hospitalizationHistory} onChange={handleHistoryChange} />

            <label htmlFor="suicidalThoughts">Suicidal Thoughts</label>
            <textarea id="suicidalThoughts" placeholder=' Ever had any suicidal thoughts?' required name="suicidalThoughts" value={mentalHealthHistory.suicidalThoughts} onChange={handleHistoryChange} />  

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>

    </div>
    
    </>
  )
      }

export default Userhome