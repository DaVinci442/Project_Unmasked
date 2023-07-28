import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import psychologist from '../../assets/psychologist.jpg';
import leaf from '../../assets/leaf.jpg';
import ebonyhug from '../../assets/ebonyhug.jpg';
const Home = () => {
  return (
    <>
    {/* first section starts here */}

    <div className="firstw-section">
   
    <div className="first-section-image">
      <img src={psychologist} />
    </div>

    <div className='w-container'>
      <div className="wmessage">
        <p> <span>Un</span>masked is a safe haven for those seeking mental health support. You're in the right place and we're here to help you unmask your true self and take control of your journey towards wellness.
 Thank you for choosing us! </p>
      </div>
      <button><Link to='./Signup'>Get Started</Link></button>
    </div>

    </div>


{/* second section starts here - Noam Shpancer  */} 
    <div className="second-section">

    <div className='ss-text-whole'>
      <div className="ss-message">
         <p> "Mental health is not a destination, but a process. It's about how you drive, not where you're going." </p>
      </div>
      <div  className='quote'> - Noam Shpancer</div>
    </div>
      
    <div className="second-section-image">
      <img src={ebonyhug} />
    </div>
    </div>

  


</>
  )
}

export default Home