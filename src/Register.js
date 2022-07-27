import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import image179 from "./assets/images/image 179.png";
import appleStore from "./assets/images/apple-store.png";
import googlePlay from "./assets/images/google-play.png";
import Footer from "./front/Footer";

const CUSTOMER = "CUSTOMER";
const BUSSINESS = "BUSSINESS";

const CompanyRegisterForm = () => {
  return (
    <div className="mt-4 my-auto flex-shrink-0 w-full sm:w-8/12  md:w-6/12 xl:w-4/12 mx-auto">
      {/* <h4 className="text-4xl text-center font-medium text-white">Register</h4> */}
      <p className="text-center text-sm font-light">
        Enter your details to create your account.
      </p>
      <form className="my-10 flex flex-col space-y-4">
        <input
          className="w-full  bg-white p-2 px-4 rounded"
          placeholder="First Name"
          type="text"
        />
        <input
          className="w-full  bg-white p-2 px-4 rounded"
          placeholder="Last Name"
          type="text"
        />
        <input
          className="w-full  bg-white p-2 px-4 rounded"
          placeholder="Email"
          type="email"
        />
        <input
          className="w-full  bg-white p-2 px-4 rounded"
          placeholder="Contact"
          type="number"
        />
        <input
          className="w-full  bg-white p-2 px-4 rounded"
          placeholder="Password"
          type="password"
        />
        <div className="">
          <p className="flex items-center">Are you a</p>
          <div className="">
            <label className="flex items-center space-x-2">
              <input name="user_type" className="h-4 w-4 mr-2" type="radio" />{" "}
              Company
            </label>
            <label className="flex items-center space-x-2">
              <input name="user_type" className="h-4 w-4 mr-2" type="radio" />{" "}
              NGO
            </label>
            <label className="flex items-center space-x-2">
              <input name="user_type" className="h-4 w-4 mr-2" type="radio" />{" "}
              Consultant
            </label>
          </div>
        </div>
        <button className="shadow-md p-2 px-6 text font-medium rounded-md  bg-gradient-to-tr from-[#B240F5] to-[#2D6EF5] flex items-center justify-center">
          Register
        </button>
      </form>
      <p className="text-center text-sm font-light">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

function Login() {
  const [userType, setUserType] = useState(CUSTOMER);

  function updateUserType(e, type) {
    if (e.target.checked) {
      setUserType(type);
    }
  }
  return (
    <>
      <div id="landing" className="relative h-[80vh] min-h-[680px] ">
        <img
          src={image179}
          alt="girl talking on phone"
          className=" absolute h-full w-full top-0 bottom-0 left-0 object-cover"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 flex p-4 md:p-10 z-10 text-white  bg-gradient-to-b from-[#0f0e4088] to-[#2D6EF5]">
          <div className="w-full">
            <h4 className="mb-4  text-4xl text-center font-medium text-white">
              Signup
            </h4>
            <div className="my-auto flex-shrink-0 w-full sm:w-8/12  md:w-6/12 xl:w-4/12 mx-auto">
              <h4 className="text-xl text-center font-medium text-white">
                Who Are You ?
              </h4>
              <div className="flex items-center space-x-4 justify-center">
                <label className="flex items-center space-x-2">
                  <input
                    name="user_type"
                    className="h-4 w-4 mr-2"
                    type="radio"
                    defaultChecked={userType === CUSTOMER}
                    onChange={(e) => updateUserType(e, CUSTOMER)}
                  />{" "}
                  Customer
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    name="user_type"
                    className="h-4 w-4 mr-2"
                    type="radio"
                    defaultChecked={userType === BUSSINESS}
                    onChange={(e) => updateUserType(e, BUSSINESS)}
                  />{" "}
                  Bussiness
                </label>
              </div>
            </div>
            {userType === BUSSINESS && <CompanyRegisterForm />}
            {userType === CUSTOMER && (
              <div className="m-10 w-full md:w-4/12 xl:w-6/12 mx-auto  ">
                <p>
                  Stay connected, improve your organization’s productivity, and
                  collaborate to achieve your goals and grow your business. We
                  bring video, audio, and web conferencing together to help
                  customers and partners communicate remotely with ease.
                </p>
                <div className="flex space-x-4 justify-center items-start my-4">
                  <img
                    className="h-12"
                    src={googlePlay}
                    alt="Google play store"
                  />
                  <img className="h-12" src={appleStore} alt="Apple  store" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
