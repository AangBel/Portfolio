import React from "react";
// import AiVanGoghSea from '../components/Images/AiVanGoghSea.svg';
import seaWindow from "../components/Images/seaWindow.svg";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
//   CgWebsite,
//   AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">A</span>ngelica Beltran
            <br />
            Full Stack Software Engineer
          </h1>
          <div className="flex py-5 ">
            <a
              href="https://www.linkedin.com/in/angelicabeltran/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>

            <a
              href="https://github.com/AangBel"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>

            <a
              href="mailto: angelica.beltran11@gmail.com"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineMail size={40} />{" "}
            </a>
          </div>

          <button className="btn bg-accent border-2 border-[#ADDEDC] text-green px-6 py-3 hover:bg-transparent hover:text-accent">
            See Projects
          </button>
        </div>

        <div className="hero-img">
          <img
            src={seaWindow}
            alt="Ai generated painting of a sea in a van Gogh style"
            className="lgw-[100%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
