import React from "react";
import healthIcon from "../assets/images/health-grad.png";
import flightIcon from "../assets/images/flight-grad.png";
import movieIcon from "../assets/images/movie-grad.png";
import schoolIcon from "../assets/images/school-grad.png";
import sportIcon from "../assets/images/sport-grad.png";
import mobileIcon from "../assets/images/mobile-grad.png";
import repareIcon from "../assets/images/repair-grad.png";
function Services() {
  return (
    <div className=" px-[20px] py-[40px] lg:p-[120px] lg:py-[40px]">
      <h4 className="text-[36px] font-medium text-[#0F0E40] text-center">
        Interact with anyone from any industry{" "}
      </h4>
      <div className="flex flex-nowrap p-4 overflow-scroll scrollbar-hide items-center space-x-6 my-10 justify-center">
        <div className="h-28 w-28  flex-shrink-0   bg-white shadow flex flex-col items-center justify-center">
          <img alt="services" src={healthIcon} className="w-12" />
          <p className="text-sm">Health Care</p>
        </div>
        <div className="h-28 w-28  flex-shrink-0   bg-white shadow flex flex-col items-center justify-center">
          <img alt="services" src={flightIcon} className="w-12" />
          <p className="text-sm">Transportation</p>
        </div>
        <div className="h-28 w-28  flex-shrink-0   bg-white shadow flex flex-col items-center justify-center">
          <img alt="services" src={movieIcon} className="w-12" />
          <p className="text-sm">Entertainment</p>
        </div>
        <div className="h-28 w-28  flex-shrink-0   bg-white shadow flex flex-col items-center justify-center">
          <img alt="services" src={schoolIcon} className="w-12" />
          <p className="text-sm">Education</p>
        </div>
        <div className="h-28 w-28  flex-shrink-0   bg-white shadow flex flex-col items-center justify-center">
          <img alt="services" src={sportIcon} className="w-12" />
          <p className="text-sm">Sports</p>
        </div>
        <div className="h-28 w-28  flex-shrink-0   bg-white shadow flex flex-col items-center justify-center">
          <img alt="services" src={repareIcon} className="w-12" />
          <p className="text-sm">Home Service</p>
        </div>
        <div className="h-28 w-28  flex-shrink-0   bg-white shadow flex flex-col items-center justify-center">
          <img alt="services" src={mobileIcon} className="w-12" />
          <p className="text-sm">Social Media</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
