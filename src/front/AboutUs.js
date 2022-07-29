import React from "react";
import image180 from "../assets/images/image 180.png";

function AboutUs() {
  return (
    <div
      id="about_us"
      className="px-[20px] lg:px-[120px] py-10 my-10 relative  "
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div className="lg:mt-16   grid place-content-center">
          <img className="" src={image180} alt="group of people using laptop" />
        </div>
        <div className="text-base flex flex-col space-y-4">
          <h2 className="font-bold text-[40px] lg:text-[72px] mb-8 ">
            About{" "}
            <span className="uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#B240F5] to-[#2D6EF5]">
              Us
            </span>
          </h2>
          <p>
            InPerson is the “Uber” of the call center industry making it
            possible for anyone to serve any company on their own terms and earn
            up to $500 a day.
          </p>
          <p>
            The ultimate gig work doesn’t need you to go anywhere - driving,
            lifting, being chased by dogs, and delivering from doorstep to
            doorstep should be a thing of the past. With our proprietary micro
            learning system, InPerson allows you to connect with customers and
            earn a living from the comfort of your own home.
          </p>
          <p>
            Our research shows that 75% of all customer service calls can be
            resolved in under 5 minutes by someone informed with as simple as an
            FAQ sheet. After completing the necessary training, InPerson allows
            our agents from across the US to connect with customers via video,
            voice, or chat directly from the InPerson online platform.
          </p>
          <p>
            InPerson saves companies money -you no longer need to hire huge call
            centers or out of country representatives. With InPerson, companies
            have all the control at a fraction of the cost - no contracts, no
            obligations with access to thousands of agents, so your customers
            never have to listen to hold music again.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
