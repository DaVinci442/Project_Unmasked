import React, { useState } from 'react';
import './appointment.css';
import supabase from '../../config/supabaseClient';
import { useNavigate } from 'react-router-dom';


const Appointment = () => {
  const availableSpecialists = [
    {
      id: 1,
      name: 'Dr. John Doe',
      specialty: 'Cardiology',
      availability: 'Mon - Fri, 9 AM - 5 PM',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialty: 'Dermatology',
      availability: 'Tue - Sat, 10 AM - 6 PM',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Add more specialists as needed
  ];

  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedCommunicationMethod, setSelectedCommunicationMethod] = useState(null);
let appNavigate = useNavigate()
  const handleSpecialistSelection = (specialist) => {
    setSelectedSpecialist(specialist);
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleCommunicationMethodSelection = (method) => {
    setSelectedCommunicationMethod(method);
  };

  const handleAppointmentBooking = async () => {
   
    if (selectedSpecialist && selectedDate && selectedTime && selectedCommunicationMethod) {
  
      const appointmentData = {
        specialist_id: selectedSpecialist,
        appointment_date: selectedDate,
        appointment_time: selectedTime,
        communication_method: selectedCommunicationMethod,
      };
  
      try {
        const { data, error } = await supabase.from('userAppointments').insert(appointmentData);
        if (error) {
          throw new Error(error.message);
        }
        console.log('Appointment booked:', data);
        setSelectedSpecialist(null);
        setSelectedDate(null);
        setSelectedTime(null);
        setSelectedCommunicationMethod(null);

      } catch (error) {
        console.error('Error booking appointment:', error.message);
      }
    } else {
      alert('successful Booking ');
      appNavigate('/userHome')

    }
  };

  return (
    <>
      <div className="whole-appoint">
        <div className="appoint-whole">
          <div className="app-first">
            <h1>Appointment Booking</h1>
            <form id="appoint-form">
              <div className="app-date">
                <label>Date:</label>
                <br />
                <input required type="date" onChange={(e) => handleDateSelection(e.target.value)} />
              </div>

              <div className="app-spec">
                <label>Specialist:</label>
                <br />
                <select required onChange={(e) => handleSpecialistSelection(e.target.value)}>
                  <option value="">Select a specialist</option>
                  {availableSpecialists.map((specialist) => (
                    <option key={specialist.id} value={specialist.id}>
                      {specialist.name} - {specialist.specialty}
                    </option>
                  ))}
                </select>
              </div>

              <div className="c-mthod">
                <label>Communication Method:</label>
                <br />
                <select required onChange={(e) => handleCommunicationMethodSelection(e.target.value)}>
                  <option value="">Select a communication method</option>
                  <option value="audio">Audio Call</option>
                  <option value="video">Video Call</option>
                  <option value="message">Message</option>
                </select>
              </div>

              {/* Additional options */}
              <div className="app-time">
                <label>Time:</label>
                <br />
                <input required type="time" onChange={(e) => handleTimeSelection(e.target.value)} />
              </div>

              <button type="button" onClick={handleAppointmentBooking}>
                Book Appointment
              </button>
            </form>
          </div>

          {/* Specialist Listings */}
          <h2>Available Specialists</h2>
          <ul id="list">
            {availableSpecialists.map((specialist) => (
              <li key={specialist.id}>
                <div className="availale">
                  <h3>{specialist.name}</h3>
                  <p>{specialist.specialty}</p>
                  <p>{specialist.availability}</p>
                  <p>{specialist.bio}</p>
                  {selectedSpecialist === specialist.id && (
                    <button onClick={handleAppointmentBooking}>Book Appointment</button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Appointment