import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../images/slider-1.jpg";
import slider2 from "../images/slider-2.jpg";
import slider3 from "../images/slider-3.jpg";

import "./CarouselPage.css";

function CarouselPage() {
  return (
    <>
    <div>
      <Carousel className="carousel-container" >
        <Carousel.Item>
          <img
            className="slider-img"
            style={{ width: "100%", height: "665px",opacity:"1.5" }}
            src={slider1}
            alt="slider-1"
            text="first slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3 className="slider-header">Web Design</h3>
            <p className="slider-text">
              Web design is the process of creating a website's visual elements
              and layout. It involves planning, conceptualizing, and
              implementing a website's design. The goal of web design is to
              create a functional website that provides a good user experience.
            </p>
            <a href="get-started" className="carousel-caption-button">
              GET STARTED
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slider-img"
            style={{ width: "100%", height: "665px" ,opacity:"1.5" }}
            src={slider2}
            alt="slider-2"
            text="second slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3 className="slider-header">Desktop Application</h3>
            <p className="slider-text">
              A desktop application is a software program that runs on a
              computer and uses system resources to perform its functions. They
              can run locally, without connecting to the internet.
            </p>
            <a href="get-started" className="carousel-caption-button">
              GET STARTED
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slider-img"
            style={{ width: "100%", height: "665px",opacity:"1.5"  }}
            src={slider3}
            alt="slider-3"
            text="third slide"
          />
          <Carousel.Caption>
            <h3 className="slider-header">Game Development</h3>
            <p className="slider-text">
              The game development process typically requires input from one or
              more game designers, artists, programmers, animators, testers,
              project managers, etc., though some games have been created by
              just one or two game developers.
            </p>
            <a href="get-started" className="carousel-caption-button">
              GET STARTED
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </>
  );
}

export default CarouselPage;
