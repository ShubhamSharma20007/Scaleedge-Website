"use client"
import React, { useEffect } from "react";;
import "../../style/HomeCSS/oursolution.css";
import "../../style/contactPage.css";


const oursolution = () => {

  useEffect(() => {
    const Changevalue = () => {
      const buttons = document.querySelectorAll(".solution-subcate");
      const head = document.querySelector('.lamp-head');
      const subtitle = document.querySelector('.lamp-subtitle');
      buttons.forEach(button => {
        button.addEventListener("click", () => {
          const spanValue = button.querySelector('span').textContent;
          if (spanValue === 'Inventory Management') {
            head.innerHTML = "The Stockedge";
            subtitle.innerHTML = "This inventory management system empowers businesses to efficiently track, manage, and organize their stock. the application ensures real-time updates, seamless data synchronization, and a user-friendly interface for streamlined inventory control and optimization";
          
          } else if (spanValue === 'Attendance System') {
            head.innerHTML = "The Hredge";
            subtitle.innerHTML = "This attendance system project provides a robust solution for tracking and managing attendance records, offering features such as real-time data updates, user-friendly interfaces, and comprehensive reporting to streamline and enhance attendance monitoring in various organizational settings.";
          } else if (spanValue === 'Web Development') {
            head.innerHTML = "OneKlick Project ";
            subtitle.innerHTML = "This OneKlick website is a streamlined platform designed for simplicity, enabling users to accomplish various tasks with a single click, delivering an intuitive and efficient online experience.";
          }
        });
      });
      return () => {
        buttons.forEach(button => {
          button.removeEventListener('click', Changevalue);
        });
      };
    };
  
    Changevalue();
  }, []);

  const customStyle=
    {
      width: "57px",
      height: "57px",
      
    }
  
  return (
    <>
      <div className="col-md-12 p-0 solution-main-container">
        <div className="row mainpage-row">
          <div
            className="col-md-6 mainpage-left-container d-flex justify-content-center align-content-center"
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="300"
          >
            <img
            width={'100%'}
              height={'100%'}
              src={"/images/meeting.webp"}
              alt="software development services"
              className="img-fluid"
             
              title="software development services"
            />
          </div>
          <div
            className="col-md-6 mainpage-right-container m-auto"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            data-aos-duration="300"
          >
            <p className="section-subtitle">Our Company Solution</p>
            <div className="mainpage-headline-container">
              <h3 className="solution-container-header">
              Innovate. Implement. Impact
              </h3>
            </div>
            <p className="section-about col-md-11 text-start p-0">
            We start by fostering innovation, seeking fresh ideas, and pushing the boundaries of what's possible. Then, we move swiftly to implementation, turning concepts into reality with precision and dedication. Ultimately, the true measure of our success lies in the profound impact we make, not only within our organization but also on the industries we serve, as we drive change and inspire progress.
            </p>
            <div className="solution-inline">
              <div className="inline_block block-one">
                <h4 className="solution-subcate h6 mb-0 ">
                <span>Attendance System</span>
              
                </h4>
              </div>
              <div className="inline_block2 inline_block block-second">
                <h4 className="solution-subcate h6 mb-0 ">
                <span>Inventory Management</span>
                </h4>
              </div>
              <div className="inline_block3 inline_block block-third">
                <h4 className="solution-subcate h6 mb-0 ">
                  <span>Web Development</span>
                </h4>
              </div>
            </div>
            <div className="lamp-section col-md-12  mt-3 p-0">
              <div className="row lamp-sec w-full flex-wrap ">
                <div className="left-lamp d-flex">
                  <img
                  width={'100%'}
                  height={'100%'}
                    src={"/images/lamp.webp"}
                    title="lamp-img"
                    className="img-fluid"
                   
                    alt="lamp-img"
                    style={customStyle}
                  />
                  <div className="right-lamp  ">
                  <h4 className="lamp-head text-capitalize">Tap Above and checkout ours latest projects</h4>
                  <p className="lamp-subtitle "></p>
                </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default oursolution;
