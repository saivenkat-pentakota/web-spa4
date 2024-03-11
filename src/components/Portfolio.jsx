import React from "react";
import "./Portfolio.css";
import portfolioimg1 from '../images/portfolio-1.jpg';
import portfolioimg2 from '../images/portfolio-2.jpg';
import portfolioimg3 from '../images/portfolio-3.jpg';
import portfolioimg4 from '../images/portfolio-4.jpg';
import portfolioimg5 from '../images/portfolio-5.jpg';
import portfolioimg6 from '../images/portfolio-6.jpg'; 

function Portfolio() {
  return (
    <div id="portfolio">
      <div className="container">
        <header className="section-header">
          <h3 className="section-title">Our Portfolio</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            viverra at massa sit amet ultricies. Nullam consequat, mauris non
            interdum cursus
          </p>
        </header>
        <div className="row">
          <div className="col-lg-12">
            <ul className="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".web-dev">Web Development</li>
              <li data-filter=".game-dev">Game Development</li>
              <li data-filter=".app-dev">App Development</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item web-dev">
            <div className="portfolio-wrap">
              <div>
                <img src={portfolioimg1} className="img-fluid" alt ="portfolio-1" />
                <a
                  href="img/portfolio-1.jpg"
                  data-lightbox="portfolio"
                  data-title="Lorem ipsum dolor sit"
                  className="link-preview"
                  title="Preview"
                >
                  <i className="fa fa-eye"></i>
                </a>
                <a href="#more" className="link-details" title="More Details">
                  <i className="fa fa-link"></i>
                </a>
                <h4 className="portfolio-title">
                  Lorem ipsum dolor sit <span>Web Development</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item web-dev">
            <div className="portfolio-wrap">
              <div>
                <img src={portfolioimg2} className="img-fluid" alt ="portfolio-2" />
                <a
                  href="img/portfolio-2.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="Lorem ipsum dolor sit"
                  title="Preview"
                >
                  <i className="fa fa-eye"></i>
                </a>
                <a href="#more" className="link-details" title="More Details">
                  <i className="fa fa-link"></i>
                </a>
                <h4 className="portfolio-title">
                  Lorem ipsum dolor sit <span>Web Development</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item game-dev">
            <div className="portfolio-wrap">
              <div>
                <img src={portfolioimg3} className="img-fluid" alt ="portfolio-3" />
                <a
                  href="img/portfolio-3.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="Lorem ipsum dolor sit"
                  title="Preview"
                >
                  <i className="fa fa-eye"></i>
                </a>
                <a href="#more" className="link-details" title="More Details">
                  <i className="fa fa-link"></i>
                </a>
                <h4 className="portfolio-title">
                  Lorem ipsum dolor sit <span>Game Development</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item game-dev">
            <div className="portfolio-wrap">
              <div>
                <img src={portfolioimg4} className="img-fluid" alt ="portfolio-4" />
                <a
                  href="img/portfolio-4.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="Lorem ipsum dolor sit"
                  title="Preview"
                >
                  <i className="fa fa-eye"></i>
                </a>
                <a href="#more" className="link-details" title="More Details">
                  <i className="fa fa-link"></i>
                </a>
                <h4 className="portfolio-title">
                  Lorem ipsum dolor sit <span>Game Development</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item app-dev">
            <div className="portfolio-wrap">
              <div>
                <img src={portfolioimg5} className="img-fluid" alt ="portfolio-5" />
                <a
                  href="img/portfolio-5.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="Lorem ipsum dolor sit"
                  title="Preview"
                >
                  <i className="fa fa-eye"></i>
                </a>
                <a href="#more" className="link-details" title="More Details">
                  <i className="fa fa-link"></i>
                </a>
                <h4 className="portfolio-title">
                  Lorem ipsum dolor sit <span>App Development</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item app-dev">
            <div className="portfolio-wrap">
              <div>
                <img src={portfolioimg6} className="img-fluid" alt ="portfolio-6" />
                <a
                  href="img/portfolio-6.jpg"
                  className="link-preview"
                  data-lightbox="portfolio"
                  data-title="Lorem ipsum dolor sit"
                  title="Preview"
                >
                  <i className="fa fa-eye"></i>
                </a>
                <a href="#more" className="link-details" title="More Details">
                  <i className="fa fa-link"></i>
                </a>
                <h4 className="portfolio-title">
                  Lorem ipsum dolor sit <span>App Development</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
