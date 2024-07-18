"use client"
import React from 'react'
import { useEffect } from 'react';
import "../../style/service03.css";
import Navbar from '@/app/components/Navbar/navbar'
import Footer from '@/app/components/Footer/footer'
import Usableitem from "../../components/Useableitem/useableitem";
import Service02second from "../../components/Useableitem/service02second"
import Stylishcard from "../../components/Useableitem/stylishcard";
// import "aos/dist/aos.css";
import '../../style/service01.css';
import '../../style/service04.css';
import "../../style/HomeCSS/mainpage.css"
import "../../style/HomeCSS/ourabout.css"
import "../../style/HomeCSS/oursolution.css"
// import AOS from "aos";
import Faq from "../../components/FAQ/faq";
import Cards from "../../components/Useableitem/cards";
import Link from 'next/link';

const page = () => {
    const iconcontainer = [
        {
          img: "fa-brands fa-apple m-auto fa-5x",
        },
        {
          img: "fa-brands fa-android m-auto fa-5x",
        },
        {
          img: "fa-brands fa-java m-auto fa-5x",
        },
        {
          img: "fa-brands fa-php m-auto fa-5x",
        },
        {
          img: "fa-brands fa-node fa-5x m-auto",
        },
    
        {
          img: "fa-brands fa-magento fa-5x m-auto",
        },
        {
          img: "fa-brands fa-salesforce fa-5x m-auto",
        },
        {
          img: "fa-brands fa-wordpress fa-5x m-auto",
        },
        {
          img: "fa-brands fa-shopify fa-5x m-auto",
        },
        {
          img: "fa-brands fa-angular fa-5x m-auto",
        },
        {
          img: "fa-brands fa-python fa-5x m-auto",
        },
        {
          img: "fa-brands fa-vuejs fa-5x m-auto",
        },
        {
          img: "fa-brands fa-unity fa-5x m-auto",
        },
        {
          img: "fa-brands fa-react fa-5x m-auto",
        },
        {
          img: "fa-brands fa-html5 fa-5x m-auto",
        },
      ];
      const faqdeatil = [
        {
          question: "Q1. What are the benefits of software development? ",
          answer:
            "The benefits of software development are increased efficiency, lower costs, real-time data access, scalability, and quality. The software offers enhanced efficiency, tailored solutions, and innovation. It streamlines processes, automates tasks, and provides businesses with custom tools to meet specific needs.",
        },
        {
          question: " Q2. What software development services do you provide?",
          answer:
            "ScaleEdge Solution provides a wide range of software services like custom software development, mobile app development, web application development, and cloud solutions. Our services are designed to cater to various industries and business sizes.",
        },
        {
          question:
            " Q3. How long does it take to develop custom software? ",
          answer:
            "Custom software development timelines vary depending on project complexity, required features, and client specifications. We provide a detailed project timeline, keeping you informed every step of the way to ensure transparency and meet your expectations.",
        },
        {
          question:
            " Q4. What kind of support do you provide after launching the software?",
          answer:
            "We provide ongoing support and maintenance services to resolve any issues, apply updates, and ensure the continued smooth operation of your software. Our dedicated support team is just a message or call away.",
        },
        {
          question:
            "Q5. How can the software benefit my business? ",
          answer:
            "Software integration streamlines processes by connecting different software applications and systems, allowing them to work together seamlessly. It can increase efficiency, reduce manual work, and provide a holistic view of your business operations.",
        },
        {
          question:
            "Q6. What industries do you specialize in for software services?",
          answer:
            "Our expertise spans a variety of industries including finance, healthcare, retail, human resources, manufacturing, and education. We take a consultative approach to understanding the unique challenges of each industry, providing custom software solutions tailored to specific business needs.",
        },
      ];
      const content = [
        {
          maintitle: "Benefits of Software Development ",
          subpara:
            "Software development offers many benefits that have a revolutionary impact on corporations by providing possibilities for future growth, more revenue, and increased user engagement.",
        },
      ];
      const contentvalue = [
        {
          title: "Easy Customization",
    
          subtitle: "Our Softwater services are designed with a user-friendly interface, allowing you to customize every corner with ease. Embrace the freedom to tailor your software to match your unique business identity.",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "false",
          icon: "fa-solid fa-filter",
        },
        {
          title: "Enhanced Productivity",
          subtitle:
            "Our software is designed to streamline processes, automate mundane tasks, and boost overall efficiency. Watch as your team conquers tasks with new speed and accuracy.",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "false",
          points: "Today, I am getting so  tired ",
          icon: "fa-brands fa-product-hunt",
        },
        {
          title: "Consistent Support & Maintenance",
          subtitle:
            "Our support and maintenance teams are your trusted partners, ensuring that your software runs smoothly. From bug-squashing to updates, we've got your back every step of the way, ensuring consistent performance.",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "false",
          icon: "fa-solid fa-gear",
        },
        {
          title: "Cost Effectiveness and Highly Scalable",
          subtitle:
            "Our cost-effective software is designed to fit your budget without compromising quality. Our highly scalable solutions grow with you, ensuring a seamless transition to success.",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "false",
          icon: "fa-solid fa-coins",
        },
        {
          title: "High Security and High Quality Development",
          subtitle:
            "Our high-security measures make your software an impenetrable fortress, protecting your information from cyber threats.",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "false",
          icon: "fa-solid fa-shield-halved",
        },
        {
          title: "Easy Integration with Mobile App",
          subtitle:
            "We help ambitious businesses like yours generate more profits to be building driving web traffice",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "false",
          icon: "fa-solid fa-layer-group",
        },
      ];
      const contentsecond = [
        {
          title: "Bank Software Development",
          para: "Our bank software development brings innovation to your life. Experience seamless transactions, strong security features, and a user-friendly interface that redefines the way you manage your finances.",
          icon: "/images/service-one.webp",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "false",
        },
        {
          title: "Insurtech Software Development",
          para: "Our InsurTech software service is not just about policies; It's about creating experiences. Streamline claims, enhance customer interactions, and revolutionize the insurance landscape with our cutting-edge solutions.",
          icon: "/images/service-second.webp",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "false",
        },
        {
          title: "Healthcare Software Development",
          para: "Our healthcare software goes beyond digitizing records. It's about enhancing patient care, optimizing workflows, and fostering collaboration. Experience a healthier tomorrow with our innovative healthcare solutions.",
          icon: "/images/service-third.webp",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "false",
        },
        {
          title: "eCommerce Software Development",
          para: "Our e-commerce software services are the gateway to your strong online presence. From user-friendly interfaces to secure payment gateways, we create solutions that effortlessly convert browsers into buyers.",
          icon: "/images/service-one.webp",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "false",
        },
        {
          title: "Blockchain Software Development",
          para: "Our blockchain software solutions open the door to a new era of trust and transparency. Be it secure transactions or smart contracts, we harness the power of blockchain to redefine the way you do business.",
          icon: "/images/service-second.webp",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "false",
        },
        {
          title: "IoT Software Development",
          para: "Our IoT software services change the way devices communicate. From smart homes to industrial automation, we create solutions that connect the physical and digital worlds, making your environment smarter and more efficient.",
          icon: "/images/service-third.webp",
          dataaos: "fade-up",
          dataoffset: 0,
          easing: "ease-in-sine",
          duration: 100,
          repeatation: "false",
        },
      ];
    
      const accessbility = [
        {
          title: "Quality Product",
          para: "As one of the top software development companies in the world, our expert software developers build the most promising and profitable software applications, resulting in industry-grade quality products.",
        },
        {
          title: "Client-focused Development",
          para: "Our client-focused software development services cater to fulfill all business demands and develop scalable software solutions that help businesses and startups expand their services over time easily.",
        },
        {
          title: "Transparent Communication",
          para: "Our skillful software development team provides complete transparency at every stage of the development process. We keep our clients updated with outcomes and find balance in cases of different time zones.",
        },
        {
          title: "Innovative Technology Stack",
          para: "We have become the best software development company in the industry by constantly upgrading our custom software development solutions & tech stack, such as offering cross-platform development solutions.",
        },
        {
          title: "Excellent User Experience",
          para: "We believe in providing end users with a mind-blowing overall usability experience through our top-notch Software development services.",
        },
        {
          title: "Confidentiality & Security",
          para: "We sign NDAs with our clients, ensuring the confidentiality and security of your project ideas and important associated information.",
        },
      ];
      // useEffect(() => {
      //   AOS.init();
      // });
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
    
  return (
    <div>
      <Navbar></Navbar>
      <div className="wrapper">
        <Usableitem
          title="Software Development Services"
          section="2"
          alt_tag = "Software Development Services"
          para="As the best software development company in India, ScaleEdge Solution offers the most advanced software development solutions by using the full potential of modern technological solutions, such as AI, IoT, ML, Blockchain, AR, VR, etc. We help our clients in staying ahead of the competition, attract their target audience, and expand business services by building inventive solutions."
          app_main_img={"/images/software_main.webp"}
        />
        <div className="ser2-first-container col-md-12 d-flex justify-content-center px-0  mt-0 ">
          <div className="col-md-12 solution-main-container p-0">
            <div className="row mainpage-row flex-row-reverse justify-content-between">
              <div
                className="col-md-6 mainpage-right-container my-auto  p-0"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-easing="ease-in-sine"
                data-aos-duration="300"
              >
                <div className="mainpage-headline-container ">
                  <h2
                    className="solution-container-header col-md-12 p-0"
                    style={{ textAlign: "start" }}
                  >
                    Why Choose ScaleEdge Solution for Software  Development
                    Services?
                  </h2>
                </div>
                <p className="section-about col-md-11 sec-sec p-0">
                <Link href="/" className="text-decoration-none text-dark" ><strong>ScaleEdge Solution</strong></Link> is a top software development company in India. We provide one of the most rich and profitable software application development services. We have served many global businesses, organizations, and startups. Our custom software development solutions have been in demand among tech giants across various industry sectors like healthcare, education, e-commerce, finance, etc. <br />
                We provide the most experienced and innovative team of software developers at your request. Our talented software development team can handle complex projects and find the most creative solutions to meet all your business needs and requirements. Choose our skilled software developers for your next project.
                </p>
                <div
                  className="solution-inline my-2"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <div className="divided">
                    <div className="inline_block inline_block">
               
                      <h3 className="h6"><Link style={{color:'black',textDecoration:'none'}} href="/app-development-service">Custom Mobile App Development</Link></h3>
                    </div>
                    <div className="inline_block2 inline_block">
                      <h3 className="solution-subcate">
                        <span>Dedicated Developers</span>
                      </h3>
                    </div>
                    <div className="inline_block3 inline_block ">
                      <h3 className="solution-subcate">
                        <span>Excellent User Experience</span>
                      </h3>
                    </div>
                  </div>
                  <div className="divided">
                    <div className="inline_block4 inline_block ">
                      <h3 className="solution-subcate">
                        <span>Confidentiality & Security</span>
                      </h3>
                    </div>

                    <div className="inline_block5 inline_block ">
                      <h3 className="solution-subcate">
                        <span>On-time and In-budget</span>
                      </h3>
                    </div>
                    <div className="inline_block6 inline_block ">
                      <h3 className="solution-subcate">
                        <span>Support & Maintenance</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-5 mainpage-left-container my-auto p-0"
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-easing="ease-in-sine"
                data-aos-duration="300"
              >
                <img
                height={"100%"}
                width={"100%"}
                  src={"/images/softwareDevelop.webp"}
                  alt="custom software development services"
                  className="img-fluid "
                  title="custom software development services"
                 
                />
              </div>
            </div>
          </div>

          <div className="four-edit-container py-0 mt-5">
            <Stylishcard contentvalue={contentvalue} content={content} />
          </div>
          <div className="ser2-first-container col-md-12 d-flex justify-content-center mb-0 py-3  edit-container-three">
            <div className="row col-md-10 p-0">
              <h2 className="section-title col-md-12 ">
                Select Your Software Development <br /> Platform{" "}
              </h2>
              <p className="col-md-12 text-center">
              Our skilled software developers create attractive, interactive and attractive software applications for your businesses to attract the target audience. If you choose software development for your business, you can avail many benefits that empower your business to stay relevant, connect with the audience, and thrive in this software-dominated world.
              </p>
            </div>
            <Service02second contentsecond={contentsecond} />
          </div>
        </div>
        <div className="col-md-12 main-page-container-second  mt-3 p-0">
          <div className="row mainpage-row">
            <div
              className="col-md-6 mainpage-left-container"
              data-aos="fade-right"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="200"
            >
              <img
                src={"/images/software_second.webp"}
                height={"100%"}
                alt="offshore software development "
                className="img-fluid "
                title="offshore software development "
                width={"90%"}
               
              />
            </div>
            <div
              className="col-md-6 mainpage-right-container  my-auto"
              data-aos="fade-left"
              data-aos-offset="0"
              data-aos-easing="ease-in-sine"
              data-aos-duration="200"
            >
              <div className="mainpage-headline-container">
                <h2
                  className="main-page-container-header"
                  style={{ fontSize: "45px" }}
                >
                  Software Development Process We Follow
                </h2>
              </div>
              <p className="section-about col-md-11 text-start p-0">
              Our software development process is more than just a sequence of steps.  We use best-in-class methodologies and processes to provide futuristic software solutions to our customers. We are your partner in creating a digital masterpiece that leaves a lasting impression. 

              </p>

              <div className="col-md-10 about-title-content">
                <div className="row col-md-12 p-1">
                  <div className="col col-class ">
                    <div className="about-subtitle col-md-12">
                      <div className="about-icon">
                        <i
                          class="fa-regular fa-square-check"
                          style={{ color: "#FFDC60" }}
                        ></i>
                      </div>
                      <h3 className="h6 font-weight-normal py-1">Consultancy</h3>
                    </div>
                    <div className="about-subtitle col-md-12">
                      <div className="about-icon">
                        <i
                          class="fa-regular fa-square-check"
                          style={{ color: "#FFDC60" }}
                        ></i>
                      </div>
                      <h3 className="h6 font-weight-normal py-1">UI/UX Design</h3>
                    </div>
                    <div className="about-subtitle col-md-12">
                      <div className="about-icon">
                        <i
                          class="fa-regular fa-square-check"
                          style={{ color: "#FFDC60" }}
                        ></i>
                      </div>
                      <h3 className="h6 font-weight-normal py-1">Development</h3>
                    </div>
                  </div>

                  <div className="col col-class">
                    <div className="about-subtitle col-md-12">
                      <div className="about-icon">
                        <i
                          class="fa-regular fa-square-check"
                          style={{ color: "#FFDC60" }}
                        ></i>
                      </div>
                      <h3 className="h6 font-weight-normal py-1">Testing and QA</h3>
                    </div>
                    <div className="about-subtitle col-md-12">
                      <div className="about-icon">
                        <i
                          class="fa-regular fa-square-check"
                          style={{ color: "#FFDC60" }}
                        ></i>
                      </div>
                      <h3 className="h6 font-weight-normal py-1">Deployment</h3>
                    </div>
                    <div className="about-subtitle col-md-12">
                      <div className="about-icon">
                        <i
                          class="fa-regular fa-square-check"
                          style={{ color: "#FFDC60" }}
                        ></i>
                      </div>
                      <h3 className="h6 font-weight-normal py-1">Maintenance & Support</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Cards iconcontainer={iconcontainer} />
          <div className="ser2-first-container col-md-12">
                <h3 className="section-title">
                Frequently Asked Questions (FAQs)<br />
               
                </h3>
              </div>
          <div className="col-md-12 d-flex justify-content-center align-items-center">
          <div className="col-md-10 flex justify-content-center">
          <Faq details={faqdeatil} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default page
