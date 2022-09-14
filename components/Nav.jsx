import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Nav = () => {
  const [showScroll, setScroll] = useState(false);
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };
  var show = typeof window !== "undefined" && window.pageYOffset;
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        //console.log("main", show);
        let data = window.pageYOffset;
        if (data > 30) {
          setScroll(true);
          //console.log("true", showScroll, show);
        }
        if (data < 30) {
          setScroll(false);
          //console.log(showScroll, show);
        }
      });
      return window.removeEventListener("scroll", () => {
        console.log("removed");
      });
    }
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex  h-[100px]  md:ml-[12vw] lg:ml-[30vw] text-white ">
      <img
        data-aos="zoom-in"
        data-aos-delay="50"
        src="/mini.png"
        className=" ml-4 md:ml-0 w-[70px] h-[70px] rounded-full mt-[15px] "
        alt=""
      />
      <div className=" flex w-8/12 py-6 px-6 text-lg font-semibold cursor-pointer ">
        <p
          data-aos="zoom-in"
          data-aos-delay="100"
          onClick={scrollToTop}
          className="m-4 nav-text"
        >
          Home
        </p>
        <a href="#about">
          <p data-aos="zoom-in" data-aos-delay="150" className="m-4 nav-text">
            About{" "}
          </p>
        </a>
        <a href="#register">
          <p data-aos="zoom-in" data-aos-delay="200" className="m-4 nav-text">
            Register
          </p>
        </a>
      </div>
      {showScroll && (
        <div
          onClick={scrollToTop}
          className="fixed cursor-pointer bottom-10 right-10 z-10 bg-white rounded-full h-[50px] w-[50px]"
        >
          <FaArrowCircleUp className="z-20   overflow-hidden mt-[15px] text-black  ml-[10px] font-bold text-[20px] w-[30px]" />
        </div>
      )}
    </div>
  );
};

export default Nav;
