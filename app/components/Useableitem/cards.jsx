import React from 'react'
import { useEffect } from 'react'
import "../../style/cards.css"
const cards = (props) => {
  const {iconcontainer =[]} =props
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


<div className="grap-main-container col-md-12 ">
  <div className="col-md-12">
            <h2 className="section-title col-md-11 text-start added-new mt-3" style={{color:'#FFDC60',textAlign:'start'}} >
            Get Services Built with <br /> the Latest Robust Technologies
            </h2>
            <p className="col-md-12 text-justify"  style={{color:'#FFDC60'}}>
              ScaleEdge Solution helps you get the best-in-class software
              development solutions within your budget range. Our custom
              software development services are client-focused and
              technologically advanced.
            </p>
  </div>
    <img width={'100%'} height={'100%'} src={"/images/blackearth.webp"} className='img-fluid earthdot' title='background_img' alt="background_img" />
  { iconcontainer.map((items,index)=>{
    return(
  <div className="col-md-2 graphic-sub-container m-4 ">
    <div className="col graphic-index" key={index}>
   
    <i class={items.img}></i>
    </div>
  </div>
    )
  })
}
</div>

    </>
  )
}

export default cards
