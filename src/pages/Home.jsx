import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import How from "../components/How";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Logos />
      <How />
    </div>
  );
};

export default Home;
