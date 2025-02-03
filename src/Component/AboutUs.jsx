import React from "react";
import Shape23 from "../assets/images/shape/shape-23.png";
import aboutSm1 from "../assets/images/new-home/about-sm1.jpg";
import thumb2 from "../assets/images/resource/thumb-2.jpg";
import thumb3 from "../assets/images/resource/thumb-3.jpg";
import thumb4 from "../assets/images/new-home/thumb-4.jpg";
import AboutSec from "../assets/images/new-home/about-sec.jpg";
import IsoNew from "../assets/images/new-home/iso-new.png";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";

const AboutUsComponent = () => {
  return (
    <React.Fragment>
      <section className="about-style-three sec-pad">
        <div className="auto-container">
          <Row className=" clearfix">
            <Col lg={6} md={6} sm={12} className=" image-column">
              <div className="image-box">
                <div className="shape">
                  <div
                    className="shape-1"
                    style={{ backgroundImage: `url(${Shape23.src})` }}
                  ></div>
                  {/* <div class="shape-2" style="background-image: url(assets/images/shape/shape-24.png);"></div> */}
                </div>
                <div className="thumb-box">
                  <figure className="thumb thumb-1">
                    <Image src={aboutSm1} alt="img" />
                  </figure>
                  <figure className="thumb thumb-2">
                    <Image src={thumb2} alt="img" />
                  </figure>
                  <figure className="thumb thumb-3">
                    <Image src={thumb3} alt="img" />
                  </figure>
                  <figure className="thumb thumb-4">
                    <Image src={thumb4} alt="img" />
                  </figure>
                </div>
                <figure className="image">
                  <Image src={AboutSec} alt="img" />
                </figure>
                {/* <div class="text">
                          <h2>24<span>+</span></h2>
                          <h6>Years of Experience</h6>
                      </div> */}
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className=" content-column">
              <div className="content-box">
                <div className="sec-title">
                  <span className="sub-title">About Company</span>
                  <h2>
                    Welcome to <span className="hightlight">Buradon Inc.</span>
                  </h2>
                </div>
                <div className="text">
                  <p>
                    Buradon, established in 2001, is a leading manufacturer and
                    exporter of fine chemicals in India. Known for our
                    commitment to quality, we adhere to strict LR , AR and ACS
                    grade standards. Our ever-expanding range of chemicals has
                    earned a strong reputation in domestic and international
                    markets.
                  </p>
                </div>
                <div className="text">
                  <p>
                    With a mission to meet customer needs through high-quality
                    products and prompt service, we follow a simple marketing
                    strategy: "Deliver the best quality at the lowest possible
                    price." We work exclusively with trusted and reliable
                    suppliers worldwide, ensuring consistent quality and
                    satisfaction. Over the years, Buradon has achieved steady
                    growth and continues to thrive in the global chemical
                    industry.{" "}
                    <a
                      className="ps-2"
                      style={{ color: "#0d6efd" }}
                      href="/AboutUs"
                    >
                      Read More ...
                    </a>
                  </p>
                </div>
                <div className="lower-box">
                  <div className="icon-box">
                    {/* <i class="flaticon-atom-1"></i> */}
                    <Image className="isoImg" src={IsoNew} alt="img" />
                  </div>
                  <div className="heading">
                    {/* <h5>ISO 14001:2015</h5>
                                  <h5>ISO 45001:2018</h5> */}
                    <h5>ISO Certified</h5>
                    <GiCheckMark className=" checkIcon flaticon-check-mark" />
                  </div>
                </div>

                {/* <div class="inner-box">
                          <div class="single-item">
                              <div class="icon-box"><i class="flaticon-laboratory-1"></i></div>
                              <h3>Highly Advanced <br />Laboratory</h3>
                              <p>Sportacus andrew weatherall goose Refined gentlemen mario des lynam alpha trion zap rowsdower</p>
                          </div>
                          <div class="single-item">
                              <div class="icon-box"><i class="flaticon-test-tube"></i></div>
                              <h3>Comprehensive <br />Test Menu</h3>
                              <p>Sound like a true meathead in your mockups withIpsum specializing in a lorem ipsum made up.</p>
                          </div>
                      </div> */}
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutUsComponent;
