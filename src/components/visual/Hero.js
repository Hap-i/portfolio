import React from "react";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

function Hero() {
  return (
    <div className=" mt-5 md:mt-20">
      <div className="flex flex-col-reverse items-center justify-center md:flex-row md:space-x-32">
        <div className="flex space-x-5 cursor-pointer mt-10  md:flex-col md:space-y-10 md:space-x-0 md:mt-0">
          <FaLinkedin size={25}></FaLinkedin>
          <FaTwitterSquare size={25}></FaTwitterSquare>
          <FaGithubSquare size={25}></FaGithubSquare>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="font-bold mb-3 text-2xl mt-2 md:text-4xl md:mt-0 ">
            Suvendu Sekhar Sahoo👋
          </div>
          <div className="hidden md:flex md:items-center md:mb-3">
            <div className="w-16 bg-slate-700 h-0.5 mr-2"></div>
            <div className="text-lg">Developer</div>
          </div>
          <div className="px-5 pt-3 w-80  md:text-xl md:p-0 ">
            Hi, I'm a <b>Software Engineer</b> based in India with a passion for
            developing web apps.
          </div>
          <div className="flex justify-center space-x-6">
            <button
              className="flex items-center space-x-4 justify-center
            text-white bg-black mt-5 px-3 py-2 rounded-lg hover:scale-105 duration-2000 border-2 border-black hover:bg-white hover:text-black hover:border 
           md:mt-8">
              <div>Resume</div>
              <div>
                <BsDownload></BsDownload>
              </div>
            </button>
            <button
              className="flex items-center space-x-4 justify-center
            text-white bg-black mt-5 px-3 py-2 rounded-lg hover:scale-105 duration-2000 border-2 border-black hover:bg-white hover:text-black hover:border 
            md:mt-8">
              <div>Say Hi !</div>
              <div>
                <RiSendPlaneFill></RiSendPlaneFill>
              </div>
            </button>
          </div>
        </div>
        <div className="">
          <img
            className="animate-porfile_animate shadow-gray-500 shadow-lg h-52 md:h-80 w-fit "
            src="assets/profile_image.jpg"
            alt="profileImage"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
