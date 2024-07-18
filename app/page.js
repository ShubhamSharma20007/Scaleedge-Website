"use client"

// import AOS from "aos";
// import "aos/dist/aos.css";
import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import "@/app/style/HomeCSS/mainpage.css";
import Companyserver from "./components/MainpageComponent/companyserver";
import Categories from "../app/components/MainpageComponent/categories";
import Ourabout from "./components/MainpageComponent/ourabout";
import Ourservices from "./components/MainpageComponent/ourservices";
import Ourproject from "../app/components/MainpageComponent/ourproject";
import Socialmedia from "../app/components/MainpageComponent/socialmedia";
import Oursolution from "./components/MainpageComponent/oursolution";
import Progress from "../app/components/MainpageComponent/progess";
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import GsapFun from './components/gsapLoader';
import "../app/style/front-loader.css";

export default function Home() {
  const [state, setState] = useState(null);

  useEffect(() => {
    const homeid = document.querySelector('.home');
    setState(homeid);
  }, []);

  const jsonLd ={
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Scaleedge Solution",
    "image": "http://localhost:3000/images/scaleedge.webp",
    "url": "https://scaleedge.in/",
    "telephone": "9251697397",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A-154 Hasan Khan, Alwar, Rajasthan",
      "addressLocality": "Alwar",
      "postalCode": "301001",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php/?id=100089878991548&paipv=0&eav=AfY26WhitY8tvZZTpPO1f5AClNqfbKjOznlvgjryfh3PCylmczD8ZOArqxGX3__O8pg&_rdr",
      "https://www.linkedin.com/company/scaleedge-solutions/",
      "https://www.instagram.com/scaleedge/"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Monday",
        "opens": "09:30",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Tuesday",
        "opens": "09:30",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "09:30",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Thursday",
        "opens": "09:30",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "09:30",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:30",
        "closes": "18:30"
      }
    ]
  }
  


 
  

  return (
    <>
  
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <GsapFun homeClass={state} ></GsapFun>
      <div className="col-md-12 main-page-container" >
        <div className="row col-md-10">
          <div className="col-md-5 mainpage-left-container m-auto " data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="300"
            data-aos-once="false">
            <p className="section-subtitle">

              Welcome to ScaleEdge Solutions
            </p>
            <div
              className="mainpage-headline-container"

            >
              <h1 className="main-page-container-header">
                Simpler.Smarter.Faster
              </h1>


            </div>
            <div className="section-about col-md-12">
              <ul className='p-0'>
                <li className="text-start"><strong>Simplified Technology :</strong> We simplify complex technology.</li>
                <li className="text-start"><strong>Smarter Solutions:</strong> Delivering solutions that work seamlessly for your business.</li>
                <li className="text-start"><strong>Commitment to Speed:</strong> Staying ahead in the fast-paced digital landscape.</li>
                <li className="text-start"><strong>Efficiency:</strong> Achieving your goals efficiently..</li>
                <li className="text-start"><strong>Streamlined Approach:</strong>Partner with us for a streamlined, intelligent approach.</li>
                <li className="text-start"><strong>Accelerated Success:</strong>Your journey in the digital world made smoother and faster.</li>
              </ul>

            </div>
            <img
              src={"/images/dottedline.webp"}
              title="dotline"
              width={'50%'}
              height={'50%'}
              alt="dotline"
              className="img-fluid dotted"

            />
            {/* <div className="slider-btn">
              <Link className="text-dark fw-bold"  >
                <span className="main-btn magnetic startedbtn"> get started </span>
              </Link>
            </div> */}
            <img
              width={'20%'}
              height={'20%'}
              src={"/images/pinktriangle.webp"}
              alt="pinktringle"
              className="img-fluid pinktringle"
              title="pinktringle"


            />
          </div>
          <div className="col-md-6 mainpage-right-container d-flex start-content-center">
            <div className="m-auto">
              <img
                src={"/images/home.webp"}
                height={'100%'}
                width={'100%'}
                className="ladybulb img-fluid  m-auto  "
                title="software service"
                alt="software service"
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-easing="ease-in-sine"
                data-aos-duration="300"

              />
            </div>

            <img
              height={'100%'}
              width={'100%'}
              src={"/images/rightyellowwing.webp"}
              alt="curve-img"
              className="img-fluid curve-img"
              title="curve-img"

            />
          </div>
        </div>
      </div>
      <Ourservices />
      <Ourabout />
      <Companyserver />
      <Categories />
      <Ourproject />
      <Progress />
      <Socialmedia />
      <Oursolution />
      <Footer />
    </>
  )
}
