import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
function Header() {
  let [headerPage, setHeaderPage] = useState(false);
  let [header_class, setHeader_class] = useState("translate-x-[-100%] ");
  // changing the state of the header and translating the header
  const menuHandler = () => {
    setHeaderPage(!headerPage);
    setHeader_class(headerPage ? "translate-x-[-100%] " : "translate-x-0 ");
  };
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(".menuButtin", {
      delay:0.5,
      y: -200,
      opacity: 0,
      duration: 0.5,
    });
  }, []);
  return (
    <>
      {/* Menu Button */}
      <div className="menuButtin w-full flex justify-end  left-0 z-[1000]  absolute top-0">
        <Button onClick={menuHandler} value={"Menu"} icon={<IoMdMenu />} />
      </div>
      {/* Header */}
      <div className="overflow-hidden  " onClick={menuHandler}>
        {/* translating the header */}
        <motion.div
          className={`header_main_wrapper ${header_class} transition-transform duration-500 ease-in-out z-[1100] flex h-[100%] sm:h-screen w-full  left-0 overflow-hidden absolute top-0`}
        >
          {/* left side of the header with bg image  */}
          <div className="absolute    w-[100%] h-[100%] sm:h-screen   top-0 flex flex-col justify-evenly items-center text-center bg_image_header bg-top bg-cover bg-no-repeat">
            {/* overlay on  the left bgimage on header  */}
            <div className="absolute    w-full h-[100%] sm:h-screen   top-0 flex flex-col justify-evenly items-center text-center  bg-center bg-cover bg-[#030528] opacity-80"></div>
          </div>
          {/* right side of the header  */}

          <div
            className={`w-full h-[100%] sm:h-screen  flex flex-col justify-center items-center text-center bg-cover bg-center ${header_class} transition-transform duration-1000 ease w-full absolute top-0 `}
          >
            <div className="text-white items-center flex justify-center flex-col ">
              <Link to="/">
                <img
                  src={
                    "https://03cd05-a7.myshopify.com/cdn/shop/files/Logo_REFRESH_TRANS_BG_WHT_TXT_1.png?v=1710098752"
                  }
                  alt="logo"
                  className=" max-w-[150px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[240px] w-full h-auto "
                />
              </Link>
              <ul className="list w-[80%] sm:w-full  sm:flex-row min_  text-[12px] sm:text-[15px] lg:text-xl font-medium my-5 flex sm:gap-4 md:gap-10 bg-[#d1d5db1f] items-center justify-center px-4 py-2 sm:px-10 rounded-md sm:flex-nowrap flex-wrap ">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/rent">Rent</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "50%",
              }}
              className="flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 md:w-14 md:h-10 bg-[#d1d5db1f] cursor-pointer text-white border-gray-800 rounded-full text-xl mt-4"
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
