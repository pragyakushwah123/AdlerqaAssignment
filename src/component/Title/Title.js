import React from 'react'
import "./title.css"
import Vector from "../../assets/images/Vector 208.png";
import Marin from "../../assets/images/Marin.png"
import Ayesha from "../../assets/images/Ayesha.png"
const Title = () => {
  return (
    <div>
      <div className='Titile'>
        <span className="text-line-first">WE ARE A</span><br />
        <span className="text-line-second">
          <span className="global">GLOBAL</span> <span className="production">PRODUCTION</span>
        </span><br />
        <span className="text-line-third">AGENCY</span>
      </div>
      <div>
        <div className='Title-second'>
          <span className='second-title'>Designed with the specific needs of large B2B enterprises in mind,</span><br />
          <span className='second-title' >our platform offers a comprehensive solution to simplify.</span>
        </div>
      </div>
      <div className='last-section'>
        <button className='title-button'>GET PROFESSIONAL VIDEO SERVICES</button>
        <img src={Vector} className="Vector" alt="arrow-vector" />
        {/* <img src={arrow} className="Vector" alt="arrow-vector" /> */}
        <div className='image-container'>
          <img src={Marin} class="image image1" alt="Image 1" />
          <img src={Ayesha} class="image image2" alt="Image 2" />

        </div>


      </div>
    </div>

  )
}

export default Title
