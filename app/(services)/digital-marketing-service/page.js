"use client"

import Link from "next/link";
import Navbar from "@/app/components/Navbar/navbar"
// import AOS from "aos";
import '../../style/service02.css';
import '../../style/service03.css';
import "../../style/about.css"
import '../../style/service01.css';
import '../../style/service04.css';
import "../../style/HomeCSS/mainpage.css"
import "../../style/HomeCSS/oursolution.css"
import Footer from "@/app/components/Footer/footer";
// import "aos/dist/aos.css";
import Usableitem from "../../components/Useableitem/useableitem"


import Stylishcard from "../../components/Useableitem/stylishcard";
import "../../style/service04.css"
import Faq from "../../components/FAQ/faq";
const page = () => {
    const faqdeatil = [
        {
          question:" Q1. Why is digital marketing important for your business? ",
          answer :"Digital marketing allows you to reach huge online audiences. By leveraging digital marketing strategies, you can connect with your target audience, build brand awareness, and drive relevant traffic to your website."
        },
        {
          question:"Q2. Who is the top digital marketing agency in India?",
          answer :"ScaleEdge Solutions is India's top digital marketing company. Our team has expertise and expertise in digital marketing."
        },
        {
          question:"Q3. Why need digital marketing services? ",
          answer :"ScaleEdge Digital Marketing Company helps your businesses improve online visibility and reach a wider audience. We help your businesses rank higher on search engines, connect with customers on social media, and expand their online presence."
        },
        {
          question:"Q4. What are the benefits of hiring a digital marketing company? ",
          answer :"ScaleEdge Solutions has a team of experienced marketing professionals with extensive knowledge of various digital marketing channels and techniques."
        },
        {
          question:"Q5. What digital marketing services do you provide?",
          answer :"ScaleEdge provides a wide range of digital marketing services including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing (SMM), email marketing, content marketing, and online reputation."
        },
      
      ]
      const contentvalue = [
        {
          title: "Custom Services",
    
          subtitle: "Our services are designed to meet your unique business needs. Our expert team ensures a custom approach that maximizes your online presence with your goals and drives results.",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "true",
          icon: "fa-solid fa-server",
        },
        {
          title: "Dedicated Experts",
          subtitle:
            "Our expert team who are committed to optimizing your campaigns for maximum impact. Our team is ready to provide insightful guidance to enhance your advertising strategies and performance.",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "true",
          points: "Today, I am getting so  tired ",
          icon: "fa-solid fa-chalkboard-user",
        },
        {
          title: "Support & Maintenance",
          subtitle:
            "Our Experience is unparalleled support and seamless maintenance services. Our Team ensures that your project is launched successfully. Our experts are continuously monitored and refined to optimize performance and stay on budget.",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "true",
          icon: "fa-solid fa-gear",
        },
        {
          title: "On-time And In Budget",
          subtitle:
            "We understand the importance of deadlines and budget constraints. Our commitment is to deliver on time and within budget. We provide you with cost-effective solutions that don't compromise on quality and ensure you get the most value for your investment.",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "true",
          icon: "fa-solid fa-wallet",
        },
        {
          title: "Strategic Technology Approach",
          subtitle:
            "Digital Advertising Stay ahead with our strategic technology approach. We leverage the latest tools and innovations to give you a competitive edge, ensuring you are always at the forefront of industry trends.",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "true",
          icon: "fa-solid fa-users-viewfinder",
        },
        {
          title: "Confidentiality & Security",
          subtitle:
            "Your business information is kept with utmost confidentiality and security. We prioritize the security of your data while ensuring trusted partnerships. Our team blends innovation with strategy to drive results and enhance your digital advertising efforts.",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "true",
          icon: "fa-solid fa-shield",
        },
      ];
    
    //   useEffect(() => {
    //     const wrap = document.querySelector(".wrapper");
    //     const side = document.getElementById("mySidenav");
    //     wrap.addEventListener("click", function () {
    //       if (side.style.width >= "200px") {
    //         side.style.width = "0px";
    //       } else {
    //         side.style.width == "300px";
    //       }
    //     });
    //   });
    
    //   useEffect(() => {
    //     AOS.init({ duration: 1000 });
    //   }, []);
  return (
    <div>
         <Navbar />
         <div className="wrapper">
        <Usableitem
        app_main_img={"/images/app_main_img.webp"}
          title="Digital Marketing Services "
          alt_tag="Digital Marketing Services"
          section = "2"
          para="Digital marketing is crucial for enterprises in today's highly competitive market. Our primary objective is to help businesses grow by implementing effective digital marketing solution strategies that generate more leads and increase brand visibility. We understand the importance of utilizing the Internet and digital media to establish connections between companies and potential customers."
        ></Usableitem>
        <div className="row  service-det-container  mt-3">
          <div className="col-md-7 my-2 servicedet-col-1 d-flex justify-content-center p-0 ">
            <img
            height={'100%'}
            width={'100%'}
              className="img-fluid w-100  "
              style={{height:'100%'}}
              src={"/images/marketing_campain.webp"}
              alt="digital marketing company"
              title="digital marketing company"
            />
          </div>
          <div
            className="col-md-4 servicedet-col-2 m-auto "
            style={{ backgroundColor: "lightgoldenrodyellow" }}
          >
            <h2>Digital Marketing Services</h2>
            <div className="capsule">
              <i className="fa-solid fa-check capsule-check"></i>
              <h3 className="h6">SEO Services</h3>
            </div>
            <div className="capsule">
              <i className="fa-solid fa-check capsule-check"></i>
              <h3 className="h6">SMO Services & SMM Service</h3>
            </div>
            <div className="capsule">
              <i className="fa-solid fa-check capsule-check"></i>
              <h3 className="h6">Content Marketing Service</h3>
            </div>
            <div className="capsule">
              <i className="fa-solid fa-check capsule-check"></i>
              <h3 className="h6">PPC Services & Google Ads</h3>
            </div>
            <div className="capsule">
              <i className="fa-solid fa-check capsule-check"></i>
              <h3 className="h6"><Link style={{color:'black',textDecoration:'none'}} href="/web-development-service">Website Development & Website Designing</Link></h3>
            </div>
          </div>
        </div>
        <div className="servicedet-content col-md-10 ">
          <p>
          Our digital marketing services are a complete bouquet of targeted, measurable, and interactive tools for startups and brands to market their products or services. Our internet marketing services include internet marketing techniques, such as search engine optimization (SEO), search engine marketing (SEM) and link building, social media optimization (SMO), social media marketing (SMM), display advertising, email marketing, eBooks and many other forms of digital media. It also extends to non-Internet channels that provide digital media, such as mobile phones (both SMS and MMS), callback, and on-hold mobile ringtones. Due to our array of services we are known as the best digital marketing services agency in India.
          </p>
        </div>
        <div className="ser2-first-container col-md-12 d-flex justify-content-center ">
          <div className="row col-md-10 px-0">
            <h2 className="section-title col-md-12">
              Digital Marketing Benefits
            </h2>
            <p className="col-md-12 text-center">
            Digital Marketing helps to grow your business in the most expected ways. It's used to increase awareness of products and services, connect with customers, and many more things. Digital Marketing provides quick and effective results by reaching your potential customers.
            </p>
          </div>
        </div>
        <div className="row servicedet-qualities mx-auto">
          <div className="col-md-3 servicedet-qualities-col">
            <div className="qual">
              <i className="fa-solid fa-check"></i>
              <h3>Communication Channel</h3>
            </div>
            <div className="qual">
              <i className="fa-solid fa-check"></i>
              <h3>Website Visibility </h3>
            </div>
            <div className="qual">
              <i className="fa-solid fa-check"></i>
              <h3>Mobile-Friendliness of Your Website</h3>
            </div>
          </div>
          <div className="col-md-3 servicedet-qualities-col">
            <div className="qual">
              <i className="fa-solid fa-check"></i>
              <h3>Free Advertisements </h3>
            </div>
            <div className="qual">
              <i className="fa-solid fa-check"></i>
              <h3>Ease of Targeting </h3>
            </div>
            <div className="qual">
              <i className="fa-solid fa-check"></i>
              <h3>Customer Satisfaction</h3>
            </div>
          </div>
          <div className="col-md-3 servicedet-qualities-col">
            <div className="qual">
              <i className="fa-solid fa-check"></i>
              <h3>Quick Popularity & Close Rates</h3>
            </div>
            <div className="qual">
              <i className="fa-solid fa-check"></i>
              <h3>Primary Source of Leads</h3>
            </div>
            <div className="qual">
              <i className="fa-solid fa-check"></i>
              <h3>Establish Brand Awareness </h3>
            </div>
          </div>
          <div className="col-md-3 servicedet-qualities-col">
            <div className="qual">
              <i className="fa-solid fa-check"></i>
              <h3>Better Cost Management</h3>
            </div>
            <div className="qual">
              <i className="fa-solid fa-check"></i>
              <h3>Boosts Traffic to your Website </h3>
            </div>
            <div className="qual">
              <i className="fa-solid fa-check"></i>
              <h3>Increase Brand Recognition</h3>
            </div>
          </div>
        </div>
        <div className="row  col-12 col-md-12 m-0 w-100 img-row mb-5 border-2 border-success p-0 ">
          <img
          height={'50%'}
          width={"100%"}
         src={"/images/marketing.webp"}
         style={{objectFit:'cover'}}
         className="img-fluid"
            alt="online marketing"
            title="online marketing"
          />
        </div>
        <Usableitem
        secondimg={"/images/digital-second.webp"}
          newtitle="Top Digital Marketing Company in India"
          seoVal ={true}
          alt_tag="digital marketing company"
          interLinkPara="<a style='color:black;text-decoration:none' href='/'><strong>ScaleEdge Solutions</strong></a> is the best digital marketing company in India. You avail of our digital marketing services in India for targeted, measurable, and result-oriented deployment of interactive online tools to market your products or services. We leverage digital marketing to promote brands, sell your products, increase user engagement, build preference, and increase sales through various consumer touch points.
         
          At ScaleEdge Solutions, we believe it's all about meaningful and relevant engagement of users with a brand.
          You can easily get your own custom  <a style='color:black;text-decoration:none' href='/software-development-service'><strong>software development</strong> and boost your business. Our online marketing services include technologies and platforms to build your brand franchise so that you can become a global brand.
          "
        ></Usableitem>



<div className="justify-content-center d-flex align-items-center mt-5 col-md-12 flex-column five-edit-container py-3">
<div className=" col-md-10 p-0 my-2">
            <h2 className="section-title col-md-12">
            Why ScaleEdge Solution for Digital Marketing Services In India?
            </h2>
            <p className="col-md-12 text-center ">
            Digital Marketing helps to grow and boost your business in the most expected ways. It's used to increase awareness of products and services, establish meaningful connections with customers, and achieve various other objectives. Digital Marketing provides quick and impactful results by reaching your potential customers and your audience.
            </p>
          </div>
          <Stylishcard contentvalue={contentvalue} />
</div>

        <div className="col-md-12 solution-main-container mt-4 px-0">
          <div className="row mainpage-row">
            <div
              className="col-md-6 mainpage-left-container my-auto"
              data-aos="fade-left"
              data-aos-offset="0"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
            >
              <img
                src={"/images/digital_third.webp"}
                alt="digital marketing services"
                className="img-fluid clipboard-class"
                title="digital marketing services"
                width={'90%'}
                height={'100%'}
       
              />
            </div>
            <div
              className="col-md-6 mainpage-right-container my-auto px-0"
              data-aos="fade-right"
         
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
            >
              <div className="mainpage-headline-container">
                <h2 className="solution-container-header">
                Why is ScaleEdge Solution the No.1 Digital Marketing Company in India?
                </h2>
              </div>
              <p className="section-about col-md-11 p-0">
             <Link href="/" className="text-decoration-none text-dark "> <b> ScaleEdge Solution</b></Link> stands as the top digital marketing company in India for many attractive reasons. The ScaleEdge team is highly skilled professionals and takes a strategic and individual approach to each client. Our team is tailoring digital marketing strategies to meet your specific needs and goals. We have an unwavering commitment to delivering exceptional results. Our team's dedication to staying abreast of the latest industry trends and technologies enables them to provide cutting-edge services. 
                <br />
             
At ScaleEdge Solutions gives priority to achieving customer goals, and customer satisfaction and emphasizes transparency, customer communication, and measurable results. This customer-centric approach coupled with a track record of successful campaigns. That's why it is positioned as the top choice for digital marketing services in India. 

              </p>
            </div>
          </div>
        
        {/* <Testimonial/> */}
        <div className="ser2-first-container col-md-12">
                <h2 className="section-title">
                Frequently Asked Questions (FAQs)<br />
               
                </h2>
              </div>
      
      <div className="col-md-12 d-flex justify-content-center align-items-center ">
        <div className="col-md-10">
        <Faq details={faqdeatil} />
        </div>
        </div>
      </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default page
