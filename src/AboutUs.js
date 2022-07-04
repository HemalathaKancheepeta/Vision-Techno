import React from 'react'
import aboutUsImg from '../src/assests/images/aboutUsImg.jpg'
import './Menu/Menu.css'

export const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div>
        <img src={aboutUsImg} alt="AboutUs" className='aboutImg'/>
        </div>  
        <div className="staticTextAbout">
            <p>Vision Techno Services (P). Ltd. is an fast growing Software Development and eLearning Training solutions Company with young innovative minds.Our services includes Software Development, eLearning Solutions, Content Development and Training Solutions to individuals and corporates, which are customised to the various needs of projects across diverse backgrounds of eLearning and training solutions and also to enable sustainable transformation through learning and skills development.</p>
            <p>Our cost effective solutions with high quality and creativity can help businesses meet their specific business needs. Our team includes skilled professionals consisting of Software Engineers, Instructional designers, Content Writers, Graphic Designers, 2D artists, BFA specialist and 3D developers.Our services are aimed at bringing the best practices in eLeanring solutions together with the latest technology to engage learners and improve learning outcomes.
                </p>
        </div>

    </div>
  )
}
