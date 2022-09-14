import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Register = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="register"
      className="text-white h-[100vh] ml-8 md:ml-[12vw] lg:ml-[32vw] mt-10 mb-4 leading-10"
    >
      <p
        data-aos="zoom-in"
        data-aos-delay="300"
        className="text-[23px] font-bold nav-text"
      >
        Register Now...
      </p>
      <p
        data-aos="fade-right"
        data-aos-delay="400"
        className="text-[16px] font-medium tracking-[-0.5px] "
      >
        {
          "Don't miss this opprtunity to profit from your gift and be part of a great community of voice stars😊😊😊"
        }
      </p>
      <a
        href="https://wa.me/message/BPOREDXFWOTLD1"
        target="_blank"
        rel="noreferrer"
      >
        <button
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="mt-4 mb-4 px-8 py-2 rounded-full text-[18px] font-bold text-[#444444]  bg-white border-2 border-white hover:bg-transparent hover:text-white"
        >
          Register
        </button>
      </a>
      <img
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        src="https://media3.giphy.com/media/u6wSx8buoAKHTEpou0/giphy.gif"
        alt="loading"
        className="rounded-xl"
      />
    </div>
  );
};

export default Register;
