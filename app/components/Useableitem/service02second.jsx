
import React from 'react'

import "../../style/service02second.css"
import "../../style/service03.css"
const service02second = (props) => {
  const{contentsecond=[]} =props
  return (
    <>
       <div className="ser2-first-container col-md-12 m-0 p-0">
          <div className="row col-md-11 sectwo-subcontainer mt-1 p-0">
          {contentsecond.map((item, index) => {
            return (
              <div
                className="col-md-6 p-0 "
                key={index}
                data-aos={item.dataaos}
                data-aos-offset={item.dataoffset}
                data-aos-easing={item.easing}
                data-aos-duration={item.Reactduration}
                data-aos-once="true"
              >
                <div className=" service3-splide text-center service3-splide-1" style={{minHeight:'250px'}}>
                  <h3 className="text-center h5 font-weight-bold">{item.title}</h3>
                  <p className='text-start px-4'>{item.para}</p>
                  <div className="service3-img-wrapper service3-img-wrapper-1 flex justify-center">
                    <img
                        height={"11%"}
                        width={"11%"}
                      className="img-fluid"
                      src={item.icon}
                      alt={item.alt}
                      title={item.alt}
                      
                    />

                    {/* <img className="service3-img-wrapper-img2" src="" alt=""  /> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>


       
        
    </>
  )
}

export default service02second
