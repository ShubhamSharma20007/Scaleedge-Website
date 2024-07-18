"use client"
import React, { useEffect } from "react";
import '@/app/style/navbar.css'
import Link from "next/link";

import { useRef } from "react";
import { useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
export default function navbar() {

  // magnetic effect
  useEffect(() => {
    const btns = document.querySelectorAll(".magnetic");

    btns.forEach((btn) => {
      // const rect = btn.getBoundingClientRect();
      
      btn.addEventListener('mousemove', (e) => {
        const x = e.offsetX
        const y = e.offsetY
        const btnWidth = btn.clientWidth;
        const btnHeight = btn.clientHeight;

        const transX = x - btnWidth / 2;
        const transY = y - btnHeight / 2;

        gsap.to(btn, {
          x: transX,
          y: transY,
          ease: 'ease',
          duration:0.3,
          
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          ease: 'ease'
        });
      });
    });
  }, []);
  


  function openNav() {
    document.getElementById("mySidenav").style.transform ='translateX(0px)';

    if(window.innerWidth < 767){
      document.getElementById("mySidenav").style.left ='0';
    } 
  }

  function closeNav() {
    document.getElementById("mySidenav").style.transform ='translateX(350px)';
    if(window.innerWidth < 767){
      document.getElementById("mySidenav").style.left ='100%';
    } 
  }

 


  useEffect(()=>{
    document.addEventListener("DOMContentLoaded", function () {
        const closebtn = document.getElementById("close");
        const openbtn = document.getElementById("bars-icon");
        openbtn.addEventListener("click", openNav);
        closebtn.addEventListener("click", closeNav);
      });
    
  },[])
  useEffect(() => {
    function handlesize() {
      const fullysidebar = document.querySelector(".aling-value");
      const navitem = document.querySelectorAll(".dropdown");
      const mobilenav = document.querySelector(".mobile-nav");
      navitem.forEach(function (value) {
        if (window.innerWidth < 1150) {
          
          fullysidebar.style.display = "none";
          value.style.display = "none";
          mobilenav.style.display = "block";
        } else {
          fullysidebar.style.display = "block";
          value.style.display = "block";
          mobilenav.style.display = "none";
        }
      });
    }

    handlesize();
    window.addEventListener("resize", handlesize);

    return () => {
      window.removeEventListener("resize", handlesize);
    };
  }, []);

  useEffect(() => {
    const allContainer = document.querySelectorAll([
      ".main-page-container",
      ".cate-main-container",
      ".main-page-container-second",
      ".country-server-container",
      ".server-main-container",
      ".socialmedia-main-container",
      ".solution-main-container",
      ".testimonial-main-container",
      ".footer-small",
  
    ]);
    const side = document.getElementById("mySidenav");

    allContainer.forEach((ele) => {
      ele.addEventListener("click", () => {
        if (side.style.width >= "200px") {
          side.style.width = "0px";
        } else {
          side.style.width == "300px";
        }
      });
    });
  });
  const ScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const navbuttons = document.querySelectorAll(".dropbtn");
    navbuttons.forEach((ele) => {
      ele.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "instant",
        });
      });
    });
  });

  const navbar = useRef(null);
  let previousScroll = 0;

  function handleScrollNavbar() {
    const currentScrollValue =  window.scrollY;
    const navbarHeight = navbar.current?.getBoundingClientRect()?.height || 120;
    if (navbar && navbar.current) {
      navbar.current.style.transform = currentScrollValue >= previousScroll
        ? `translateY(-${navbarHeight}px)`
        : `translateY(0px)`;
    }
    

    previousScroll = currentScrollValue;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollNavbar);

    return () => {
      window.removeEventListener('scroll', handleScrollNavbar);
    }
  });


  gsap.registerPlugin(useGSAP);
  const ball =  useRef(null)
  useGSAP(()=>{
    window.addEventListener("mousemove", (e) => {
      gsap.to(ball.current,{
        x:e.clientX,
        y:window.location.pathname === "/" 
        ? e.clientY - 200 
        : window.location.pathname === "/hredge" 
          ? e.clientY - 150 
          : window.location.pathname === "/web-development-service" ||  window.location.pathname === "/app-development-service" || window.location.pathname === "/software-development-service"|| window.location.pathname === "/digital-marketing-service" ? e.clientY-150
          : e.clientY ,
        duration:0.6,
        opacity:1,
        zIndex:999,
        ease:"power1.out"
      })
    })
  },{scope:ball.current})

  return (
    <>
       <div id="circle-round" ref={ball}></div>
      <section className="navbar-container w-100  " ref={navbar} style={{transition:'transform 0.6s ease'}}>
        <img
          src={"/images/roundblue.webp"}
          alt="round-icon"
          title="round-icon"
          className="roundblue img-fluid"
  
        />

        <div className="row w-100" id="nav-context">
          <div className="left-nav-container  ">
            <div className="wingimg-container">
              <img
              height={"60%"}
              width={'60%'}
                src={"/images/yellowwing.webp"}
                className="imgwing img fluid"
                alt="design-wing"
                title="design-wing"
               
              />
            </div>
            <div className="fluid-class img-fluid">
              <img
              height={"100%"}
              width={'100%'}
                src={"/images/scaleedge.webp"}
                alt="scaleedge logo"
                style={{width:"150px"}}
                className=" com-logo"
                title="scaleedge logo"
               
              />
            </div>
          </div>
          <div className="right-nav-container ">
            <ul className="nav-unorder col-md-12">
              <div className="dropdown">
                <li className="home dropbtn ">
                  <Link href={"/"}>Home</Link>
                </li>
              </div>

              <div className="dropdown">
                <li className="home dropbtn ">
                  <Link href={"/about"}>About</Link>
                </li>
              </div>

              <div className="dropdown">
                <li className="home  dropbtn ">
                  Service <i className="fa-solid fa-angles-down"></i>
                </li>

                <div className="dropdown-content mb-2">
                  <Link href={"/app-development-service"}>Mobile App</Link>
                  <Link href={"/web-development-service"}>Web Service</Link>
                  <Link href={"/software-development-service"}>
                    Software Service
                  </Link>
                  <Link href={"/digital-marketing-service"}>Marketing Service</Link>
                  {/* <Link href={"/martonline"}>Mart Online</Link> */}
                  <Link href={"/hredge"}>Hr System</Link>

                </div>
              </div>

              {/* <div className="dropdown">
                <li className="home dropbtn">
                  <Link to="/blog">Blog</Link>
                </li>
              </div> */}
              <div className="dropdown">
                <li className="home magnet-home  dropbtn">
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </div>
              <div className="btn-wrapper magnetic">
              <div className="query-section dropdown query-section-btn ">
                <a href="https://api.whatsapp.com/send?phone=9251697397" method="get" target="__blank">Get A Query</a>
              </div>
              </div>
              <i
                className="fa-solid fa-bars nav-bar-logo fluid-container bar-i"
                id="bars-icon"
                onClick={openNav}
              ></i>

              
            </ul>
          </div>
        </div>
      </section>
      <div id="mySidenav" className="sidenav">
                <div className="align-wrap">
                  <div className="aling-value">
                    <p
                      className="closebtn"
                      id="close"
                      onClick={closeNav}
                      style={{ cursor: "pointer" }}
                    >
                      &times;
                    </p>
                    <div className="empty">
                      <img
                      height={'60%'}
                      width={'60%'}
                        src={"/images/scaleedge-white-logo.webp"}
                        alt="scaleedge-side-logo"
                        title="scaleedge-side-logo"
                        className="img-fluid mb-2"
                      />
                    </div>
                    <div className="sidenav-para">
                      <p className="text-start">
                      At ScaleEdge Solutions , we believe in providing the easiest solution to the most challenging problem. Contact us today and discuss how our expert can benefit your business.
                      </p>
                      <hr className="hr-tag" />
                      <div className="sidebar-title">
                        <p>Get In Touch</p>
                      </div>
                      <div className="contact-sidebar-section col-md-12">
                        <div className="col-md-3">
                          <i className="fa-regular fa-envelope fa-2x compartment "></i>
                        </div>
                        <div className="label-section col-md-9" >
                          <a href="mailto:info@scaleedge.in" className="text-decoration-none" >
                          <p >
                            <strong >Email </strong>
                          </p>
                          <p >
                            <strong >info@scaleedge.in</strong>
                          </p>
                          </a>
                        </div>
                      </div>
                      <div className="contact-sidebar-section col-md-12">
                        <div className="col-md-3">
                          <i className="fa-solid fa-phone fa-2x compartment"></i>
                        </div>
                        <div className="label-section col-md-9 " >
                          <a href="tel:9251697397" className="text-decoration-none">
                          <p>
                            <strong> Phone </strong>
                          </p>
                          <p>
                            <strong>9251697397 </strong>
                          </p>
                          </a>
                        </div>
                      </div>
                      <hr className="hr-tag" />
                      <ul className="social col-md-12">
                        <a href="https://m.facebook.com/profile.php/?id=100089878991548">
                          {" "}
                          <i
                            className="fab fa-facebook-f compartment"
                            style={{ padding: "10px 13px" }}
                          ></i>
                        </a>
                        
                        <a href="https://www.instagram.com/scaleedge/">
                          {" "}
                          <i className="fab fa-instagram insta compartment"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/scaleedge-solutions/" >
                          <i className="fa-brands fa-linkedin-in compartment"></i>
                        </a>
                      </ul>
                    </div>
                    <div className="flower">
                      <img
                      height={'100%'}
                      width={'100%'}
                        src={"/images/flowerimg.jpg"}
                        alt="flower"
                        title="flower"
                       
                      />
                    </div>
                  </div>

                  <div className="mobile-nav">
                    <p
                      className="closebtn"
                      onClick={closeNav}
                      style={{ cursor: "pointer" }}
                    >
                      &times;
                    </p>
                    <div id="accordion">
                      <div class="card">
                        <div class="card-header card-header-manual ">
                          <p class="mb-0 mobile-nav-para">
                            <button class="btn btn-link">
                              <Link  
                                href={"/"}
                                className="text-light links"
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                              >
                                Home
                              </Link>
                            </button>
                          </p>
                        </div>
                      </div>
                      <div class="card">
                        <div
                          class="card-header card-header-manual"
                          id="headingTwo"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                        >
                          <p class="mb-0 mobile-nav-para">
                            <button
                              class="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <a href={"/about"} className="text-light links">
                                About
                              </a>
                            </button>
                          </p>
                        </div>
                      </div>
                      <div class="card">
                        <div
                          class="card-header card-header-manual "
                          id="headingThree"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                        >
                          <p class="mb-0 mobile-nav-para">
                            <button
                              class="btn btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              Services
                            </button>
                          </p>
                          <i
                            className="fa-solid fa-plus"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                          ></i>
                        </div>
                        <div
                          id="collapseThree"
                          class="collapse "
                          style={{visibility:'visible'}}
                          aria-labelledby="headingThree"
                          data-parent="#accordion"
                        >
                          <div class="card-body">
                            <ul>
                              <li>
                                <a
                                  href={"/app-development-service"}
                                  className="links"
                                >
                                  Mobile App
                                </a>
                              </li>
                              <li>
                                <a
                                  href={"/web-development-service"}
                                  className="links"
                                >
                                  Web Services
                                </a>
                              </li>
                              <li>
                                <a
                                  href={"/software-development-service"}
                                  className="links"
                                >
                                  Software Service
                                </a>
                              </li>
                              <li>
                                <a
                                  href={"/digital-marketing-service"}
                                  className="links"
                                >
                                  Marketing Service
                                </a>
                              </li>
                              {/* <li>
                                <a
                                to={"/martonline"}
                                  className="links"
                                >
                                  Martonline
                                </a>
                              </li> */}
                              <li>
                                <a
                                to={"/hredge"}
                                  className="links"
                                >
                                  Hr System
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="sidenav-para">
                        <div className="sidebar-title">
                          <p className="m-4">Get In Touch</p>
                        </div>
                        <div className="contact-sidebar-section col-md-12">
                          <div className="col">
                            <i className="fa-regular fa-envelope fa-2x compartment "></i>
                          </div>
                          <div className="label-section col-md-9">
                          <a href="mailto:9251697397" className="text-decoration-none">
                            <p>
                              <strong>Email </strong>
                            </p>
                            <p>
                              <strong>info@scaleedge.in</strong>
                            </p>
                            </a>
                          </div>
                        </div>
                        <div className="contact-sidebar-section col-md-12">
                          <div className="col">
                            <i className="fa-solid fa-phone fa-2x compartment"></i>
                          </div>
                          <div className="label-section col-md-9">
                          <a href="tel:9251697397" className="text-decoration-none">
                            <p>
                              <strong> Phone </strong>
                            </p>
                            <p>
                              <strong> 9251697397</strong>
                            </p>
                            </a>
                          </div>
                        </div>
                        {/* <div className="contact-sidebar-section col-md-12">
                          <div className="col">
                            <i
                              className="fa-solid fa-location-dot fa-2x compartment"
                              style={{ padding: "10px 13px" }}
                            ></i>
                          </div>
                          <div className="label-section col-md-9">
                            <p>
                              <strong> Location </strong>
                            </p>
                            <p>
                              <strong> Alwar </strong>
                            </p>
                          </div>
                        </div> */}
                        <hr className="hr-tag" />
                        <ul className="social col-md-12">
                          <li>
                            <a
                              href="https://www.facebook.com/people/scaleedgesolutions/100089878991548/"
                              target="_blank"
                              rel="noopener"
                              title="facebook"
                              data-aos="zoom-out"
                              data-aos-once="true"
                            >
                              <i
                                className="fab fa-facebook-f"
                                style={{ padding: "10px 13px" }}
                              ></i>
                            </a>
                          </li>
                          {/* <li>
                            <a
                              href="https://twitter.com/OneklickTechno"
                              target="_blank"
                              rel="noopener"
                              title="twitter"
                              data-aos="zoom-out"
                              data-aos-once="true"
                            >
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li> */}
                          <li>
                            <a
                              href="https://www.instagram.com/scaleedge/"
                              target="_blank"
                              rel="noopener"
                              title="instagram"
                              data-aos="zoom-out"
                              data-aos-once="true"
                            >
                              <i className="fab fa-instagram insta"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/company/scaleedge-solutions/"
                              data-aos="zoom-out"
                              target="_blank"
                              rel="noopener"
                              title="linkedin"
                              data-aos-once="true"
                            >
                              <i className="fa-brands fa-linkedin-in "></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      <div className="updown" id="nav-context" onClick={ScrollUp}>
        <i
          className="fa-solid fa-arrow-up-long nav-bar-logo fluid-container"
          style={{ fontSize: "25px", padding: "10px 13px" }}
        ></i>
      </div>
    </>
  );
}
