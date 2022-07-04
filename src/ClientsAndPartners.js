import React from 'react'
import clients from './assests/images/clients.jpg'

export const ClientsAndPartners = () => {
  return (
    <div className="clientsAndServices">
        
        <div>
        <img src={clients} alt="clients" className='clientsImg'/>
        </div>  
        <div className="clientsTextAbout">
            <ul>
             <li> Mudra Agriculture & Skill Development Multi State Co-op. Society Ltd. Hyderabad. </li>
             <li>Sir C.V. Raman Institute Of Technology & Science, Ananthapur.</li>
             <li>Heaven Home Society, Hyderabad.</li>
             <li>GEO Environmental Analytical Laboratory, Hyderabad.</li>
             <li>MBA Industries, Hyderabad.</li>
             <li>Fleximax software Private Limited, Hyderabad.</li>
             <li>Softech Computers, Vishakapatnam.</li>
            </ul>
        </div>
    </div>
  )
}
