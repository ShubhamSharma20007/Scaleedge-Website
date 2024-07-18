import React from 'react';

const stylishcard = (props) => {
    const{ contentvalue = [], content = [] } = props
  return (
    <div className="row col-md-12 sectwo-subcontainer mx-0 p-0  " >
      {content.map((item, idx) => (
        <div className="ser2-first-container col-md-12 d-flex justify-content-center" key={idx}>
          <div className="row col-md-10 p-0" >
            <h2 className="section-title col-md-12" style={{padding:'0px'}}>{item.maintitle}</h2>
            <p className="col-md-12 text-center">{item.subpara}</p>
          </div>
        </div>
      ))}

      <div className="row col-md-12 sectwo-subcontainer p-0">
        {contentvalue.map((itemsec, index) => (
          <div
            className="col-md-5 sectwo-left"
            key={index}
            data-aos={itemsec.dataaos}
            data-aos-offset={itemsec.dataoffset}
            data-aos-easing={itemsec.easing}
            data-aos-duration={itemsec.Reactduration}
            data-aos-once={itemsec.repeatation}
          >
            <div className="sectwo-icon col-md-2">
              <span>
                <i className={itemsec.icon}></i>
              </span>
            </div>
            <div className="sectwo-content col-md-10">
              <h3 className="sectwo-title">{itemsec.title}</h3>
              <p>{itemsec.subtitle}</p>
              <div className="sectwo-link"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default stylishcard;
