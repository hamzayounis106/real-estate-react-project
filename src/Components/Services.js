import React from "react";
import SplitText from "./SplitText";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
import "../Components/serviceStyle.css";
import SingleServiceComponent from "./SingleServiceComponent";
function Services() {
  return (
    <>
      <div className="overflow-hidden flex items-center w-full h-[100%] sm:h-screen  top-10 left-0">
        <div className=" flex  justify-center w-full md:w-[60%] lg:w-6/12 h-[100%] sm:h-screen bg-zinc-350 bg-center bg-cover ">
          <div className="absolute z-[900] flex justify-evenly sm:justify-center items-center h-[100%] sm:h-screen w-[98%] sm:w-[90%]  md:w-[60%] lg:w-6/12 flex-col px-10">
            <div>
              <h2
                data-splitting
                className=" myHeading1 split_heading_service lg:text-4xl md:text-[1.8rem] font-bold text-[#030528] text-center lg:mb-4 md:mb-2 sm:text-xl text-[1.4rem]"
              >
                <SplitText text="Home Support, Simplified" />
                <SplitText text="Bunters Your Partner" />
              </h2>
              <p className="lg:text-[22px] sm:text-xl text-[1.2rem] font-light text-[#030528] text-center myHeading1 ">
                <SplitText text="We've got you covered for your home needs. With our comprehensive services, enjoy peace of mind and convenience every step of the way." />
              </p>
            </div>
            <div className="flex justify-center gap-y-3 gap-x-6 sm:gap-9 mt-4 flex-wrap">
              <div className="button_dropdrown_animation">
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
        <div className="   hidden md:w-[40%] lg:w-6/12 h-[100%] sm:h-screen  bg-center bg-cover   md:flex flex-col justify-evenly items-center ">
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
                  alt=""
                  className="w-[100%] rounded-md "
                  src={`./Images/Service_Banner_images/1.png`}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="  flex  justify-center items-center w-[100%] overflow-hidden rounded-md">
                <img
                  alt=""
                  className="w-[100%] rounded-md "
                  src={`./Images/Service_Banner_images/2.png`}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="  flex  justify-center items-center w-[100%] overflow-hidden rounded-md">
                <img
                  alt=""
                  className="w-[100%] rounded-md "
                  src={`./Images/Service_Banner_images/3.png`}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="  flex  justify-center items-center w-[100%] overflow-hidden rounded-md">
                <img
                  alt=""
                  className="w-[100%] rounded-md "
                  src={`./Images/Service_Banner_images/4.png`}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="relative w-full flex justify-center bg_service_fixed_image_main h-[50vh] bg-center bg-fixed bg-cover items-center my-20">
        <div className="absolute inset-0 flex flex-col justify-evenly items-center text-center bg-[#030528] bg-opacity-70">
          <div className="w-[70%]">
            <h2 className="text-zinc-100 text-2xl lg:text-2xl sm:text-xl text-[1.2rem] font-bold text-center">
              <SplitText text="Your One-Stop Solution for Comfort and Convenience" />
            </h2>
            <p className="text-zinc-100 text-center text-xl">
              Experience worry-free living with our array of essential services
              including electrician, plumbing, transportation, and internet
              provision. Elevate your rental experience with seamless support at
              every turn.
            </p>
          </div>
        </div>
      </div>

      <SingleServiceComponent
        video_name="Plumber_bg_video.mp4"
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
        image_name="plumber_fixed_bgimage.jpg"
      />
      <SingleServiceComponent
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
        image_name="electrician_image.jpg"
      />

      <SingleServiceComponent
        video_name="wallpaint_bg_video.mp4"
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
        image_name="wallpaint_image.jpg"
      />

      <SingleServiceComponent
        video_name="transport_bg_video.mp4"
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
        image_name="transport_image.jpg"
      />

      <SingleServiceComponent
        video_name="internet_bg_video.mp4"
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
        image_name="Internet_fixed_bgimage.jpg"
      />

      <div className="relative w-full flex justify-center items-center my-20 ">
        <div className="flex flex-col justify-evenly items-center text-center ">
          <div className="w-[70%]">
            <p className="text-zinc-900 text-center text-xl mb-10">
              Experience convenience at your fingertips. Contact us today and
              let's elevate your home living together.
            </p>
            <a
              href="/contact"
              className="lg:text-[20px] font-[400] text-zinc-900 hover:text-white hover:bg-[#972020c7] hover:translate-y-2 transition-transform duration-500 ease border-2 border-[#972020] px-8 py-1 pb-[5px] rounded-[7px]  button_dropdrown_animation button_text_animation"
            >
              <SplitText text="Contact Now" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;