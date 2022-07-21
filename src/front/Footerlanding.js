import React from "react";

import appleStore from "../assets/images/apple-store.png";
import googlePlay from "../assets/images/google-play.png";
import qrScan from "../assets/images/qr-scan.png";

function Footerlanding() {
  return (
    <div className=" px-[20px] lg:px-[120px] py-[80px]">
      <h2 className=" text-[44px] lg:text-[60px] font-medium text-[#0F0E40]">
        Partner with a growing leader
      </h2>
      <p className="text-[18px] text-[#828282] mb-10">
        Stay connected, improve your organization’s productivity, and
        collaborate to achieve your goals and grow your business. We bring
        video, audio, and web conferencing together to help customers and
        partners communicate remotely with ease.
      </p>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center ">
        <div className="">
          <p className="text-[18px]">Get the link to download the app</p>
          <div className="flex items-center space-x-4">
            <div className="ring-1 ring-gray-500 rounded-md my-2 flex-grow text-sm flex">
              <select className="p-2 border-r border-gray-500 overflow-hidden bg-transparent flex-shrink-0">
                <option>+91</option>
                <option>+1</option>
                <option>+24</option>
              </select>
              <input
                size={12}
                placeholder="Enter Phone Number"
                className="p-2 px-4 flex-grow outline-none focus:ring-0 bg-transparent"
              />
            </div>
            <button className="text-white  text-sm p-2 px-4 rounded-md flex-shrink-0  bg-gradient-to-tr from-[#B240F5] to-[#2D6EF5] flex items-center">
              Send SMS
            </button>
          </div>
          <div className="flex space-x-4 items-start my-4">
            <img className="h-12" src={googlePlay} alt="Google play store" />
            <img className="h-12" src={appleStore} alt="Apple  store" />
          </div>
        </div>
        <hr className="hidden md:block ring-r-1 ring-gray-800 w-44 transform rotate-90" />
        <div className="md:flex hidden justify-around items-center  ">
          <img className="" src={qrScan} alt="QR code" />
          <p className="text-sm ">Scan QR code to download the app</p>
        </div>
      </div>
    </div>
  );
}

export default Footerlanding;
