import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import AboutUs from "../components/AboutUs";
import Competition from "../components/Competition";
import Register from "../components/Register";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  // useEffect(() => {
  //   document.body.style.background = "#defcba";
  // }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mr-10">
      <Head>
        <title>Music Competition and meetup site</title>
        <meta name="description" content="Join our Music Contest" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>

      <h1
        data-aos="zoom-in"
        data-aos-delay="250"
        className="nav-title mb-10  cursor-pointer md:ml-[12vw] lg:ml-[32vw] ml-[35px] text-white text-[1.5em] font-bold md:text-[2.2em] "
      >
        Best Voice{" "}
      </h1>
      <Competition />
      <AboutUs />
      <Register />
    </div>
  );
}
