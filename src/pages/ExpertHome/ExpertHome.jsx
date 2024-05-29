import React, { useState, useEffect } from 'react';
import supabase from '../../config/supabaseClient';
import { Expertnav } from '../../components';

const ExpertHome = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments from Supabase
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const { data, error } = await supabase
        .from('userAppointments')
        .select('*')
        .order('appointment_date', { ascending: true });

      if (error) {
        throw error;
      }

      setAppointments(data);
    } catch (error) {
      console.log('Error fetching appointments:', error.message);
    }
  };

  return (
  <>
  
    <Expertnav />
    <div>
      <h1>Welcome, Health Expert!</h1>
      <h2>Appointments</h2>
      {appointments.length > 0 ? (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              <p>Date: {appointment.appointment_date}</p>
              <p>Time: {appointment.appointment_time}</p>
              <p>Client: {appointment.client_name}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments available.</p>
      )}
      <button onClick={fetchAppointments}>Refresh Appointments</button>
    </div>
    </>
  );
};

export default ExpertHome;