import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./wiperStyle.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Amenity from "./Amenity";

// Importing icons
import { IoIosWifi } from "react-icons/io";
import { TbAirConditioning } from "react-icons/tb";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { LuParkingCircle } from "react-icons/lu";
import { BiSolidWasher } from "react-icons/bi";
import { BiSolidDryer } from "react-icons/bi";
import { useLocation } from "react-router-dom";
export default function App() {
  const { state } = useLocation();
  console.log(state);
  console.log(state.amenitiesP);
  if (!state) {
    console.log("Some issue");
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="bg-[#0A1033]  h-[100%] flex justify-center items-center flex-col overflow-hidden">
        <div className="h-[15vh] flex justify-start items-stretch">
          <img
            src={
              "https://03cd05-a7.myshopify.com/cdn/shop/files/Logo_REFRESH_TRANS_BG_WHT_TXT_1.png?v=1710098752"
            }
            alt="logo"
            className="max-w-[180px] p-3 w-full h-auto "
          />
        </div>
        <div className="flex justify-center items-center ">
          <div className="details_images_gallery w-[100vw] h-[70vh] rounded-sm overflow-hidden bg-[#ffffff]">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 rounded-sm p-3"
            >
              {state.imagesP.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={`./Images/${data}`} />
                  </SwiperSlide>
                );
              })}
             
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
               {state.imagesP.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={`./Images/${data}`} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="description w-[80%] p-[20px] my-2 ">
          <h2 className="text-2xl font-medium text-white">Pricing:</h2>
          <p className="text-1xl  text-white mt-1"> {state.pricingP}</p>
          <h2 className="text-2xl font-medium text-white">Address:</h2>
          <p className="text-1xl  text-white mt-1"> {state.addressP}</p>
          <h2 className="text-2xl font-medium text-white">Realtor:</h2>
          <p className="text-1xl  text-white mt-1"> {state.realtorP}</p>

          <h2 className="text-2xl font-medium text-white">Description:</h2>
          <p className="text-1xl  text-white mt-1">{state.detailsP}</p>
          <br />
          <h2 className="text-2xl font-medium text-white">Amenities:</h2>
          <div className=" rounded-lg py-1 mt-1  flex  justify-start items-start gap-x-9  flex-wrap w-[100%] ">
            {state.amenitiesP.map((data, index) => {
              if (data === "TV" || data === "Cable TV") {
                return (
                  <Amenity
                    text={data}
                    icon={<PiTelevisionSimpleBold />}
                    key={index}
                  />
                );
              } else if (data === "Washer") {
                return (
                  <Amenity text={data} icon={<BiSolidWasher />} key={index} />
                );
              } else if (data === "Dryer") {
                return (
                  <Amenity text={data} icon={<BiSolidDryer />} key={index} />
                );
              } else if (data === "Air Conditioning") {
                return (
                  <Amenity
                    text={data}
                    icon={<TbAirConditioning />}
                    key={index}
                  />
                );
              } else if (data === "Wi-Fi") {
                return <Amenity text={data} icon={<IoIosWifi />} key={index} />;
              } else if (data === "Free Parking on Premises") {
                return (
                  <Amenity text={data} icon={<LuParkingCircle />} key={index} />
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
