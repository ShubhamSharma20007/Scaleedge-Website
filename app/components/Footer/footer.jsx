"use client";
import React, { useEffect } from "react";
import "@/app/style/footer.css";
import Link from "next/link";
import { instance } from "@/utils/instance";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
export default function footer() {

  const [email, setEmail] = React.useState("");


  const handleSubmit = async (e)=>{
    e.preventDefault();
    // const fromData = new FormData();
    //   fromData.set('email',email)
    const data = await instance.post("/mail-handle",JSON.stringify(email))
    console.log(data)
    if(data.data.success){
      toast.success(data.data.message)
      setEmail("")
    }
    else{
      toast.error(data.data.message)
    }
    
  }

  
  useEffect(() => {
    document.querySelector(".topid").addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });

  return (
    <div>
      <Toaster position="top-center"/>
      <div className="d-flex justify-content-center align-items-center">
        <div className="row footer-small flex-wrap col-md-10  col-12 ">
          <img
            src={"/images/footer-lady-logo.webp"}
            alt="footicon_logo"
            title="footicon_logo"
            className="img-fluid footer-lady "
          />
          <h4 className="text-center col-md-5">
            Ready to Grow Your Business?{" "}
          </h4>
          <p className="col-md-5">
            Let's Start the Conversation. Contact Us Today and Discover How
            ScaleEdge Solutions Can Propel Your Growth
          </p>
          <Link href={"/contact"} className=" topid" style={{cursor:'pointer',zIndex:10}}>
            Get Started
          </Link>
        </div>
      </div>
      <div className="container-fluid footer-container flex justify-content-center align-items-center">
        <div className="row footer-row col-md-11 col-12 m-auto">
          <div className="col-md-4 footer-col-1 footer-col ">
            <img
              className="footer-logo-img img-fluid w-50"
              src={"/images/scaleedge-white-logo.webp"}
              title="scaleedge logo"
              width={"50%"}
              height={"50%"}
              alt="scaleedge logo"
            />
            <p className="footer-para-1">
              At ScaleEdge Solutions, we are dedicated to simplifying the most
              complex challenges with ease.
            </p>
            <div className="footer-phone">
              <i className="fa-solid fa-phone"></i>
              <p className="mobilenum-content">
                Have any questions? <br />{" "}
                <a href="tel:9251697397">9251697397 </a>
              </p>
            </div>
          </div>
          <div className="col-md-3 footer-col-2 footer-col mx-auto col-10 ">
            <h4 className="footer-heading text-light ">Service</h4>
            <a
              href="/web-development-service"
              className="text-decoration-none text-white "
            >
              {" "}
              <h5 className="">Web Design</h5>
            </a>
            <a
              href="/app-development-service"
              className="text-decoration-none text-white "
            >
              {" "}
              <h5 className="">App Development</h5>
            </a>
            <a
              href="/software-development-service"
              className="text-decoration-none text-white "
            >
              {" "}
              <h5 className="">Software Development</h5>
            </a>

            <a
              href="/digital-marketing-service"
              className="text-decoration-none text-white "
            >
              <h5 className="">Online Marketing</h5>
            </a>
          </div>

          <div className="col-md-4 footer-col-4 footer-col ml-auto">
            <h4 className="footer-heading text-light mb-1">Newslatter</h4>
            <p>
              Get in touch with us today to explore how our experts can enhance
              your business
            </p>

            <form onSubmit={(e)=>handleSubmit(e)} className="footer-seach">
              <input
                type="email"
                name="email"
                value={email}
                className="text-black"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
              />
              <button type="submit" >Subscribe</button>

            </form>

            <div className="footer-social-media-wrapper ">
              <h5>Social Media:</h5>
              <a
                href="https://m.facebook.com/profile.php/?id=100089878991548"
                className="fa-brands icon-edit-second fa-facebook-f icon-wrapper face hover:bg-orange-200"
              ></a>

              <a
                href="https://www.linkedin.com/company/scaleedge-solutions/"
                class="fa-brands fa-linkedin-in icon-edit-three icon-wrapper"
              ></a>
              <a
                href="https://www.instagram.com/scaleedge/"
                className="fa-brands fa-instagram icon-edit-four icon-wrapper"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
