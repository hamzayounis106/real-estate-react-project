import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./SplitText";

import {
  PiInstagramLogoFill,
  PiFacebookLogoFill,
  PiTwitterLogoFill,
  PiLinkedinLogoFill,
  PiYoutubeLogoFill,
} from "react-icons/pi";

function Footer() {
  const location = useLocation();

  const logoRef = useRef(null);
  const iconsRef = useRef(null);
  const menuRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    // Animation setup for logo
    // tl.from(logoRef.current, {
    //   duration: 0.5,
    //   x: 200,
    //   opacity: 0,
    //   ease: "power3.out",
    //   scrollTrigger: {
    //     trigger: logoRef.current,

    //     start: "top 18%",
    //     end: "top 40%",
    //     scrub: 1,
    //   },
    // });

    // Animation setup for icons
    gsap.from(".icon_wrapper", {
      duration: 0.5,
      x: 200,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".footer",
      scroller: ".footer",
      start: "top 80%",
        end: "top 70%",
        // markers: true,
        scrub: 1,
      },
    });

    // Animation setup for menu items
    // gsap.from(menuRef.current.children, {
    //   duration: 0.5,
    //   y: 100,
    //   opacity: 0,
    //   ease: "power3.out",
    //   stagger: 0.2,
    //   scrollTrigger: {
    //     trigger: menuRef.current.children,
    //     start: "top 98%",
    //     end: "top 80%",
    //     scrub: 1,
    //   },
    // });
  }, [location.pathname]);
  return (
    <>
      <div id="footer" className="  footer  ">
        <div className=" w-full bg-[#0A1033] p-4 flex flex-col sm:py-8 sm:items-center pb-6 sm:flex-row ">
          <div className="w-full sm:w-[50%] flex flex-col justify-between items-center sm:justify-start">
            <Link to="/" className="footer_logo" ref={logoRef}>
              <img
                src="https://03cd05-a7.myshopify.com/cdn/shop/files/Logo_REFRESH_TRANS_BG_WHT_TXT_1.png?v=1710098752"
                className="max-w-[130px] w-full h-auto sm:max-w-[160px] lg:max-w-[200px] "
              />
            </Link>
            <p className="footer_text text-[12px] text-white  text-center my-2 sm:text-[13px] sm:px-2 lg:text-[1.1rem]">
              <SplitText text="Discover your ideal rental home today! Your dream rental awaits. " />
            </p>
            <ul className=" flex px-2 text-[18px] lg:text-[1.4rem] font-medium my-2  gap-1  items-center justify-center  rounded-md text-white sm:text-2xl sm:gap-2 icon_wrapper ">
              <div className="icon">
                <a
                  href="#"
                  className="footer_icons text-[#eb8282] sm:hover:scale-105 sm:hover:text-[#c2b9b9] transition-all"
                >
                  <PiInstagramLogoFill />
                </a>
              </div>{" "}
              <div className="icon">
                <a
                  href="#"
                  className="footer_icons text-[#eb8282] sm:hover:scale-105 sm:hover:text-[#c2b9b9] transition-all "
                >
                  <PiFacebookLogoFill />
                </a>
              </div>{" "}
              <div className="icon">
                <a
                  href="#"
                  className="footer_icons text-[#eb8282] sm:hover:scale-105 sm:hover:text-[#c2b9b9] transition-all "
                >
                  <PiTwitterLogoFill />
                </a>
              </div>{" "}
              <div className="icon">
                <a
                  href="#"
                  className="footer_icons text-[#eb8282] sm:hover:scale-105 sm:hover:text-[#c2b9b9] transition-all "
                >
                  <PiYoutubeLogoFill />
                </a>{" "}
              </div>{" "}
              <div className="icon">
                <a
                  href="#"
                  className="footer_icons text-[#eb8282] sm:hover:scale-105 sm:hover:text-[#c2b9b9] transition-all "
                >
                  <PiLinkedinLogoFill />
                </a>
              </div>
            </ul>
            <ul
              className=" footer_menu sm:flex hidden px-2 text-[12px] lg:text-[0.95rem] font-medium sm:mt-0 my-3   items-center sm:justify-start sm:items-start justify-center  rounded-md text-white sm:gap-1 "
              ref={menuRef}
            >
              <li className="sm:pl-1 sm:pr-0">
                <Link to="/">Home</Link>
              </li>
              <li className="sm:pl-1 sm:pr-0">
                <Link to="/Services">Services</Link>
              </li>
              <li className="sm:pl-1 sm:pr-0">
                <Link to="/Buy">Buy</Link>
              </li>
              <li className="sm:pl-1 sm:pr-0">
                <Link to="/Rent">Rent</Link>
              </li>
              <li className="sm:pl-1 sm:pr-0">
                <Link to="/About">About</Link>
              </li>
              <li className="sm:pl-1 sm:pr-0">
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* <div className="w-full md:w-[30%] p-2 hidden md:flex rounded-md sm:item-start sm:p-0 justify-center items-center flex-wrap">
         
        </div> */}
          <div className="sm:w-[50%]">
            <div className=" flex sm:w-[100%] justify-center flex-col items-center">
              <h3 className="footer_text py-2 text-[12px] text-white font-medium sm:text-[15px] lg:text-[1.1rem]">
                <SplitText text="Subscibe to our Latest Listings Newsletter" />
              </h3>
              <input
                required="required"
                type="text"
                className="input_bar p-1 px-2   focus:translate-y-[-4px] transition-all text-[12px] outline-none bg-transparent text-[#fff] border-b-[1px] border-[#fff] sm:w-[100%] sm:max-w-[60%] sm:text-sm  max-w-[200px] w-[90%] focus:border-[#972020] lg:text-[0.94rem]"
                placeholder="Name:"
              />
              <input
                required="required"
                type="email"
                className="input_bar p-1 px-2  focus:translate-y-[4px] transition-all sm:max-w-[60%] text-[12px] sm:text-sm sm:mt-2 outline-none bg-transparent text-[#fff] border-b-[1px] border-[#fff] sm:w-full  max-w-[200px] w-[90%] focus:border-[#972020] lg:text-[0.94rem]"
                placeholder="Email:"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
