import React from "react";
import { Link } from "react-router-dom";
// import { BsArrowRightShort } from "react-icons/bs";

import image179 from "../assets/images/image 179.png";
import globe from "../assets/images/globe.png";
import personWave from "../assets/images/person-wave.png";
import personRectangle from "../assets/images/person-rectangle.png";
import inperson from "../assets/images/inperson.png";

function Landing() {
  return (
    <>
      <div id="landing" className="relative h-[80vh] min-h-[680px] ">
        <img
          src={image179}
          alt="girl talking on phone"
          className=" absolute h-full w-full top-0 bottom-0 left-0 object-cover"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 z-10 text-white  bg-gradient-to-b from-[#0f0e4088] to-[#2D6EF5]">
          <div className="flex items-center justify-between p-[20px] lg:p-[60px]">
            <img src={inperson} alt="Inperson" className="h-12" />
            <div className="space-x-4 items-center hidden md:flex text-sm">
              <a href="#about_us">About Us</a>
              <a href="#what_we_do">What We Do</a>
              {/* <a href="#footer">Pricing</a> */}
              <a href="#testimonials">Testimonials</a>
              <a href="#contact_us">Contact</a>
              <Link to="/login">
                <button className="text-sm p-2 px-4 rounded-md  bg-gradient-to-tr from-[#B240F5] to-[#2D6EF5] flex items-center">
                  Login/Sign up
                </button>
              </Link>
            </div>
          </div>
          <div className="px-[20px] py-[120px] lg:p-[120px] pt-[90px]">
            <h1 className="text-[64px] md:text-[72px] lg:text-[96px] font-bold lg:w-8/12">
              The New Business Tool Is Video
            </h1>
            <p className="text-base mb-4 mt-2">
              {/* Video Communication designed for customer ease and increased
              <br />
              opportunity for sales */}
              InPerson is a decentralized call center SAAS PLATFORM that allows
              anyone across North America <br /> work remotely as a customer
              service agent, tech support or sales agents for our partner
              companies.
            </p>
            {/* <div className="flex flex-col lg:flex-row  md:items-center md:space-x-4 space-y-4 md:space-y-0 ">
              <span className="text-base">Are you a company?</span>
              <div className="flex space-x-4 items-center ">
                <Link to="/register">
                  <button className="shadow-md text-sm p-2 px-4 rounded-md  bg-gradient-to-tr from-[#B240F5] to-[#2D6EF5] flex items-center">
                    Sign up <BsArrowRightShort size={24} />
                  </button>
                </Link>
                <a href="#contact_us">
                  <button className="shadow-md rounded-md  ring-1 ring-white p-2 px-4 text-sm">
                    Contact Us
                  </button>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div
        id="one_app_for_everyone"
        className="bg-gradient-to-b to-[#B240F5] from-[#2D6EF5] text-white  px-[20px] py-[80px] lg:p-[120px]"
      >
        <h1 className="text-[44px] lg:text-[72px] font-bold lg:w-8/12 mt-20">
          One app for everyone to work together
        </h1>
        <p className="text-base lg:w-8/12 mb-4 mt-2">
          Are you a company or an individual looking for an expert, consultant,
          or NGO? Gain access to online face-to-face meetings and video
          conferencing and discover the InPerson opportunities for
          collaboration, productivity, and tech support with colleagues and
          customers.
        </p>
        <div className="my-[80px] flex flex-col lg:flex-row justify-between items-start lg:space-x-4 space-y-10 lg:space-y-0">
          <div>
            <img className="w-8" src={personRectangle} alt="person icon" />
            <h4 className=" text-[24px] lg:text-[37px] font-medium my-1 ">
              Expert
            </h4>
            <p className="text-[18px]">
              Offer real-time customer service, sales, or tech support
              regardless of physical location via video or audio call as a First
              level customer service representative.
            </p>
          </div>
          <div>
            <img className="w-8" src={personWave} alt="person icon" />
            <h4 className=" text-[24px] lg:text-[37px] font-medium my-1 ">
              Consultant
            </h4>
            <p className="text-[18px]">
              Consultants can build their businesses by connecting with their
              clients, scheduling sessions, get paid directly in app and have an
              Inquiry contact representative all in their searchable profile
              within the InPerson App
            </p>
          </div>
          <div>
            <img className="w-8" src={globe} alt="person icon" />
            <h4 className=" text-[24px] lg:text-[37px] font-medium my-1 ">
              NGO
            </h4>
            <p className="text-[18px]">
              Get unlimited one-on-one conferencing, increase your team's
              productivity, discuss opportunities for collaboration and host
              online events with impact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
