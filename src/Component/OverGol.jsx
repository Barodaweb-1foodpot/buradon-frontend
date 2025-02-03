import React from "react";
import Icon1 from "@/assets/images/icons/icon-1.png";
import Icon2 from "@/assets/images/icons/icon-2.png";
import Shape26 from "../assets/images/shape/shape-26.png";
import statment1 from "../assets/images/resource/statements-1.jpg";
import Statment2 from "../assets/images/resource/statements-2.jpg";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
const OverGol = () => {
  return (
    <div>
      <section className="statements-section centred buradon">
        <div className="auto-container">
          <div className="sec-title text-center">
            {/* <span class="sub-title">About Company</span> */}
            <h2>
              Our <span className="hightlight-blue">Goals</span>
            </h2>
          </div>
          <Row className=" clearfix">
            <Col lg={12} md={6} sm={12} className=" statements-block">
              <div className="statements-block-one">
                <div className="inner-box">
                  <div className="text">
                    <h3>QUALITY</h3>
                    <p>
                      At Buradon Inc., great is at the core of everything we do.
                      As an excellent-pushed corporation, we make certain
                      stringent first-rate manipulations at each stage of our
                      techniques, from sourcing uncooked materials to delivering
                      completed merchandise. Our unwavering commitment to
                      excellence has earned us the belief and appreciation of
                      our clients, fostering lengthy-lasting relationships
                      worldwide.
                    </p>
                  </div>
                  <div className="image-box">
                    <figure className="image">
                      <Image src={statment1} alt="img" />
                    </figure>
                    <div className="icon-box icon1">
                      <Image src={Icon1} alt="icon" />
                    </div>
                    <div
                      className="pattern-1"
                      style={{ backgroundImage: `url(${Shape26.src})` }}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12} md={6} sm={12} className=" statements-block">
              <div className="statements-block-one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Image src={Statment2} alt="img" />
                    </figure>
                    <div className="icon-box icon2">
                      <Image src={Icon2} alt="img" />
                    </div>
                    <div
                      className="pattern-1"
                      style={{ backgroundImage: `url(${Shape26.src})` }}
                    />
                  </div>
                  <div className="text">
                    <h3>CLIENTS</h3>
                    <p>
                      Buradon Inc. takes pride in its strong and loyal client
                      base, both in India and internationally. Our products are
                      highly appreciated by our esteemed clients for their
                      consistent quality and reliability. By building trust and
                      delivering excellence, we have established long-standing
                      relationships that drive mutual success. At Buradon, our
                      clients are at the heart of our journey, inspiring us to
                      achieve greater heights.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default OverGol;
