import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer1">
           <div className="row">
           <div className=" col-lg-3 col-md-3 col-sm-3 footerSection one">
             <h4>Vision Techno Services</h4>
            <span> Vision Techno Services (P). Ltd. is an fast growing Software Development and eLearning Training solutions Company with young innovative minds.</span>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 footerSection two">
            <h4>Get In Touch </h4>
            <p>VISION TECHNO SERVICES PVT LTD</p>
            <div className="contact-info"> <i className="icon-location"></i> JPTS, MALLAPUR, HYDERABAD<br/>
                        <i className="icon-phone"></i>+91 4048539688, 9143914309, 9959054596 <br/>
                        <i className="icon-mail"></i> <a href="info@visiontechnos.com">info@visiontechnos.com</a> </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 footerSection three">
            <h4>Categories</h4>
            <ul className="circled">
                        <li><a href="#">Web Design and Development</a></li>
                        <li><a href="#">Console Application Development</a></li>
                        <li><a href="#">Custom e-Commerce Solutions</a></li>
                        <li><a href="#">Mobile Application Development</a></li>
                        <li><a href="#">e-Learning</a></li>
                        <li><a href="#">Simulation Based learning</a></li>
                    </ul>

            </div>
           </div>
           </div>
           <div className="footer2">&copy; 2017 VTS. All rights reserved.</div>
    </div>
  )
}
