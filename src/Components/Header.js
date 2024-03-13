import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { IoMdMenu } from "react-icons/io";

function Header() {
  let [headerPage, setHeaderPage] = useState(false);
  let [header_class, setHeader_class] = useState("translate-x-[-100%] ");
  // changing the state of the header and translating the header
  const menuHandler = () => {
    setHeaderPage(!headerPage);
    setHeader_class(headerPage ? "translate-x-[-100%] " : "translate-x-0 ");
  };

  return (
    <>
      {/* Menu Button */}
      <div className="w-full flex justify-end absolute top-0 left-0 z-[1000] ">
        <Button onClick={menuHandler} value={"Menu"} icon={<IoMdMenu />} />
      </div>
      {/* Header */}
      <div className="overflow-hidden  " onClick={menuHandler}>
        {/* translating the header */}
        <motion.div
          className={`header_main_wrapper ${header_class} transition-transform duration-500 ease-in-out z-[1100] flex h-screen w-full absolute top-0 left-0 overflow-hidden`}
        >
          {/* left side of the header with bg image  */}
          <div className="  w-[100%] h-screen  absolute top-0 flex flex-col justify-evenly items-center text-center bg_image_header bg-top bg-cover bg-no-repeat">
            {/* overlay on  the left bgimage on header  */}
            <div className="  w-full h-screen  absolute top-0 flex flex-col justify-evenly items-center text-center  bg-center bg-cover bg-[#030528] opacity-80"></div>
          </div>
          {/* right side of the header  */}
      

          <div
            className={`w-full h-screen absolute top-0 flex flex-col justify-center items-center text-center bg-cover bg-center ${header_class} transition-transform duration-1000 ease w-full`}
          >
            <div className="text-white items-center flex justify-center flex-col ">
            <img
                src={"https://03cd05-a7.myshopify.com/cdn/shop/files/Logo_REFRESH_TRANS_BG_WHT_TXT_1.png?v=1710098752"}
                alt="logo"
                className="max-w-[240px] w-full h-auto "
              />
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
