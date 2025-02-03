import React from "react";
import Logo from "../assets/images/new-home/buradon-logo.png"
import { Col, Row } from "react-bootstrap";
import { FaFacebook,FaTwitter ,FaYoutube,FaArrowRight   } from "react-icons/fa";

import Image from "next/image";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer-style-three">
        <div className="footer-top">
          <div className="auto-container">
            <Row className=" clearfix">
              <Col lg={4} md={12} sm={12} className=" footer-column">
                <div className="footer-logo">
                  <Image
                    src={Logo}
                    className="w-100"
                    alt="logo"
                  />
                </div>
                <div className="footer-widget contact-widget">
                  <div className="widget-content">
                    <ul className="social-links clearfix">
                      <li>
                        <a href="#" target="_blanck">
                          <FaFacebook className="fa-brands fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <FaTwitter  className="fa-brands fa-square-twitter" />
                        </a>
                      </li>
                      {/* <li><a href="#"><i class="fa-solid fa-basketball"></i></a></li> */}
                      <li>
                        <a href="#" target="_blank">
                          <FaYoutube  className="fa-brands fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={8} sm={12} className=" footer-column">
                <div className="footer-widget contact-widget">
                  <div className="widget-title">
                    <h3>Contact Details</h3>
                  </div>
                  <div className="widget-content">
                    <div className="row clearfix">
                      <Col xs={12} className="col-lg-6 col-md-6  single-column">
                        <div className="single-item">
                          <h3>Location</h3>
                          <p>
                            Block No: 429, Village: Umraya-391440 Taluka: Padra
                            Dist: Vadodara Gujarat (INDIA)
                          </p>
                          <h6>
                            <a
                              href="https://maps.app.goo.gl/o91R6MX5GgQEZmMW6"
                              target="_blank"
                            >
                              Check Location
                              <FaArrowRight style={{marginLeft:"10px"}} className="flaticon-right-arrow" />
                            </a>
                          </h6>
                        </div>
                        {/* <ul class="social-links clearfix">
                                          <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                                          <li><a href="#"><i class="fa-brands fa-square-twitter"></i></a></li>
                                          <li><a href="#"><i class="fa-solid fa-basketball"></i></a></li>
                                          <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                                      </ul> */}
                      </Col>
                      <Col xs={12} className="col-lg-6 col-md-6  single-column">
                        <div className="single-item">
                          <h3>Contact Details</h3>
                          <h3>
                            <a href="tel:+91-7486020636">+91-7486020636</a>
                          </h3>
                          <h3>
                            <a href="tel:+91-7574886714">+91-7574886714</a>
                          </h3>
                          {/* <p>Mon to Sat: 10.00am to 6.00pm </p> */}
                          <h6>
                            <a href="mailto:sales@buradon.com">
                              Send Mail
                              <FaArrowRight style={{marginLeft:"10px"}}  className="flaticon-right-arrow" />
                            </a>
                          </h6>
                        </div>
                      </Col>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={2} md={4} sm={12} className=" footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Useful Links</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <a href="/AboutUs">Profile</a>
                      </li>
                      <li>
                        <a href="/ProductList">Products</a>
                      </li>
                      <li>
                        <a href="/Certificat">Certification</a>
                      </li>
                      <li>
                        <a href="/GenrallInformation">General Information</a>
                      </li>
                      <li>
                        <a href="/ContactUs">Contact Us</a>
                      </li>
                      <li>
                        <a href="/GetQote">Get A Quote</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="footer-bottom-three">
          <div className="auto-container">
            <div className="bottom-inner">
              <div className="copyright">
                <p>
                  © 2024 <a href="/">Buradon Inc.</a> All Rights
                  Reserved.
                </p>
              </div>
              <div className="copyright">
                <p>
                  Designed By :{" "}
                  <a href="https://www.barodaweb.com" target="_blank">
                    Barodaweb : The e-Catalogue Designer
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
