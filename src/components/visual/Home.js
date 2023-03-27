import React, { useEffect, useState } from "react";
import FeaturedProjects from "./FeaturedProjects";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Skills from "./Skills";
import Screen from "../terminal/Screen";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
function Home() {
  const [keyPressed, setkeyPressed] = useState("");
  const [terminal, setterminal] = useState(false);
  function handleKeyPress(e) {
    const pressedKey = e.key.toLowerCase();
    setkeyPressed(keyPressed + pressedKey);
  }
  useEffect(() => {
    if (keyPressed.slice(-7) === "backend") {
      setterminal(true);
    }
  }, [keyPressed]);
  return terminal ? (
    <Screen></Screen>
  ) : (
    <div tabIndex={-1} onKeyUp={handleKeyPress}>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skills></Skills>
      <FeaturedProjects></FeaturedProjects>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
export default Home;
