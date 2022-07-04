import React from 'react'
import './Header.css'
import vts_logo from './assests/images/vts_logo.jpg'

export const Header = () => {
  return (
    
    <div className="header">
        <div> <img src={vts_logo} className="vts_Logo"/> </div>
    <div className="headerName">Vision Techno Services</div>
   
    </div>
  )
}
   