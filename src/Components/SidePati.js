import React from "react";
import { Link } from "react-router-dom";
function SidePati(props) {
  return (
    <div className=" hover:translate-x-[10px] transition-all rounded-l-full flex w-[60%]  h-[3.5rem] gap-4 rounded items-center justify-center bg-[#972020] cursor-pointer ">
      <div className="text-[#fff] text-3xl ">
        <Link to={props.link}>{props.icon} </Link>
      </div>
      <div>
        <p className="text-2xl text-[#fff]">{props.text}</p>
      </div>
    </div>
  );
}

export default SidePati;
