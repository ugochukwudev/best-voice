import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Competition = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="text-white ml-8 md:ml-[12vw] lg:ml-[32vw] leading-10">
      <p
        data-aos="zoom-in"
        data-aos-delay="300"
        className="text-xl  font-bold italic "
      >
        Join Our Latest Competiton
      </p>
      <p
        data-aos="zoom-in"
        data-aos-delay="350"
        className="text-xl  font-semibold  "
      >
        You're few clicks from winning our amazing prices 😉😉😉😉
      </p>
      <code
        data-aos="zoom-in"
        data-aos-delay="400"
        className="text-xl  font-medium italic "
      >
        Steps
      </code>
      <ul>
        <li
          data-aos="zoom-in"
          data-aos-delay="450"
          className="text-sm  font-medium  mb-4"
        >
          step 1 : Register
          <p
            data-aos="zoom-in"
            data-aos-delay="500"
            className="text-xl  font-normal italic "
          >
            Click the register Link to join the list and stand a chance{" "}
          </p>
        </li>
        <li
          data-aos="zoom-in"
          data-aos-delay="450"
          className="text-sm  font-medium  mb-4"
        >
          step 2 : Contest
          <p
            data-aos="zoom-in"
            data-aos-delay="500"
            className="text-xl  font-normal italic "
          >
            Upload your voice over or music
          </p>
        </li>
        <li
          data-aos="zoom-in"
          data-aos-delay="450"
          className="text-sm  font-medium  "
        >
          step 3 : Win
          <p
            data-aos="zoom-in"
            data-aos-delay="500"
            className="text-xl  font-normal italic "
          >
            Stand a chance to win as much as #30k
          </p>
        </li>
      </ul>
      <h1
        data-aos="zoom-in"
        data-aos-delay="520"
        className="text-xl  font-medium italic mb-4 mt-4"
      >
        Prizes 🎉🎉🎉 !!!{" "}
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="550"
        className="text-xl  font-bold "
      >
        First Prize
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="570"
        className="font-semibold text-[14px] "
      >
        Thirty Thousand Naira and a one month data plan 😎😎😎
      </p>
      <h1
        data-aos="zoom-in"
        data-aos-delay="550"
        className="text-xl  font-bold "
      >
        Second Prize
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="570"
        className="font-semibold text-[14px] "
      >
        Twenty Thousand Naira and a one month data plan 😁😁😁
      </p>
      <h1
        data-aos="zoom-in"
        data-aos-delay="550"
        className="text-xl  font-bold "
      >
        Third Prize
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="570"
        className="font-semibold text-[14px] "
      >
        Ten Thousand Naira and a one month data plan 🤓🐸🤓
      </p>
    </div>
  );
};

export default Competition;
