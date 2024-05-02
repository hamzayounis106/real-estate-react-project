import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLocationArrow,
  FaSwimmingPool,
  FaMoneyCheckAlt,
  FaFileContract,
} from "react-icons/fa";
import SidePati from "./SidePati";
import Checkbox from "./SidebarComponents/Checkbox";
import Card from "./Card";
import Slider from "react-slider";
import Sorter from "../Sorter";
import CloseButton from "./CloseButton";
import rentalHomesData from "../db/RentalHomes.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./SplitText";
import "../index.css";

function Rent() {
  gsap.registerPlugin(ScrollTrigger);
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

  //State to store the filtervisisbility for mobile
  const [filterVisibility, setFilterVisibility] = useState(false);
  const [filterVisibilityClass, setFilterVisibilityClass] = useState(
    "translate-x-[-170%] absolute"
  );

  //Sorting the List
  const [sortState, SetSortState] = useState("Latest");
  const handleSort = (newSortState) => {
    SetSortState(newSortState);
  };

  //Handling the filter visibility for mobile

  const handleFilterVisibility = () => {
    if (filterVisibility) {
      setFilterVisibilityClass("translate-x-[-170%] absolute");
      console.log("No");
    } else {
      setFilterVisibilityClass("translate-x-[0] absolute");
      console.log("yes");
    }
    setFilterVisibility(!filterVisibility);
    // let filterer = document.getElementById("filterer");
    // filterer.classList.toggle("translate-x-[-100%]");
    // console.log(filterVisibility);
    // console.log(filterer);
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
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(".myHeading1 .char", {
      duration: 0.2,
      x: 200,
      opacity: 0,
      stagger: 0.1,
      yoyo: true,
    });

    tl.from(".rent_paragraph ", {
      duration: 0.3,
      // y: -100,
      opacity: 0,
      stagger: 0.2,
      yoyo: true,
    });
    tl.from(".button_learn", {
      duration: 0.1,
      x: -200,
      opacity: 0,
      stagger: 0.1,
      yoyo: true,
    });
    tl.from(".button_learn_inner .char", {
      duration: 0.3,
      y: -100,
      opacity: 0,
      stagger: 0.1,
      yoyo: true,
    });
    tl.from(".SidePati", {
      duration: 0.3,
      x: 200,
      opacity: 0,
      stagger: 0.4,
    });
    tl.from(".parent_filter", {
      delay: 0.5,
      duration: 1,
      x: 200,
      opacity: 0,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".card_trigger",
        // scrol",
        // markers: true,
        start: "top 90%",
        end: "top 70%",
        scrub: 5,
      },
    });
    tl.from(".text_counter .char", {
      duration: 0.1,
      x: 200,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".parent_filter",
        // scrol",
        // markers: true,
        start: "top 40%",
        end: "top 50%",
        scrub: 2,
      },
    });
  }, []);
  useEffect(() => {
    gsap.from(".text_counter .char ", {
      delay: 0.5,
      opacity: 0,
      duration: 0.1,
      y: -10,

      scale: 0.5,
    });
  }, [selectedAmenities]);
  return (
    <>
      <div className="wrapper h-full">
        <div className=" bg_image_rent bg-center bg-cover w-[100%]   h-[100vh] flex xs:flex-nowrap flex-wrap xs:justify-between justify-evenly  items-center flex-col  xs:flex-row ">
          <div className="  w-full h-[100vh]  absolute top-0 flex flex-wrap justify-between items-center text-center  bg-center bg-cover bg-[#030528] opacity-75 z-[190]"></div>
          {/* <div className=" w-[7%]"></div> */}
          <div className="text-white w-[87%] xs:w-[50%] sm:h-[100vh]  z-[200] flex justify-center flex-col items-center xs:items-start xs:ml-[5%]">
            <Link to="/">
              <img
                src={
                  "https://03cd05-a7.myshopify.com/cdn/shop/files/Logo_REFRESH_TRANS_BG_WHT_TXT_1.png?v=1710098752"
                }
                alt="logo"
                className=" xs:hidden max-w-[150px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[240px] w-full h-auto "
              />
            </Link>
            <h2 className="animation_heading myHeading1 lg:text-3xl xl:text-5xl font-semibold my-4 ">
              <SplitText text="Looking for a home to Rent?" />
            </h2>
            <p className="rent_paragraph lg:text-[18px] xl:text-[20px] text-center xs:text-left">
              Discover your ideal rental home today! Browse our diverse listings
            </p>
            <p className="rent_paragraph lg:text-[18px] xl:text-[20px] text-center xs:text-left">
              of apartments, houses, and condos in prime locations. Your dream
            </p>
            <p className="rent_paragraph lg:text-[18px] xl:text-[20px] text-center xs:text-left">
              rental awaits.
            </p>
            <div className="button_learn  mt-4 ">
              <Link
                to="/Blog"
                className=" button_learn_inner mt-4 text-[16px] xs:text-[18px] font-[400] text-zinc-950 hover:bg-[#ffffffad] hover:translate-y-2 transition-transform duration-500 ease bg-white px-4 xs:px-8 py-1 pb-[5px] rounded-[7px]"
              >
                <SplitText text=" Learn More" />
              </Link>
            </div>
          </div>
          <div className=" overflow-hidden !w-[58vw] xs:w-[39%] sm:w-[44%] xl:w-[43%] xs:h-[60%] rounded-lg  flex justify-end items-end flex-col  z-[200] gap-3 ">
            <div className="SidePati w-[100%] flex justify-end">
              {" "}
              <SidePati
                text={"Excellent location"}
                link="google.com"
                icon={<FaLocationArrow />}
              />
            </div>
            <div className="SidePati w-[100%] flex justify-end">
              <SidePati text={"Affordable rates"} icon={<FaMoneyCheckAlt />} />
            </div>
            <div className="SidePati w-[100%] flex justify-end">
              {" "}
              <SidePati text={"Modern amenities"} icon={<FaSwimmingPool />} />
            </div>
            <div className="SidePati w-[100%] flex justify-end">
              <SidePati
                text={"Flexible lease options"}
                icon={<FaFileContract />}
              />
            </div>
          </div>
        </div>
        <div className=" h-full overflow-hidden card_wrapper w-[100%] flex justify-start lg:items-start lg:flex-row flex-col items-center">
          <div
            onClick={handleFilterVisibility}
            className={`secondPage_animation_fade_up transition-all duration-100 ease-in-out !fixed top-0 ${filterVisibilityClass}  md:translate-x-0 bg-[#030528] opacity-50  w-full h-full z-[200] md:hidden`}
          ></div>
          <div className="parent_filter h-full  md:w-[90%] lg:w-[20%] sm:w-[50vw] w-[80vw]  z-[300]">
            <div
              id="filterer"
              className={` secondPage_animation_fade_up transition-all duration-300 ease-in-out  ${filterVisibilityClass} md:translate-x-0   md:my-9  m-2 my-14 lg:my-4 rounded-lg bg-[#0A1033]  md:relative flex md:justify-center md:items-center p-5  flex-wrap break-words shadow-2xl shadow-black w-full`}
            >
              <div className="break-words w-full lg:justify-normal lg:block justify-normal block md:flex md:justify-center md:flex-col ">
                <h2 className="text-2xl font-semibold text-white text-center">
                  Filters
                </h2>
                <div className="bg-zinc-400 py-[1px] my-1"></div>
                <h2 className="text-1xl font-semibold text-white text-start inline-block ">
                  Amenities
                </h2>
                <div className="flex flex-col lg:flex-col  md:flex-row gap-2 p-3 md:flex-wrap md:justify-center">
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
                <div className=" md:w-full lg:w-[90%] text-white ">
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
                      <p className="text-white pl-2 font-light  ">
                        Max: {values[1]}
                      </p>
                    </>
                  ) : null}
                </div>
                <CloseButton
                  text="Close Filters"
                  ClickhandleChange={handleFilterVisibility}
                  href="#top_list"
                  classes="text-white md:hidden close_button scale-75"
                />
              </div>
            </div>
          </div>
          <div className="parent_filter md:w-[90%] lg:w-[75%] ">
            <div
              id="top_list"
              className="flex justify-center items-center flex-col flex-wrap w-full my-4"
            >
              <div className="text-[#0A1033] px-2 text-1xl font-light text-center md:text-right w-[100%] py-2">
                <div className="parent_filter text_counter">
                  <SplitText text={`Total Availiable : ${count}`} />
                </div>
                <div className=" flex  justify-center flex-col w-full items-center ">
                  <div className="container py-8 md:py-2">
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
                  <button
                    onClick={handleFilterVisibility}
                    title="filter"
                    href="#filterer"
                    className="filter mt-2 md:hidden"
                  >
                    <svg viewBox="0 0 512 512" height="1em">
                      <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"></path>
                    </svg>
                    <p>Filters</p>
                  </button>
                </div>
              </div>
              <div className=" card_trigger flex justify-center items-center  flex-wrap  w-[100%] my-4">
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
        </div>
      </div>
    </>
  );
}

export default Rent;
