import React from "react";
import "./About.css";




function About() {
  return (
    <div id="about">
      <div className="container-fluid">
        <div className="section-header">
          <h2>Welcome to Our Website</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="welcome m-auto">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                viverra at massa sit amet ultricies. Consequat mauris non
                interdum cursus, eros massa faucibus diam, in sodales quam
                ligula in est. Nullam ultrices turpis ut justo mollis tempus.
                Aliquam et tortor at quam laoreet condimentum ac nec leo. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis
                lacus tellus, eget fringilla enim feugiat in. Maecenas nec
                euismod lectus, nec congue eros. Nulla amet bibendum ut,
                fringilla sit amet est.
              </p>
              <a className="btn" href="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 about-col">
            <div className="about-content">
              <i className="fas fa-history"/>
              <h2>Our Story</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                viverra at massa sit amet ultricies. Nullam consequat, mauris
                non interdum cursus, eros massa faucibus diam, in sodales quam
                ligula in est
              </p>
            </div>
          </div>
          <div className="col-md-4 about-col">
            <div className="about-content">
              <i className="fas fa-bullseye"/>
              <h2>Our Mission</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                viverra at massa sit amet ultricies. Nullam consequat, mauris
                non interdum cursus, eros massa faucibus diam, in sodales quam
                ligula in est
              </p>
            </div>
          </div>
          <div className="col-md-4 about-col">
            <div className="about-content">
              <i className="fas fa-eye"/>
              <h2>Our Vision</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                viverra at massa sit amet ultricies. Nullam consequat, mauris
                non interdum cursus, eros massa faucibus diam, in sodales quam
                ligula in est
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
