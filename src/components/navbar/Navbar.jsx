import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Ulogo from '../../assets/Ulogo.png';



const Navbar = () => {
  return (
    <div className="nav-whole">
      <div className="site-logo">
      <img src={Ulogo} />
      </div>
      <div className="nav-sign-container">
        <nav className="nav-links-container"> 
          <ul>
            <li><Link to= '/'>Home</Link></li>
            <li><Link to= '/Services'>Services</Link></li>
            <li><Link to= '/Advice'>Advice</Link></li>
            <li><Link to= '/About'>About</Link></li>
            <li><Link to= '/Contact'>Contact</Link></li>
          </ul>
        </nav>
        <div className="signup">
        <p><Link to='/Signin'>Sign in</Link></p>
        <button id='nav-button'><Link to = '/Signup'>Sign up</Link></button>
        </div>
      </div>
      


    </div>
  )
}

export default Navbar












































// import React from 'react';
// import './navbar.css';
//  import Ulogo from '../../assets/Ulogo.png'  
// import { Link } from 'react-router-dom';
// const Navbar = () => {
//   return (
//   <div className="nav-whole">
//     <div className="nav-logo">
//       <image src = {}/>
//     </div>
//   </div>


//   )
// }

// export default Navbar 


/* <div className="unmasked__navbar">
    <div className="nav1__links_ct">
      <div className="unmasked__navlinks-logo">
     <img src={Ulogo} alt='logo' />
      </div>
      <div className="navbar__links">
        <p><Link>Home</Link></p>
        <p><Link>Services</Link></p>
        <p><Link>Advice</Link></p>
        <p><Link>About</Link></p>
        <p><Link>Contact</Link></p>
      </div>
    </div>
    <div className="signup">
        <p><a href=''> Sign in</a></p>
        <button><a href=''>Sign up</a></button>
      </div>
    </div> */