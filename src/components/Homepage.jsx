import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import CarouselPage from "./CarouselPage";
import About from "./About";
import Services from "./Services";

function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      <CarouselPage/>
      <About/>
      <Services/>

    </div>
  );
}

export default HomePage;
