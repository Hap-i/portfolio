import React from "react";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

function Hero() {
  return (
    <div className="w-full mt-10 md:mt-20">
      <div className="flex flex-col-reverse justify-center md:flex-row space-x-32">
        <div className="flex justify-center flex-row space-x-10 space-y-10 mt-14 md:flex-col">
          <div></div>
          <FaLinkedin size={25}></FaLinkedin>
          <FaTwitterSquare size={25}></FaTwitterSquare>
          <FaGithubSquare size={25}></FaGithubSquare>
        </div>
        <div className="mt-16">
          <h2>Hello</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button> say hello </button>
        </div>
        <div className="h-52 w-52">
          <img
            className="animate-porfile_animate shadow-gray-500 shadow-lg"
            src="assets/profile_image.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
