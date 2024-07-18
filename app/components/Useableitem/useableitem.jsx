import React from "react";
import style from "../../style/modulecss/style.module.css";

const usableitem = (props) => {
  const {
    title,
    para,
    listvalue = [],
    seoVal,
    newtitle,
    newpara,
    section,
    app_main_img,
    secondimg,
    alt_tag,
    breaktitle,
    interLinkPara,
  } = props;

  return (
    <>
      <div
        className="col-md-12 d-flex justify-content-center align-items-center flex-wrap reusable_container "
        style={{ marginTop: "150px" }}
      >
        <div className={`col-md-5  firstCol useable-first mt-5 `}>
          {seoVal ? (
            <h2 className="aboutHeading mut-heading m-0">
              {title}
              {newtitle}
            </h2>
          ) : breaktitle ? (
            <h1
              className={`aboutHeading mut-heading m-0 ${style.dark}`}
              dangerouslySetInnerHTML={{ __html: breaktitle }}
            ></h1>
          ) : (
            <h1 className={`${style.dark}`}>
              {title}
              {newtitle}
            </h1>
          )}
          {/* here i sending a section value base on this it would be rendering */}
          {section ? (
            <div className="button1 mx-0 my-3">
              <p  style={{color:'black',textTransform:'none '}} className={`${style.button1}`}>
                Service <i class="fa-solid fa-angle-right"></i>{" "}
                <span>
                  {title}
                  {newtitle}{" "}
                </span>
              </p>
            </div>
          ) : (
            ""
          )}

          <p className="para-para text-start p-0">
            {para}
            {newpara}
          </p>
          {interLinkPara && (
            <p
              className="para-para text-start p-0"
              dangerouslySetInnerHTML={{ __html: interLinkPara }}
            ></p>
          )}

          <ul className="list-useable">
            {listvalue.map((item, index) => (
              <li key={index}>{item.points}</li>
            ))}
          </ul>
          <img
            src={"/images/kite.webp"}
            width={"30%"}
            height={"30%"}
            alt="kite-icon"
            title="kite-icon"
            className="kite img-fluid position-absolute "
            style={{ opacity: 0.3,zIndex:-1 }}
          />
        </div>

        <div className="col-md-6 secondCol my-auto">
          <div className=" useable-style d-flex  justify-content-center ">
            {app_main_img ? (
              <img
                className="image img-fluid mobileImage w-75"
                width={"80%"}
                height={"80%"}
                src={app_main_img}
                alt={alt_tag}
                title={alt_tag}
              />
            ) : (
              <img
                className="image img-fluid mobileImage w-75"
                width={"80%"}
                height={"80%"}
                src={secondimg}
                alt={alt_tag}
                title={alt_tag}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default usableitem;
