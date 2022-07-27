import React from "react";
import image180 from "../assets/images/image 180.png";

function AboutUs() {
  return (
    <div
      id="about_us"
      className="px-[20px] lg:px-[120px] py-10 my-10 relative  "
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div className="grid place-content-center">
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
            InPerson is a decentralized call center SAAS PLATFORM that allows
            anyone across North America work remotely as a customer service
            agent, tech support or sales agents for our partner companies. In
            person is the “Uber” of the call center business making it possible
            for anyone to serve any company on their own terms and earn up to
            $500 a day.
          </p>
          <p>
            The ultimate gig work doesn’t need you going anywhere, driving,
            lifting, or being chased by dogs delivering to doorsteps. In person
            allows you use the skills you might already have and with our
            proprietary micro learning system learn what you need to know about
            companies you work for so you can earn from home by connecting with
            customers who need to reach companies. InPerson aims to resolve the
            pain of waiting long hours on hold trying to reach Customer service
            of businesses you patronize. Our research show that 75% of all
            customer service calls can be resolved in under 5minutes by someone
            informed with as simple as an FAQ sheet. In person allows agents
            from across the US connect with Customer via video voice or chat and
            can be done directly from the company website.
          </p>
          <p>
            Video is the new business tool. Everyone is transitioning to video,
            everyone but businesses. Users have 65% increased connection with
            people they can see so why businesses are still faceless? in person
            brings the Customer to the businesses in person via video allowing
            Business to Customer interaction in new and unique way.
          </p>
          <p>
            In Person saves companies money-You no longer must hire huge call
            centers, with in person companies have all the control. They pay for
            what you use no contracts, no obligations and you get access to
            thousands of agents for the same amount, so your customer never has
            to listen to hold music ever again.
          </p>
          <p>
            With several innovative tools specially designed for businesses
            InPerson brings your entire business closer to your customers
            increasing sales and return clients
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
