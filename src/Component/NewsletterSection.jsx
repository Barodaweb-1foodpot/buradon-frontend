import React from "react";
import { Col, Row } from "react-bootstrap";
import Indian from "../assets/images/new-home/indiana.jpg"
import CaterCamical from "../assets/images/new-home/cater-chemicals.jpg"
import assocaites from "@/assets/images/new-home/assocaites.jpg"
import Image from "next/image";

const NewsletterSection = () => {
  return (
    <React.Fragment>
      <section className="newsletter-section buradon">
        <div className="auto-container">
          <div className="inner-container" style={{backgroundImage: `url(${assocaites.src})` }}>
            <Row className=" align-items-center clearfix">
              <Col lg={3} md={4} xs={4} >
                <div className="image">
                  <Image
                    src={Indian}
                    className="w-100"
                    alt="img"
                  />
                </div>
              </Col>
              <Col lg={6} md={4} xs={4} >
                <div className="text text-center">
                  <h2>
                    Our Associate <span>Companies</span>
                  </h2>
                </div>
              </Col>
              <Col lg={3} md={4}  xs={4} >
                <div className="image">
                  <Image
                    src={CaterCamical}
                    className="w-100"
                    alt="img"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default NewsletterSection;
