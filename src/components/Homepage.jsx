import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import CarouselPage from "./CarouselPage";
import About from "./About";
import Services from "./Services";
import Counters from "./Counters";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      <CarouselPage/>
      <About/>
      <Services/>
      <Counters/>
      <Portfolio/>
      <Contact/>

    </div>
  );
}

export default HomePage;
