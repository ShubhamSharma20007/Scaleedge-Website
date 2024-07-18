"use client"
import React from "react";

import { useEffect } from "react";
import "../../style/HomeCSS/companyserver.css";
import { gsap, Power3 } from "gsap";

const companyserver = () => {
  

  return (
    <>
      <div className="col-md-12 country-server-container">
        <div className="col-md-10 country-second-container ">
          <div className="row ">
            <div
              className="country-section-box col-md-12 mb-4"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
              data-aos-once="false"
            >
              <p className="country-title"> We Are Best</p>
              <h2 className="country-subtitle ">Counter Industries Server</h2>
            </div>
            <div className="parent-describe col-md-12 m-0 ">
              <div className="row parent-sub-container m-0 ">
                <div
                  className="col-md-3 first-describe"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="300"
                  data-aos-once="false"
                  data-aos-delay="100"
                >
                  <div className="country-text">
                    <p className="country-text-title">Work Per Week</p>
                  </div>
                  <div className="country-icon">
                    <span>
                      <i class="fa-solid fa-rocket"></i>
                    </span>
                  </div>
                  <div className="country-text-second">
                    <span className="counter">
                      <span>12</span>K
                    </span>
                  </div>
                </div>
                <div
                  className="col-md-3 second-describe"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="300"
                  data-aos-once="false"
                  data-aos-delay="200"
                >
                  <div className="country-text">
                    <p className="country-text-title">Keywords Updated</p>
                  </div>
                  <div className="country-icon">
                    <span>
                      <i class="fa-regular fa-message"></i>
                    </span>
                  </div>
                  <div className="country-text-second">
                    <span className="counter">
                      <span>99</span>+
                    </span>
                  </div>
                </div>
                <div
                  className="col-md-3 third-describe"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="300"
                  data-aos-once="false"
                  data-aos-delay="300"
                >
                  <div className="country-text">
                    <p className="country-text-title">Indexed Google</p>
                  </div>
                  <div className="country-icon">
                    <span>
                      <i class="fa-regular fa-envelope"></i>
                    </span>
                  </div>
                  <div className="country-text-second">
                    <span className="counter">
                      <span>5</span>K
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="earth-dot-one ">
              <img
                height={'100%'}
                width={'100%'}
                src={"/images/blackearthdot.webp"}
                title="earthdot"
                alt="earthdot"
                className="w-100"
               
              />
            </div>
            <div className="earth-dot-second ">
              <img
              height={'100%'}
              width={'100%'}
                src={"/images/blackearthdot.webp"}
                title="earthdot"
                alt="earthdot"
                className="w-100"
               
              />
            </div>
          </div>
          <div className="earth-dot-second ">
            <img
            height={'100%'}
            width={'100%'}
              src={"/images/blackearthdot.webp"}
              title="earthdot"
              alt="earthdot"
             
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default companyserver;
