"use client"
import React, { useEffect } from 'react'
import "../../style/HomeCSS/ourabout.css";



const ourabout = () => {
  return (
    <>
     
        <div className="col-md-12 main-page-container-second">
            <div className="row mainpage-row">
                <div className="col-md-6 mainpage-left-container d-flex justify-content-center align-items-center"  data-aos="fade-right"
              data-aos-offset="0"
              data-aos-easing="ease-in-sine"
              data-aos-duration="200">
                  <img height={'90%'} width={'90%'} src={"images/clipboards.webp"} alt="custom software services" className='img-fluid '  title='custom software services' />
                </div>
                <div className="col-md-6 mainpage-right-container p-0 m-auto" data-aos="fade-left"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="200">
                <p className='section-subtitle'>About Us</p>
                    <div className="mainpage-headline-container">
                    <h2 className='main-page-container-header'>Catalyzing Success <br /> Our Story and Mission</h2>
                    </div>
                    <p className='p-0 section-about col-md-11 text-start'>At ScaleEdge Solutions, our unwavering commitment lies in assisting small and medium-sized businesses in harnessing the full potential of the digital realm. We specialize in a wide array of mobile and web development services that revolve around digital, IoT, cybersecurity, analytics, and engineering methodologies, enabling enterprises to architect their profitability.
                    We firmly believe that technology should simplify business operations for our clients.
                    
                    </p>

                    <div className="col-md-10 about-title-content">

                    <div className="row">
                    <div className="col col-class">
                    <div className="about-subtitle col-md-12" >
                        <div className="about-icon">
                        <i class="fa-regular fa-square-check" style={{color:'#FFDC60'}} ></i>
                         </div>
                        <p className="text-start text-wrap">We firmly believe that technology should simplify business operations for our clients.</p> 
                    </div>
                    <div className="about-subtitle col-md-12" >
                        <div className="about-icon">
                        <i className="fa-regular fa-square-check" style={{color:'#FFDC60'}} ></i>
                         </div>
                        <p className="text-start text-wrap" >Our mission is to bridge the divide between technology and the business environment.</p> 
                    </div>
                    <div className="about-subtitle col-md-12" >
                        <div className="about-icon">
                        <i className="fa-regular fa-square-check" style={{color:'#FFDC60'}} ></i>
                         </div>
                        <p className="text-justify text-wrap">We are dedicated to delivering tailor-made software development services across various  industry verticals.</p> 
                    </div>
                    </div>

                    </div>
                    
                    </div>

               </div>
            </div>
            </div>
      
    </>
  )
}

export default ourabout
