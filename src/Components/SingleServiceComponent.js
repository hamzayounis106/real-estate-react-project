import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SplitText from "./SplitText"; // Import Swiper React components
import "../Components/serviceStyle.css";
function SingleServiceComponent(props) {
  const videoRef = useRef(null);
  const playVideo = () => {
    
    videoRef.current.play();
  }
  const pauseVideo = () => {
    videoRef.current.pause();
  }
  return (
    <>
      <div id={props.id} className="overflow-hidden flex items-center w-full h-[100%] sm:h-screen  top-10 left-0">
        <div className="    md:w-[40%] lg:w-6/12 h-[100%] sm:h-screen  bg-center bg-cover   md:flex flex-col justify-evenly items-center ">
      <img src={`./Images/${props.image_name}`} alt="" />
        </div>
        <div
          id="servces"
          className=" flex  justify-start w-full md:w-[60%] lg:w-6/12 h-[100%] sm:h-screen bg-zinc-350 bg-center bg-cover "
        >
          <div className="absolute z-[900] flex justify-evenly sm:justify-center items-start h-[100%] sm:h-screen w-[98%] sm:w-[90%]  md:w-[60%] lg:w-6/12 flex-col px-10">
            <div>
              <h2
                data-splitting
                className=" myHeading1 split_heading_service lg:text-4xl md:text-[1.8rem] font-bold text-[#030528] text-left lg:mb-4 md:mb-2 sm:text-xl text-[1.4rem]"
              >
                <SplitText text={props.F_heading} />
              </h2>
              <p className="lg:text-[22px] sm:text-xl text-[1.2rem] font-light text-[#030528] text-left myHeading1 ">
                {props.F_description}
              </p>
            </div>
            <div className="flex gap-y-3 gap-x-6 sm:gap-9 mt-4 flex-wrap">
              <div className="button_dropdrown_animation">
                <Link
                  to="/contact"
                  className="lg:text-[20px] font-[400] text-[#f1f0f0] hover:bg-[#972020c7] hover:translate-y-2 transition-transform duration-500 ease bg-[#972020] px-8 py-1 pb-[5px] rounded-[7px]  button_dropdrown_animation button_text_animation"
                >
                  <SplitText text="Contact Us" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div onMouseOver={playVideo} onMouseOut={pauseVideo}
        className={`relative w-full flex justify-center  h-[70vh] bg-center bg-fixed bg-cover items-center my-20 `}
      >    <div className="absolute inset-0">
      <video
        className="w-full h-full object-cover object-center"
        ref={videoRef}
        loop
        muted
        src={`./Videos/${props.video_name}`}
      ></video>
    </div>
        <div className="absolute inset-0 flex flex-col justify-evenly items-center text-center bg-[#030528] bg-opacity-60">
    
          <div className="w-[70%]">
            <h2 className="text-zinc-100 text-2xl lg:text-2xl sm:text-xl text-[1.2rem] font-bold text-center">
              <SplitText text={props.S_heading} />
            </h2>
            <p className="text-zinc-100 text-center text-xl">
              {props.S_description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleServiceComponent;
