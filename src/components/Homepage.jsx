import React from "react";
import "./HomePage.css";
import NavBar from "./NavBar";
import CarouselPage from "./CarouselPage";
import About from "./About";

function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      <CarouselPage/>
      <About/>

    </div>
  );
}

export default HomePage;
