import React from "react";
import SplitText from "./SplitText";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
import "./serviceStyle.css";
import SingleServiceComponent from "./SingleServiceComponent";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// const LazySingleServiceComponent = ()=>{
//     import("./SingleServiceComponent")
//     return <LazySingleServiceComponent />;
// }
// const LazySingleServiceComponent = lazy(() =>
//   import("./SingleServiceComponent")
// );
function Services() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline();
    tl.from(".hero_heading .char", {
      duration: 0.1,
      // x: 200,
      opacity: 0,
      stagger: 0.1,
    });
    tl.from(".hero_text p", {
      duration: 0.4,
      delay: 0.4,
      scale: 0.5,
      y: 200,
      opacity: 0,
    });
    tl.from(".swiperssliders", {
      duration: 0.4,
      delay: 0.4,
      scale: 0.5,
      y: 200,
      opacity: 0,
    });
    tl.from(".hero_button", {
      delay: 0.4,
      duration: 0.4,
      scale: 0.5,
      y: 200,
      opacity: 0,
    });
    gsap.from(".scrollup_secondsection", {
      delay: 0.4,
      duration: 0.4,
      scale: 0.5,
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".scrollup_secondsection",

        start: "top 98%",
        markers: false,
        end: "top 80%",
        scrub: 1,
      },
    });
    gsap.from("#Plumbing .S-scroll_top", {
      delay: 0.7,
      duration: 0.7,
      stagger: 0.1,
      scale: 0.5,
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Plumbing .S-scroll_top",

        start: "top 98%",
        markers: false,
        end: "top 80%",
        scrub: 4,
      },
    });
    gsap.from(".Plumbing", {
      delay: 0.7,
      duration: 0.7,
      stagger: 0.1,
      scale: 0.5,
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".Plumbing",

        start: "top 98%",
        markers: false,
        end: "top 80%",
        scrub: 4,
      },
    });
    gsap.from("#Electrician .S-scroll_top", {
      delay: 0.7,
      duration: 0.7,
      stagger: 0.1,
      scale: 0.5,
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Electrician .S-scroll_top",

        start: "top 98%",
        markers: false,
        end: "top 80%",
        scrub: 4,
      },
    });

    gsap.from(".Electrician", {
      delay: 0.7,
      duration: 0.7,
      stagger: 0.1,
      scale: 0.5,
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".Electrician",

        start: "top 98%",
        markers: false,
        end: "top 80%",
        scrub: 4,
      },
    });
    gsap.from("#Wall_Painting .S-scroll_top", {
      delay: 0.7,
      duration: 0.7,
      stagger: 0.1,
      scale: 0.5,
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Wall_Painting .S-scroll_top",

        start: "top 98%",
        markers: false,
        end: "top 80%",
        scrub: 4,
      },
    });

    gsap.from(".Wall_Painting", {
      delay: 0.7,
      duration: 0.7,
      stagger: 0.1,
      scale: 0.5,
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".Wall_Painting",

        start: "top 98%",
        markers: false,
        end: "top 80%",
        scrub: 4,
      },
    });
    gsap.from("#Transport .S-scroll_top", {
      delay: 0.7,
      duration: 0.7,
      stagger: 0.1,
      scale: 0.5,
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Transport .S-scroll_top",

        start: "top 98%",
        markers: false,
        end: "top 80%",
        scrub: 4,
      },
    });

    gsap.from(".Transport", {
      delay: 0.7,
      duration: 0.7,
      stagger: 0.1,
      scale: 0.5,
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".Transport",

        start: "top 98%",
        markers: false,
        end: "top 80%",
        scrub: 4,
      },
    });
    gsap.from("#Internet .S-scroll_top", {
      delay: 0.7,
      duration: 0.7,
      stagger: 0.1,
      scale: 0.5,
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: "#Internet .S-scroll_top",

        start: "top 98%",
        markers: false,
        end: "top 80%",
        scrub: 4,
      },
    });

    gsap.from(".Internet", {
      delay: 0.7,
      duration: 0.7,
      stagger: 0.1,
      scale: 0.5,
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".Internet",

        start: "top 98%",
        markers: false,
        end: "top 80%",
        scrub: 4,
      },
    });
    gsap.from("#service_footer .serviceFoter_top_scrol", {
      delay: 0.7,
      duration: 0.7,
      stagger: 0.1,
      scale: 0.5,
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: "#service_footer ",

        start: "top 98%",
        markers: false,
        end: "top 80%",
        scrub: 4,
      },
    });
  }, []);
  return (
    <>
      <div className="overflow-hidden flex items-center justify-center w-full h-[80vh] md:h-[70vh] lg:h-[100vh] sm:h-screen  lg:top-10 pt-[5vh] left-0 flex-col-reverse md:flex-row">
        <div className=" flex  justify-center w-full sm:w-[80%] md:w-[50%] lg:w-6/12 md:h-screen   sm:h-[50%] bg-zinc-350 bg-center bg-cover ">
          <div className=" z-[900] flex justify-evenly sm:justify-center items-center  md:h-[100%]  w-[98%]  flex-col px-10">
            <div>
              <h2
                data-splitting
                className=" hero_heading split_heading_service lg:text-3xl font-bold text-[#030528] text-center lg:mb-4 md:mb-2 sm:text-xl md:text-[1.2rem] "
              >
                <SplitText text="Home Support, Simplified" />
                <br />
                <SplitText text="Bunters Your Partner" />
              </h2>
              <div className="hero_text">
                <p className="lg:text-[22px] md:text-[1.05rem] text-md sm:text-[1.2rem] font-light text-[#030528] text-center  ">
                  We've got you covered for your home needs. With our
                  comprehensive services, enjoy peace of mind and convenience
                  every step of the way.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center mt-4 gap-y-3 gap-x-6 sm:gap-9">
              <div className="button_dropdrown_animation hero_button">
                <a
                  href="#servces"
                  className="lg:text-[20px] font-[400] text-[#f1f0f0] hover:bg-[#972020c7] hover:translate-y-2 transition-transform duration-500 ease bg-[#972020] px-8 py-1 pb-[5px] rounded-[7px]  button_dropdrown_animation button_text_animation"
                >
                  <SplitText text="Learn More" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" swiperssliders w-[80%] sm:w-[60%]    md:w-[45%] lg:w-6/12 h-[50%] md:h-screen  bg-center bg-cover   md:flex flex-col justify-evenly items-center ">
          <Swiper
            // effect={"cards"}
            grabCursor={true}
            modules={[Autoplay, EffectCards]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="  flex  justify-center items-center w-[100%] overflow-hidden rounded-md">
                <img
                  alt="" loading="lazy"
                  className="w-[100%] rounded-md "
                  src={`./Images/Service_Banner_images/1.webp`}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="  flex  justify-center items-center w-[100%] overflow-hidden rounded-md">
                <img
                  alt="" loading="lazy"
                  className="w-[100%] rounded-md "
                  src={`./Images/Service_Banner_images/2.webp`}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="  flex  justify-center items-center w-[100%] overflow-hidden rounded-md">
                <img
                  alt="" loading="lazy"
                  className="w-[100%] rounded-md "
                  src={`./Images/Service_Banner_images/3.webp`}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="  flex  justify-center items-center w-[100%] overflow-hidden rounded-md">
                <img
                  alt="" loading="lazy"
                  className="w-[100%] rounded-md "
                  src={`./Images/Service_Banner_images/4.webp`}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className=" main_second_section scrollup_secondsection relative w-full flex justify-center h-[40vh] sm:h-[50vh] bg-center  bg-cover items-center my-20">
        <div className="absolute inset-0 flex flex-col justify-evenly items-center text-center bg-[#030528] ">
          <div className=" w-[90%] md:w-[80%] lg:w-[70%]">
            <h2 className=" scrollup_secondsection text-zinc-100 lg:text-2xl text-xl  md:text-[1.2rem] font-bold text-center">
              Your One-Stop Solution for Comfort and Convenience
            </h2>
            <p className="scrollup_secondsection text-zinc-100 text-center md:text-[1.05rem]">
              Experience worry-free living with our array of essential services
              including electrician, plumbing, transportation, and internet
              provision. Elevate your rental experience with seamless support at
              every turn.
            </p>
          </div>
        </div>
      </div>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <SingleServiceComponent
        id="Plumbing"
        video_name="Plumber_bg_video.webm"
        F_heading="Professional Plumbing Solutions"
        F_description="Experience reliable plumbing services tailored to your needs.
                From leak repairs to installations, our skilled plumbers ensure
                your home's water systems operate seamlessly, giving you peace
                of mind and comfort."
        S_heading="Expert Plumbing Services: Ensuring Your Home's Plumbing Works Perfectly"
        S_description="  Trust our team of skilled plumbers to address all your plumbing
                needs with professionalism and expertise. From routine maintenance
                to emergency repairs, we offer comprehensive solutions to keep
                your home's plumbing systems in top condition. Our services
                encompass a wide range of tasks, including unclogging drains,
                repairing leaks, installing fixtures, and upgrading water heaters.
                With a commitment to quality and customer satisfaction, we strive
                to deliver reliable service that exceeds your expectations,
                ensuring that your home's plumbing works perfectly when you need
                it most."
        image_name="plumber_fixed_bgimage.webp"
      />
      <SingleServiceComponent
        id="Electrician"
        video_name="Electician_bg_video.mp4"
        F_heading="Expert Electrical Services: Keeping Your Home Powered Safely"
        F_description="Ensure the safety and functionality of your home's electrical systems
    with our expert electrical services. From wiring installations to
    troubleshooting and repairs, our skilled electricians handle it all,
    providing reliable solutions that keep your home powered safely."
        S_heading="Professional Electrician Services: Your Trusted Electrical Solutions Provider"
        S_description="Count on our team of professional electricians to address all your
    electrical needs with precision and expertise. Whether it's installing
    new outlets, upgrading circuits, or diagnosing electrical issues, we
    deliver quality service tailored to your requirements, ensuring your
    home's electrical systems operate flawlessly."
        image_name="electrician_image.webp"
      />

      <SingleServiceComponent
        id="Wall_Painting"
        video_name="wallpaint_bg_video.webm"
        F_heading="Expert Wall Painting Services: Transform Your Home with Vibrant Colors"
        F_description="Transform your living spaces with our expert wall painting services.
    Our skilled painters bring creativity and precision to every project,
    delivering stunning results that enhance the beauty and ambiance of
    your home. Whether it's interior or exterior painting, we provide
    professional solutions tailored to your aesthetic preferences."
        S_heading="Professional Painting Services: Enhancing Your Home's Aesthetic Appeal"
        S_description="Elevate the look of your home with our professional painting services.
    From surface preparation to final finishing touches, our experienced
    painters ensure flawless results that exceed your expectations. With
    attention to detail and quality craftsmanship, we bring your vision
    to life, enhancing your home's aesthetic appeal."
        image_name="wallpaint_image.webp"
      />

      <SingleServiceComponent
        id="Transport"
        video_name="transport_bg_video.webm"
        F_heading="Reliable Transportation Services: Safely Moving Your Belongings"
        F_description="Experience stress-free moving with our reliable transportation services.
    Our experienced transporters handle your belongings with care, ensuring
    safe and timely delivery to your new destination. Whether it's local
    or long-distance moving, we provide efficient solutions tailored to
    your needs, making the transition smooth and hassle-free."
        S_heading="Efficient Moving Services: Streamlining Your Relocation Process"
        S_description="Streamline your relocation process with our efficient moving services.
    From packing and loading to transportation and unloading, our dedicated
    team handles every aspect of your move with professionalism and expertise.
    With a focus on efficiency and customer satisfaction, we make moving
    easy and convenient, allowing you to settle into your new home seamlessly."
        image_name="transport_image.webp"
      />

      <SingleServiceComponent
        id="Internet"
        video_name="internet_bg_video.webm"
        F_heading="Reliable Internet Services: Keeping You Connected Anywhere"
        F_description="Stay connected with reliable internet services tailored to your needs.
    Whether it's for work, entertainment, or communication, our internet
    service provider ensures fast and stable connectivity, allowing you to
    access the online world seamlessly from the comfort of your home."
        S_heading="Professional Internet Solutions: Enhancing Your Online Experience"
        S_description="Enhance your online experience with our professional internet solutions.
    With high-speed connections and responsive customer support, we deliver
    internet services that meet the demands of modern digital living. From
    broadband to fiber-optic, we offer a range of options to suit your
    browsing, streaming, and gaming needs."
        image_name="Internet_fixed_bgimage.webp"
      />
      {/* </Suspense> */}
      <div
        id="service_footer"
        className="relative flex items-center justify-center w-full my-20 mt-6 sm:my-20"
      >
        <div className="flex flex-col items-center text-center justify-evenly ">
          <div className="w-[70%]">
            <div className="serviceFoter_top_scrol">
              <p className="mb-10 text-xl text-center text-zinc-900">
                Experience convenience at your fingertips. Contact us today and
                let's elevate your home living together.
              </p>
            </div>
            <div className="serviceFoter_top_scrol">
              <a
                href="/contact"
                className="lg:text-[20px] font-[400] text-zinc-900 hover:text-white hover:bg-[#972020c7] hover:translate-y-2 transition-transform duration-500 ease border-2 border-[#972020] px-8 py-1 pb-[5px] rounded-[7px]  button_dropdrown_animation button_text_animation"
              >
                <SplitText text="Contact Now" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
