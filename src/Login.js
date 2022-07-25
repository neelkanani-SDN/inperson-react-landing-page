import React from "react";
import image179 from "./assets/images/image 179.png";
import { Link } from "react-router-dom";
import Footer from "./front/Footer";

function Login() {
  return (
    <>
      <div id="landing" className="relative h-[80vh] min-h-[680px] ">
        <img
          src={image179}
          alt="girl talking on phone"
          className=" absolute h-full w-full top-0 bottom-0 left-0 object-cover"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 flex p-4 md:p-10 z-10 text-white  bg-gradient-to-b from-[#0f0e4088] to-[#2D6EF5]">
          <div className="my-auto md:w-6/12 xl:w-4/12 mx-auto">
            <h4 className="text-4xl text-center font-medium text-white">
              Login
            </h4>
            <p className="text-center text-sm font-light">
              Enter your email address and password to access your account.
            </p>
            <form className="my-10 flex flex-col space-y-4">
              <input
                className="w-full bg-white p-2 px-4 rounded"
                placeholder="Email"
                type="email"
              />
              <input
                className="w-full bg-white p-2 px-4 rounded"
                placeholder="Password"
                type="password"
              />
              <div className="flex justify-between items-center">
                <label className="flex items-center">
                  <input className="h-4 w-4 mr-2" type="checkbox" />
                  Remember Me
                </label>

                <p>Forget password ?</p>
              </div>
              <button className="shadow-md p-2 px-6 text font-medium rounded-md  bg-gradient-to-tr from-[#B240F5] to-[#2D6EF5] flex items-center justify-center">
                Login
              </button>
            </form>
            <p className="text-center text-sm font-light">
              Don't have an account? <Link to="/register">Signup</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
