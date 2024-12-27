import React from "react";
import Shape23 from "../assets/images/shape/shape-23.png";
import aboutSm1 from "../assets/images/new-home/about-sm1.jpg";
import thumb2 from "../assets/images/resource/thumb-2.jpg";
import thumb3 from "../assets/images/resource/thumb-3.jpg";
import thumb4 from "../assets/images/new-home/thumb-4.jpg";
import AboutSec from "../assets/images/new-home/about-sec.jpg";
import IsoNew from "../assets/images/new-home/iso-new.png"
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";

const AboutUs = () => {
  return (
    <React.Fragment>
      <section className="about-style-three sec-pad">
        <div className="auto-container">
          <Row className=" clearfix">
            <Col lg={6} md={12} sm={12} className=" image-column">
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
            <Col lg={6} md={12} sm={12} className=" content-column">
              <div className="content-box">
                <div className="sec-title">
                  <span className="sub-title">About Company</span>
                  <h2>
                    Welcome to <span className="hightlight">Buradon Inc.</span>
                  </h2>
                </div>
                <div className="text">
                  <p>
                    A progressive and dynamic company, Buradon is one of India
                    's leading manufacture and exporter of fine chemicals to the
                    rigid standard of GR , AR , EL, ACS, and LR grades due to
                    its industrial exposure, commitment and market fixing
                    capabilities from India . We produce a continuously
                    expanding line of chemicals which has achieved a reputation
                    for quality standing in international markets.{" "}
                  </p>
                </div>
                <div className="text">
                  <p>
                    Established in the year 2001, with a mission to simply serve
                    the customers' every need by offering quality products and
                    prompt service. With a simple marketing strategy "to supply
                    best quality products in the minimum possible price", we
                    supply only to established and reliable suppliers all over
                    the world. Buradon has traveled on the rising graph of
                    Growth V/S Time. <a className="ps-2" href="#">Read More ...</a>

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
                    <GiCheckMark  className=" checkIcon flaticon-check-mark" />
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

export default AboutUs;
