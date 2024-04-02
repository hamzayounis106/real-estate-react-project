import React from 'react'
import { Link } from 'react-router-dom'
function Amenity(props) {
  return (
    <div className=" hover:scale-100 transition-all flex px-4 py-1 my-1 h-[3.5rem] gap-4 rounded items-center justify-center bg-[#972020] cursor-pointer ">
    <div className="text-[#fff] text-2xl ">
      <Link to={props.link}>{props.icon} </Link>
    </div>
    <div>
      <p className="text-1xl text-[#fff]">{props.text}</p>
    </div>
  </div>
  )
}

export default Amenity
