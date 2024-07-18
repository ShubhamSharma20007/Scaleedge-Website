import "../../style/HomeCSS/ourproject.css";
const ourproject = () => { 
  

  return (
    <>
    
      <div className='col-md-12 ourproject-main-container '>
        <div className="project-sub-container col-md-12">
        <div className="row col-md-10 p-0">
            <div className="col-md-6 left-project-section">
                <p className='section-subtitle '>Project Snapshots</p>
                <div className="section-title-div ">
                <h2 className='section-var '>Thorough Project Snapshot Compilation</h2>
                </div>
          
            </div>
            <div className="col-md-6 right-project-section">
            <div className="d-flex">
                
                <button className='swipe-btn' data-slide="prev"  href="#carouselExampleIndicators" role="button">
                <i class="fa-solid fa-arrow-left"></i>
                </button>
                <button className='swipe-btn' data-slide="next" href="#carouselExampleIndicators" role="button">
                <i className="fa-solid fa-arrow-right"></i>
                </button>
               
            </div>
            </div>
            </div>
            
        </div>

        <div id="carouselExampleIndicators" className="carousel slide mt-5" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner " style={{height:'100vh'}}>
    <div className="carousel-item active"  style={{objectFit:"cover"}} >
      
      <img style={{objectFit:'cover'}} className="d-block m-auto img-fluid carousel-img-part " width={"90%"} height={'100%'} src={"/images/ims.webp"} alt="inventory management system" title='inventory management system'   />
    
      
    </div>
    <div className="carousel-item " style={{objectFit:"cover"}}  >
      <img style={{objectFit:'cover'}} className="d-block m-auto img-fluid carousel-img-part"  width={"90%"} height={'100%'} src={"/images/2.webp"} alt="oneklick website" title='oneklick website' />
      
    
    </div>
    <div className="carousel-item "  style={{objectFit:"cover"}} >
      <img style={{objectFit:'cover'}} className="d-block m-auto img-fluid carousel-img-part" width={"90%"} height={'100%'} src={"/images/3.webp"}  alt="attendance software system" title='attendance software system' />
      
    
    </div>

  </div>

</div>

</div>
   
      
    </>
  )
}

export default ourproject
