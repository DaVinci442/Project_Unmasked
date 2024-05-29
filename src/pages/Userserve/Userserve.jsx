import React from 'react'
import { Link } from 'react-router-dom';
import Ulogo from '../../assets/Ulogo.png';
import Firms from '../../assets/firrms.jpg';
import Institution from '../../assets/institution.webp';
import family from '../../assets/familyyy.jpg';
import Individual from '../../assets/individuaal.jpg'
import {Navbar, Foot} from '../../components';
import './userserve.css' ;

import BetterHelp_v12 from '../../assets/BetterHelp_v12.mp4';
import Userhome from '../Userhome/Userhome';
const Userserve = () => {
  return (
    <>
{/* Services third card section starts here */}
<div className="card-section">
<div className="service-header">
  <h1>Our Services</h1>
  </div>

<div className="wholecard">
<div className='fullcard'>
    <img src={Firms}  alt='employers'/>
  
  <h3>Unmasked For Firms</h3>
  <div className="card1-text">
    <p>By partnering with Unmasked, 
      your organization can offer their employees access to a wide range 
      of mental health resources</p>
  </div>

</div>


<div className='fullcard'>
  
    <img src={Individual}  alt='employers'/>
  
  <h3>Unmasked For Individuals</h3>
  <div className="card1-text">
    <p>  By partnering with Unmasked, 
 organization can offer their employees access to a wide range 
      of mental health resources</p>
  </div>
  </div>


    <div className='fullcard' >
    <img id='famfam' src={family}  alt='family'/>
  
  <h3 id='h3-1'>Unmasked For Families</h3>
  <div className="card1-text">
    <p>By partnering with Unmasked, 
      your organization can offer their employees access to a wide range 
      of mental health resources</p>
  </div>

</div>

<div className='fullcard' >
  
    <img src={Institution}  alt='employers'/>
  
  <h3>Unmasked For Institutions</h3>
  <div className="card1-text">
    <p>By partnering with Unmasked, 
      your organization can offer their employees access to a wide range 
      of mental health resources</p>
  </div>
  </div>

</div>
</div>
{/* card scetion ends here */}

{/* Unmasked  video and text second section starts here */}
  <div className="first-section">
     <div className="video-play">
      <video controls width='500'>
        <source src={BetterHelp_v12} type='video/mp4'/>
      </video>
     </div>
     <div className="video-text">
      <h2> Reviews</h2>

     <p>"Unmasked has been a lifesaver for me. I was struggling with depression
      and anxiety for years, and finding a qualified mental health professional in Ghana was a challenge. Unmasked helped me connect with a therapist who understood my needs and has been guiding me towards a better mental state. 
     I'm so grateful for this platform!" - Ama B 
     </p>
     <p>
     "I can't thank Unmasked enough for the support they've provided 
     during a difficult time in my life. The platform is easy to use, 
     and I was able to find a mental health expert who specializes in 
     my specific concerns. The sessions have been incredibly helpful,
      and I'm starting to see positive changes in my life." - Kofi A.
     </p> 
     <p>
     "Unmasked is a game-changer for mental health care in Ghana.
      The stigma surrounding mental health issues often makes it difficult
       to seek help, but Unmasked creates a safe and supportive environment for individuals to find the help they need. I highly recommend this
      platform to anyone dealing with mental health challenges." - Abena Y.
      </p>
         </div>
  </div>
{/* Video section ends here */}





{/* How it works section */}
<div className="hwt-whole">
  <div className="hwt-sub">
    <span>How it operates</span>
    <div className="hwt-boxes-full">
      <div className="hwt-box-sub">
        
      </div>

    </div>
  </div>
</div>


<Foot />
  </>
   
  )
}

export default Userserve