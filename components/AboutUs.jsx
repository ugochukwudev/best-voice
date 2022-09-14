import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="about"
      className=" text-white  h-[100vh] lg:h-[90vh]  ml-8 md:ml-[12vw] lg:ml-[32vw] mt-10 leading-10"
    >
      <p
        data-aos="zoom-in"
        data-aos-delay="300"
        className="text-[23px] font-bold nav-text"
      >
        About Us
      </p>
      <p
        data-aos="fade-right"
        data-aos-delay="400"
        className="text-[16px] font-medium tracking-[-0.5px] "
      >
        Best Music, Is a monthly competition hosted by A Nigerian Startup to
        support upcoming artists and give them a chance to stand out and gain
        confidence. we help you build more passion in music and more love for
        your voice not just by keeping you in line with your peers but also, by
        giving you an opprtunity to meet and collaborate with other people with
        same mission as you .
      </p>
      <a
        href="https://wa.me/message/BPOREDXFWOTLD1"
        target="_blank"
        rel="noreferrer"
      >
        <button
          data-aos="flip-right"
          data-aos-delay="450"
          className="mt-4 mb-4 px-8 py-2 rounded-full text-[18px] font-bold text-[#444444]  bg-white border-2 border-white hover:bg-transparent hover:text-white"
        >
          Register
        </button>
      </a>
      <img
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        src="https://media2.giphy.com/media/DggdGj1E3n3jy/giphy.gif"
        alt="loading"
        className="rounded-xl"
      />
    </div>
  );
};

export default AboutUs;
