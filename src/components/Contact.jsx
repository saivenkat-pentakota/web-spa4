import React from "react";
import "./Contact.css";
import map from '../images/map.jpg';

function Contact() {
  return (
    <div class="contact" id="contact">
      <div class="container">
        <div class="section-header">
          <h3>Contact Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            viverra at massa sit amet ultricies. Nullam consequat, mauris non
            interdum cursus
          </p>
        </div>
        <div class="row align-items-center">
          <div class="col-md-7">
            <div class="form">
              <form action method>
                <div class="form-row">
                  <div class="form-group col-md-6 m-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="form-group col-md-6 m-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div class="form-group m-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div class="form-group m-3">
                  <textarea
                    class="form-control"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div>
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-5">
            <div class="contact-info">
              <img src={map} alt="Map" />
              <p>
                <i class="fa fa-map-marker"></i>123 Traders City, Los Angeles,
                CA, USA
              </p>
              <p>
                <i class="fa fa-envelope"></i>
                <a
                  href="/cdn-cgi/l/email-protection"
                  class="__cf_email__"
                  data-cfemail="ee8b838f8782ae8b968f839e828bc08d8183"
                >
                  [email&#160;protected]
                </a>
              </p>
              <p>
                <i class="fa fa-phone"></i>+123-456-7890
              </p>
              <div class="social">
                <a href>
                  <i class="fa fa-twitter"></i>
                </a>
                <a href>
                  <i class="fa fa-facebook"></i>
                </a>
                <a href>
                  <i class="fa fa-linkedin"></i>
                </a>
                <a href>
                  <i class="fa fa-instagram"></i>
                </a>
                <a href>
                  <i class="fa fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
