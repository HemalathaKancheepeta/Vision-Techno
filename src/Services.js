import React from 'react'
import services from './assests/images/services.jpg'

export const Services = () => {
  return (
    <div className="servicesDiv">
         <div>
        <img src={services} alt="services" className='servicesImg'/>
        </div>  
        <div className="servicesTextAbout">
            <p>Services</p>
        </div>

    </div>
  )
}
