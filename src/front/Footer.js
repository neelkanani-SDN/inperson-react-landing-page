import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import inpersonWhite from "../assets/images/inperson-white.png";

function Footer() {
  return (
    <div
      id="footer"
      className=" bg-gradient-to-b to-[#B240F5] from-[#2D6EF5]  px-[20px] lg:px-[120px] py-[64px] grid gap-8 lg:grid-cols-3"
    >
      <div className="flex flex-col justify-between items-start">
        <img
          src={inpersonWhite}
          alt="Inperson logo"
          className="h-8 mb-4 w-auto"
        />
        <div className="flex space-x-2 text-white">
          <AiFillInstagram size={24} />
          <AiOutlineTwitter size={24} />
          <BsFacebook size={22} />
          <AiFillYoutube size={24} />
        </div>
      </div>
      <div className="grid grid-cols-2 text-white text-sm">
        <div className="flex flex-col space-y-2">
          <a href="/#landing">Home</a>
          <a href="/#about_us">About Us</a>
          <a href="/#what_we_do">What We Do</a>
          <a href="/#testimonials">Testimonials</a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="/#contact_us">Contact Us</a>

          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
      <div className="lg:ml-auto">
        <p className="text-white  text-[18px] mb-2">
          Interested in <br />
          company updates?
        </p>
        <div className="flex items-center space-x-4">
          <div className=" ring-1 ring-white rounded-md my-2 text-sm flex">
            <input
              placeholder="Enter Email"
              className="p-2 px-4 flex-grow outline-none focus:ring-0 bg-transparent"
            />
            <button className="flex-shrink-0    text-sm p-2 px-4 rounded-md  ring-1 ring-white bg-white flex items-center">
              Send SMS
            </button>
          </div>
        </div>
      </div>
      <p className="col-span-full text-gray-200 text-sm mt-8 mb-4 text-center ">
        © 2022 inperson. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
