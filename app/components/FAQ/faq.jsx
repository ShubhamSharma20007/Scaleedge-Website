import React from 'react'
import Script from 'next/script'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "@/app/style/faq.css"
const faq = (props) => {
  const {details =[]} = props
  return (
    <>
    {/* <Script src='bootstrap/dist/js/bootstrap.bundle.min.js' ></Script> */}
  <div class="accordion accordion-flush col-md-12 col-12 p-0 m-0" id="accordionFlushExample">
  { details.map((item,index)=>{
    return(
 
  <div class="accordion-item p-0 " key={index}>
    <h4 class="accordion-header py-1" id={`flush-headingOne ${index}`}>
      <button class="accordion-button acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`}   aria-expanded="false" aria-controls={`flush-collapse${index}`}>
        {item.question}
      </button>
      <div className="faq-icon p-0">
      <i class="fa-solid fa-circle-plus"></i>
      </div>
    </h4>
    <div style={{visibility:'visible'}} id={`flush-collapse${index}`} class="accordion-collapse collapse text-black" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
      <p class="accordion-body acc-bdy h6  font-weight-normal">{item.answer}</p>
    </div>
  </div>
    )

    
})
  }

 
</div>
    </>
  )
}

export default faq
