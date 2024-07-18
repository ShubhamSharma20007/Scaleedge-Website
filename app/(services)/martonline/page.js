"use client"
import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import Usableitem from "../../components/Useableitem/useableitem"
import "../../style/martonlineCSS.css"
import '../../style/service02.css';
import '../../style/service03.css';
import "../../style/about.css"
import '../../style/service01.css';
import '../../style/service04.css';
import "../../style/HomeCSS/mainpage.css"
import "../../style/HomeCSS/oursolution.css"
const page = () => {
    useEffect(() => {
        const verticalLine = document.querySelector(".vertical")
      
        const handleScroll = () => {
            if (window.scrollY > 1300 && window.innerWidth > 1000) {
                let scrollPosition = window.scrollY - 1600;
                verticalLine.style.display ='block'
                verticalLine.style.height = `${scrollPosition}px`
            }
        }

        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])
  return (
    <div>
     <Navbar></Navbar>
     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://www.martonline.co.in/assets-new/img/Sliders_03.png" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.martonline.co.in/assets-new/img/Sliders_03.png" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.martonline.co.in/assets-new/img/Sliders_03.png" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only ">Next</span>
  </a>
</div>
<Usableitem
      alt_tag="MartOnline Customer"
        title="MartOnline Customer"
        reverse ={true}
        para="The customer has to Signup and then enter the name of the shop. Select the category of the shop and then fill the details that are required. You will be registered after filling the OTP that is received on the registered mobile number.

        Wait for the confirmation from the admin, and once you are approved then you will receive a notification regarding the approval of the shop.
        
        From the account section, the customer can edit their profile accordingly if they have missed anything while registering.
        
        The customer can change the order status i.e. Pending, Ready to Ship, On the Way, and Delivered. Different sections are given according to the order status and the list will be listed according to the status.
        
        The customer who have shops of the categories mentioned below can be added in the app:"
        app_main_img = {'https://www.martonline.co.in/assets-new/img/v-shop-qr.png'}
      />
   <div className="ser2-first-container col-md-12 p-0 py-3">
    <h2 className="section-title">How to use App</h2>
        
        </div>
<Usableitem
      alt_tag="Explaining how to use app"
        title="Explaining how to use app"
        reverse ={true}
        para="MartOnline provides the benefit to the users by shopping online from anywhere and at any time. The user can set the time according to their convenience and can receive the order accordingly.

        The customers can search for the local vendors from where they want to shop. Not only this but they can also see the location of the shop and by clicking on the direction button they can see the direction as well.
        
        If the user does not want to select the items then they can upload the list of the items and the vendor will accept the order. Then the vendor will deliver the items. You will receive the order details and you can also track your order.
        
        Not only this, but the buyer can also opt to buy using unique option i.e Direct buy. The user just has to click on the Direct Buy icon and then send the list of items to the vendor.
        
        The users are given the benefit of coupons as well through which they can purchase items at a discounted price.
        
        The user’s order history will be saved and they can repeat the order.
        
        This is the best platform where the vendors and customers meet!!"
        app_main_img = {'https://www.martonline.co.in/assets-new/img/v-img.png'}
      />
      
      <div className="ser2-first-container col-md-12 p-0 py-3">
    <h2 className="section-title">App Features</h2>
           <div className="ser2-subtitle-context col-md-7">
           <p className="text-center">Users can understand easily</p>
           </div>

        </div>

    
       <div className="w-full features-wise-container">
       <div className="vertical">
            
            </div>
      <div className="timeline-container">
      <div className="timeline-item  ">
            <div className="partition2 row-cols-10  col-md-5 d-flex justify-content-center flex-column  cols-10 align-align-items-center">
                <img src="https://www.martonline.co.in/assets-new/img/delivery-boy.png"  className='w-75 in-width m-auto img-fluid' alt="" />
                <div className='w-75 in-width'>
                    <h2 className='text-center section-title'>Self Pick Up</h2>
                     <p className='text-center '>You can order items online from the app and pick the order from the shop you have ordered. No delivery charges will be applicable.</p>
                </div>
            </div>
          

        </div>
        <div className="timeline-item ">
            <div className="partition2 row-cols-10  col-md-5 d-flex justify-content-center flex-column  cols-10 align-align-items-center">
                <img src="https://www.martonline.co.in/assets-new/img/delivery-boy.png"  className='w-75 in-width m-auto img-fluid' alt="" />
                <div className='w-75 in-width'>
                    <h2 className='text-center section-title'>Self Pick Up</h2>
                     <p className='text-center'>You can order items online from the app and pick the order from the shop you have ordered. No delivery charges will be applicable.</p>
                </div>
            </div>
          

        </div>
        <div className="timeline-item ">
            <div className="partition2 row-cols-10  col-md-5 d-flex justify-content-center flex-column  cols-10 align-align-items-center">
                <img src="https://www.martonline.co.in/assets-new/img/delivery-boy.png"  className='w-75 in-width m-auto img-fluid' alt="" />
                <div className='w-75 in-width'>
                    <h2 className='text-center section-title'>Self Pick Up</h2>
                     <p className='text-center'>You can order items online from the app and pick the order from the shop you have ordered. No delivery charges will be applicable.</p>
                </div>
            </div>
          

        </div>
        <div className="timeline-item ">
            <div className="partition2 row-cols-10  col-md-5 d-flex justify-content-center flex-column  cols-10 align-align-items-center">
                <img src="https://www.martonline.co.in/assets-new/img/delivery-boy.png"  className='w-75 in-width m-auto img-fluid' alt="" />
                <div className='w-75 in-width'>
                    <h2 className='text-center section-title'>Self Pick Up</h2>
                     <p className='text-center'>You can order items online from the app and pick the order from the shop you have ordered. No delivery charges will be applicable.</p>
                </div>
            </div>
          

        </div>
      </div>
       
       </div>
       <div className="ser2-first-container col-md-12 p-0 py-3">
    <h2 className="section-title">At The End</h2>
           <div className="ser2-subtitle-context col-md-7">
           <p className="text-center">Users can understand easily Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ratione ab delectus, atque eos dignissimos rerum illo minus consequatur, adipisci neque. Reiciendis, amet. Ab nemo, veniam minima recusandae eligendi sunt sapiente perferendis officia assumenda est sed explicabo tempora itaque molestiae.</p>
           </div>

        </div>
     <Footer></Footer>
    </div>
  )
}

export default page
