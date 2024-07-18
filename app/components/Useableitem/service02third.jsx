import React from "react";
import "../../style/service02.css"
import "../../style/service04.css"
import Link from "next/link";
const service02third = () => {
  const contentsecond = [
    {
      title: "Requirement Gathering & Analysis",
      subtitle:
        "We help ambitious businesses like yours generate more profits to be building driving web traffice",
      dataaos: "fade-up",
      dataoffset: 200,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
      icon: "fa-solid fa-gears",
    },
    {
      title: "Designing",
      subtitle:
        "We help ambitious businesses like yours generate more profits to be building driving web traffice",
      dataaos: "fade-up",
      dataoffset: 200,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
      icon: "fa-solid fa-pen-fancy",
    },
    {
      title: "Development",
      subtitle:
        "We help ambitious businesses like yours generate more profits to be building driving web traffice",
      dataaos: "fade-up",
      dataoffset: 200,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
      icon: "fa-solid fa-plus",
    },
    {
      title: "Testing",
      subtitle:
        "We help ambitious businesses like yours generate more profits to be building driving web traffice",
      dataaos: "fade-up",
      dataoffset: 200,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
      icon: "fa-solid fa-vial-virus",
    },
    {
      title: "Deployment",
      subtitle:
        "We help ambitious businesses like yours generate more profits to be building driving web traffice",
      dataaos: "fade-up",
      dataoffset: 200,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
      icon: "fa-solid fa-rocket",
    },
    {
      title: "Maintenance & Support",
      subtitle:
        "We help ambitious businesses like yours generate more profits to be building driving web traffice",
      dataaos: "fade-up",
      dataoffset: 200,
      easing: "ease-in-sine",
      duration: 100,
      repeatation: "false",
      icon: "fa-solid fa-link",
    },
  ];
  const PointsContext = [
    {
      points: "Enhanced Online Presence",
    },
    {
      points: "Competitive Advantage",
    },
    {
      points: "Improved Accessibility & Cost Effectiveness",
    },
    {
      points: "Increased Customer Engagement",
    },
   
    {
      points: "Data-driven Insights & Scalability and Flexibility",
    },
    {
      points: "Enhanced Online Presence",
    },
  
  ];
  return (
    <React.Fragment>
      <div className="row  service-det-container ">
      <div className="ser2-first-container col-md-12 p-0 mt-3">
           <h2 className="section-title">Result-Oriented   <br />Web Development Process We Follow  </h2>
           <div className="ser2-subtitle-context col-md-8 text-center">
          <p>At <Link href={"/"} className="text-decoration-none text-dark"><strong>ScaleEdge Solutions</strong></Link>, we work on a pre-defined and structured, comprehensive web development process to deliver excellent results. Our process includes the following steps.
 </p>
           </div>
        </div>
        <div className="col-md-8 servicedet-col-1 my-auto ">
          <img
          height={'100%'}
          width={'100%'}
            src={"images/websiteImg2.webp"}
            // className="w-100 h-75"
            alt="web devlopment services"
            title="web devlopment services"
            
          />
        </div>
        <div className="col-md-4 servicedet-col-2 m-0 my-auto  ">
          <h3>Web Development Service</h3>
         { PointsContext.map((item,index)=>{
          return(
          <div className="capsule" key={index}>
            <i className="fa-solid fa-check capsule-check"></i>
            <p>{item.points}</p>
          </div>
          )
          })
}
        </div>
      </div>
    
</React.Fragment>
)
}
export default service02third;
