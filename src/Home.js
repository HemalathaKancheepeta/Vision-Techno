import React from 'react'

import  banner1 from './assests/images/banner1.jpg'
import  banner2 from './assests/images/banner2.jpg'
import  banner3 from './assests/images/banner3.jpg'

import './Menu/Menu.css'

import Slider from "react-slick";



export const Home = () => {
    const images = [{
        id: 1,
        src:banner1,
        alt: "Image 1"
    },
    {
        id: 2,
        src: banner2,
        alt: "Image 2 "
    },
    {
        id: 3,
        src: banner3,
        alt: "Image 3"
    }
]
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
      autoplaySpeed: 2000,
       
      };
  return (
    <div className="home">
        <div className="bannerDiv">
        <>
    <div className="tag">
         
    </div>
      <div className="imgslider">
        <Slider {...settings}>
          {
          images.map((item,index) => { 
            const {id,src}=item
         return    <div key={id}>
              <img src={src}  />
            </div>
                 })
          }
        </Slider>
      </div>
          </>
        </div>
        

    </div>
  )
}

