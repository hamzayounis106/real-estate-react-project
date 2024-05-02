import React, { useState, useEffect } from "react";
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
import "../animista.css";
import gsap from "gsap";
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
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(".slide_left",{
      duration: 1,
      x: -200,
      opacity: 0,

    })

    tl.from(".scroll_down_footer_item", {
      delay: 0.3,
      duration: 0.7,
      stagger: 0.1,
      y:200,
      opacity: 0,
    });
    tl.from(".slide_from_left",{
      duration: 1,
      x: 200,
      opacity: 0,

    })
  }, []);
  return (
    <>
      <div className="flex items-center justify-between w-full h-screen overflow-hidden row lg:justify-stretch">
        <div className= " slide_left relative xl:w-[40%] lg:w-[50%] md:w-[40%] sm:w-[40%] xs:w-[50%] w-[100%] bg-zinc-950 h-full xs:rounded-r-full flex flex-col justify-center items-center z-[100] ">
          <div className="absolute inset-0 top-0 flex flex-col items-center object-cover text-center bg-top bg-no-repeat bg-cover xs:rounded-r-full sm:h-screen justify-evenly bg_image_header">
            <div className="absolute inset-0 object-cover  sm:h-screen   top-0 flex flex-col justify-evenly items-center xs:rounded-r-full  text-center  bg-center bg-cover  bg-[#030528] opacity-80"></div>
          </div>
          <div className="z-[200] ">
            <div className=" w-[99%] xs:w-[90%]  flex flex-col justify-between items-center sm:justify-start">
              <div className="scroll_down_footer_item">
                <Link to="/" className="footer_logo">
                  <img
                    alt=""
                    src="https://03cd05-a7.myshopify.com/cdn/shop/files/Logo_REFRESH_TRANS_BG_WHT_TXT_1.png?v=1710098752"
                    className="max-w-[130px] w-full h-auto sm:max-w-[160px] lg:max-w-[250px] "
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center w-full h-[60vh] px-4 xs:hidden slide_from_left">
          {isSubmitted ? (
            <p className="text-xl text-white">
              Thank you for your submission!
            </p>
          ) : (
            <div >
              <form
                onSubmit={handleSubmit}
                className="p-6 rounded "
              >
                <h2 className="py-2 sm:text-[1.1rem] md:text-[1.3rem] lg:text-2xl font-medium text-white">
                  We want to hear from you!
                </h2>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    required
                    className="w-[50%] p-2 rounded shadow-sm  text-[0.8rem] sm:text-[1.05rem]"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    required
                    className="w-[50%] p-2 rounded shadow-sm  text-[0.8rem] sm:text-[1.05rem]"
                  />
                </div>
                <div className="flex mt-4 space-x-4 ">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                    className="w-[50%] p-2 rounded shadow-sm  text-[0.8rem] sm:text-[1.05rem]"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    required
                    className="w-[50%] p-2 rounded shadow-sm  text-[0.8rem] sm:text-[1.05rem]"
                  />
                </div>
                <div className="mt-4">
                  <select
                    name="reason"
                    onChange={handleChange}
                    required
                    className="w-full p-2 rounded shadow-sm text-[0.8rem] sm:text-[1.05rem]"
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
                    className="w-full p-2 rounded shadow-sm text-[0.8rem] sm:text-[1.05rem]"
                    rows={5}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 mt-4 text-white bg-blue-500 rounded shadow-sm xs:text-[1.05rem]"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
              <div className="w-[90%]  flex flex-col justify-between items-center sm:justify-start scroll_down_footer_item">
                <div className="flex items-center justify-center gap-1 mt-1 rounded-md cursor-pointer ">
                  <div className="text-[#fff] lg:text-2xl ">
                    <a href="">
                      <IoCall />
                    </a>
                  </div>
                  <div className="">
                    <p className="  lg:text-xl  text-[1rem] xs:text-[1.05rem] text-[#fff] text-nowrap">
                      03448798428
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[90%]  flex flex-col justify-between items-center sm:justify-start scroll_down_footer_item">
                <div className="flex items-center justify-center gap-1 mt-1 rounded-md cursor-pointer ">
                  <div className="text-[#fff] lg:text-2xl  ">
                    <a href="">
                      <MdEmail />
                    </a>
                  </div>
                  <div className="">
                    <p className=" lg:text-xl  text-[1rem] xs:text-[1.05rem] text-[#fff] text-nowrap">
                      hamzayounis105@outlook.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[90%]  flex flex-col justify-between items-center sm:justify-start scroll_down_footer_item">
                <div className="flex items-center justify-center gap-1 mt-1 rounded-md cursor-pointer ">
                  <div className="text-[#fff] lg:text-2xl ">
                    <a href="">
                      <FaLocationDot />
                    </a>
                  </div>
                  <div className="">
                    <p className="lg:text-xl  text-[1rem] xs:text-[1.05rem]  text-[#fff] text-nowrap">
                      Bahwalpur, Pakistan
                    </p>
                  </div>
                </div>
              </div>
              <ul className=" mt-3 flex px-2 sm:text-[16px] lg:text-[1.4rem] font-medium my-2  gap-1  items-center justify-center  rounded-md text-white sm:text-2xl sm:gap-2  ">
                <div className="scroll_down_footer_item">
                  <a
                    href="/"
                    className="footer_icons text-[#eb8282] sm:hover:scale-105 sm:hover:text-[#c2b9b9] transition-all"
                  >
                    <PiInstagramLogoFill />
                  </a>
                </div>
                <div className="scroll_down_footer_item">
                  <a
                    href="/"
                    className="footer_icons text-[#eb8282] sm:hover:scale-105 sm:hover:text-[#c2b9b9] transition-all "
                  >
                    <PiFacebookLogoFill />
                  </a>
                </div>
                <div className="scroll_down_footer_item">
                  <a
                    href="/"
                    className="footer_icons text-[#eb8282] sm:hover:scale-105 sm:hover:text-[#c2b9b9] transition-all "
                  >
                    <PiTwitterLogoFill />
                  </a>
                </div>
                <div className="scroll_down_footer_item">
                  <a
                    href="/"
                    className="footer_icons text-[#eb8282] sm:hover:scale-105 sm:hover:text-[#c2b9b9] transition-all "
                  >
                    <PiYoutubeLogoFill />
                  </a>
                </div>
                <div className="scroll_down_footer_item">
                  <a
                    href="/"
                    className="footer_icons text-[#eb8282] sm:hover:scale-105 sm:hover:text-[#c2b9b9] transition-all "
                  >
                    <PiLinkedinLogoFill />
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="xl:w-[60%] lg:w-[50%] xs:w-[49%]  px-4 h-full hidden xs:flex justify-center  items-center slide_from_left">
          {isSubmitted ? (
            <p className="text-2xl font-semibold">
              Thank you for your submission!
            </p>
          ) : (
            <div >
              <form
                onSubmit={handleSubmit}
                className="p-6 xs:w-[99%] sm:w-[90%] lg:w-[100%] rounded shadow-sm shadow-[#030528]"
              >
                <h2 className="py-2 sm:text-[1.1rem] md:text-[1.3rem] lg:text-2xl font-medium">
                  We want to hear from you!
                </h2>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    required
                    className="w-[50%] p-2 rounded shadow-sm  text-[0.8rem] sm:text-[1.05rem]"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    required
                    className="w-[50%] p-2 rounded shadow-sm  text-[0.8rem] sm:text-[1.05rem]"
                  />
                </div>
                <div className="flex mt-4 space-x-4 ">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                    className="w-[50%] p-2 rounded shadow-sm  text-[0.8rem] sm:text-[1.05rem]"
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    required
                    className="w-[50%] p-2 rounded shadow-sm  text-[0.8rem] sm:text-[1.05rem]"
                  />
                </div>
                <div className="mt-4">
                  <select
                    name="reason"
                    onChange={handleChange}
                    required
                    className="w-full p-2 rounded shadow-sm text-[0.8rem] sm:text-[1.05rem]"
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
                    className="w-full p-2 rounded shadow-sm text-[0.8rem] sm:text-[1.05rem]"
                    rows={5}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 mt-4 text-white bg-blue-500 rounded shadow-sm xs:text-[1.05rem]"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Contact;
