import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Skills from "./Skills";

function Home() {
  // function handleKeyPress(e) {
  //   console.log("key ");
  // }
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
    </div>
  );
}
export default Home;
