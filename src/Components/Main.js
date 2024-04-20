import React from "react";
import { Link } from "react-router-dom";

function Main() {

  return (
    <>
      <div className="flex items-center w-full h-[100%] sm:h-screen absolute top-0 left-0">
        <div className=" hidden md:w-[40%] lg:w-6/12 h-[100%] sm:h-screen bg-zinc-950 bg-center bg-cover bg_image_buy  md:flex flex-col justify-evenly items-center ">
          <div className="hidden md:flex  md:w-[40%] lg:w-6/12 h-[100%] sm:h-screen  absolute top-0text-center  bg-center bg-cover z-40 bg-[#030528] opacity-70"></div>
          <img
            src={
              "https://03cd05-a7.myshopify.com/cdn/shop/files/Logo_REFRESH_TRANS_BG_WHT_TXT_1.png?v=1710098752"
            }
            alt="logo"
            className=" lg:max-w-[290px] md:max-w-[240px] w-full h-auto absolute z-[700]"
          />
        </div>
        <div className=" flex  justify-center w-full md:w-[60%] lg:w-6/12 h-[100%] sm:h-screen bg-zinc-350 bg-center bg-cover bg_image_rent">
          <div className=" w-full  md:w-[60%]  lg:w-6/12 h-[100%] sm:h-screen  absolute top-0 flex flex-col justify-evenly items-center text-center  bg-center bg-cover bg-[#030528] opacity-80 md:opacity-100"></div>
          <div className="absolute z-40 flex justify-evenly sm:justify-center items-center h-[100%] sm:h-screen w-[98%] sm:w-[90%]  md:w-[60%] lg:w-6/12 flex-col px-10">
          <img
            src={
              "https://03cd05-a7.myshopify.com/cdn/shop/files/Logo_REFRESH_TRANS_BG_WHT_TXT_1.png?v=1710098752"
            }
            alt="logo"
            className=" md:hidden max-w-[200px] lg:max-w-[290px] md:max-w-[240px] w-full h-auto sm:mb-6 "
          />
          <div>

         
            <h2 data-splitting className="split_heading lg:text-4xl md:text-[1.8rem] font-bold text-[#ffffff] text-center lg:mb-4 md:mb-2 sm:text-xl text-[1.4rem]">
              Find Your Dream Home
            </h2>
            <p className="lg:text-2xl sm:text-xl text-[1.2rem] font-light text-[#c7d3e2] text-center ">
              Home isn't a place, it's a feeling.
            </p>
            <p className="lg:text-[17px] text-[1rem] sm:text-[15px] text-center text-[#c7d3e2] my-2 lg:mt-4 md:mt-2  font-light ">
              Discover the perfect place to call home! Whether you're renting or
              buying, explore our diverse listings tailored to match your
              lifestyle and preferences. Start your journey with BUNTERS today!
            </p>
            </div>
            <div className="flex justify-center gap-y-3 gap-x-6 sm:gap-9 mt-4 flex-wrap">
              <Link to="/Buy" className="lg:text-[18px] font-[400] text-[#f1f0f0] hover:bg-[#9720209a] hover:translate-y-2 transition-transform duration-500 ease bg-[#972020] px-8 py-1 pb-[5px] rounded-[7px]">
                Buy Home
              </Link>
              <Link to="/Rent" className="lg:text-[18px] font-[400] text-zinc-950 hover:bg-[#ffffffad] hover:translate-y-2 transition-transform duration-500 ease bg-white px-8 py-1 pb-[5px] rounded-[7px]">
                Rent Home
              </Link>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
