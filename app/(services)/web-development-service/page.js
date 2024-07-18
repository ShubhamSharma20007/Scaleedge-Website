"use client"
import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import "../../style/service02.css"
import "../../style/about.css"
import "../../style/contactPage.css"
import "aos/dist/aos.css";
import Usableitem from '@/app/components/Useableitem/useableitem';
import Navbar from '@/app/components/Navbar/navbar';
// import Faq from "../FAQ/faq";
import '@/app/style/service01.css';
import Footer from '@/app/components/Footer/footer';
import Service02second from "../../components/Useableitem/service02second";
import Service02third from "../../components/Useableitem/service02third";
import Faq from '@/app/components/FAQ/faq';
// import Testimonial from "../MainPage/testimonial";
// import companyTrust from "../../../public/images/companyTrust.webp"


const page = () => {
  const faqdeatil = [
    {
      question:"Q1. How to find the best web design company?",
      answer :'If you are looking for the best web design company in India, ScaleEdge Solutions is the best in this field. We provide the best web development solutions for your business.'
    },
    {
      question:" Q2. What sets your Web Development Solutions apart from others?",
      answer :'At ScaleEdge, our solutions blend innovation and functionality seamlessly. We prioritize user-centric designs, ensuring your web presence is not only visually appealing but also highly functional. '
    },
    {
      question:"Q3. Why should I get my web design and development done by ScaleEdge Solutions? ",
      answer :' ScaleEdge Solutions is a popular web design company and we have a team of experienced web developers. We worked with many global brands for their web design and development projects.'
    },
    {
      question:"Q4.  Do you offer custom website design? ",
      answer :'ScaleEdge Solutions has a skilled team of creative web designers who go beyond expectations to provide attractive custom-designed websites based on our client"s business needs, objectives, and target audiences.'
    },
    {
      question:"Q5. Which technology should I choose for my web development? ",
      answer :'If you are looking for web design and development projects then it entirely depends on the type of project. ScaleEdge Solutions helps you choose technology for your project.'
    },
    {
      question:"Q6. How can my business grow with web development solutions?",
      answer :'ScaleEdge Solutions provides custom web development services. You tell us about your business and specific needs and requirements, our experts will help you.'
    },
  ]
  const contentsecond = [
    {
      title: "Web Compatibility",
      alt :"Web Compatibility",
      para:
        "Our solutions ensure seamless compatibility across various platforms and browsers. It provides a consistent and optimal user experience for your audience.",
      icon:"images/service-one.webp",
      dataaos: "fade-up",
      dataoffset: 0,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "true",
      
    },
    {
      title: "Easy Navigation",
      alt:"Easy Navigation",
      para:
        "User-friendly navigation is at the forefront of our Web design. we ensure an intuitive interface that visitors can effortlessly explore and engage with your website. ",
        icon:"images/service-second.webp",
        dataaos: "fade-up",
      dataoffset: 0,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "true",
     
    },
    {
      title: "Blog Integration",
      alt: "Blog Integration",
      para:
        "We seamlessly blend captivating content into your website's structure, enhancing its dynamic appeal. Foster meaningful connections with your audience through integrated blogging features that simplify content creation.",
        icon:"images/service-third.webp",
        dataaos: "fade-up",
      dataoffset: 0,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "true",
    },
    {
      title: "Product and Content Visuality",
      alt: "Product and Content Visuality",
      para:
        "We immerse your target audience in a captivating experience by emphasizing product and content visibility. We enhance your brand's aesthetics and capture attention through eye-catching elements that leave a lasting impression.",
        icon:"images/service-one.webp",
        dataaos: "fade-up",
      dataoffset: 0,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "true",
    },
    {
        title: "Fast Loading Speed",
        alt: "Fast Loading Speed",
        para:
          "Our web development solutions are optimized for quick loading times, keeping your audience engaged and minimizing bounce rates.",
          icon: "images/service-second.webp",
          dataaos: "fade-up",
        dataoffset: 0,
        easing: "ease-in-sine",
        duration: 100,
        repeatation: "true",
      },
      {
        title: "Usable Forms",
        alt: "Usable Forms",
        para:
          "Experience ease of interaction with our carefully designed and usable forms. We ensure that user interactions are seamless and contribute to a positive overall experience.",
          icon: "images/service-third.webp",
          dataaos: "fade-up",
        dataoffset: 0,
        easing: "ease-in-sine",
        duration: 100,
        repeatation: "true",
      },
  ];


  const content = [
    {
      title: "Web App Development",
      subtitle:
        "Bring your business ideas with our web app development services. Our skilled developers create dynamic and interactive web applications with your specific requirements. We provide a seamless user experience and user engagement across all device",
      dataaos: "fade-up",
      dataoffset: 0,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
      icon :"fa-brands fa-webflow"

    },
   
    {
      title: "WordPress Development",
      subtitle:
        "Our WordPress development services turn your concepts into digital reality. We are giving you a custom website and responsive theme. We use the latest functionality and build websites. It is also easy to manage and update",
      dataaos: "fade-up",
      dataoffset: 0,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
      points: "Today, I am getting so  tired ",
      icon :"fa-brands fa-wordpress-simple"
    },
    {
      title: "Ecommerce web development",
      subtitle:
        "You can easily transform your business and create your online store with our e-commerce web development solutions. We are building online stores, and shopping websites with secure, user-friendly, and visually stunning online stores.",
      dataaos: "fade-up",
      dataoffset: 0,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
      icon :"fa-brands fa-connectdevelop"
    },
    {
      title: "CMS or SaaS Development",
      subtitle:
        "Our CMS and SaaS Development services are tailored to make your Business. We provide CMS or SaaS Development solutions that streamline your processes and enhance collaboration, ensuring optimal performance.",
      dataaos: "fade-up",
      dataoffset: 0,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
      icon :"fa-brands fa-sass"

    },
   
      {
        title: "ERP Development",
        subtitle:
          "Optimize and streamline your business with our ERP development solutions. Our developers design and implement customized Enterprise Resource Planning (ERP) systems to increase efficiency, reduce costs, and facilitate seamless communication across your organization.",
        dataaos: "fade-up",
        dataoffset: 0,
        easing: "ease-in-sine",
        duration: 100,
        repeatation: "false",
        icon :"fa-brands fa-connectdevelop"
       
      },
      {
        title: "Custom Website Development",
        subtitle:
          "Our Custom Website Development service is a symphony of innovation and precision, creating a digital masterpiece that reflects your brand personality. Our expert developers craft seamless and responsive websites and provide an unparalleled user experience.",
        dataaos: "fade-up",
        dataoffset: 0,
        easing: "ease-in-sine",
        duration: 100,
        repeatation: "false",
        icon :"fa-solid fa-terminal"
      },
  ];

  // useEffect(()=>{
  //   const wrap =  document.querySelector('.wrapper')
  //   const side = document.getElementById('mySidenav');
  //   wrap.addEventListener('click',function(){
  //     if (side.style.width >= '200px') {
  //       side.style.width = '0px';
  //     }
  //   else{
  //     side.style.width == '300px'
  //   }
  //   })
  // })
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
        <Navbar></Navbar>
        <Usableitem
      alt_tag="Web Development Service"
        title="Web Development Service"
        section ="2"
        para="ScaleEdge Solutions is a trusted web development company in India. We are providing world-class Custom web design and web development services in India. We blend creativity and functionality to create custom websites tailored to your unique vision. Our team of experienced and professional web developers for user-friendly, highly responsive, and performance-oriented websites and web applications at affordable prices."
        app_main_img = {"images/webimg.webp"}
      />
       <div className="mt-0 sectwo-main-container col-md-12 ">
      
      <div className="row  col-md-12 sectwo-subcontainer sectwo-subcontainer2 m-auto">
      <div className="ser2-first-container col-md-10 ">
        <h2 className="section-title">Website Development Services</h2>
        <p class="col-md-12 p-0  text-center">Our web development and <a className='text-dark text-decoration-none' href="/software-development-service"><b>software development services</b></a> turn your concepts into digital reality. We create a custom website and responsive design for you to take your business forward. Our developers team uses the latest functionality and creates the website.</p>


      </div>
        {content.map((item, index) => {
          return (
            <div
              className="col-md-5 sectwo-left "
              key={index}
              data-aos={item.dataaos}
              data-aos-offset={item.dataoffset}
              data-aos-easing={item.easing}
              data-aos-duration={item.Reactduration}
              data-aos-once="true"
            >
              <div className="sectwo-icon  position-relative ">
                <span>
                  <i class={item.icon}></i>
                </span>
              </div>
              <div className="sectwo-content col-md-10 ">
                <h3 className="sectwo-title">{item.title}</h3>
                <p className="text-start">{item.subtitle}</p>
                <div className="sectwo-link">
                
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="service-second-section mt-2">
      <Usableitem
    
      title="Web Development Solutions "
      seoVal = {true}
      alt_tag ="web development solutions"
      interLinkPara ="<a style='color:black;text-decoration:none' href='/'><strong>ScaleEdge Solutions</strong></a> is a popular website development company in India. It is dedicated to providing web development solutions to empower businesses and help them achieve their business objectives in web designing. Our skilled web designers and web developers team have practical experience working on web development projects for  <a style='color:black;text-decoration:none' href='/hredge'><strong>HR Management</strong></a>, jewellery, e-commerce, real estate, education, fashion, hospitality, automobile, and finance industries. We have successfully delivered many projects for clients across various industries. We take pride in helping businesses achieve their objectives through our dynamic and user-friendly web development services."
      secondimg={"images/secondimg.webp"}
    />
  </div>
  <div className="ser2-first-container col-md-12 p-0 container-edit-second py-3">
  <h2 className="section-title">Key Features of Our  <br />Web Development Solutions </h2>
         <div className="ser2-subtitle-context col-md-7">
         <p className="text-center">Learn about our comprehensive website development services, which will give you access to the latest technologies, responsive design, smooth integration, and robust functionality.</p>
         </div>
         <Service02second contentsecond={contentsecond}/>
      </div>
 
 <Service02third/>
  {/* <Testimonial/> */}
  <div className="faq-setion col-md-12">
  <div className="faq-inner col-md-10">
  <h3 className="section-title">Frequently Asked Question's  </h3>
  <Faq details={faqdeatil}/>
  </div>
  </div>
    </div>
        <Footer></Footer>
      
    </div>
  )
}

export default page;


