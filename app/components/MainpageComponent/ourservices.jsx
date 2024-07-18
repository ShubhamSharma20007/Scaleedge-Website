"use client"
import "../../style/HomeCSS/ourservices.css";
import "../../style/HomeCSS/mainpage.css"
import "../../style/about.css"
import "../../style/contactPage.css"

const ourservices = () => {
  return (
    <>
      <div className="col-md-12 service-main-container">
        <div
          className="row cate-subcontainer "
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="300"
          data-aos-once="false"
        >
          <p className="section-subtitle" id="dropId">What We Offer's</p>
          <div className="section-title-div col-md-8 mb-2">
            <h2 className="section-title">
            EXPLORE OUR SERVICES
      

            </h2>
          </div>
        </div>
        <div className="row col-md-12 justify-content-center align-items-center m-auto ">
          <div className="row col-md-10  p-0">
            <div
              className="col-md-4 p-0 ourserv px-2"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-duration="200"
              data-aos-once="false"
              data-aos-delay="100"
            >
              <div className="service-shape">
                <img
                height={'100%'}
                width={'100%'}
                  src={"/images/threebar.webp"}
                  alt="tringle-shape"
                  title="tringle-shape"
                 
                />
              </div>
              <div className="inner-icon-container">
                <div className="fix-value">
                  <div className="service-icon">
                    <img
                    height={'25%'}
                    width={'25%'}
                      src={"/images/bluetrio.webp"}
                      alt="tringle-shape"
                      title="tringle-shape"
                     
                    />
                  </div>
                  <div className="innericon">
                    <span>
                      <i class="fa-solid fa-plug fa-2x"></i>
                    </span>
                  </div>
                </div>
                
                <div className="sevice-card-context my-3 ">
                  <h3 className="text-capitalize">Custom Software Development</h3>
                  <p >
                    Unlock the full potential of your business with custom
                    software solutions designed around your unique needs and
                    objectives.
                  </p>
                  <a  className='magnetic topid'  href="/software-development-service">View More</a>
                </div>
                {/* <div className="service-card-link">
                  <a href="">
                    Read More<i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div> */}
              </div>
            </div>

            <div
              className="col-md-4 p-0 ourserv px-2"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-easing="ease-in-sine"
              data-aos-mirror="true"
              data-aos-duration="300"
              data-aos-once="false"
              data-aos-delay="200"
             
            >
              <div className="service-shape">
              <img
                height={'100%'}
                width={'100%'}
                  src={"/images/threebar.webp"}
                  alt="tringle-shape"
                  title="tringle-shape"
                 
                />
              </div>
              <div className="inner-icon-container">
                <div className="fix-value">
                  <div className="service-icon">
                    <img
                    height={'25%'}
                    width={'25%'}
                      src={"/images/yellowtrio.webp"}
                      alt="tringle-shape"
                      title="tringle-shape"
                     
                    />
                  </div>
                  <div className="innericon">
                    <span>
                      <i class="fa-solid fa-plug fa-2x"></i>
                    </span>
                  </div>
                </div>
                <div className="sevice-card-context my-3 mx-1">
                  <h3 className="text-capitalize">Web Development and Design</h3>
                  <p>
                    Create a captivating online presence that engages and
                    converts visitors into customers with our web development
                    and design services.
                  </p>
                  <a  className='magnetic topid'  href="/web-development-service">View More</a>
                </div>
                {/* <div className="service-card-link">
                  <a href="">
                    Read More<i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div> */}
              </div>
            </div>

            <div
              className="col-md-4 p-0 ourserv px-2"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
              data-aos-once="false"
          
            >
              <div className="service-shape">
                <img
                height={'100%'}
                width={'100%'}
                  src={"/images/threebar.webp"}
                  alt="tringle-shape"
                  title="tringle-shape"
                 
                />
              </div>
              <div className="inner-icon-container">
                <div className="fix-value">
                  <div className="service-icon">
                    <img
                    height={'25%'}
                    width={'25%'}
                      src={"/images/pinktrip.webp"}
                      alt="tringle-shape"
                      title="tringle-shape"
                     
                    />
                  </div>
                  <div className="innericon">
                    <span>
                      <i class="fa-solid fa-plug fa-2x"></i>
                    </span>
                  </div>
                </div>
                <div className="sevice-card-context my-3 mx-1">
                  <h3 className="text-capitalize">Digital Marketing Services</h3>
                  <p>
                    Harness the power of digital marketing to reach and engage
                    your target audience, driving growth and revenue.
                  </p>
                  <a  className='magnetic topid'  href="/digital-marketing-service">View More</a>
                </div>
                {/* <div className="service-card-link">
                  <a href="">
                    Read More<i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="row col-md-12 justify-content-center align-items-center m-auto ">
          <div className="row col-md-10  p-0">
            <div
              className="col-md-4 p-0 ourserv px-2"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
              data-aos-once="false"
     
            >
              <div className="service-shape">
                <img
                height={'100%'}
                width={'100%'}
                  src={"/images/threebar.webp"}
                  alt="tringle-shape"
                  title="tringle-shape"
                 
                />
              </div>
              <div className="inner-icon-container">
                <div className="fix-value">
                  <div className="service-icon">
                    <img
                    height={'25%'}
                    width={'25%'}
                      src={"/images/bluetrio.webp"}
                      alt="tringle-shape"
                      title="tringle-shape"
                     
                    />
                  </div>
                  <div className="innericon">
                    <span>
                      <i class="fa-solid fa-plug fa-2x"></i>
                    </span>
                  </div>
                </div>
                <div className="sevice-card-context my-3 mx-1">
                <h3>Mobile App Development</h3>
                  <p>
                    Scale your business with mobile app development. Our custom mobile app development solutions
                   provide flexibility, security, and scalability.
                  </p>
                  <a  className='magnetic topid'  href="/app-development-service">View More</a>
                 
                </div>
                {/* <div className="service-card-link">
                  <a href="">
                    Read More<i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div> */}
              </div>
            </div>

            <div
              className="col-md-4 p-0 ourserv px-2"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
              data-aos-once="false"

            >
              <div className="service-shape">
              <img
                height={'100%'}
                width={'100%'}
                  src={"/images/threebar.webp"}
                  alt="tringle-shape"
                  title="tringle-shape"
                 
                />
              </div>
              <div className="inner-icon-container">
                <div className="fix-value">
                  <div className="service-icon">
                    <img
                    height={'25%'}
                    width={'25%'}
                      src={"/images/yellowtrio.webp"}
                      alt="tringle-shape"
                      title="tringle-shape"
                     
                    />
                  </div>
                  <div className="innericon">
                    <span>
                      <i class="fa-solid fa-plug fa-2x"></i>
                    </span>
                  </div>
                </div>
                <div className="sevice-card-context my-3 mx-1">
                <h3 >Data Analytics</h3>
                  <p>
                    Make informed decisions with data-driven insights. Our data
                    analytics services empower you to unlock the value of your
                    data.
                  </p>
                </div>
                {/* <div className="service-card-link">
                  <a href="">
                    Read More<i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div> */}
              </div>
            </div>

            <div
              className="col-md-4 p-0 ourserv px-2"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300"
              data-aos-once="false"

            >
              <div className="service-shape">
              <img
                height={'100%'}
                width={'100%'}
                  src={"/images/threebar.webp"}
                  alt="tringle-shape"
                  title="tringle-shape"
                 
                />
              </div>
              <div className="inner-icon-container">
                <div className="fix-value">
                  <div className="service-icon">
                    <img
                    height={'25%'}
                    width={'25%'}
                      src={"/images/pinktrip.webp"}
                      alt="tringle-shape"
                      title="tringle-shape"
                     
                    />
                  </div>
                  <div className="innericon">
                    <span>
                      <i class="fa-solid fa-plug fa-2x"></i>
                    </span>
                  </div>
                </div>
                <div className="sevice-card-context my-3 mx-1">
                  <h3>IT Consulting & Cloud Solutions</h3>
                  <p>
                    Optimize your IT infrastructure & Cloud Solutions with strategic guidance from
                    our experts. Our cloud
                    solutions provide flexibility, security, and scalability.
                  </p>
                </div>
                {/* <div className="service-card-link">
                  <a href="">
                    Read More<i class="fa-solid fa-arrow-right"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ourservices;
