"use client"
import React from 'react';
// import AOS from 'aos';
// import "aos/dist/aos.css";
import style from "@/app/style/modulecss/style.module.css"
import Usableitem from '@/app/components/Useableitem/useableitem';
import Navbar from '@/app/components/Navbar/navbar';
import Faq from "@/app/components/FAQ/faq";
import '../../style/service01.css';
import '../../style/service04.css';
import "../../style/HomeCSS/mainpage.css"
import "../../style/HomeCSS/oursolution.css"
import Footer from '@/app/components/Footer/footer';
import Service02second from "@/app/components/Useableitem/service02second";


const page = () => {
  
  const faqdeatil = [
    {
      question:" Q1. What Is the Mobile App Development Price in India?  ",
      answer :"The cost of Custom app development varies based on factors like complexity, features, platforms, and development time."
    },
    {
      question:"Q2. What is the app development process?",
      answer :"Mobile App Development process generally includes planning, design, development, testing, deployment, and maintenance."
    },
    {
      question:"Q3. Which platforms are used in apps development?",
      answer :"Our developers are using platforms like iOS (Apple) and Android (Google). This depends on the specific mobile app development service. We also provide cross-platform development for other services to target both platforms simultaneously."
    },
    {
      question:"Q4. Can you help with app design? ",
      answer :"Our app development services often provide design services or collaborate with UI/UX designers."
    },
    {
      question:"Q5.What are the key steps in mobile app development?",
      answer :"The key steps in mobile app development include ideation, design, development, testing, deployment, and maintenance."
    },
    {
      question:"Q6. How much time does it take to develop a mobile app? ",
      answer :'Developing a mobile app varies depending on the complexity and features of the app. Simple apps may take a few weeks, while complex apps may take several months.'
    },
  ]

  const contentsecond = [
    {
      title: "Requirement Analysis & Wireframing",
      alt:"Requirement Analysis & Wireframing",
      para:
        "Requirement analysis and wireframing are important steps in mobile application development. We help you define the scope of the project, gather and document user needs, and provide a visual representation of the interface.",
      icon:"/images/service-one.webp",
      dataaos: "fade-up",
   
      easing: "ease-in-sine",

      repeatation: "false",
      
    },
    {
      title: "UI/UX Designing",
      alt:"UI/UX Designing",
      para:
        "UI (User Interface) and UX (User Experience) design are important aspects of creating mobile applications. We create mobile apps that are not only visually appealing but also easy to use and provide a positive experience to users.",
        icon:"/images/service-second.webp",
        dataaos: "fade-up",
   
      easing: "ease-in-sine",

      repeatation: "false",
     
    },
    {
      title: "Development",
      alt: "Development",
      para:
        "We build user interfaces and client-side functionality using programming languages like Swift (for iOS) or Kotlin/Java (for Android). And develop the server-side logic, databases, and APIs required for the app's functionality.",
        icon:"/images/service-third.webp",
        dataaos: "fade-up",
     
      easing: "ease-in-sine",

      repeatation: "false",
    },
    {
      title: "Testing",
      alt: "Testing",
      para:
        "We use 4 setps of testing - Unit Testing, Integration Testing, User Acceptance Testing and Bug Fixing.",
        icon:"/images/service-one.webp",
        dataaos: "fade-up",
 
      easing: "ease-in-sine",

      repeatation: "false",
    },
    {
        title: "Deployment",
        alt: "Deployment",
        para:
          "We Release the app on the intended app stores (such as the Apple App Store or Google Play Store) or distribute it through enterprise channels.",
          icon: "/images/service-second.webp",
          dataaos: "fade-up",
      
        easing: "ease-in-sine",
  
        repeatation: "false",
      },
      {
        title: "Support & Maintenance",
        alt: "Support & Maintenance",
        para:
          "Our team provide ongoing  24*7  Support Support & Maintenance service and monitoring app performance,  Updates, data protection, feedback, user queries and issues.",
          icon: "/images/service-third.webp",
          dataaos: "fade-up",
   
        easing: "ease-in-sine",
  
        repeatation: "false",
      },
  ];
  const content = [
    {
      title: "IOS App Development",
      subtitle:
        "We specialize in crafting exceptional iOS applications that seamlessly integrate functionality, aesthetics, and user experience. Our dedicated team of skilled iOS developers leverages the latest technologies and design trends to bring your app vision to life.",
      dataaos: "fade-up",
      
      easing: "ease-in-sine",

      repeatation: "false",
      icon :"fa-brands fa-apple"
    },
    {
      title: "Android App Development",
      subtitle:
        "You can get our Android app development services. We specialize in designing dynamic and user-centric Android applications. If you're launching a new app or improving an existing app, we tailor our solutions to suit your business objectives.",
      dataaos: "fade-up",
     
      easing: "ease-in-sine",

      repeatation: "false",
      points: "Today, I am getting so  tired ",
      icon :"fa-solid fa-code"
    },
    {
      title: "Cross-platform App Development",
      subtitle:
        "Build your apps with our cross-platform app development services. Our team creates applications using cutting-edge frameworks like React Native and Flutter and runs smoothly on both iOS and Android devices.",
      dataaos: "fade-up",

      easing: "ease-in-sine",

      repeatation: "false",
      icon :"fa-solid fa-gear"
    },
    {
      title: "Wearable App Development",
      subtitle:
        "ScaleEdge Solutions provides wearable app development services in india. We specialize in creating innovative and functional apps such as smartwatches, fitness trackers or other wearables.",
      dataaos: "fade-up",
     
      easing: "ease-in-sine",

      repeatation: "false",
      icon :"fa-solid fa-code-fork"

    },
    {
        title: "Flutter App Development",
        subtitle:
          "We harness the power of Flutter, Google's UI toolkit, to create high-performance and visually stunning cross-platform applications. Whether you're targeting Android, iOS, or both. Our experienced Flutter developers team ensures a seamless and consistent user experience across all devices.",
        dataaos: "fade-up",
      
        easing: "ease-in-sine",
  
        repeatation: "false",
        icon :"fa-brands fa-think-peaks"

      },
      {
        title: "React Native App Development",
        subtitle:
          "Our React Native solutions are designed to meet your specific needs. You can grow your mobile presence with our React Native app development services. Our skilled team of developers harnesses the power of React Native.",
        dataaos: "fade-up",

        easing: "ease-in-sine",
  
        repeatation: "false",
        icon :"fa-solid fa-layer-group"
       
      },
  ];


  // useEffect(() => {
  //   AOS.init();
  // })
  return (
    <div>
        <Navbar></Navbar>
        <Usableitem
        title="Mobile App Development Services"
        section ={1}
        para="ScaleEdge Solution is the top mobile app development company in India. We specialize in building robust, scalable, and secure native, iOS, Android, and cross-platform mobile app solutions with excellent user experiences. Whether you want to hire our skilled mobile app developers, designers, strategists, and associates or outsource your mobile app development project. You can expect world-class services at cost-effective prices. You can elevate your brand and engage your audience. We leverage the latest technologies and industry best practices to ensure that your mobile app stands out in the crowded digital landscape.
        "
        alt_tag ="Mobile App Development Services"
        app_main_img = {"/images/app_dev.webp"}
        />
        <div className="sectwo-main-container col-md-12 mt-0 p-0  ">
        <div className="ser2-first-container col-md-12 d-flex justify-content-center py-3 container-edit ">
          <div className="row col-md-10 p-0">
          <h2 className="section-title col-md-12 p-0">Mobile App Development Services<br />  We Offer</h2>
          <p className='col-md-12 p-0  text-center'>At ScaleEdge Solution, we offer a wide range of mobile app development services to cater to the diverse mobile app development requirements of businesses across the world. Our expert team of developers excels in creating bespoke mobile applications for iOS, Android, and cross-platform environments.You can easily create your own app and <a style={{color:'black',textDecoration:'none',fontWeight:800}} href="/software-development-service">custom software</a> as per your business needs, goals, and objectives and boost your business.</p>
          </div>
      
        <div className="row col-md-12 sectwo-subcontainer ">
          {content.map((item, index) => {
            return (
              <div
                className="col-md-5 sectwo-left"
                key={index}
                data-aos={item.dataaos}
                data-aos-offset={item.dataoffset}
                data-aos-easing={item.easing}
                data-aos-duration={item.Reactduration}
                data-aos-once="true"
              >
                <div className="sectwo-icon position-relative ">
                  <span>
                    <i class={item.icon}></i>
                  </span>
                </div>
                <div className="sectwo-content col-md-10">
                  <h3 className="sectwo-title ">{item.title}</h3>
                  <p className='text-start'>{item.subtitle}</p>
                  <div className="sectwo-link">
                  
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
        <div className="service-second-section">
        <div className="ser2-first-container col-md-12 d-flex justify-content-center ">
          <div className="row col-md-10 p-0">
          <h2 className="section-title col-md-12">Benefits of Mobile App <br /> Development</h2>
          <p className='col-md-12 p-0 text-center'>If you are looking for mobile app and <a style={{color:'black',textDecoration:'none',fontWeight:800}} href="/web-development-service">web development service</a>  for your business, then you can get many benefits that will help your business to stay relevant, gain a competitive edge, increase user engagement with the audience, and achieve this mobile-app-dominance. </p>
          </div>
        </div>
        <div className={style.imgrow}>
        <img
        className='w-100'
          src={'/images/mobile-app-maintenance-process.jpg'}
          alt="custom mobile app development"
          title='custom mobile app development' />
      </div>
      <div className={style.Customcontainer}>
        <div className="col-md-6 service-det-row-2-col-1 p-0 my-auto ">
          <h3 className='font-weight-normal section-title d-flex  section-manage '>Build User Centric, Result-Oriented Mobile Apps with Us</h3>
          <p className='text-start '><a href="/" className='text-decoration-none text-dark'><b>ScaleEdge Solutions </b></a> is a well-known mobile app development company in India. The company has over a decade of experience offering world-class mobile app development services to esteemed clients across the world. Businesses ranging from start-ups, entrepreneurs, small and medium enterprises, and established organizations have leveraged our wide range of mobile app development services and taken their business to the next level of services.
<br />
<br />
If you are looking for an experienced mobile app development company, ScaleEdge is your one-stop destination. You can hire dedicated mobile app developers or outsource mobile app development projects to our highly experienced and knowledgeable mobile app development team to bring your app idea into reality. No matter what sort of mobile app you want to develop, you will get the best-in-class app solution. So what are you waiting for? Contact us and create your dream App with us.
</p>
        </div>
        <div className="col-md-6 service-det-row-2-col-1 p-0 d-flex justify-content-center">
        
          <div className="col-md-10 servicedet-col-2 rounded-lg mx-0 m-0">
          <h3 className='service-tit'>App Development Service</h3>
          <div className="capsule">
            <i className="fa-solid fa-check capsule-check"></i>
            <p>Seamless communication and personalized interactions</p>
          </div>
          <div className="capsule">
            <i className="fa-solid fa-check capsule-check"></i>
            <p>Enhanced customer engagement and user experience</p>
          </div>
          <div className="capsule">
            <i className="fa-solid fa-check capsule-check"></i>
            <p>Competitive advantage</p>
          </div>
          <div className="capsule">
            <i className="fa-solid fa-check capsule-check"></i>
            <p>Integration with other technologies for efficiency</p>
          </div>
          <div className="capsule">
            <i className="fa-solid fa-check capsule-check"></i>
            <p>Real-time data and analytics for informed decisions</p>
          </div>
          <div className="capsule">
            <i className="fa-solid fa-check capsule-check"></i>
            <p>Higher sales and revenue opportunities</p>
          </div>
        </div>
      
        </div>
      </div>
    </div>
    <div className="ser2-first-container col-md-12 d-flex justify-content-center py-3 small-card-container ">
          <div className="row col-md-10 p-0">
          <h2 className="section-title col-md-12 p-0">Mobile App Development Process <br />  We Follow</h2>
          <p className='col-md-12 text-center'>Being a leading mobile app development company in India, ScaleEdge Solution follows a well-researched, pre-defined mobile app development process to ensure the delivery of a successful mobile app that generates value and business for the concerned organization. </p>
          </div>
       
   <Service02second  contentsecond={contentsecond}/>
   
   </div>
  
   <div className="col-md-12 solution-main-container px-1 ">
            <div className="row mainpage-row" >
                <div className="col-md-6 mainpage-left-container my-auto " data-aos="fade-left"
              data-aos-offset="0"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300">
                  <img height={'100%'} width={'100%'}  src={"/images/companyTrust.webp"} alt="mobile app development services" className='img-fluid'  title='mobile app development services' />
                </div>
                <div className="col-md-6 mainpage-right-container p-0" data-aos="fade-right"
              data-aos-offset="00"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300">
                    <div className="mainpage-headline-container">
                    <h2 className='solution-container-header'>Why Choose ScaleEdge Solution for Mobile App Development Services?</h2>
                    </div>
                    <p className='section-about col-md-11 text-start px-0'>At ScaleEdge Solution, we have a team of experienced mobile app developers and UI/UX Designers who bring a higher level of assurance, quilty, expertise, and professionalism to the table.Our developer team has created a custom HR management system and inventory management system that can help you grow your business.
                       Resulting in the creation of a well-crafted and successful mobile application that meets business requirements, goals, and objectives.
                      
                    </p>
                   
                      <div className="divided p-0 ">
                    <div className="inline_block inline_block">
                      <h3 className='solution-subcate'><span>Custom Mobile App Development</span></h3>
                    </div>
                    <div className="inline_block2 inline_block">
                      <h3 className='solution-subcate'><span>Dedicated Developers</span></h3>
                    </div>
                    <div className="inline_block3 inline_block ">
                      <h3 className='solution-subcate'><span>Excellent User Experience</span></h3>
                    </div>
                   
                    
                    <div className="inline_block4 inline_block ">
                      <h3 className='solution-subcate'><span>Confidentiality & Security</span></h3>
                    </div>
                   
              
                    <div className="inline_block5 inline_block ">
                      <h3 className='solution-subcate'><span>On-time and In-budget</span></h3>
                    </div>
                    <div className="inline_block6 inline_block ">
                      <h3 className='solution-subcate'><span>Support & Maintenance</span></h3>
                    </div>
                   
                    </div>

                    
               </div>
            </div>
            </div>

    <div className="faq-setion col-md-12">

    <div className="faq-inner col-md-10 m-0">
    <h3 className="section-title">Frequently Asked Question's  </h3>
       {/* <div className="ser2-first-container col-md-12 d-flex justify-content-center ">
          <div className="row col-md-7">
          <h2 className="section-title col-md-12">Our Customers Who Loves <br />Our Work</h2>
          </div>
        </div> */}
    <Faq details={faqdeatil}/>
    </div>
    </div>
 
      </div>
        <Footer></Footer>
      
    </div>
  )
}

export default page
