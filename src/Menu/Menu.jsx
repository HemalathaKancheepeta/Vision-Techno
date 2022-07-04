import "./Menu.css";
import React from "react";
import {AboutUs} from "../AboutUs"
import {Careers} from "../Careers"
import {ClientsAndPartners} from "../ClientsAndPartners"
import {ContactUs} from "../ContactUs"
import {Home} from "../Home"
import {Services} from "../Services"
import {HashRouter,Routes,Route,Navigate} from 'react-router-dom'
import {images} from "../images"

function template() {
  const {menuItem,isMobileView,left}=this.state
  return (
    
    <div className="menu">
 
      {isMobileView && <button onClick={this.fnMobileMenuBtnClick} className='mobile-menu-btn'>menu</button>}
      <ul style={{left}} className={`${isMobileView && 'mobile-menu'} menu`}>
     <li><a className={menuItem == 'home' && 'menu-active'} id='home' href="#/Home">Home</a></li>
     <li><a className={menuItem == 'aboutUs' && 'menu-active'} id='aboutUs' href="#/AboutUs">AboutUs</a></li>
     <li><a className={menuItem == 'services' && 'menu-active'} id='services' href="#/Services">Services</a></li>
     <li><a className={menuItem == 'clientsAndPartners' && 'menu-active'} id='clientsAndPartners' href="#/ClientsAndPartners">Clients And Partners</a></li>
     <li><a className={menuItem == 'careers' && 'menu-active'} id='careers' href="#/Careers">Careers</a></li>
     <li><a className={menuItem == 'contactUs' && 'menu-active'} id='contactUs' href="#/ContactUs">Contact Us</a></li>
      </ul>
      <HashRouter>
        <Routes>
          <Route path="/home" element={<Home  images={images}/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/clientsAndPartners" element={<ClientsAndPartners/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/contactUs" element={<ContactUs/>}/>
          <Route path="*" element={<Navigate to ="/home"/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default template;
