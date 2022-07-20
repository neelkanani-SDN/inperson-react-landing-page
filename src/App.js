import React from "react";
import Testimonials from "./front/Testimonials";
import Footerlanding from "./front/Footerlanding";

import { BsArrowRightShort } from "react-icons/bs";

import image180 from "./assets/images/image 180.png";
import image181 from "./assets/images/image 181.png";

import Landing from "./front/Landing";
import Services from "./front/Services";

import mobileConversation1 from "./assets/images/mobile-ticketsnap.png";
import mobileConversation2 from "./assets/images/mobile-ticketsnap2.png";

import phoneIcon from "./assets/images/phone-grad.png";
import messageIcon from "./assets/images/message-grad.png";
import meetIcon from "./assets/images/meet-grad.png";
import calenderIcon from "./assets/images/calender-grad.png";
import inpersonPlay from "./assets/images/inperson-play.png";

import walmart from "./assets/images/walmart.png";
import target from "./assets/images/target.png";
import tmobile from "./assets/images/tmobile.png";
import samsung from "./assets/images/samsung.png";
import pfizer from "./assets/images/pfizer.png";
import amazon from "./assets/images/amazon.png";
import johnson from "./assets/images/johnson.png";
import coinbase from "./assets/images/coinbase.png";
import cisco from "./assets/images/cisco.png";
import bestBuy from "./assets/images/best-buy.png";
import bumble from "./assets/images/bumble.png";
import gitlab from "./assets/images/gitlab.png";

import personOnCall from "./assets/images/image-call-mobile.png";
import u3 from "./assets/images/image 94.png";
import handshakeIcon from "./assets/images/handshake-grad.png";
import moneyIcon from "./assets/images/money-grad.png";
import documentIcon from "./assets/images/document-grad.png";
import vctLeft from "./assets/images/vct-left.png";
import vctRight from "./assets/images/vct-right.png";
import vctCenter from "./assets/images/vct-center.png";
import Footer from "./front/Footer";

function App() {
  return (
    <div className="overflow-hidden ">
      <Landing />
      <div className=" px-[20px] lg:px-[120px] my-10 relative ">
        <img
          src={vctLeft}
          alt="vector"
          className=" absolute top-10 left-0 -z-10 "
        />
        <img
          src={vctRight}
          alt="vector"
          className=" absolute top-40 right-0 -z-10 "
        />
        <h2 className="font-bold text-[40px] lg:text-[72px] ">
          The future of work is{" "}
          <span className="uppercase text-transparent lg:block bg-clip-text bg-gradient-to-r from-[#B240F5] to-[#2D6EF5]">
            ONLINE
          </span>
        </h2>
        <div className="flex justify-between flex-col lg:flex-row  space-y-8">
          <div className="lg:w-6/12">
            <p className="text-[18px] my-8 text-[#828282]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-[18px] text-[#828282]">
              If you have expertise in <br />
              <span className="font-medium text-[24px] text-[#0F0E40] ">
                Business Development(Sales), Tech Spport or Customer Service
              </span>{" "}
              <br />
              then we provide you an opportunity to work from home as an expert.
              You bring the skill. We’ll make earning easy
            </p>
          </div>
          <img src={u3} alt="person" className="mx-4 lg:w-72 lg:mx-10  " />
        </div>
      </div>
      <div className=" px-[20px] lg:px-[120px] my-10 relative">
        <img
          src={vctLeft}
          alt="vector"
          className=" absolute top-10 left-0 -z-10 "
        />
        <img
          src={vctRight}
          alt="vector"
          className=" absolute top-40 right-0 -z-10 "
        />
        <div className="flex flex-col md:flex-row  items-center my-32  justify-between ">
          <img
            src={personOnCall}
            className="order-2 md:order-1    md:w-64"
            alt="vector"
          />
          <div className="order-1 md:order-2 flex flex-col space-y-10 my-10">
            <div className="grid grid-cols-[32px,1fr] gap-2">
              <img src={documentIcon} alt="document" />
              <div>
                <h4 className="text-[18px] text-[#0F0E40] mb-2 font-medium ">
                  Register yourself
                </h4>
                <p className="text-[18px] text-[#828282]">
                  Register yourself with proof of your experience
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[32px,1fr] gap-2">
              <img src={handshakeIcon} alt="document" />
              <div>
                <h4 className="text-[18px] text-[#0F0E40] mb-2 font-medium ">
                  Deliver your work
                </h4>
                <p className="text-[18px] text-[#828282]">
                  Use our tools to communicate your customers andprovide your
                  expertise.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[32px,1fr] gap-2">
              <img src={moneyIcon} alt="document" />
              <div>
                <h4 className="text-[18px] text-[#0F0E40] mb-2 font-medium ">
                  Get Paid
                </h4>
                <p className="text-[18px] text-[#828282]">
                  Receive your payment prior to your appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-[20px] py-[120px] pt-[20px] lg:px-[120px] relative">
        <img
          src={vctCenter}
          alt="vector"
          className=" absolute right-0 top-48  -z-10 "
        />
        <div className="relative ">
          <h4 className="text-[32px] hidden md:block font-medium text-[#0F0E40] text-right w-8/12 mx-auto ">
            Online/Offline{" "}
          </h4>
          <div className="my-10 grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-3 items-stretch">
            <div className="flex flex-col space-y-6  justify-around  ">
              <div className="grid grid-cols-[32px,1fr] gap-4 ">
                <img src={phoneIcon} alt="phone" />
                <div className="flex flex-col space-y-2">
                  <p className="text-[#0F0E40] text-[18px] font-medium">
                    Enqire
                  </p>
                  <p className="text-[18px] text-[#828282]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[32px,1fr] gap-4">
                <img src={messageIcon} alt="phone" />
                <div className="flex flex-col space-y-2">
                  <p className="text-[#0F0E40] text-[18px] font-medium">
                    Message
                  </p>
                  <p className="text-[18px] text-[#828282]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <img
              src={mobileConversation2}
              className="w-64 mx-auto my-auto hidden md:block "
              alt="mobile conversation"
            />

            <div className="flex flex-col space-y-6  justify-around ">
              <div className="grid grid-cols-[32px,1fr] gap-4 ">
                <img src={meetIcon} alt="phone" />
                <div className="flex flex-col space-y-2">
                  <p className="text-[#0F0E40] text-[18px] font-medium">
                    Meeting
                  </p>
                  <p className="text-[18px] text-[#828282]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[32px,1fr] gap-4">
                <img src={calenderIcon} alt="phone" />
                <div className="flex flex-col space-y-2">
                  <p className="text-[#0F0E40] text-[18px] font-medium">
                    Book Appointment
                  </p>
                  <p className="text-[18px] text-[#828282]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-14 space-y-8 ">
            <div className="relative w-full ">
              <span className="w-72 h-72 rounded-full block absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto -z-10 bg-[#2D6EF533]"></span>
              <img
                className="md:w-48 mx-4  md:mx-auto"
                src={mobileConversation1}
                alt="mobile convo"
              />
            </div>
            <div className="md:w-6/12">
              <h4 className="text-[24px] md:text-[32px] font-medium text-[#0F0E40]">
                Collaborate with Customer Support over a video call
              </h4>
              <p className="text-[18px] md:text-[22px] text-[#828282]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Services />
      <div className=" px-[20px] py-[120px] lg:p-[120px]">
        <h2 className="font-bold mb-10 text-[44px] lg:text-[72px] text-[#0F0E40] ">
          Build for Customers and <br /> Companies to work together
        </h2>
        <div className="flex  my-8 mb-14 justify-between items-center ">
          <div className="relative hidden md:block w-5/12 my-2 flex-shrink-0">
            <img
              className=""
              src={image180}
              alt="group of people using laptop"
            />
            <img
              src={inpersonPlay}
              alt="play"
              className="absolute top-0 left-0 right-0 bottom-0 m-auto w-14      "
            />
          </div>
          <div className="w-full md:w-6/12  flex-shrink-0 ">
            <h4 className="text-[28px] mb-10">What is it for experts?</h4>
            <p className="text-[#828282] text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="flex text-[16px] space-x-2 my-4 text-blue-500">
              Learn More <BsArrowRightShort size={24} />
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="lg:w-96 mt-8 flex-shrink-0">
            <h4 className="text-[28px] mb-10">What is it for companies?</h4>

            <div className="relative my-2">
              <img
                src={image181}
                alt="group of people using laptop"
                className="w-full  "
              />
              <img
                src={inpersonPlay}
                alt="play"
                className="absolute top-0 left-0 right-0 bottom-0 m-auto w-14      "
              />
            </div>
            <p className="text-[#828282] text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="flex text-[16px] space-x-2 my-4 text-blue-500">
              Learn More <BsArrowRightShort size={24} />
            </p>
          </div>
          <div className="lg:w-96 mt-8 flex-shrink-0">
            <h4 className="text-[28px] mb-10">What is it for experts?</h4>
            <div className="relative my-2">
              <img
                src={image180}
                alt="group of people using laptop"
                className="w-full"
              />
              <img
                src={inpersonPlay}
                alt="play"
                className="absolute top-0 left-0 right-0 bottom-0 m-auto w-14      "
              />
            </div>
            <p className="text-[#828282] text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="flex text-[16px] space-x-2 my-4 text-blue-500">
              Learn More <BsArrowRightShort size={24} />
            </p>
          </div>
        </div>
      </div>
      {/* testimonials */}
      <Testimonials />

      <div className=" px-[20px] lg:px-[120px] py-[60px]">
        <h2 className="text-center text-[40px] font-medium">
          Trusted by 100+ Global Clients
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  place-items-center  gap-4 lg:w-10/12 mx-auto my-20">
          <img className="" src={walmart} alt="walmart" />
          <img className="" src={tmobile} alt="walmart" />
          <img className="" src={bumble} alt="walmart" />
          <img className="" src={bestBuy} alt="walmart" />
          <img className="" src={amazon} alt="walmart" />
          <img className="" src={pfizer} alt="walmart" />
          <img className="" src={cisco} alt="walmart" />
          <img className="" src={coinbase} alt="walmart" />
          <img className="" src={johnson} alt="walmart" />
          <img className="" src={samsung} alt="walmart" />
          <img className="" src={target} alt="walmart" />
          <img className="" src={gitlab} alt="walmart" />
        </div>
      </div>
      {/* Footer landing page */}
      <Footerlanding />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
