import React, { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa6";
import SidePati from "./SidePati";
import { Link } from "react-router-dom";
import Checkbox from "./SidebarComponents/Checkbox";
import Card from "./Card";
import "../index.css";
import rentalHomesData from "../db/RentalHomes.json";

function Rent() {
  const [rentalHomes, setRentalHomes] = useState([]);

  useEffect(() => {
    if (
      rentalHomesData.rentalHomesDataBase &&
      rentalHomesData.rentalHomesDataBase.length > 0
    ) {
      setRentalHomes(rentalHomesData.rentalHomesDataBase);
      console.log(rentalHomesData.rentalHomesDataBase);
    }
  }, [rentalHomesData.rentalHomesDataBase]);

  const handlecheck = (e) => {
    if (e.target.checked) {
      console.log(e.target.value);
    }
  };
  const amenitiesList = [
    "Wi-Fi",
    "Air Conditioning",
    "Heating",
    "TV",
    "Kitchen",
    "Free Parking on Premises",
    "Washer",
    "Dryer",
    "Essentials",
    "Cable TV",
  ];
  return (
    <>
      <div className=" bg_image_rent bg-center bg-cover w-[100%] h-[100vh] flex justify-evenly items-center ">
        <div className="  w-full h-[100vh]  absolute top-0 flex flex-col justify-evenly items-center text-center  bg-center bg-cover bg-[#030528] opacity-75 z-[190]"></div>
        <div className="w-[7%]"></div>
        <div className="text-white w-[50%] h-[100%] z-[200] flex justify-center flex-col items-start">
          <h2 className="text-5xl font-semibold my-4 capitalize">
            Looking for a home to Rent?
          </h2>
          <p className=" text-[22px] text-left">
            Discover your ideal rental home today! Browse our diverse listings
            of apartments, houses, and condos in prime locations. Your dream
            rental awaits.
          </p>
          <Link
            to="/Blog"
            className=" mt-4 text-[18px] font-[400] text-zinc-950 hover:bg-[#ffffffad] hover:translate-y-2 transition-transform duration-500 ease bg-white px-8 py-1 pb-[5px] rounded-[7px]"
          >
            Learn More
          </Link>
        </div>
        <div className=" overflow-hidden  w-[43%] h-[60%] rounded-lg  flex justify-center items-end flex-col  z-[200] gap-3 ">
          <SidePati
            text={"Excellent location"}
            link="google.com"
            icon={<FaLocationArrow />}
          />
          <SidePati text={"Affordable rates"} icon={<FaMoneyCheckAlt />} />
          <SidePati text={"Modern amenities"} icon={<FaSwimmingPool />} />
          <SidePati text={"Flexible lease options"} icon={<FaFileContract />} />
        </div>
      </div>
      <div className="card_wrapper w-[100%] flex justify-center items-start ">
        <div className=" w-[20%] m-2 rounded-lg bg-[#0A1033]  flex justify-center items-center p-5  flex-wrap break-words ">
          <div className="break-words w-screen ">
            <h2 className="text-2xl font-semibold text-white text-center">
              Filters
            </h2>
            <div className="bg-zinc-400 py-[1px] my-1"></div>
            <h2 className="text-1xl font-semibold text-white ">Amenities</h2>
            <div className="flex flex-col gap-2 p-3">
              {amenitiesList.map((e, index) => {
                return (
                  <Checkbox
                    value={e}
                    key={index}
                    type="checkbox"
                    name={"amenities"}
                    title={e}
                    handlecheck={handlecheck}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center  flex-wrap  width-[75%] my-4">
          {rentalHomes.map((data, index) => {
            return (
              <Card
                location={data.location}
                description={data.description}
                realtor={data.realtor}
                price={"$" + data.price + "/month"}
                details={data.description}
                address={data.address}
                key={index}
                images={data.images}
                amenities={data.amenities}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Rent;
