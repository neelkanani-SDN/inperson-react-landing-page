import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import user1 from "../assets/images/u1.png";
import user2 from "../assets/images/u2.png";
import startFill from "../assets/images/star-fill.png";
import star from "../assets/images/star.png";

function Testimonials() {
  return (
    <div id="testimonials" className=" px-[20px] lg:px-[120px] py-[60px]">
      <h2 className="text-center text-[40px] font-medium">
        What our clients say about us.
      </h2>
      <div className="text-[#B240F5] my-10 flex space-x-2 items-center justify-end">
        <FiArrowLeft size={32} className="cursor-pointer" />
        <FiArrowRight size={32} className="cursor-pointer" />
      </div>
      <div className=" flex justify-between overflow-x-scroll scrollbar-hide  p-2 space-x-4  ">
        <div className="ring-2 flex-shrink-0   ring-blue-400 rounded-xl    p-10 w-full md:w-96">
          <img
            src={user2}
            alt="user 1"
            className="rounded-full object-cover h-28  mx-auto "
          />
          <p className="my-2 text-center">Greg Stuart</p>
          <div className="flex items-center justify-center space-x-1 my-3">
            <img src={startFill} alt="rated" className="h-5 " />
            <img src={startFill} alt="rated" className="h-5 " />
            <img src={startFill} alt="rated" className="h-5 " />
            <img src={startFill} alt="rated" className="h-5 " />
            <img src={startFill} alt="rated" className="h-5 " />
          </div>
          <blockquote className="text-gray-500 text-[16px]  text-center     ">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </blockquote>
        </div>
        <div className="ring-2 flex-shrink-0   ring-blue-400 rounded-xl    p-10 w-full md:w-96">
          <img
            src={user1}
            alt="user 1"
            className="rounded-full object-cover h-28  mx-auto "
          />
          <p className="my-2 text-center">James Pattinson</p>
          <div className="flex items-center justify-center space-x-1 my-3">
            <img src={startFill} alt="rated" className="h-5 " />
            <img src={startFill} alt="rated" className="h-5 " />
            <img src={startFill} alt="rated" className="h-5 " />
            <img src={startFill} alt="rated" className="h-5 " />
            <img src={star} alt="rated" className="h-5 " />
          </div>
          <blockquote className="text-gray-500 text-[16px]  text-center     ">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </blockquote>
        </div>
        <div className="ring-2 flex-shrink-0   ring-blue-400 rounded-xl    p-10 w-full md:w-96">
          <img
            src={user1}
            alt="user 1"
            className="rounded-full object-cover h-28  mx-auto "
          />
          <p className="my-2 text-center">James Pattinson</p>
          <div className="flex items-center justify-center space-x-1 my-3">
            <img src={startFill} alt="rated" className="h-5 " />
            <img src={startFill} alt="rated" className="h-5 " />
            <img src={startFill} alt="rated" className="h-5 " />
            <img src={startFill} alt="rated" className="h-5 " />
            <img src={star} alt="rated" className="h-5 " />
          </div>
          <blockquote className="text-gray-500 text-[16px]  text-center     ">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
