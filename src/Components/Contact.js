import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { PiInstagramLogoFill } from "react-icons/pi";
import { PiFacebookLogoFill } from "react-icons/pi";
import { PiTwitterLogoFill } from "react-icons/pi";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import Footer from "./Footer";
import SplitText from "./SplitText";
function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    reason: "General Inquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(form);
  };
  return (
    <>
      <div className=" flex h-screen w-full row justify-stretch items-center ">
        <div className="relative w-[40%] bg-zinc-950 h-full rounded-r-full flex flex-col justify-center items-center z-[100] ">
          <div className="absolute rounded-r-full     inset-0 object-cover  sm:h-screen   top-0 flex flex-col justify-evenly items-center text-center bg_image_header bg-top bg-cover bg-no-repeat">
            <div className="absolute inset-0 object-cover  sm:h-screen   top-0 flex flex-col justify-evenly items-center rounded-r-full  text-center  bg-center bg-cover  bg-[#030528] opacity-80"></div>
          </div>
          <div className="z-[200] ">
            <div className=" w-[90%]  flex flex-col justify-between items-center sm:justify-start">
              <Link to="/" className="footer_logo">
                <img
                  alt=""
                  src="https://03cd05-a7.myshopify.com/cdn/shop/files/Logo_REFRESH_TRANS_BG_WHT_TXT_1.png?v=1710098752"
                  className="max-w-[130px] w-full h-auto sm:max-w-[160px] lg:max-w-[250px] "
                />
              </Link>
              <div className="w-[90%]  flex flex-col justify-between items-center sm:justify-start">
                <div className="  flex  gap-1 mt-1 rounded-md items-center justify-center  cursor-pointer ">
                  <div className="text-[#fff] text-2xl">
                    <a href="">
                      <IoCall />
                    </a>
                  </div>
                  <div>
                    <p className="  text-xl text-[#fff] text-nowrap">
                      03448798428
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[90%]  flex flex-col justify-between items-center sm:justify-start">
                <div className="  flex  gap-1 mt-1 rounded-md items-center justify-center  cursor-pointer ">
                  <div className="text-[#fff] text-2xl ">
                    <a href="">
                    <MdEmail />
                    </a>
                  </div>
                  <div>
                    <p className=" text-xl text-[#fff] text-nowrap">
                      hamzayounis105@outlook.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[90%]  flex flex-col justify-between items-center sm:justify-start">
                <div className="  flex  gap-1 mt-1 rounded-md items-center justify-center  cursor-pointer ">
                  <div className="text-[#fff] text-2xl">
                    <a href="">
                      <FaLocationDot />
                    </a>
                  </div>
                  <div>
                    <p className="text-xl text-[#fff] text-nowrap">
                      Bahwalpur, Pakistan
                    </p>
                  </div>
                </div>
              </div>
              <ul className=" mt-3 flex px-2 text-[18px] lg:text-[1.4rem] font-medium my-2  gap-1  items-center justify-center  rounded-md text-white sm:text-2xl sm:gap-2  ">
                <a
                  href="/"
                  className="footer_icons text-[#eb8282] sm:hover:scale-105 sm:hover:text-[#c2b9b9] transition-all"
                >
                  <PiInstagramLogoFill />
                </a>
                <a
                  href="/"
                  className="footer_icons text-[#eb8282] sm:hover:scale-105 sm:hover:text-[#c2b9b9] transition-all "
                >
                  <PiFacebookLogoFill />
                </a>
                <a
                  href="/"
                  className="footer_icons text-[#eb8282] sm:hover:scale-105 sm:hover:text-[#c2b9b9] transition-all "
                >
                  <PiTwitterLogoFill />
                </a>
                <a
                  href="/"
                  className="footer_icons text-[#eb8282] sm:hover:scale-105 sm:hover:text-[#c2b9b9] transition-all "
                >
                  <PiYoutubeLogoFill />
                </a>
                <a
                  href="/"
                  className="footer_icons text-[#eb8282] sm:hover:scale-105 sm:hover:text-[#c2b9b9] transition-all "
                >
                  <PiLinkedinLogoFill />
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[60%]  h-full flex justify-center  items-center">
          {isSubmitted ? (
            <p className="text-2xl font-semibold">
              Thank you for your submission!
            </p>
          ) : (
            <div>
              <form onSubmit={handleSubmit} className="p-6 w-[100%] rounded shadow-sm shadow-[#030528]">
                <h2 className="py-2 font-medium text-2xl">
                  We want to hear from you!{" "}
                </h2>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    required
                    className="flex-1 p-2 rounded shadow-sm"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    required
                    className="flex-1 p-2 rounded shadow-sm"
                  />
                </div>
                <div className="flex space-x-4 mt-4 ">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                    className="flex-1 p-2 rounded shadow-sm"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    required
                    className="flex-1 p-2 rounded shadow-sm"
                  />
                </div>
                <div className="mt-4">
                  <select
                    name="reason"
                    onChange={handleChange}
                    required
                    className="w-full p-2 rounded shadow-sm"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Wall Painting Service">
                      Wall Painting Service
                    </option>
                    <option value="Electric Service">Electric Service</option>
                    <option value="Plumbing Service">Plumbing Service</option>
                    <option value="Internet & Cable Service">
                      Internet & Cable Service
                    </option>
                    <option value="Transport Service">Transport Service</option>
                    {/* Add more options here */}
                  </select>
                </div>
                <div className="mt-4">
                  <textarea
                    name="message"
                    placeholder="Your message"
                    onChange={handleChange}
                    required
                    className="w-full p-2 rounded shadow-sm"
                    rows={5}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-4 px-4 py-2 rounded bg-blue-500 text-white shadow-sm"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
