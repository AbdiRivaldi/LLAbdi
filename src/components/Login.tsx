import React from "react";
import loginbg from "../assets/BgLogin.png";
import logologistical from "../assets/IconLogistical.png";
import logoOBO from "../assets/logoOBO.png";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { useState } from "react";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative">
      <img
        src={loginbg}
        alt="Background"
        className="w-full h-screen object-cover"
      />
      <div className="absolute inset-0 bg-biru opacity-30"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-shadow bg-gradient-to-br to-white-400 opacity-48 bg-no-repeat bg-0 bg-0 padding-box box-border border-0.5 border-opacity-25 bg-opacity-[10px] shadow-md relative z-30 ring-offset-white ring-offset-0 ring-offset-99 ring-offset-opacity-1 rounded-[10px] h-[597px] w-[431px]">
          {/* Kotak login */}
          <div className="bg-white w-[2/3] rounded-[10px] px-[40px]">
            <img
              src={logologistical}
              className="pt-[60.59px] w-[197px] mx-auto mb-[46.26px]"
              alt="Logo"
            />
            <div className="p-3 rounded-[5px] bg-white font-Bahnschrift text-fcolor -mt-6">
              <p className="font-Bahnschrift text-fcolor text-lg tracking-[-1.87]">
                Login
              </p>
              {/* Isi form login */}
              <div className="-mt-4">
                <label className="text-gray-600 relative top-3 bg-white mx-2.5">
                  ORGANISATION CODE
                </label>
                <input
                  className="border-[0.5px] border-gray-300 rounded-[5px] p-2 w-full"
                  type="text"
                  placeholder="Enter your organisation code here"
                />
                <label className="text-gray-600 relative top-3 bg-white mx-2.5">
                  EMAIL ADDRESS
                </label>
                <input
                  className="border-[0.5px] border-gray-300 rounded-[5px] p-2 w-full"
                  type="text"
                  placeholder="Enter your email here"
                />
                <label className="text-gray-600 relative top-3 bg-white mx-2.5">
                  PASSWORD
                </label>
                <input
                  className="border-[0.5px] border-gray-300 rounded-[5px] p-2 w-full pr-12"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Enter your password here"
                />
                <div className="absolute top-[336px] left-[340px] right-0 h-[40px] w-[40px] flex items-center justify-center bg-white bg-opacity-0 -z-3">
                  <button
                    className="w-[40px] h-[42px] bg-biru rounded-r-[5px] -mr-[0.2px]"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <AiOutlineEye className="text-white text-[21.65px] mx-auto mt-[4px]" />
                    ) : (
                      <AiOutlineEyeInvisible className="text-white text-[21.65px] mx-auto mt-[4px]" />
                    )}
                  </button>
                </div>
                <button className="text-grey tracking-tighter font-Bahnschrift mb-5">
                  FORGOT PASSWORD
                </button>
              </div>
            </div>
            <div className=" pt-4">
              <button className="w-[331px] h-[40px] bg-biru text-white rounded-[5px] mx-3 text-left pl-1 mb-8">
                LOGIN TO PORTAL
              </button>
            </div>
          </div>
          <div className="flex w-[2/3] text-white mt-3 font-Bahnschrift -mb-1">
            <div className="flex-col tracking-tighter w-[480px] ml-4 mt-3">
              <div className="flex items-center">
                <AiOutlineCopyrightCircle className="" />
                <span className="text-[14px]">
                  OneByOne Logistical Pty LTD 2023.
                </span>
              </div>
              <div className="ml-[2px]">
                Connect and control with digital precision
              </div>
            </div>

            <div className=" ml-1 w-[200px]">
              <div>
                <div className="h-[10px] mb-[5px] ">POWERED BY</div>
                <div>
                  <img
                    src={logoOBO}
                    className="text-white h-[42px] mt-1"
                    alt="OBO Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
