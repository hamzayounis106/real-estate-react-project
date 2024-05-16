import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SplitText from "./SplitText";
import "../Components/serviceStyle.css";
function SingleServiceComponent(props) {
  const videoRef = useRef(null);
  const playVideo = () => {
    videoRef.current.play();
  };
  const pauseVideo = () => {
    videoRef.current.pause();
  };
  return (
    <>
      {/* Desktop screen */}
      <div
        id={props.id}
        className=" overflow-hidden  items-center w-full h-[100%] lg:h-[90vh]  top-10 left-0 hidden md:flex"
      >
        <div className=" S-scroll_top    md:w-[43%] lg:w-[45%] h-[100%] sm:h-screen  bg-center bg-cover   md:flex flex-col justify-evenly items-start  ">
          <img
            src={`./Images/${props.image_name}`}
            alt="" loading="lazy"
            className=" rounded-r-md md:w-full md:h-[50%]"
          />
        </div>
        <div
          id="servces"
          className=" flex  justify-start w-full md:w-[60%] lg:w-6/12 h-[100%] sm:h-screen bg-zinc-350 bg-center bg-cover "
        >
          <div
            id={props.id}
            className="lg:absolute z-[900] flex justify-evenly sm:justify-center items-start md:h-[100%] sm:h-screen w-[98%] sm:w-[90%]  md:w-[100%] lg:w-6/12 flex-col px-10"
          >
            <div className="S-scroll_top">
              <h2
                data-splitting
                className=" myHeading1 split_heading_service lg:text-4xl md:text-[1.3rem] font-bold text-[#030528] text-left lg:mb-4 md:mb-2 sm:text-xl text-[1.4rem]   "
              >
                <SplitText text={props.F_heading} />
              </h2>
              <div className="S-scroll_top">
                <p className="lg:text-[22px] sm:text-xl md:text-[1.04rem]  font-light text-[#030528] text-left myHeading1 ">
                  {props.F_description}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-4 gap-y-3 gap-x-6 sm:gap-9 S-scroll_top">
              <div className="button_dropdrown_animation ">
                <Link
                  to="/contact"
                  className="lg:text-[20px] font-[400] text-[#f1f0f0] hover:bg-[#972020c7] hover:translate-y-2 transition-transform duration-500 ease bg-[#972020] md:px-5 lg:px-8 py-1 pb-[5px] rounded-[7px]  button_dropdrown_animation button_text_animation"
                >
                  <SplitText text="Contact Us" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile screen */}
      <div
        className={`${props.id} relative w-full flex justify-center h-[50vh] sm:h-[80vh] bg-center bg-fixed bg-cover items-center my-10 md:hidden`}
      >
        <div className="overflow-hidden relative inset-0  h-[50vh]  object-cover  top-0 left-0">
          <img
            src={`./Images/${props.image_name}`}
            className="relative inset-0 w-full h-full " loading="lazy"
            alt=""
          />
        </div>
        <div className="  absolute inset-0 flex flex-col justify-evenly items-center text-center bg-[#030528] bg-opacity-60 py-6">
          <div className=" w-[90%] lg:w-[70%]">
            <div className="S-scroll_top">
              <h2
                data-splitting
                className=" myHeading1 split_heading_service lg:text-4xl md:text-[1.3rem] font-bold text-zinc-200 text-center lg:mb-4 md:mb-2 sm:text-xl text-[1.4rem]   "
              >
                <SplitText text={props.F_heading} />
              </h2>
            </div>
            <div className="S-scroll_top">
              <p className="lg:text-[22px] sm:text-xl md:text-[1.04rem]  font-light text-zinc-200 text-center myHeading1 ">
                {props.F_description}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center mt-4 gap-y-3 gap-x-6 sm:gap-9 S-scroll_top">
            <div className="button_dropdrown_animation ">
              <Link
                to="/contact"
                className="lg:text-[20px] font-[400] text-[#f1f0f0] hover:bg-[#972020c7] hover:translate-y-2 transition-transform duration-500 ease bg-[#972020] px-5 py-1 pb-[5px] rounded-[7px]  button_dropdrown_animation button_text_animation"
              >
                <SplitText text="Contact Us" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* On Mobile Video is hidden  */}
      <div
        onMouseOver={playVideo}
        onMouseOut={pauseVideo}
        className={`${props.id} relative w-full flex justify-center  h-[60vh]  sm:h-[70vh] bg-center bg-fixed bg-cover items-center my-10 sm:my-20 `}
      >
        {/* <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%'}}>
  <iframe
    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
    src={`https://www.youtube.com/embed/${props.video_name}?autoplay=1&mute=1&controls=0`}
    title="YouTube Video"
    allow="autoplay"
    allowFullScreen
  ></iframe>
</div> */}
        <div className="absolute inset-0 hidden md:flex">
          <video
            className="w-full md:h-[80%]  lg:h-full object-cover object-center"
            ref={videoRef}
            loop
            muted
            loading="lazy"
            src={`./Videos/${props.video_name}`}
          ></video>
        </div>
        <div className="flex absolute inset-0  flex-col justify-evenly items-center text-center md:bg-[#030528] md:bg-opacity-60 sm:h-[70%] md:h-[80%] lg:h-full  ">
          <div className=" w-[90%] lg:w-[70%]">
            <h2 className="md:text-zinc-100 text-zinc-950 text-2xl lg:text-2xl sm:text-xl text-[1.2rem] font-bold text-center  md:text-[1.3rem] ">
              <SplitText text={props.S_heading} />
            </h2>
            <p className="md:text-zinc-100 text-zinc-950 text-center md:text=[1.05rem] lg:text-xl">
              {props.S_description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleServiceComponent;
