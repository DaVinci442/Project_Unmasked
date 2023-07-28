import React from 'react'
import './about.css'
import { Navbar , Foot} from '../../components';

const about = () => {
  return (
    <>

<div className="about-section">

  <div className="about-sub">
    <h1>About Us</h1>
    
    <p>Welcome to <span>Un</span>masked, a dedicated mental health platform for the Ghanaian 
community. Our mission is to empower and support individuals struggling 
with mental health challenges by connecting them to qualified mental health
 experts and providing a safe space for growth and healing. We understand
  that mental health is an essential aspect of overall well-being, and we
   believe that everyone deserves access to compassionate, professional care. No matter the challenge you're facing, Unmasked is here to stand by your side every step of the way.

Explore our range of services designed to cater to your unique 
needs and begin your journey towards a healthier, happier you.</p>
<button id='about-button'>Get in Touch</button>

  </div>


</div>
    
    </>
  )
}

export default about