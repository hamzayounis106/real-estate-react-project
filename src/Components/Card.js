import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// importing icons
import { FaLocationDot } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";
function Card(props) {
  console.log(props.amenities);
  return (
    <>
      <div className=" hover:translate-y-1 transition-all  ease-in-out    bg-[#0A1033]  rounded-lg m-3 overflow-hidden  h-[400px]   w-[300px] relative">
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper cursor-grab bg-[#0A1033] rounded-md"
            
          >
            {props.images.map((data, index) => {
              return (
                <SwiperSlide key={index} className="bg-[#0A1033]" >
                  <div className=" bg-[#0A1033] flex  justify-center items-center w-[100%] overflow-hidden rounded-md" >
                    <img  className="w-[90%]  !h-[11rem] rounded-md " src={`./Images/${data}`} />
                  </div>
                </SwiperSlide>
              );
            })}
            
          </Swiper>
        </div>
        <div className=" cursor-pointer absolute   bottom-[10px] right-0 left-0 flex flex-col  gap-3 overflow-hidden  p-2">
          <div className="flex  flex-col">
            <div className="flex items-center justify-center gap-2 ">
              <FaClipboardUser
                title="Realtor"
                className=" icons text-white text-2xl font-bold"
              />
              <span className="text-1xl text-white text-left font-semibold">
                {props.realtor}
              </span>
            </div>
            <p className="text-1xl text-white text-center font-semibold pt-2">
              {props.price}
            </p>
            <p className="text-1xl text-white text-center">
              {props.description.length > 90
                ? `${props.description.substring(0, 80)}...`
                : props.description}
            </p>
          </div>
          <div className="flex justify-around pt-2  gap-10">
            <a href={props.location} target="_blank">
              <FaLocationDot
                title="Visit Location"
                className="cursor-pointer icons text-white text-2xl font-bold"
              />
            </a>
            <Link
              to={"/Details"}
              rel="noopener noreferrer"
              state={{
                detailsP: props.details,
                pricingP: props.price,
                addressP: props.address,
                realtorP: props.realtor,
                amenitiesP: props.amenities,
                imagesP: props.images,
              }}
            >
              <FaHome
                title="Details"
                className="cursor-pointer icons text-white text-2xl font-bold"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
