"use client";
import React, { useEffect, useState } from "react";
import "@/app/style/contactPage.css";
import Footer from "@/app/components/Footer/footer";
import AOS from "aos";
import Usableitem from "@/app/components/Useableitem/useableitem";
import Navbar from "../components/Navbar/navbar";
import { instance } from "@/utils/instance";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
const contact = () => {
  useEffect(() => {
    AOS.init();
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    const dataForm = new FormData();
    dataForm.append("name", name);
    dataForm.append("email", email);
    dataForm.append("contact", contact);
    dataForm.append("query", query);
    dataForm.append("message", message);
    const obj = Object.fromEntries(dataForm);
    try {
      const res = await instance.post(
        "/contact-mail-handle",
        JSON.stringify(obj)
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setContact("");
        setQuery("");
        setMessage("");
      }
      else{
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <Navbar />
      <div className="wrapper ">
        <div className=" contact_page   py-0">
          <div className="col-md-12 d-flex justify-content-center align-items-center ">
            <div className="col-md-11">
              <Usableitem
                title="Contact"
                alt_tag="contact us"
                app_main_img={"/images/contactImage.webp"}
                section={1}
              />
            </div>
          </div>

          <div
            className="col-md-12 container-for-input d-flex justify-content-center"
            data-aos="fade-left"
            data-aos-offset="000"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-once="false"
          >
            <div className="row col-md-10">
              <div className="col-md-8">
                <h2 className="contact_page_subtitle">Get in contact</h2>
                <div className="row">
                  <div className="col-md-8">
                    <h3>
                      Feel free to get in touch <br />
                      contact with us.
                    </h3>
                    <p className="text-start">
                      Join us in realizing your goals. Our expert team is ready
                      to collaborate with you from start to finish, guiding you
                      through the entire process. We specialize in crafting
                      digital solutions that captivate and elevate. From web
                      development to mobile apps and custom software, we turn
                      ideas into impactful realities.
                    </p>
                  </div>
                  <div className="col-md-4 message-icon">
                    <i
                      className="fa fa-comments fa-4x"
                      style={{ color: "#ffdc60", margin: "30px 0px" }}
                    ></i>
                  </div>
                </div>

                <div className="contact_page_form">
                  <form>
                    <div className="row">
                      <div className="col-md-10 first-input">
                        <div class="row">
                          <div class="col">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Name"
                              name="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div class="col">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Email"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-10 first-input">
                        <div class="row">
                          <div class="col">
                            <input
                              type="number"
                              class="form-control"
                              placeholder="number"
                              name="contact"
                              value={contact}
                              maxLength={10}
                              onInput={(e) => {
                                if (e.target.value > e.target.maxLength) {
                                  e.target.value = e.target.value.slice(
                                    0,
                                    e.target.maxLength
                                  );
                                }
                              }}
                              onChange={(e) => setContact(e.target.value)}
                            />
                          </div>
                          <div class="col">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Query"
                              name="product"
                              value={query}
                              onChange={(e) => setQuery(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 text-area-form">
                        <textarea
                          name="message"
                          placeholder="You want to say something ?"
                          id=""
                          style={{ outline: "none",resize: "none", border:'1px solid #ced4da' }}
                          cols="82"
                          rows="7"
                          value={message}
                          
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="button-30 outline-none btn-btn mt-4 w-auto"
                      role="button"
                      onClick={sendEmail}
                    >
                      Send Request
                    </button>
                  </form>
                </div>
              </div>
              <div
                className="col-md-4 content-content"
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                data-aos-once="false"
              >
                <div className="contact_page_right col-md-12">
                  <div
                    className="row contact_right col-md-11"
                    style={{ minHeight: "110px", minWidth: "300px" }}
                  >
                    <div className=" contact_page_icon ">
                      <i className="fa fa-phone fa-2x"></i>
                    </div>
                    <div
                      className=" "
                      style={{ width: "fit-content", margin: "0px 20px" }}
                    >
                      <div className="page_right_content w-100 ">
                        <h4 className="call-us mb-0">Call Us</h4>
                        <a href="tel:+919511568993">+919511568993</a>
                        <br />
                        <a href="tel:+919358589005">+919358589005</a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row contact_right col-md-11"
                    style={{ minHeight: "110px", minWidth: "300px" }}
                  >
                    <div className=" contact_page_icon  ">
                      <i className="fa-solid fa-envelope fa-2x"></i>
                    </div>
                    <div
                      className=" "
                      style={{ width: "fit-content", margin: "0px 20px" }}
                    >
                      <div className="page_right_content ">
                        <h4 className="email-us mb-0">Email Us</h4>
                        <a href="mailto:anupriya@scaleedge.in">
                          anupriya@scaleedge.in
                        </a>
                        <br />
                        <a href="mailto:saurabh@oneklick.in">
                          saurabh@oneklick.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contact;
