import React, { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaSwimmingPool } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa6";
import SidePati from "./SidePati";
import { Link } from "react-router-dom";
import Checkbox from "./SidebarComponents/Checkbox";
import Card from "./Card";
import Slider from "react-slider";
import Sorter from "../Sorter";
import "../index.css";
import rentalHomesData from "../db/RentalHomes.json";

function Rent() {
  // (-__-)  (.__.)  (._.)  (,_,)  (._.)  (.__.) ༼ つ ◕_◕ ༽つ
  const min = 0;
  const max = 10000;
  //State to store the rental homes data
  const [rentalHomes, setRentalHomes] = useState([]);

  //State to store the values of the range slider
  const [values, setValues] = useState([min, max]);

  //State to show the range slider values
  const [range, showRange] = useState(false);

  //State to store the selected amenities
  const [selectedAmenities, setselectedAmenities] = useState([]);

  //State to count the number of lists
  const [count, setCount] = useState(0);

  //Sorting the List
  const [sortState, SetSortState] = useState("Latest");
  const handleSort = (newSortState) => {
    SetSortState(newSortState);
  };

  // handlechange function to set the values of the range slider and show the slected values on the filter panal by make the showRange true

  const handleChange = (newValues) => {
    setValues(newValues);
    showRange(true);
  };

  //Setting the rental homes data from the json file

  useEffect(() => {
    if (
      rentalHomesData.rentalHomesDataBase &&
      rentalHomesData.rentalHomesDataBase.length > 0
    ) {
      setCount(rentalHomesData.rentalHomesDataBase.length);
      setRentalHomes(rentalHomesData.rentalHomesDataBase);
      // console.log(rentalHomesData.rentalHomesDataBase);
    }
  }, [rentalHomesData.rentalHomesDataBase]);

  //Handling the check of the amenities

  var handlecheck = (e) => {
    if (selectedAmenities.includes(e.target.value)) {
      //remove the value from the array
      setselectedAmenities(
        selectedAmenities.filter((item) => item !== e.target.value)
      );
    } else {
      setselectedAmenities((selectedAmenities) => [
        ...selectedAmenities,
        e.target.value,
      ]);
    }
  };

  //Filtering out the data on the basis of selected amenities and price range
  //if the selected amenities are empty then it will show all the rental homes because handlecheck makes the selectedAmenities empty and then below filterdData is set (will run again due to useffect dependent on selectedAmenities ) to setRentalHomes because if  if (selectedAmenities.length > 0)  is not called then it will show all the rental homes

  useEffect(() => {
    let filteredData = rentalHomesData.rentalHomesDataBase;

    if (sortState === "Min to Max") {
      filteredData = [...filteredData].sort((a, b) => a.price - b.price); // Sort the new array reference
      console.log("Min to Max");
      console.log(filteredData);
    } else if (sortState === "Max to Min") {
      filteredData = [...filteredData].sort((a, b) => b.price - a.price); // Sort the new array reference
      console.log("Max to min");
      console.log(filteredData);
    }
   
    // Apply filter based on selected amenities
    if (selectedAmenities.length > 0) {
      filteredData = filteredData.filter((item) =>
        selectedAmenities.some((amenity) => item.amenities.includes(amenity))
      );
    }

    // Apply filter based on price range
    if (range) {
      filteredData = filteredData.filter(
        (item) => item.price < values[1] && item.price > values[0]
      );
    }

    setCount(filteredData.length);
    setRentalHomes(filteredData); // Set the filtered and sorted data
  }, [selectedAmenities, values, sortState]);

  // List of Amenties that we have in our rental homes

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
      <div className="card_wrapper w-[100%] flex justify-start items-start ">
        <div className=" w-[20%] m-2 my-4 rounded-lg bg-[#0A1033]  flex justify-center items-center p-5  flex-wrap break-words ">
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
            <h2 className="text-1xl font-semibold text-white ">
              Rent Prce Range
            </h2>
            <div className="w-[90%] text-white">
              <Slider
                className="slider"
                value={values}
                onChange={handleChange}
                min={min}
                max={max}
              />
            </div>
            <div className="mt-3">
              {range ? (
                <>
                  <p className="text-white pl-2 font-light ">
                    Min: {values[0]}
                  </p>
                  <p className="text-white pl-2 font-light ">
                    Max: {values[1]}
                  </p>
                </>
              ) : null}
            </div>
         
          </div>
        </div>

        <div className="flex justify-center items-center flex-col flex-wrap  w-[75%] my-4">
          <div className="text-[#0A1033] pl-2 text-1xl font-light text-right w-[100%]">
            Total Availiable : {count}
            <div div className="container">
              <div className="tabs">
                <Sorter
                  id="tab1"
                  title="Latest"
                  onChange={() => handleSort("Latest")}
                />
                <Sorter
                  id="tab2"
                  title="Min to Max"
                  onChange={() => handleSort("Min to Max")}
                />
                <Sorter
                  id="tab3"
                  title="Max to Min"
                  onChange={() => handleSort("Max to Min")}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center  flex-wrap  w-[100%] my-4">
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
      </div>
    </>
  );
}

export default Rent;
