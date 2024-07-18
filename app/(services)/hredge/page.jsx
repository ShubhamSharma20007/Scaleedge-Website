"use client";
import React, { useState } from "react";
import Navbar from "@/app/components/Navbar/navbar";
import Footer from "@/app/components/Footer/footer";
import MessageSVG from "@/public/images/messagesvg.svg";
import Usableitem from '@/app/components/Useableitem/useableitem';

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { instance } from "@/utils/instance";

const page = () => {
 


  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  const [contact, setContact] = useState("");
  const sendEmail = async (e) => {
    e.preventDefault();
    const dataForm = new FormData();
    dataForm.append("email", email);
    dataForm.append("name", name);
    dataForm.append("query", query);
    dataForm.append("contact", contact);
    const obj = Object.fromEntries(dataForm);
    try {
      const res = await instance.post(
        "/contact-mail-handle", 
        JSON.stringify(obj)
      );
      console.log(res)
      if (res.data.success) {
      toast.success(res.data.message);
       setEmail("");
       setName("");
       setQuery("");
       setContact("");
       setTimeout(()=>{
        window.location.reload()
       },500)
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
    <Toaster position="top-center"/>
      <Navbar></Navbar>
       
            <Dialog className="h-screen z-[99]" >
          <DialogTrigger asChild>
            <div
              onClick={() => {
                document.querySelector('.navbar-container').style.transform = 'translateY(-120px)'
              }}
              className="w-12 h-40 bg-[#FFDC60] shadow-lg cursor-pointer rounded-tl-md rounded-bl-md  hover:ring-2 transition-all duration-300 ease-linear  overflow-hidden z-[20] top-1/2 right-0 fixed flex justify-center items-center   hover:bg-[#FFE483] "
            >
            <p className="rotate-90  tracking-wider w-full p-2 -translate-y-1/2 whitespace-nowrap font-semibold text-lg">Contact us</p>
            </div>
          </DialogTrigger>
          
        
          <DialogContent className="sm:max-w-[425px] z-[101]">
            <DialogHeader>
              <DialogTitle>Contact Form</DialogTitle>
            </DialogHeader>
            <form onSubmit={(e)=>sendEmail(e)}>
            <div className="grid gap-4 pt-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-start">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-start">Number</Label>
                <Input
                  type="number"
                  id="number"
                  value={contact}
                  name="number"
                  onChange={(e) => setContact(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-start">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-start">Query</Label>
                <Textarea
                  placeholder="Type your message here."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="col-span-3 resize-none"
                />
              </div>
              
            <Button type="submit" className="bg-[#FFDC60] hover:bg-[#FFDC60]" >Submit</Button>

            </div>
            </form>
          </DialogContent>
    
        </Dialog>
        <Usableitem
      alt_tag=" HR Edge: A Comprehensive HR Solution"
        title="HR Edge: A Comprehensive HR Solution"
        breaktitle = 'HR Edge: </br> A Comprehensive HR Solution'
        section ="2"
        para="HR Edge is a powerful all-in-one platform that streamlines and simplifies your HR processes. The features of our HR software solution enable your organization to operate more efficiently and effectively. HR Edge eliminates the inefficiencies and errors associated with manual HR tasks and integrates key functions such as payroll, benefits administration, time and attendance tracking, and performance management into a single, user-friendly platform."
        app_main_img = {"/images/hredge (5).png"}
      />

      <div className="main min-h-screen w-full bg-[#fffCF3] sm:px-7">
        {/* <div className="section-one w-full flex justify-between items-center flex-wrap mt-[100px] ">
          <div className="flex flex-wrap w-full sm:w-1/2 p-4 sm:p-10  ">
            <h1 className=" text-3xl sm:text-5xl  font-semibold text-[E9E9E9] md:leading-[50px]">
              HR Edge: A Comprehensive HR Solution
            </h1>
            <p className="py-2 sm:py-4 sm:py-5 text-start sm:text-justify font-regular text-md sm:text-lg">
              HR Edge is a powerful all-in-one platform that streamlines and
              simplifies your HR processes. From recruitment to payroll, our
              innovative tools and features empower your organization to operate
              more efficiently and effectively. With HR Edge, you can say
              goodbye to the hassle of managinghe HR tasks manually and embrace a
              future of seamless, data-driven HR management.
            </p>
        
          </div>
          <div className="w-full sm:w-1/2 p-4  ">
            <div className="w-full h-full ">
              <Image
                height={1000}
                width={1000}
                quality={100}
                className="object-cover w-full h-full rounded-md "
                src="/images/hredge (5).png"
                alt="hredge-image"
              />
            </div>
          </div>
        </div> */}
        <div className="section-second w-full mt-4  ">
          <div className="flex flex-wrap p-0 md:p-8" >
            <div className="flex  flex-col w-full lg:w-[60%] p-4 sm:p-10 justify-center sm:justify-start items-center sm:items-start ">
              <div className="w-11/12  px-0  sm:px-3  ">
                <h2 className=" text-3xl sm:text-[2.8rem]  sm:whitespace-nowrap  sm:mb-10 font-semibold text-[E9E9E9] md:leading-[50px]">
                Your All-in-One HR Management Solution
                </h2>
                <div className="relative min-h-36  sm:py-5 sm:ml-5 sm:mx-0 bg-[#F4DDFF]  w-full sm:w-9/12  my-3 sm:my-6 p-2 sm:p-4 rounded-md">
                  <div className="w-24  h-24 rounded-full absolute top-1/2 -translate-y-1/2 -left-8  sm:-left-10  border-8 border-[#fffCF3]  bg-[#D9D9D9] z-10 flex justify-center items-center">
                    <p className=" text-3xl sm:text-4xl font-semibold text-[E9E9E9] m-0 ">
                      1
                    </p>
                  </div>
                  <div className=" pl-24  sm:pl-38  ">
                    <h3 className="text-[E9E9E9] text-xl font-semibold">
                      Check In/Out
                    </h3>
                    <p className=" text-start  font-regular text-md sm:text-lg">
                    Employees can easily login and mark attendance using facial recognition, ensuring accurate attendance records.
                    </p>
                  </div>
                </div>
                <div className="relative min-h-36   sm:py-5  sm:ml-5  sm:mx-0 bg-[#F4DDFF]  w-full sm:w-9/12  my-3 sm:my-6 p-2 sm:p-4 rounded-md">
                  <div className="w-24 h-24 rounded-full absolute top-1/2 -translate-y-1/2 -left-8  sm:-left-10  border-8 border-[#fffCF3]  bg-[#D9D9D9] z-10 flex justify-center items-center">
                    <p className=" text-3xl sm:text-4xl font-semibold text-[E9E9E9] m-0 ">
                      2
                    </p>
                  </div>
                  <div className=" pl-24  sm:pl-38 ">
                    <h3 className="text-[E9E9E9] text-xl font-semibold">
                      Attendance Monitoring{" "}
                    </h3>
                    <p className=" text-start font-regular text-md sm:text-lg">
                    HR managers and employees can track attendance in real-time, ensuring accountability and compliance with company policies.
                    </p>
                  </div>
                </div>
                <div className="relative min-h-36  sm:py-5 sm:ml-5 sm:mx-0 bg-[#F4DDFF]  w-full sm:w-9/12  my-3 sm:my-6 p-2 sm:p-4 rounded-md">
                  <div className="w-24 h-24 rounded-full absolute top-1/2 -translate-y-1/2 -left-8  sm:-left-10  border-8 border-[#fffCF3]  bg-[#D9D9D9] z-10 flex justify-center items-center">
                    <p className=" text-3xl sm:text-4xl font-semibold text-[E9E9E9] m-0">
                      3
                    </p>
                  </div>
                  <div className=" pl-24  sm:pl-38 ">
                    <h3 className="text-[E9E9E9] text-xl font-semibold">
                      Reporting and Analytics
                    </h3>
                    <p className=" text-start font-regular text-md sm:text-lg">
                    HR managers and employees comprehensive attendance reports provide valuable insights for workforce planning and data-driven decision making.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[60%] lg:w-[40%]  p-4 flex justify-center items-center ">
              <div className="w-10/12 h-10/12 ">
                <div className="relative">
                  <img
                    src="./images/checkout-sect.gif"
                    alt="timer"
                    title="timer"
                    className="w-48 absolute lg:top-1/2 md:-left-48  -left-20"
                  />
                  <img
                    className="object-contain w-full h-full  m-auto"
                    src="./images/zp-img3.png"
                    alt="lady-image"
                    title="lady-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-third p-4 sm:p-10  ">
          <h2 className=" text-3xl sm:text-5xl  font-semibold text-[E9E9E9] md:leading-[50px] text-center">
          Employee Attendance Tracking 
          </h2>
          <div className=" flex items-center gap-4 md:gap-5 justify-center flex-wrap">
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
              <div className="p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 mb-4 text-gray-900"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                    clipRule="evenodd"
                  />
                  <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"></path>
                </svg>
                <h3 className="text-[E9E9E9] block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Real-time Updates
                </h3>
                <p className=" text-start font-regular text-md sm:text-lg">
                Employees can access their updated pay information at any time, and changes are reflected in real-time, promoting transparency and trust
                </p>
              </div>
              {/* <div className="p-6 pt-0">
                <a href="#" className="inline-block">
                  <button
                    className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </a>
              </div> */}
            </div>
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
              <div className="p-6">
                <svg
                  className="w-12 h-12 mb-4 text-gray-900"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 17V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="text-[E9E9E9] block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Detailed Breakdowns
                </h3>
                <p className=" text-start font-regular text-md sm:text-lg">
Employees can easily get a clear understanding of their salary and attendance reports which includes all the relevant factors.

                </p>
              </div>
              {/* <div className="p-6 pt-0">
                <a href="#" className="inline-block">
                  <button
                    className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </a>
              </div> */}
            </div>
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
              <div className="p-6">
                <svg
                  className="w-12 h-12 mb-4 text-gray-900"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 3L14 9L10 5L3 11M4.5 21C3.67157 21 3 20.3284 3 19.5V17.5C3 16.6716 3.67157 16 4.5 16C5.32843 16 6 16.6716 6 17.5V19.5C6 20.3284 5.32843 21 4.5 21ZM11.5 21C10.6716 21 10 20.3284 10 19.5V14.5C10 13.6716 10.6716 13 11.5 13C12.3284 13 13 13.6716 13 14.5V19.5C13 20.3284 12.3284 21 11.5 21ZM18.5 21C17.6716 21 17 20.3284 17 19.5V16.5C17 15.6716 17.6716 15 18.5 15C19.3284 15 20 15.6716 20 16.5V19.5C20 20.3284 19.3284 21 18.5 21Z"
                    stroke="#000000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="text-[E9E9E9] block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Accurate Calculations
                </h3>
                <p className=" text-start font-regular text-md sm:text-lg">
                  HR Edge's advanced algorithms ensure precise salary
                  calculations, taking into account factors like attendance,
                  overtime, and deductions.
                </p>
              </div>
              {/* <div className="p-6 pt-0">
                <a href="#" className="inline-block">
                  <button
                    className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="section-four p-4 sm:p-10  ">
          <h2 className=" text-3xl sm:text-5xl f  font-semibold text-[E9E9E9] md:leading-[50px] text-center mb-10">
          Employee Leave Management 
          </h2>
          <div>
            <div className="relative flex items-center  gap-4 min-h-36    sm:py-5   sm:mx-0 bg-[#F4DDFF] max-w-screen-md  my-3 sm:my-6  p-3 sm:p-4 rounded-md">
              <div className="w-48 md:w-36 h-24 relative z-10 ">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                  src="./images/depositphotos_623703522-stock-illustration-interaction-icon-user-interface-vector.webp"
                  alt="real-time"
                  title="real-time"
                />
              </div>
              <div className="w-fit">
                <h3 className="text-[E9E9E9] text-xl font-semibold">
                  Intuitive Interface
                </h3>
                <p className=" text-start  font-regular text-md sm:text-lg">
                HR managers and Employees can easily submit, track, and manage their leave requests through a user-friendly platform, eliminating the need for paper-based processes.
                </p>
              </div>
            </div>
            <div className="flex justify-end ">
              <div className="relative flex items-center flex-row-reverse   sm:gap-4 min-h-36   sm:py-5  sm:mx-0 bg-[#F4DDFF] max-w-screen-md  my-3 sm:my-0 p-3 sm:p-4 rounded-md">
                <div className="w-48 md:w-36 h-24 relative z-10 ">
                  <img
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75"
                    src="./images/stamp.png"
                    alt="stamp"
                    title="stamp"
                  />
                </div>
                <div className="w-fit">
                  <h3 className="text-[E9E9E9] text-xl font-semibold">
                    Approval Workflows
                  </h3>
                  <p className=" text-start  font-regular text-md sm:text-lg">
                  HR managers can streamline approval processes, ensuring efficient leave management and compliance with company policies, and reducing administrative overhead.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex items-center  gap-4 min-h-36   sm:py-5   sm:mx-0 bg-[#F4DDFF] max-w-screen-md  my-3 sm:my-6 p-3 sm:p-4 rounded-md">
              <div className="w-48 md:w-24 h-24 relative z-10 ">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                  src="./images/real-time.png"
                  alt="timer"
                  title="timer"
                />
              </div>
              <div className="w-fit">
                <h3 className="text-[E9E9E9] text-xl font-semibold">
                  Real-time Updates
                </h3>
                <p className=" text-start  font-regular text-md sm:text-lg">
                The HR department receives immediate notification of leave status, and employees can share leave information with everyone, thereby promoting transparency in company policies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-five p-4 sm:p-10  ">
          <h2 className=" text-3xl sm:text-5xl f  font-semibold text-[E9E9E9] md:leading-[50px] text-center mb-10">
            Meeting In / Out Tracking And Reporting
          </h2>
          <div>
            <div className="relative flex items-center   min-h-30   sm:mx-0 max-w-screen-md   py-2 sm:py-4 rounded-md">
              <div
                className="hidden sm:block w-52 h-36 relative z-10   left-2 bg-[#F4DDFF]"
                style={{
                  WebkitClipPath:
                    "polygon(50% 0%, 95% 15%, 95% 85%, 50% 100%, 5% 85%, 5% 15%)",
                  clipPath:
                    "polygon(50% 0%, 95% 15%, 95% 85%, 50% 100%, 5% 85%, 5% 15%)",
                }}
              >
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover h-full w-full "
                  style={{ clipPath: "circle(34%)" }}
                  src="./images/images (1).png"
                  alt="metting-in-logo"
                  title="metting-in-logo"
                />
              </div>
              <div className="bg-[#F4DDFF] px-3 py-[1rem] rounded-md sm:rounded-r-md sm:rounded-br-md sm:rounded-none ">
                <div className="flex gap-5 items-center">
                  <div>
                    <h3 className="text-[E9E9E9] text-xl font-semibold mb-0">
                      Meeting Check-in
                    </h3>
                    <p className=" text-start  font-regular text-sm sm:text-md mb-0">
                    Employees can easily log in and out of meetings, ensuring accurate attendance tracking and productivity monitoring.
                    </p>
                  </div>
                  <p className="text-4xl sm:text-5xl font-semibold m-0">
                    1
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end ">
              <div className="relative flex items-center flex-row-reverse my-0   min-h-30  sm:mx-0 max-w-screen-md   py-2 sm:py-4 rounded-md">
                <div
                  className="hidden sm:block w-60 h-36 relative z-10  right-2 bg-[#F4DDFF]"
                  style={{
                    WebkitClipPath:
                      "polygon(50% 0%, 95% 15%, 95% 85%, 50% 100%, 5% 85%, 5% 15%)",
                    clipPath:
                      "polygon(50% 0%, 95% 15%, 95% 85%, 50% 100%, 5% 85%, 5% 15%)",
                  }}
                >
                  <img
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-fill h-full w-full p-4 "
                    style={{ clipPath: "circle(34%)" }}
                    src="./images/images.jpg"
                    alt="real-time-logo"
                    title="real-time-logo"
                  />
                </div>
                <div className="bg-[#F4DDFF] px-3 py-[1rem] rounded-md sm:rounded-r-md  sm:rounded-tr-none sm:rounded-br-none ">
                  <div className="flex gap-5 items-center flex-row-reverse">
                    <div>
                      <h3 className="text-[E9E9E9] text-xl font-semibold mb-0">
                        Real-time Monitoring
                      </h3>
                      <p className=" text-start  font-regular text-sm sm:text-md mb-0">
Managers can monitor meeting attendance and participation in real-time, allowing them to address any issues or make adjustments as needed.

                      </p>
                    </div>
                    <p className="text-4xl sm:text-5xl font-semibold m-0 text-[E9E9E9]">
                      2
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="relative flex items-center   min-h-30   sm:mx-0 max-w-screen-md  py-2 sm:py-4 rounded-md">
              <div
                className="hidden sm:block w-60 h-36 relative z-10  left-2 bg-[#F4DDFF]"
                style={{
                  WebkitClipPath:
                    "polygon(50% 0%, 95% 15%, 95% 85%, 50% 100%, 5% 85%, 5% 15%)",
                  clipPath:
                    "polygon(50% 0%, 95% 15%, 95% 85%, 50% 100%, 5% 85%, 5% 15%)",
                }}
              >
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full p-4 "
                  style={{ clipPath: "circle(34%)" }}
                  src="./images/download.jpg"
                  alt=""
                />
              </div>
              <div className="bg-[#F4DDFF] px-3 py-[1rem] rounded-md sm:rounded-r-md sm:rounded-br-md sm:rounded-none ">
                <div className="flex gap-5 items-center">
                  <div>
                    <h1 className="text-[E9E9E9] text-xl font-semibold mb-0">
                      Detailed Reporting
                    </h1>
                    <p className=" text-start  font-regular text-sm sm:text-md mb-0 line-clamp-2">
                    Managers and employees can easily generate comprehensive reports on meeting attendance, duration, and productivity, providing valuable information to improve collaboration.
                    </p>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-semibold m-0text-[E9E9E9]">
                    03
                  </h1>
                </div>
              </div>
            </div> */}

            <div className="relative flex items-center   min-h-30   sm:mx-0 max-w-screen-md   py-2 sm:py-4 rounded-md">
              <div
                className="hidden sm:block w-52 h-36 relative z-10   left-2 bg-[#F4DDFF]"
                style={{
                  WebkitClipPath:
                    "polygon(50% 0%, 95% 15%, 95% 85%, 50% 100%, 5% 85%, 5% 15%)",
                  clipPath:
                    "polygon(50% 0%, 95% 15%, 95% 85%, 50% 100%, 5% 85%, 5% 15%)",
                }}
              >
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover h-full w-full p-4 "
                  style={{ clipPath: "circle(34%)" }}
                  src="./images/download.jpg"
                  alt="check-in-logo"
                  title="check-in-logo"
                />
              </div>
              <div className="bg-[#F4DDFF] px-3 py-[1rem] rounded-md sm:rounded-r-md sm:rounded-br-md sm:rounded-none ">
                <div className="flex gap-5 items-center">
                  <div>
                    <h3 className="text-[E9E9E9] text-xl font-semibold mb-0">
                      Meeting Check-in
                    </h3>
                    <p className=" text-start  font-regular text-sm sm:text-md mb-0">
                    Employees can easily log in and out of meetings, ensuring accurate attendance tracking and productivity monitoring.
                    </p>
                  </div>
                  <p className="text-4xl sm:text-5xl font-semibold m-0 text-[E9E9E9]">
                    3
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="section-six">
          <div>
            <div className=" p-4 sm:p-10  ">
              <h2 className=" text-3xl sm:text-5xl   font-semibold text-[E9E9E9] md:leading-[50px] text-center mb-10">
                Face Matching for Employee Identification
              </h2>
              <div className="flex justify-center gap-5 flex-wrap">
                <div className="relative flex items-center   min-h-30  mx-auto sm:mx-0 max-w-screen-md  my-0 sm:my-6 p-2 sm:p-4 rounded-md">
                  <div className="relative grid md:h-[26rem] xl:min-h-[30rem] w-full md:max-w-[20rem]   xl:max-w-[24rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                    <div className="absolute brightness-[0.4] inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://plus.unsplash.com/premium_photo-1675404521325-39f711db85ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNlY3VyZSUyMGFjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                      <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12 m-auto md:py-0">
                    <h3 className="block whitespace-nowrap mb-4 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                        Secure Access
                      </h3>
                      <p className="mb-6 block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                        Ensure workplace safety with advanced facial recognition
                        technology that reliably identifies employees and
                        prevents unauthorized access.
                      </p>
                   
                      <img
                        alt="secure-access-logo"
                        title="secure-access-logo"
                      
                        src="./images/noun-security-access-3344513.svg"
                        className="  bg-white relative inline-block h-[74px] p-2 w-[74px] !rounded-full border-2 border-white object-cover object-center object-top"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center   min-h-30  mx-auto sm:mx-0 max-w-screen-md  my-0 sm:my-6 p-2 sm:p-4 rounded-md">
                  <div className="relative grid md:h-[26rem] xl:min-h-[30rem] w-full md:max-w-[20rem]   xl:max-w-[24rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                    <div className="absolute brightness-[0.4] inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1628440501245-393606514a9e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                      <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12 m-auto md:py-0">
                    <h3 className="block whitespace-nowrap mb-4 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                        Accurate Identification
                      </h3>
                      <h2 className="mb-6 block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                      HR Edge software identifies employees quickly and accurately, streamlines check-in and check-out processes, and eliminates the need for traditional ID cards.
                      </h2>
                      
                      <img
                        alt="time-punchual-logo"
                        title="time-punchual-logo"
                        src="./images/noun-identify-6656313.svg"
                        className="  bg-white relative inline-block h-[74px] p-2 w-[74px] !rounded-full border-2 border-white object-cover object-center object-top"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center   min-h-30  mx-auto sm:mx-0 max-w-screen-md my-0 sm:my-6 p-2 sm:p-4 rounded-md">
                  <div className="relative grid md:h-[26rem] xl:min-h-[30rem] w-full md:max-w-[20rem]   xl:max-w-[24rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                    <div className="absolute brightness-[0.4] inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/37/tEREUy1vSfuSu8LzTop3_IMG_2538.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                      <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 px-6 py-14 md:px-12 md:py-0 m-auto">
                    <h5 className="block mb-4 whitespace-nowrap font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
                        Time-saving
                      </h5>
                      <h2 className="mb-6 block font-sans text-xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                      HR Edge software streamlines employee attendance tracking and access control, freeing your HR team to focus on more strategic initiatives.
                      </h2>
                     
                      <img
                        alt="time-saving-logo"
                        title="time-saving-logo"
                        src="./images/noun-time-saving-6146704.svg"
                        className="  bg-white relative inline-block h-[74px] p-2 w-[74px] !rounded-full border-2 border-white object-cover object-center object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-seven">
          <div className=" p-4 sm:p-10  ">
            <h2 className=" text-2xl sm:text-4xl mb-4  lg:mb-10   font-semibold text-[E9E9E9] md:leading-[50px] text-center">
              <span className="text-zinc-800 text-3xl sm:text-5xl">
                User HR Edge to{" "}
              </span>
              <br />
              Make better people decision's{" "}
            </h2>
            <div className="flex justify-end  items-center relative w-full sm:pb-16  mb-0 ">
              <div className="w-full lg:w-[50%]   rounded-2xl relative">
                <div className="w-full block lg:absolute -left-[95%] top-1/2 lg:-translate-y-1/2 z-[9] bg-white rounded-xl ">
                  <div className="p-5 lg:p-10   md:m-auto shadow-2xl rounded-xl">
                    <h3 className="text-[E9E9E9] text-3xl mb-2 font-semibold">
                      Understand your team and improve work performance
                    </h3>
                    <p className=" text-start font-regular text-md sm:text-md line-clamp-6">
                    HR managers can leverage our workforce analytics to easily understand productivity trends and patterns, linking efforts invested to results achieved. By analyzing data from computer-based tasks and feedback from third-party tools, our system provides clear insights. These AI-powered analytics help individuals identify their strengths and weaknesses while providing actionable feedback for managers. This makes it easier to increase performance and achieve better results.
                    </p>
                  </div>
                </div>
                <div className="p-5 lg:p-10  rounded-xl md:m-auto shadow-xl bg-[#F5F5FA] mt-3 md:mt-5 ">
                  <img
                    className="w-full lg:w-10/12 lg:h-10/12"
                    src="./images/6601d5853611f6f272bfcca2_Frame 48096027 (2)-p-800.png"
                    alt="performance-summary-logo"
                    title="performance-summary-logo"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-start  items-center relative w-full sm:pb-16  mb-0  ">
              <div className="w-full lg:w-[50%]   rounded-2xl relative">
                <div className="w-full block lg:absolute -right-[95%] top-1/2 lg:-translate-y-1/2 z-[9] bg-white rounded-xl ">
                  <div className="p-5 lg:p-10 mt-3  md:m-auto shadow-2xl rounded-xl">
                    <h3 className="text-[E9E9E9] text-3xl mb-2 font-semibold">
                      Make sure your team feels recognized and appreciated
                    </h3>
                    <p className=" text-start font-regular text-md sm:text-lg line-clamp-6">
                    Empower your team by making them feel valued and recognized for their contributions through gamification and rewards. Set up a series of rewards and bonuses that are automatically given based on objective performance. Also, activate peer-driven recognition, allowing team members to express their appreciation for each other with votes and awards. Additionally, providing professional development opportunities and providing constructive feedback shows that you value their contributions and invest in their growth.
                    </p>
                  </div>
                </div>
                <div className="p-5 lg:p-10  rounded-xl md:m-auto shadow-xl bg-[#F5F5FA] mt-3 md:mt-5 ">
                  <img
                    className="w-full lg:w-10/12 lg:h-10/12"
                    src="./images/65d60e592c166920e7f9aa95_Frame 48095979-p-800.png"
                    alt="earn-award-image"
                    title="earn-award-image"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end  items-center relative w-full sm:pb-16  mb-0  ">
              <div className="w-full lg:w-[50%]   rounded-2xl relative">
                <div className="w-full block lg:absolute -left-[95%] top-1/2 lg:-translate-y-1/2 z-[9] bg-white rounded-xl ">
                  <div className="p-5 lg:p-10 mt-3  md:m-auto shadow-2xl rounded-xl">
                    <h3 className="text-[E9E9E9] text-3xl mb-2 font-semibold">
                      Develop a positive and supportive team culture
                    </h3>
                    <p className=" text-start font-regular text-md sm:text-lg line-clamp-6">
                    Promote team engagement by including them in company-wide discussions and celebrations. From celebrating important occasions like birthdays and anniversaries to onboarding new team members or supporting coworkers during tough times, Intellogos offers intelligent tips to aid in this process. Show appreciation for each team member's contributions and provide constructive feedback to help them move forward.
                    </p>
                  </div>
                </div>
                <div className="p-5 lg:p-10  rounded-xl md:m-auto shadow-xl bg-[#F5F5FA] mt-3 md:mt-5 ">
                  <img
                    className="w-full lg:w-10/12 lg:h-10/12 "
                    src="./images/65dd64c2916442c31dd2c581_teamwork-p-800.png"
                    alt="supportive-image"
                    title="supportive-image"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-start  items-center relative w-full sm:pb-16  mb-0  mt-3 md:mt-5 ">
              <div className="w-full lg:w-[50%]   rounded-2xl relative">
                <div className="w-full block lg:absolute -right-[95%] top-1/2 lg:-translate-y-1/2 z-[10] bg-white rounded-xl ">
                  <div className="p-5 lg:p-10 mt-3  m-auto shadow-2xl rounded-xl">
                    <h3 className="text-[E9E9E9] text-3xl mb-2 font-semibold">
                      Absence and time off tracking
                    </h3>
                    <p className=" text-start font-regular text-md sm:text-lg">
                    Easily manage and record employee leaves and absences with our comprehensive absence tracking feature, which provides a seamless solution for workforce management. Get information about who is working during their leave and track the status online.
                    </p>
                  </div>
                </div>
                <div className="p-5 lg:p-10 rounded-xl md:m-auto shadow-xl bg-[#F5F5FA] mt-3">
                  <img
                    className="w-full  lg:w-10/12 lg:h-10/12 "
                    src="./images/absence.png"
                    alt="absence-logo"
                    title="absence-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-eight">
          <div className=" p-2 sm:p-4   ">
            <h2 className=" text-3xl sm:text-5xl  font-semibold text-[E9E9E9] md:leading-[50px] text-center">
              Task Tracker Web App
            </h2>
            <div className=" p-4 sm:p-10  ">
              <div className="flex justify-between flex-wrap items-center">
                <div className="w-full sm:w-1/2 bg-[#F7F0FA] rounded-xl">
                  <div className="p-5 lg:p-10   m-auto ">
                    <p className=" text-start  font-regular text-md sm:text-lg">
                    HR Analytics Our workforce planning can understand productivity trends and patterns related to the effort invested and the results achieved. We derive these insights from a mix of data, including computer-based work and feedback from third-party tools. Employee databases and AI enable individuals to identify their strengths and weaknesses, and help provide actionable feedback to managers.
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 sm:mt-0 mt-3 ">
                <img
                className="object-cover w-full h-full rounded-md m-auto scale-75"
                src="./images/hredge4.png"
                alt="hredge-image"
                title="hredge-image"
              />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-ninth p-4 sm:p-10 w-full  ">
          <h3 className=" text-3xl sm:text-5xl f  font-semibold text-[E9E9E9] md:leading-[50px] text-center">
            User Functionality
          </h3>
          <div className="flex flex-wrap ">
            <div className="flex  flex-col w-full   sm:p-10 justify-center sm:justify-start items-center sm:items-start">
              <div className="relative min-h-36  sm:py-8  sm:mx-0 bg-[#F4DDFF]  w-full sm:max-w-screen-md  my-8 sm:my-6 px-4 py-12 sm:p-4 rounded-md">
                <div className="w-24 h-24 rounded-full absolute -top-12 -translate-x-1/2 left-1/2    border-8 border-[#fffCF3]  bg-[#D9D9D9] z-10  flex justify-center items-center">
                  <p className=" text-3xl sm:text-5xl font-semibold text-[E9E9E9] m-0">
                    1
                  </p>
                </div>
                <div>
                  <h4 className="text-[E9E9E9] text-xl font-semibold">
                    Personal Section
                  </h4>
                  <p className=" text-start font-regular text-md sm:text-lg">
                    Users can easily select the project they want to work on and
                    view the associated tasks.
                  </p>
                </div>
              </div>
              <div className="flex justify-end w-full">
                <div className="relative min-h-36   sm:py-8   sm:mx-0 bg-[#F4DDFF]  w-full sm:max-w-screen-md  my-8 sm:my-6 px-4 py-12 sm:p-4 rounded-md">
                  <div className="w-24 h-24 rounded-full absolute -top-12 -translate-x-1/2 left-1/2    border-8 border-[#fffCF3]  bg-[#D9D9D9] z-10 flex justify-center items-center">
                    <p className=" text-3xl sm:text-5xl font-semibold text-[E9E9E9] m-0">
                      2
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[E9E9E9] text-xl font-semibold">
                      Task Addition{" "}
                    </h4>
                    <p className=" text-start  font-regular text-md sm:text-lg">
                      Users can add new tasks, including details like due dates,
                      priorities, and descriptions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative min-h-36  sm:py-8   sm:mx-0 bg-[#F4DDFF]  w-full sm:max-w-screen-md  my-8 sm:my-6 px-4 py-12 sm:p-4 rounded-md">
                <div className="w-24 h-24 rounded-full absolute -top-12 -translate-x-1/2 left-1/2    border-8 border-[#fffCF3]  bg-[#D9D9D9] z-10 flex justify-center items-center">
                  <p className=" text-3xl sm:text-5xl font-semibold text-[E9E9E9] m-0">
                    3
                  </p>
                </div>
                <div>
                  <h4 className="text-[E9E9E9] text-xl font-semibold">
                    Task Management
                  </h4>
                  <p className=" text-start  font-regular text-md sm:text-lg">
                    Users can pause, resume, and mark tasks as complete,
                    allowing for seamless workflow management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-ten">
          <div className=" p-4 sm:p-10  ">
            <h3 className=" text-2xl sm:text-4xl mb-4  lg:mb-10   font-semibold text-[E9E9E9] md:leading-[50px] text-center">
              <span className="text-zinc-800 text-3xl sm:text-5xl">
                Privacy &amp; Transparency
              </span>
              <br />
              Your team will love{" "}
            </h3>
            <div className="flex justify-center gap-5 flex-wrap items-center max-w-screen-xl mx-auto">
              <div className="cursor-pointer transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
                <svg
                  className="stroke-purple-300 shrink-0 rounded-full"
                  height={50}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 100 100"
                  width={50}
                  x={0}
                  xmlns="http://www.w3.org/2000/svg"
                  y={0}
                >
                  <path
                    d="M17.9,60.7A14.3,14.3,0,0,0,32.2,75H64.3a17.9,17.9,0,0,0,0-35.7h-.4a17.8,17.8,0,0,0-35.3,3.6,17.2,17.2,0,0,0,.4,3.9A14.3,14.3,0,0,0,17.9,60.7Z"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={8}
                  />
                </svg>
                <div>
                  <h4 className="font-bold text-lg text-purple-300 whitespace-nowrap">
                    Private By Design
                  </h4>
                  <p className="line-clamp-3">
                    Workforce analytics must help retain privacy. That's why
                    Intelogos is focused on employee privacy.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
                <svg
                  className="stroke-purple-300 shrink-0 rounded-full"
                  height={50}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 100 100"
                  width={50}
                  x={0}
                  xmlns="http://www.w3.org/2000/svg"
                  y={0}
                >
                  <path
                    d="M17.9,60.7A14.3,14.3,0,0,0,32.2,75H64.3a17.9,17.9,0,0,0,0-35.7h-.4a17.8,17.8,0,0,0-35.3,3.6,17.2,17.2,0,0,0,.4,3.9A14.3,14.3,0,0,0,17.9,60.7Z"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={8}
                  />
                </svg>
                <div>
                  <h4 className="text-lg font-bold text-purple-300  whitespace-nowrap">
                    No Data Intrusion
                  </h4>
                  <p className="line-clamp-3">
                    No keystroke logging, no screenshots, no video recording.
                    Stay calm, knowing your data is private.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
                <svg
                  className="stroke-purple-300 shrink-0 rounded-full"
                  height={50}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 100 100"
                  width={50}
                  x={0}
                  xmlns="http://www.w3.org/2000/svg"
                  y={0}
                >
                  <path
                    d="M17.9,60.7A14.3,14.3,0,0,0,32.2,75H64.3a17.9,17.9,0,0,0,0-35.7h-.4a17.8,17.8,0,0,0-35.3,3.6,17.2,17.2,0,0,0,.4,3.9A14.3,14.3,0,0,0,17.9,60.7Z"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={8}
                  />
                </svg>
                <div>
                  <h4 className="font-bold text-lg text-purple-300  whitespace-nowrap">
                    Transparent In Nature
                  </h4>
                  <p className="line-clamp-3">
                    Each user gets access to their own info and stats, so they
                    always know what to expect and how to improve.
                  </p>
                </div>
              </div>
              <div className="cursor-pointer transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
                <svg
                  className="stroke-purple-300 shrink-0 rounded-full"
                  height={50}
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 100 100"
                  width={50}
                  x={0}
                  xmlns="http://www.w3.org/2000/svg"
                  y={0}
                >
                  <path
                    d="M17.9,60.7A14.3,14.3,0,0,0,32.2,75H64.3a17.9,17.9,0,0,0,0-35.7h-.4a17.8,17.8,0,0,0-35.3,3.6,17.2,17.2,0,0,0,.4,3.9A14.3,14.3,0,0,0,17.9,60.7Z"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={8}
                  />
                </svg>
                <div>
                  <h4 className=" text-lg font-bold text-purple-300  whitespace-nowrap">
                    Helps Career Growth
                  </h4>
                  <p className="line-clamp-3">
                    Provides data that can help users understand their strengths
                    and supercharge their career growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <footer>
    <div className="  w-full bg-[E9E9E9]">
      <div className=" w-full  p-4 sm:p-7 text-white flex justify-between items-center fle ">
        <p className=" text-start sm:text-justify max-w-screen-md font-regular text-sm sm:text-md">
          Employees can easily check in and out of meetings, ensuring accurate
          attendance tracking and productivity monitoring.
        </p>
        <p className="text-start sm:text-justify max-w-screen-md font-regular text-sm sm:text-md">
          Hand-crafted &amp; made with ❤️
        </p>
      </div>
    </div>
  </footer> */}
      </div>

      <Footer></Footer>
    </>
  );
};

export default page;
