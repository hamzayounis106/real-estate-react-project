import React from "react";
import { Link } from "react-router-dom";
function SidePati(props) {
  return (
    <div className=" hover:translate-x-[10px] transition-all   xs:rounded-l-full flex w-[100%] h-[2rem] xs:w-[70%]  xl:w-[60%]  sm:h-[2.5rem] lg:h-[3.5rem] gap-4 rounded-md items-center justify-center xs:justify-end sm:pr-0 pr-2 sm:justify-center bg-[#972020] cursor-pointer ">
      <div className="text-[#fff] xs:text-xl xl:text-3xl ">
        <Link to={props.link}>{props.icon} </Link>
      </div>
      <div>
        <p className="  xs:text-xl xl:text-2xl text-[#fff] text-nowrap">{props.text}</p>
      </div>
    </div>
  );
}

export default SidePati;
