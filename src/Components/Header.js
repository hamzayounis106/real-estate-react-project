import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { IoMdMenu } from "react-icons/io";

function Header() {
  let [headerPage, setHeaderPage] = useState(false);
  let [header_class, setHeader_class] = useState("translate-y-[-100%] ");

  const menuHandler = () => {
    setHeaderPage(!headerPage);
    setHeader_class(headerPage ? "translate-y-[-100%] " : "translate-y-0 ");
  };

  return (
    <>
      <div className="w-full flex justify-end absolute top-0 left-0 z-10 ">
       <Button onClick={menuHandler} value={"Menu"} icon={<IoMdMenu />} />
      </div>
      <div className="overflow-hidden  " onClick={menuHandler}>
        <motion.div
          className={`header_main_wrapper ${header_class} transition-transform duration-500 ease-in-out z-50 flex h-screen w-full absolute top-0 left-0 overflow-hidden`}
        >
          <div className="  w-full h-screen  absolute top-0 flex flex-col justify-evenly items-center text-center bg_image_header bg-center bg-cover "></div>
          <div className="  w-full h-screen  absolute top-0 flex flex-col justify-evenly items-center text-center  bg-center bg-cover bg-zinc-900 opacity-70"></div>
          <div
            className={`w-full h-screen absolute top-0 flex flex-col justify-center items-center text-center bg-cover bg-center ${header_class} transition-transform duration-1000 ease w-full`}
          >
            <div className="text-white  ">
              <h1 className="text-6xl font-semibold my-10 hover:translate-y-[-20%] transition-all duration-150 ease-in-out cursor-pointer">
                Bunter
              </h1>
              <ul className="w-full text-xl font-medium my-5 flex gap-10 bg-[#d1d5db1f] items-center justify-center px-10 rounded-md">
                <li>Home</li>
                <li>Services</li>
                <li>Buy Home</li>
                <li>Rent Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "50%",
              }}
              className="flex items-center justify-center w-14 h-10 bg-[#d1d5db1f] cursor-pointer text-white border-gray-800 rounded-full text-xl mt-4"
            >
              <AiOutlineClose onClick={menuHandler} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Header;
