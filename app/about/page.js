"use client"
import React, { useEffect } from "react";
import "@/app/style/about.css";
import '../style/service01.css';
import '../style/service04.css';
import "../style/HomeCSS/mainpage.css"
import "../style/HomeCSS/oursolution.css"
import Footer from "../components/Footer/footer";
import Navbar from "@/app/components/Navbar/navbar";
// import AOS from "aos";
import Usableitem from '../../app/components/Useableitem/useableitem';
const about = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // });
  useEffect(() => {
    const wrap = document.querySelector(".wrapper");
    const side = document.getElementById("mySidenav");
    wrap.addEventListener("click", function () {
      if (side.style.width >= "200px") {
        side.style.width = "0px";
      } else {
        side.style.width == "300px";
      }
    });
  });
  return (
    <>
    
      <Navbar />
      <div className="wrapper">
        <div className="mainpscon">
        
          <div className="col-md-11 d-flex justify-content-center align-content-center m-auto">
             <Usableitem
        title="About"
        section ={1}
      
        alt_tag ="custom web development"
        app_main_img = {"/images/aboutmain.webp"}
        />
          </div>
          <div class="pscon12 about-3_area about-3space about-3plr about-3_plr-2">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-center">
                <div className=" col-md-5 mb-70  mainimagesection text-end d-flex justify-content-center">
                  <img
                    width={"100%"}
                    height={"100%"}
                    src={"/images/aboutImg.webp"}
                   
                    alt="web development"
                    title="web development"
                    className="img-fluid w-full"
                    style={{ borderRadius: "17px" }}
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-easing="zoom-out"
                    data-aos-duration="500"
                  />
                </div>
                <div
                  className="col-xl-5  col-lg-6 col-md-12 mb-70  div2"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="500"
                >
                  <div className="maincontent p-3">
                    <div class="about-3__section-title  ">
                      <h2 class="section-blue-subtitle char-anim">
                        About ScaleEdge
                      </h2>
                      <h3 class="section-title1  section-title char-anim" style={{textAlign:"start"}}>
                        Dedicated to delivering inventive solutions for
                        intricate challenges
                      </h3>
                    </div>
                    <div className="para">
                      <div className="para1 ">
                        <p
                          className="paracontent text-start"
                          style={{ textTransform: "capitalize" }}
                        >
                          At ScaleEdge Solutions, our focus is on empowering
                          small and medium-sized businesses in the software and
                          digital landscape.
                        </p>
                      </div>
                      <div className="points">
                        <ul>
                          <li>
                            <i className="fa fa-check-square"></i>
                            <span style={{ textTransform: "capitalize" }}>
                              Guided by the principle that technology should
                              simplify our clients' operations
                            </span>
                          </li>
                          <li>
                            <i className="fa fa-check-square"></i>
                            <span style={{ textTransform: "capitalize" }}>
                              Bridging the gap between technology and the
                              business environment is a core aspect of our
                              approach.
                            </span>
                          </li>
                          <li>
                            <i className="fa fa-check-square"></i>
                            <span style={{ textTransform: "capitalize" }}>
                              We specialize in providing customized <a href="/software-development-service" className="text-decoration-none text-dark"> <b> software
                              development services</b></a> tailored to various
                              industries.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="feature__section-box text-center mt-0 d-flex justify-content-center"
            style={{ marginTop: "50px" }}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400"
            data-aos-once="true"
          >
            <div className="col-md-8 my-5">
              <h2 className="section-title text-3xl title-anim wow animate__fadeInUp">
                Our Customer Satisfaction is the True Measure of Our Excellence,
                Establishing Us as the Premier Software Solutions Provider
              </h2>
            </div>
          </div>

          <div
            className="row ps-cardrow m-0"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400"
            data-aos-once="true"
            data-aos-delay="200"
          >
            <div className="col-md-2 pscol">
              <div className="pscardimg pscardimg1">
                <img
                height={30}
                width={30}
                className="w-[45px] inline"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NGY5NTM1MS0xYTg4LTQ2NGUtOGZiYS00OWQ4ZmQyZTg1Y2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTE0OTlGQ0E5NjVDMTFFRDgzMThGMUJDNEVCREEzRTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTE0OTlGQzk5NjVDMTFFRDgzMThGMUJDNEVCREEzRTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhlZDI2M2RkLTlhYTctMzM0YS1hMjU2LWUwNmIyNmU5MjY2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NGY5NTM1MS0xYTg4LTQ2NGUtOGZiYS00OWQ4ZmQyZTg1Y2UiLz4gPC9y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"
                  alt="card1"
                  title="card1"
                 
                />
              </div>

              <h3 className="h4ps">Innovation </h3>
            </div>
            <div className="col-md-2 pscol">
              <div className="pscardimg pscardimg2">
                <img
                height={30}
                width={30}
                className="w-[45px] inline"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NGY5NTM1MS0xYTg4LTQ2NGUtOGZiYS00OWQ4ZmQyZTg1Y2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjAyMjU5MUY5NjYwMTFFRDhCNTNDNEZFQTU0RThBQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjAyMjU5MUU5NjYwMTFFRDhCNTNDNEZFQTU0RThBQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhlZDI2M2RkLTlhYTctMzM0YS1hMjU2LWUwNmIyNmU5MjY2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NGY5NTM1MS0xYTg4LTQ2NGUtOGZiYS00OWQ4ZmQyZTg1Y2UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ZpD0dAAAFZElEQVR42sxae4iVRRSf3TVtd0vxQeSDvSmlu+GzbMtse1jpNbNEkyw1MYrAWMKiNAlKo6DaUksIH7UKrUthEbSF6yMLMvCPWlbIV/Q0NUzZym0tzbZz8Ddwmma+me/h7h74cb873zkzc2bOnMfcq1THUTFhCmEdYS+h3cBvhO2EJYThqovRYMIbxoT/IOwgrCesJbxL+Nrg+YnwQFdQoEZM6jPCbMKgCP4SQhVhhZA7RLitMyZ/OeFHTOIjwmjjfTeYTgt4dhPyBk8PwiKhzPKOVGCCGHiGg+cyvGdFt+L5dQfvxYLn445QYBwGO46zEEXMN108r/DwrxRmec6oNwb5i9Argq9M2PzDQgl94BmbCTmL7HLwbThXSjRjgGERPLPFhJtwdhSU2knYB+gD3cPShzate5JMkg/jI4RSy7uHjJW10Uzw8CQHesZ6GbxllnfdCacJZzCnWHQ3Or7XaC9A+88RsqXgaRFtawjfEw7i81vgO/By3DjP0d+D4KmJo0CDEYg+t+zCxAj5R8FTge+/4vsRKGGintDPM6dW9FEYqsQcwjYINWIlNPGgpzzyWpZpGZ6vTHkGF6Ofu+II9YE5DDB8OHdU65H9QiixQzynoRz6aYgraLrO6ejoVo9cvZj4RDyvJlQSxiLhK0mgCJtUW9rVeAYT6u/huxl8i/F9rSWLZdQFeC6bu01FeoWLAni1Sd0kgiOn5ncgW20UyoSel3VZKLE3Rie9kF63YyfKLTzD8P6UIx65UpFUdC3hvhj8bPfvOUypHjyj8f2tgP5eY95uKRS4BErsIfQk/B4g0wZnwJ7lBuHpKrAYHDhnIYXhFGUeIrOLLky7CyuNlbwlZX8bhGnoAJrzyHDQbS9MMehcpAsT4Oq2GjEkLpUYBZHy7ALT1Zz2JzWnHLxLHYLXUMJh7M5Mh8w1KJLOt7wbAfNahe/V+DwUMYeRSDkakq7aE9juStG2G20FFv684zBL1Bgx5VXPHFaBryqpEvstrq0WbaUxXHGBcThvBN8xT+wpAl+bSpKPQ4bNZ4ulYmP60yLThLjwLOGkSMs59TiBBLMaO3sMn1Hn4SXD7GLTJEzifqOdL79+iAh0my0mNNcoT190nBnTtbd7zouX3kEn/Yzd4bYPPbID4RSqwD9VKBFa4Oii6Qo5eFxi7/MLtl2TTgC/8sjq1TuMz/niViQkzdiOnXic8GXSXSjDKiwz2sejfU5gP91FQqixIIK/J65qQryWl1xV2bwAFyrRggx0CFKOoZ7LOO0MXlAOF3cV4VKHS9O31Q04cCdRFw+wZJ9PwayKAxbjIoz5CuExB88ILNo0USLXuTo8E7ByvNLf4Lk8o3sqfYE2UizoKNh7sxibHckgX2fM+Clcp4lFhjJ3ZnjZNs0obZ83xqpF6RpEut61UbnI9YcknGxfLEgemIQ0+wQ8nL5buo6wkHB9Eq8pCxKTJmdgQtUOE20NSLWDUwifgjpK7ks4xkbCAZEYluLCIId4kwlF7YTOPvMqWypEv096+CoCblJUoeocul3cHkbRHlFjJDantMQRfr367xV9Ky7QdhHedshxgfQcnqeiamRncLQzlChGCVnicBqnHXK9kcooeK9KZf+tokPMaT8OcoGAjgtRudL7whHsRCp/sCudiW34nBXAm8fNR6eeCS49+xiLpn9RXR0g35hFnEgbg7huuMDy7s0Qr5NVsNP0d4K+/1Fn/6cx2Mh2+d8Bn2S9YiHBbmyG4zWrbH5k+d/BbonwLkybCEvV2R/b01JR1rsgf/ncZHnPpjDF0v5BxM1GFI2B/1+o/P8giEW7PAXREaThOSRuTTFLURNPZ70T/wowAP2ot+F7p3vkAAAAAElFTkSuQmCC"
                  alt="card2"
                  title="card2"
                 
                />
              </div>
              <h3 className="h4ps">Quality</h3>
            </div>
            <div className="col-md-2 pscol">
              <div className="pscardimg pscardimg3">
                <img
                height={30}
                width={30}
                className="w-[45px] inline"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAwCAYAAABAIGlOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NGY5NTM1MS0xYTg4LTQ2NGUtOGZiYS00OWQ4ZmQyZTg1Y2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzgwQTQzNUU5NjYwMTFFRDlDOThFRTUyMkI3OERCQUMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzgwQTQzNUQ5NjYwMTFFRDlDOThFRTUyMkI3OERCQUMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhlZDI2M2RkLTlhYTctMzM0YS1hMjU2LWUwNmIyNmU5MjY2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NGY5NTM1MS0xYTg4LTQ2NGUtOGZiYS00OWQ4ZmQyZTg1Y2UiLz4gPC9y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"
                  alt="card3"
                  title="card3"
                 
                />
              </div>
              <h3 className="h4ps">Trust</h3>
            </div>
            <div className="col-md-2 pscol">
              <div className="pscardimg pscardimg4">
                <img
                height={30}
                width={30}
                className="w-[50px] inline"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NGY5NTM1MS0xYTg4LTQ2NGUtOGZiYS00OWQ4ZmQyZTg1Y2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTExNEREM0U5NjYwMTFFREFFMDY4RjRBQTFBNkNCMTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTExNEREM0Q5NjYwMTFFREFFMDY4RjRBQTFBNkNCMTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhlZDI2M2RkLTlhYTctMzM0YS1hMjU2LWUwNmIyNmU5MjY2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NGY5NTM1MS0xYTg4LTQ2NGUtOGZiYS00OWQ4ZmQyZTg1Y2UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz62NSq1AAAGDUlEQVR42sRZa2wVVRC+1d6WomgVxYK1PFQsFVINVQSrMSWVGEFNDFarCFhRxKAhPCwqKsIPE180WGt8BUgt0IIaRIISIYCtYgBrEEF5GIJAJVUEUekVrTP1O2QynN27d3fv7SRfdnfOOXPe89pIJLV0J6GWsJOwjjCdcH5QoWlJHHA/wgBCF8KFhApCkUPdOYRthL8JBwlfRTqZeGWXEtot4NW/lZBHuJrwkkO9HajXKTuRTdhO6EVoISwnHCH8TlhL2Gxpw7t0G6EPIZMwmFCCsnGEhanehSas5KsB5dwidqVnKicwG51+G5K8RyBvG3YrqcRn+0t0eJzQ26ccVgKlivcB5P5LmJSsCRSIbV+jJnAJ4V3CfkIz4eE4smKQc6bizxV9zEnGJH6E8MmKzxM4ZtE6bzvIqUJ5g4OyKYBy4DrXhjmBERC60lLWjLLZ0Fj5YsLDVd3Lwf8T2snNULbjiIVGlRA63mLkmP+d4heDv8phwmVx+uuKent0wRkBJvEHnpmWlWWqV/wteOYL3kRCIWEDDKQbZTjZtiCTMC7EQcX/TZxjSWfjeRxPdkdq8H63h/74TrQRLg7LSJtz/BchqsoyxUW+QvBrwJuC7xX4fjaBfqt8tHGkBgh7yKF8gphINeFjvP8idpG/9/lwa4wqPifoJE7A43SjmUq9boV/FIE/5VddVqNtadBJmKMUj3pCNZYInvFcFwmbMp/wBaGOMCyOzEfRfnTQSeyFoNwE2+WJnWHqi13VRrHcRYZxcQYGncRkCFqRYLuv0e52fO/DdyWUQJmYSA9L++EhO5mRXRB4qcf6FajfhO9h+P7IwYg+aZGxBWXXhG2xJ3io202scK66+PerurkOkzMW+3CYxu6kerrRIuGR/qSM3nkWNWqMm6R0PI+F6Ts9hpV5Ik494zMdUPz+4O9W/A/Bv0vxc0SQFBr1htCfhV+jia35IdSzqc4lKOML/xThfXz/YKm7EGVPhx1PvCw81utdDFOtS6JiuVKv38A/MnQu4TVxH7okIzBa7BJ58eVd76HjGxBTj1T8ocK6H1C+WOh0jzBaj4eYvzKL80qydsDNGueFIG8DZM1Mdd5pEjrmgOlepFqyPLbNwvlnp3C1cBo7hZ63+EJ81N4j3Kjqdkf9vZY2TSKQcqU0qMpypEpOACcRRbUhgF+boJEpRqwxBAPJEYa1kbARlvk+0aYF/e1GqPpWIis3L2JP6kpUKt1/GQKbIrxHPSxWGfS/lv0i4aIgW58uDJVJr3dDiNkVQfwYrOZNhBmR//OkNuJzvMAh4G8HfynUZC/cm+0i4RCI3rTEw4YGoSymzncjQtR6nF0ZE+zC8bwgCfdtENT5aMQip+0Eb+n3qtGV4gjxSnO2+1OHDm5GnDESl5iJ/wi1IgqM4czLe3cI6c/GOIMvwZEutXgM06TFHWpp/ADK5iawWoNxKVs93DWD9Thimu4gbBL1diKrOB3uyakw1zhdRS7xbLnP7c9B0DQAR4EneB3cDI7SxhI+Rx+tQkGMQ/RmBs87Ncri3p8KdVfhpdAyiGkoq0iybTEakv/VbRaDW4mcryS+D78KN77D3/oMjAKL8GdQNiYFRnKNGHwDdkxnTupEnXmwbR0X2+RSbXkk43S1+RzYQMQM6TCa5mLHxAWPIfVprPMM2A59N9/BO9ua8SJW7xBuBhpzSeLGfE7iLKHhvJIMiFiNvgHNx/QcLvZpxi7LZSeiLmVeaBN2OhuyMtBnVH1nYBy8U+vQdioSbREk1ti5bHbqyPz8sP3cM0ngESl0IPOhjczZn+qlUQsqZ7vEtT2QwB0Lo8Nn9KokTGCWGPxq+GWeyPxbs0VOtSirczBS/FPxdfhT3QMMvhiGzMh90E9y2Cl3VK0G/QLU7SyRE5XYCGta6LHvKFwZ036ZH482TSR366Hy2qCNjiJnytqlClrhiEV3D4HBGaXyp2yBP0G+diuSZv/AMeyP3ZuIaO4oVn+Z363c4cG38UocWk5RhiseauD++6Y0XNh+UHFZuBsmnuCyPS6eqxtlIxwthRLoAwt7GOe/Edm+/UG1wX8CDAD4agR3hcg4rgAAAABJRU5ErkJggg=="
                  alt="card4"
                  title="card4"
                 
                />
              </div>
              <h3 className="h4ps">Sustainability</h3>
            </div>
            <div className="col-md-2 pscol">
              <div className="pscardimg pscardimg5">
                <img
                height={30}
                width={30}
                className="w-[50px] inline"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABHCAYAAACkuwGSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3NGY5NTM1MS0xYTg4LTQ2NGUtOGZiYS00OWQ4ZmQyZTg1Y2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjI1Qzg5MDA5NjYxMTFFREE2RjA4NDhFQ0UxNTAzNjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjI1Qzg4RkY5NjYxMTFFREE2RjA4NDhFQ0UxNTAzNjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhlZDI2M2RkLTlhYTctMzM0YS1hMjU2LWUwNmIyNmU5MjY2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NGY5NTM1MS0xYTg4LTQ2NGUtOGZiYS00OWQ4ZmQyZTg1Y2UiLz4gPC9y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"
                  alt="card5"
                  title="card5"
                 
                />
              </div>
              <h3 className="h4ps"> Affordable</h3>
            </div>
          </div>
          <div class="team_area teamspace-2 team_plr grey-bg">
            <div className="container-fluid team">
              <div className="row align-items-end justify-content-center">
                <div
                  className="col-xl-12 col-lg-6 col-md-9 col-sm-10"
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="400"
                  data-aos-once="true"
                >
                  <div className="feature__section-box text-center">
                    <p
                      className="section-blue-subtitle title-anim wow animate__fadeInUp text-3xl"
                      
                    >
                      Witness Our Exceptional Team
                    </p>
                    <h3 className="section-title title-anim wow animate__fadeInUp text-3xl">
                      Strong Teamwork Paves
                      <br />
                      the Way for Every Achievement.
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="row psrow d-flex justify-content-center m-auto"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="400"
                data-aos-once="true"
                data-aos-delay="150"
              >
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 padding-6 wow animate__fadeInUp">
                  <div className="container23" style={{height:'300px'}}>
                    <img
                    height={'100%'}
                    width={'100%'}
                      src={"/images/papa-pic.webp"}
                      alt="suresh-scaleedge"
                      className="image mx-auto w-75 h-auto"
                      title="suresh-scaleedge"
                     
                    />
                    <div className="ps-overlay">
                      <div className="text"></div>
                    </div>
                  </div>
                  <div
                    style={{ textAlign: "center" }}
                    className="team__author-info"
                  >
                    <h4 className="team__author-name text-nowrap">
                    Suresh Sethi
                    </h4>
                    <span className="text-center text-nowrap">Founder</span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 padding-6 wow animate__fadeInUp">
                  <div className="container23 " style={{height:'300px'}}>
                    <img
                       height={'100%'}
                       width={'100%'}
                      src={"/images/saurabh.webp"}
                      title="saurabh-scaleedge"
                      alt="saurabh-scaleedge"
                      className="image mx-100 w-75 h-auto "
                     
                    />
                    <div className="ps-overlay">
                      <div className="text"></div>
                    </div>
                  </div>
                  <div
                    style={{ textAlign: "center" }}
                    className="team__author-info px-0"
                  >
                 <h4 className="team__author-name text-nowrap">
                    Saurabh Sethi
                    </h4>
                    <span className="text-center ">
                      {" "}
                      Business Development Head
                    </span>
                  </div>
                </div>
                <div className=" col-xl-3 col-lg-4 col-md-6 col-sm-6 padding-6 wow animate__fadeInUp">
                  <div className="container23" style={{height:'300px'}}>
                    <img
                    height={'100%'}
                    width={'100%'}
                      src={"/images/anu pic.webp"}
                      alt="anu-scaleedge "
                      title="anu-scaleedge"
                      className="image mx-100 w-75 h-auto"
                     
                    />
                    <div className="ps-overlay">
                      <div className="text"></div>
                    </div>
                  </div>
                  <div
                    style={{ textAlign: "center" }}
                    className="team__author-info px-0"
                  >
                    <h4 className="team__author-name text-nowrap">
                   Anupriya Sethi
                    </h4>
                    <span className="text-center text-nowrap">
                      {" "}
                      Digital Marketing Partner
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="row psrow justify-content-center align-align-items-center m-auto"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="400"
                data-aos-once="true"
                data-aos-delay="200"
              >
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 padding-6 wow animate__fadeInUp">
                  <div className="container23" style={{height:'300px'}}>
                    <img
                     height={'100%'}
                     width={'100%'}
                      src={"/images/shubham.webp"}
                      alt="shubham-scaleedge"
                      className="image mw-100 w-100 h-auto"
                      title="shubham-scaleedge"
                     
                    />
                    <div className="ps-overlay">
                      <div className="text"></div>
                    </div>
                  </div>
                  <div
                    style={{ textAlign: "center" }}
                    className="team__author-info"
                  >
                   <h4 className="team__author-name text-nowrap">
                    Shubham Sharma
                    </h4>
                    <span className="text-nowrap"> Full Stack Developer</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 padding-6 wow animate__fadeInUp">
                  <div className="container23" style={{height:'300px'}}>
                    <img
                     height={'100%'}
                     width={'100%'}
                      src={"/images/vivek.webp"}
                      alt="vivek-scaleedge"
                      className="image mw-100 w-100 h-auto"
                      title="vivek-scaleedge"
                     
                    />
                    <div className="ps-overlay">
                      <div className="text"></div>
                    </div>
                  </div>
                  <div
                    style={{ textAlign: "center" }}
                    className="team__author-info"
                  >
                   <h4 className="team__author-name text-nowrap">
                    Vivek Singh
                    </h4>
                    <span style={{ whiteSpace: "nowrap" }}>
                      Full Stack Developer
                    </span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 padding-6 wow animate__fadeInUp">
                  <div class="container23" style={{height:'300px'}}>
                    <img
                     height={'100%'}
                     width={'100%'}
                      src={"/images/sumit.webp"}
                      alt="sumit-scaleedge"
                      title="sumit-scaleedge"
                      className="image mw-100 w-100 img-fluid h-auto"
                     
                    />
                    <div class="ps-overlay">
                      <div class="text"></div>
                    </div>
                  </div>
                  <div
                    style={{ textAlign: "center" }}
                    className="team__author-info"
                  >
                    <h4 className="team__author-name text-nowrap">
                    Sumit Sahu
                    </h4>
                    <span className="text-nowrap">Sr. Backend Developer</span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 padding-6 wow animate__fadeInUp">
                  <div class="container23" style={{height:'300px'}}>
                    <img
                      height={'100%'}
                      width={'100%'}
                      src={"/images/ashish.webp"}
                      alt="ashish-scaleedge"
                      class="image mx-100 w-100 h-auto"
                      title="ashish-scaleedge"
                     
                    />
                    <div class="ps-overlay">
                      <div class="text"></div>
                    </div>
                  </div>
                  <div
                    style={{ textAlign: "center" }}
                    className="team__author-info"
                  >
                   <h4 className="team__author-name text-nowrap">
                   Ashish Bhargav
                    </h4>
                    <span style={{ whiteSpace: "nowrap" }}>
                      Full Stack Developer
                    </span>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 padding-6 wow animate__fadeInUp">
                  <div class="container23" style={{height:'300px'}}>
                    <img
                      height={'100%'}
                      width={'100%'}
                      src={"/images/manish.webp"}

                      alt="manish-scaleedge"
                      title="manish-scaleedge"
                      class="image mx-100 w-100 h-auto"
                     
                    />

                    <div class="ps-overlay">
                      <div class="text"></div>
                    </div>
                  </div>
                  <div
                    style={{ textAlign: "center" }}
                    className="team__author-info"
                  >
                    <h4 className="team__author-name text-nowrap">
                    Manish Saini
                    </h4>
                    <span> Digital Marketer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="feature__section-box text-center d-flex justify-content-center"
            style={{ marginTop: "0px" }}
          >
            <div className="col-md-8 mt-4">
              <h3
                className="section-title title-anim wow animate__fadeInUp"
                ata-aos-easing="ease-in-sine"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-once="true"
              >
                Our Core Values
              </h3>
            </div>
          </div>

          <div className="work-3_area work-3inner-wrapper work-3plr work-3_space">
            <div
              className="container-fluid"
              style={{ marginTop: "50px" }}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="400"
              data-aos-once="true"
            >
              <div
                className="row row-cols-xl-3 row-cols-md-2 "
                ata-aos-easing="ease-in-sine"
                data-aos-duration="400"
                data-aos-once="true"
                data-aos-delay="200"
              >
                <div className="col col-6 col-12 wow animate__fadeInUp d-flex justify-content-center">
                  <div className="work-3__wrapper inner-wrapper-1 mb-30">
                    <div className="work-3__item1">
                      <div className="work-3__content  align-items-center mb-15">
                        <div className="work-3__icon icon-color-1">
                          <span>
                            <i class="fa-solid fa-thumbs-up"></i>
                          </span>
                        </div>

                        <div className="work-3__title">
                          <h4 className="work-3__section-title">
                            <a href="#" style={{ lineHeight: "30px" }}>
                              Innovation
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div className="work-3__right-text">
                        <p>
                          We foster a culture of creativity, encouraging
                          continuous learning and the pursuit of innovative
                          solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col col-6 col-12 wow animate__fadeInUp d-flex justify-content-center">
                  <div class="work-3__wrapper inner-wrapper-2 mb-30">
                    <div class="work-3__item2">
                      <div class="work-3__content  align-items-center mb-15">
                        <div class="work-3__icon icon-color-2">
                          <span>
                            <i class="fa-solid fa-user-group"></i>
                          </span>
                        </div>

                        <div class="work-3__title">
                          <h4 class="work-3__section-title">
                            <a href="#">Integrity</a>
                          </h4>
                        </div>
                      </div>
                      <div class="work-3__right-text">
                        <p>
                          We operate with transparency, honesty, and ethical
                          conduct in all our interactions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col col-6 col-12 wow animate__fadeInUp d-flex justify-content-center">
                  <div class="work-3__wrapper inner-wrapper-3 mb-30">
                    <div class="work-3__item3">
                      <div class="work-3__content  align-items-center mb-15">
                        <div class="work-3__icon icon-color-3">
                          <span>
                            <i class="fa-solid fa-user-check"></i>
                          </span>
                        </div>

                        <div class="work-3__title">
                          <h4 class="work-3__section-title">
                            <a href="#">Customer-Centric</a>
                          </h4>
                        </div>
                      </div>
                      <div class="work-3__right-text">
                        <p>
                          Our focus is on understanding and exceeding the needs
                          of our clients, ensuring their success is our top
                          priority.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="container-fluid container-fluid-second "
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="400"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <div className="row row-cols-xl-3 row-cols-md-2  d-flex justify-content-center">
                <div class="col col-12 wow animate__fadeInUp d-flex justify-content-center ">
                  <div class="work-3__wrapper inner-wrapper-4 mb-30">
                    <div class="work-3__item4">
                      <div class="work-3__content  align-items-center mb-15">
                        <div class="work-3__icon icon-color-4">
                          <span>
                            <i class="fa-solid fa-coins"></i>
                          </span>
                        </div>

                        <div class="work-3__title">
                          <h4 class="work-3__section-title">
                            <a href="#">Social Responsibility</a>
                          </h4>
                        </div>
                      </div>
                      <div class="work-3__right-text">
                        <p>
                          We are committed to making a positive impact on
                          society, contributing to community welfare and
                          environmental sustainability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col col-12 wow animate__fadeInUp d-flex justify-content-center ">
                  <div class="work-3__wrapper inner-wrapper-4 mb-30">
                    <div class="work-3__item5">
                      <div class="work-3__content  align-items-center mb-15">
                        <div class="work-3__icon icon-color-4">
                          <span>
                            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                          </span>
                        </div>

                        <div class="work-3__title">
                          <h4 class="work-3__section-title">
                            <a href="#">Quality Excellence</a>
                          </h4>
                        </div>
                      </div>
                      <div class="work-3__right-text">
                        <p>
                          We are committed to delivering high-quality products
                          and services, setting industry standards for
                          excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col col-12 wow animate__fadeInUp d-flex justify-content-center ">
                  <div class="work-3__wrapper inner-wrapper-3 mb-30 ">
                    <div
                      class="work-3__item3"
                      style={{ background: "lightgray" }}
                    >
                      <div class="work-3__content  align-items-center mb-15">
                        <div class="work-3__icon icon-color-3">
                          <span>
                            <i
                              class="fa-solid fa-check"
                              style={{ color: "lightgray" }}
                            ></i>
                          </span>
                        </div>

                        <div class="work-3__title">
                          <h4 class="work-3__section-title">
                            <a href="#">Continuous Improvement</a>
                          </h4>
                        </div>
                      </div>
                      <div class="work-3__right-text">
                        <p>
                          We strive for excellence through ongoing learning,
                          feedback, and continuous improvement in our processes
                          and products.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Row */}
            <div
              className="container-fluid container-fluid-second "
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="400"
              data-aos-once="true"
              data-aos-delay="200"
            >
              <div className="row row-cols-xl-3 row-cols-md-2  d-flex justify-content-center">
                <div class="col col-12 wow animate__fadeInUp d-flex justify-content-center ">
                  <div class="work-3__wrapper inner-wrapper-4 mb-30">
                    <div class="work-3__item4" style={{ background: "yellow" }}>
                      <div class="work-3__content  align-items-center mb-15">
                        <div class="work-3__icon icon-color-4">
                          <span>
                            <i
                              class="fa-solid fa-gears"
                              style={{ color: "yellow" }}
                            ></i>
                          </span>
                        </div>

                        <div class="work-3__title">
                          <h4 class="work-3__section-title">
                            <a href="#">Agility</a>
                          </h4>
                        </div>
                      </div>
                      <div class="work-3__right-text">
                        <p>
                          We embrace change and adapt quickly to evolving
                          technologies and market demands.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col col-12 wow animate__fadeInUp d-flex justify-content-center ">
                  <div class="work-3__wrapper inner-wrapper-4 mb-30">
                    <div
                      class="work-3__item5"
                      style={{ background: "greenyellow" }}
                    >
                      <div class="work-3__content  align-items-center mb-15">
                        <div class="work-3__icon icon-color-4">
                          <span>
                            <i
                              class="fa-solid fa-square-check"
                              style={{ color: "greenyellow" }}
                            ></i>
                          </span>
                        </div>

                        <div class="work-3__title">
                          <h4 class="work-3__section-title">
                            <a href="#">Empowerment</a>
                          </h4>
                        </div>
                      </div>
                      <div class="work-3__right-text">
                        <p>
                          We empower our employees to take initiative, make
                          decisions, and contribute to the success of the
                          company.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col col-12 wow animate__fadeInUp d-flex justify-content-center ">
                  <div class="work-3__wrapper inner-wrapper-3 mb-30 ">
                    <div class="work-3__item3" style={{ background: "orange" }}>
                      <div class="work-3__content  align-items-center mb-15">
                        <div class="work-3__icon icon-color-3">
                          <span>
                            <i
                              class="fa-brands fa-envira"
                              style={{ color: "orange" }}
                            ></i>
                          </span>
                        </div>

                        <div class="work-3__title">
                          <h4 class="work-3__section-title">
                            <a href="#">Inclusivity</a>
                          </h4>
                        </div>
                      </div>
                      <div class="work-3__right-text">
                        <p>
                          We value diversity and cultivate an inclusive
                          environment where everyone feels respected and heard.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default about;
