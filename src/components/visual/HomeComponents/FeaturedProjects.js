import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function FeaturedProjects() {
  return (
    <div className="mt-20 md:mt-36 ">
      <div className="flex flex-col items-center">
        <div className="text-5xl font-semibold mb-28">Featured Projects</div>
      </div>
      <div className="flex justify-center space-x-20 mb-40">
        <div className="h-1/5 w-2/5">
          <img src="assets/projects/sorting-visualizer.png" alt="" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-3xl mb-10">Sorting Visualizer</div>
          <div className="grid grid-cols-2 gap-2">
            <div>Merge Sort</div>
            <div>Selection Sort</div>
            <div>Bubble Sort</div>
          </div>
          <div
            className="
          flex space-x-5">
            <button
              className="text-white bg-black mt-5 px-3 py-2 rounded-lg w-44
            hover:scale-105 duration-2000 
          hover:bg-white hover:text-black hover:border 
            border-2 border-black">
              Live
            </button>
            <button
              className="text-white bg-black mt-5 px-3 py-2 rounded-lg w-44
            hover:scale-105 duration-2000 
          hover:bg-white hover:text-black hover:border 
            border-2 border-black">
              Source
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-20">
        <div className="flex flex-col justify-center">
          <div className="text-3xl mb-10">Shinobi Docs</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-green-500 w-6 h-6 flex-shrink-0"
                viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <div>Authentication</div>
            </div>
            <div>Rich Text Editor</div>
            <div>Realtime Colab</div>
            <div>Document Sharing</div>
            <div>Realtime Data storing</div>
          </div>
          <div
            className="
          flex space-x-5">
            <button
              className="text-white bg-black mt-5 px-3 py-2 rounded-lg w-44
            hover:scale-105 duration-2000 
          hover:bg-white hover:text-black hover:border 
            border-2 border-black">
              Live
            </button>
            <button
              className="text-white bg-black mt-5 px-3 py-2 rounded-lg w-44
            hover:scale-105 duration-2000 
          hover:bg-white hover:text-black hover:border 
            border-2 border-black">
              Source
            </button>
          </div>
        </div>
        <div className="h-1/5 w-2/5">
          <img src="assets/projects/sorting-visualizer.png" alt="" />
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <Link to="/project">
          <button
            className="text-white bg-black mt-5 px-3 py-2 rounded-lg w-64
          hover:scale-105 duration-2000 
          hover:bg-white hover:text-black hover:border 
          border-2 border-black flex  justify-center items-center space-x-2">
            <div>View all Proojects</div>
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedProjects;
