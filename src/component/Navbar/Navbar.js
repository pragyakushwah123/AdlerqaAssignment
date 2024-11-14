import React from 'react'
import logo from "../../assets/images/logo.png";
import arrow from "../../assets/images/arrow-down-right 1.png";
import arrowright from "../../assets/images/arrow-down-right 1 (1).png"
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <img src={logo} className='logo' alt='Company Logo'/>
  
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link " aria-current="page" href="#">SERVICES</a>
          <img src={arrow} className='arrow' alt='arrow-down'/>

          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">WORK</a>
          <img src={arrow} className='arrow' alt='arrow-down'/>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT</a>
          <img src={arrowright} className='arrowright' alt='arrow-down-right'/>
          
        </li>
        <li className="nav-item">
          <button className='button'>GET STARTED</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
<hr className="navbar-line" />

     
      
      
    </div>
  )
}

export default Navbar



