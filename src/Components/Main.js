import React from "react";

function Main() {
  return (
    <>
      <div className="flex items-center w-full h-screen absolute top-0 left-0">
        <div className="w-6/12 h-screen bg-zinc-950 bg-center bg-cover bg_image_buy  flex flex-col justify-evenly items-center ">
          <div className="  w-6/12 h-screen  absolute top-0text-center  bg-center bg-cover z-40 bg-[#030528] opacity-70"></div>
          <img
            src={
              "https://03cd05-a7.myshopify.com/cdn/shop/files/Logo_REFRESH_TRANS_BG_WHT_TXT_1.png?v=1710098752"
            }
            alt="logo"
            className="max-w-[290px] w-full h-auto absolute z-[700]"
          />
        </div>
        <div className="w-6/12 h-screen bg-zinc-350 bg-center bg-cover bg_image_rent">
          <div className="  w-6/12 h-screen  absolute top-0 flex flex-col justify-evenly items-center text-center  bg-center bg-cover bg-[#030528] opacity-100"></div>
          <div className="absolute z-40 flex justify-center items-center h-screen w-6/12 flex-col px-10">
            <h2 className="text-4xl font-bold text-[#ffffff] text-center mb-4">
              Find Your Dream Home
            </h2>
            <p className="text-2xl font-light text-[#c7d3e2] text-center ">
              Home isn't a place, it's a feeling.
            </p>
            <p className="text-[17px] text-center text-[#c7d3e2] my-2 mt-4 font-light ">
              Discover the perfect place to call home! Whether you're renting or
              buying, explore our diverse listings tailored to match your
              lifestyle and preferences. Start your journey with BUNTERS today!
            </p>
            <div className="flex justify-center gap-9 mt-4">
              <button className="text-[18px] font-[400] text-[#f1f0f0] hover:bg-[#9720209a] hover:translate-y-2 transition-transform duration-500 ease bg-[#972020] px-8 py-1 pb-[5px] rounded-[7px]">
                Buy Home
              </button>
              <button className="text-[18px] font-[400] text-zinc-950 hover:bg-[#ffffffad] hover:translate-y-2 transition-transform duration-500 ease bg-white px-8 py-1 pb-[5px] rounded-[7px]">
                Rent Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
