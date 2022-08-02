import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import user1 from "../assets/images/u1.png";
import user2 from "../assets/images/u2.png";
// import user3 from "../assets/images/u3.png";
import user4 from "../assets/images/u4.jpeg";
import user5 from "../assets/images/u5.jpeg";
import startFill from "../assets/images/star-fill.png";
// import star from "../assets/images/star.png";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

let testimonials = [
  {
    profile: user1,
    name: "Billy William",
    title: "Impacting and unique software",
    body: `Fantastic software which connects businesses and customers while allowing me easily see who is on the other side In Person is so simple to use, the interface is pretty user-friendly, and it just works. Even on slow or weak internet connection, the video stays pretty stable. I do love the video feature available for customer service calls as well.`,
  },
  {
    profile: user2,
    name: "James Normile",
    title: "Potential industry Disruptor.",
    body: `I’ve been testing In Person for my company Call center needs and it is truly revolutionary. The platform allows us to localize the call enter experience and create teams in regions which allows customers have contact with agents that understand their exact needs. We might no longer need to hire large call centers while also bringing Video to the customer experienc`,
  },
  {
    profile: user5,
    name: "Chuck Watson",
    title: "Truly Phenomenal",
    body: `We have implemented InPerson throughout the company mainly for customer service and contact center. We felt that with InPerson would be difficult to carry out our customer service actions, replacing the call center we have used in India previously however, we began to see the impact in having faster customer response and better online reviews. The advances and the contacts were effective, adding the characteristic that it is to have tools such as sharing the screen so that CSM agents can see what the customer is trying to describe including certain sheets, images, projects or whatever was being talked about, making calendars to carry out work management and recorded conversations so we can review calls and maintain quality without directly hiring a team  Another of the main actions that CS agents can call customers back, schedule calls and also make unscheduled calls to the FAQ desk, This has directly improved our revenue.`,
  },
  {
    profile: user4,
    name: "Joe Bidan",
    title: "Use Cases and Deployment Scope",
    body: `Due to the covid pandemic, a majority of the workforce was shifted to work from home and many people have decided to find gig work that allow them control work hours. Therefore, we were looking for a solution that could accommodate the need. Thus, we started using In Person. It is extremely easy to set up a profile, get training and start taking customer service calls for my company from home. meeting request using their scheduling facility, and it gets linked to Outlook simultaneously. In Person allows me keep working on a flexible schedule and earn enough money to maintain my lifestyle while using my skills.`,
  },
];

function ControlButton({ nextRef, prevRef }) {
  return (
    <div className="text-[#B240F5] my-10 flex space-x-2 items-center justify-end">
      <span ref={prevRef}>
        <FiArrowLeft size={32} className="cursor-pointer" />
      </span>
      <span ref={nextRef}>
        <FiArrowRight size={32} className="cursor-pointer" />
      </span>
    </div>
  );
}

function Card({ data }) {
  return (
    <div className="ring-2 flex-shrink-0   ring-blue-400 rounded-xl    p-8 w-full md:w-[445px]   ">
      <img
        src={data.profile}
        alt="user 1"
        className="rounded-full object-cover h-28 w-28  mx-auto "
      />
      <h4 className="my-2 text-center font-medium">{data.name}</h4>
      <div className="flex items-center justify-center space-x-1 my-3">
        <img src={startFill} alt="rated" className="h-5 " />
        <img src={startFill} alt="rated" className="h-5 " />
        <img src={startFill} alt="rated" className="h-5 " />
        <img src={startFill} alt="rated" className="h-5 " />
        <img src={startFill} alt="rated" className="h-5 " />
      </div>
      <p className="my-2 text-center font-medium">{data.title}</p>
      <blockquote className="text-gray-500 text-[16px]  text-center">
        <p className=" line-clamp-6 ">{data.body}</p>
      </blockquote>
    </div>
  );
}

function Testimonials() {
  const nextRef = useRef();
  const prevRef = useRef();
  return (
    <div id="testimonials" className=" px-[20px] lg:px-[120px] py-[60px]">
      <h2 className="text-center text-[40px] font-medium">
        What our clients say about us.
      </h2>
      <ControlButton nextRef={nextRef} prevRef={prevRef} />
      <div className="px-2  flex items-center justify-center relative ">
        <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-[#fff] to-bg-transparent z-10 blur-3xl   "></div>
        <div className="absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-r from-[#fff] to-bg-transparent z-10 blur-3xl  "></div>
        <Swiper
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          slidesPerView={"auto"}
          spaceBetween={10}
          freeMode={true}
          className="mySwiper"
        >
          {testimonials.map((curr, index) => (
            <SwiperSlide
              className="p-3 md:!w-max flex items-center justify-center"
              key={index}
            >
              <Card data={curr} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
