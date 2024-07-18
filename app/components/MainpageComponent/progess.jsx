import "../../style/HomeCSS/progress.css"
const progress = () => {
  return (
    <>
    <div className="progress-main-container col-md-12">
    <div className="row  justify-content-center">
        <div className="col-md-11 row justify-content-center">
        <div className="left-progress d-flex justify-content-center m-auto align-content-center col-md-6">
            <div>
            <img src={"/images/routes.webp"} width={'100%'} height={'100%'} alt="software development process" title='software development process' className='img-fluid'   />
            </div>
        </div>
        <div className="right-progress col-md-5 m-auto">
      
           <h3 className='progress-bar-title'>
            Development Progess
           </h3>

            <div className="progress-one">
           <div className="progess-context d-flex justify-content-between">
            <p className='progress-name m-0'>
            EXPLORING YOUR IDEA
            </p>
            <p className='progress-num m-0'>
                15%
            </p>
            </div>
            
            <div className="progress">
           
            <div className="progress-bar rounded-0" role="progressbar"  style={{width:'15%',}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="progress-second">
           <div className="progess-context d-flex justify-content-between">
            <p className='progress-name m-0'>
            ANALYSIS & PRE-ENGINEERING PROCESS
            </p>
            <p className='progress-num m-0'>
                35%
            </p>
            </div>
            
            <div className="progress">
           
            <div className="progress-bar rounded-0" role="progressbar"  style={{width:'35%',}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="progress-three">
           <div className="progess-context d-flex justify-content-between">
            <p className='progress-name m-0'>
            DESIGN USER INTERFACE(UI)
            </p>
            <p className='progress-num m-0'>
                55%
            </p>
            </div>
            
            <div className="progress">
           
            <div className="progress-bar rounded-0" role="progressbar"  style={{width:'55%',}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="progress-four">
           <div className="progess-context d-flex justify-content-between">
            <p className='progress-name m-0'>
            IMPLEMENTATION
            </p>
            <p className='progress-num m-0'>
                85%
            </p>
            </div>
            
            <div className="progress">
           
            <div className="progress-bar rounded-0" role="progressbar"  style={{width:'85%',}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="progress-fifth">
           <div className="progess-context d-flex justify-content-between">
            <p className='progress-name m-0'>
            TESTING & QUALITY CHECK
            </p>
            <p className='progress-num m-0'>
                95%
            </p>
            </div>
            
            <div className="progress">
           
            <div className="progress-bar rounded-0" role="progressbar"  style={{width:'95%',}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="progress-sixth">
           <div className="progess-context d-flex justify-content-between">
            <p className='progress-name m-0'>
            DEPLOYMENT & DELIVER
            </p>
            <p className='progress-num m-0'>
                100%
            </p>
            </div>
            
            <div className="progress">
           
            <div className="progress-bar rounded-0" role="progressbar"  style={{width:'100%',}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  
    </>
  )
}

export default progress
