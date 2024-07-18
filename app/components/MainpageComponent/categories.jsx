
import "../../style/HomeCSS/categories.css"
const categories = () => {


  return (
    <>
        
            <div  className="col-md-12 cate-main-container">
            <div className="row cate-subcontainer ">
                <p className='section-subtitle'  data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='true'>Dedicated Excellence</p>
                <div className="section-title-div col-md-8" >
                <h2 className='section-title'  data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='true'>We give it our all, and we make certain <br /> that we deliver the finest</h2>
                </div>
                <div className="col-md-10  feature-item-container py-3">
            
                <div className="feature-item col-md-4 p-0" data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='true' data-aos-delay="100">
                        <div className="feature-icon flex justify-center">
                            <img height={'12%'} width={'12%'} src={"/images/growth.webp"} title='growth-icon' alt="growth-icon"  />
                        </div>
                        <div className="feature-content" >
                            <h3 className='feature-title'>
                            Premium Services At Affordable Prices
                           
                            </h3>
                            <p className='text-start fs-6'>We know that it can be hard to find the right service provider for your needs, especially when you need something done fast. That's why we make sure that our projects are always delivered 100% in time and at an affordable price!</p>
                        </div>
                        {/* <div className="feature-link">
                            <a href=""> See More    
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div> */}

                    </div>
                    <div className="feature-item col-md-4 p-0" data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='true' data-aos-delay="200">
                        <div className="feature-icon flex justify-center">
                            <img height={'17%'} width={'17%'} src={"/images/logic.webp"} title='logic-icon' alt="logic-icon"  />
                        </div>
                        <div className="feature-content">
                            <h3 className='feature-title'>
                            Dedicated To Innovative Solutions
                            <br />
                            </h3>
                            <p className='text-start fs-6'>We at ScaleEdge undertakes projects with zeal and creativity. We strive to achieve the best results for our clients, in terms of quality, visual appeal and user experience. We believe that perfection is not an option but a must, and we take our work as seriously as you do!</p>
                        </div>
                        {/* <div className="feature-link">
                            <a href=""> See More    
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div> */}

                    </div>
                    <div className="feature-item col-md-4 p-0" data-aos="fade-up" data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="300" data-aos-once='true' data-aos-delay="300">
                        <div className="feature-icon flex justify-center">
                            <img height={'12%'} width={'12%'} src={"/images/turnover.webp"} title='turnover-icon' alt="turnover-icon"  />
                        </div>
                        <div className="feature-content">
                            <h3 className='feature-title'>
                            A Group Of Committed Experts

                            </h3>
                            <p className='text-start fs-6 '>We strive to stay on top of new technologies and techniques so that we can deliver the best possible outcomes. Our team members are always willing to help — from advice on design choices to technical support in case something goes wrong during development. We're confident you'll love what we do!</p>
                        </div>
                        {/* <div className="feature-link">
                            <a href=""> See More    
                            <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </div> */}
                        

                    </div>
                </div>
            </div>
            <img height={'8%'} width={'8%'} src={"/images/multipledot.webp"} alt="pinkdot" className='img-fluid  pinkdot-second'  title='pinkdot'/>
    </div>
   
    </>
  )
}

export default categories
