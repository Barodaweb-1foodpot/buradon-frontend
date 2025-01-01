import React from "react";
import ChoseBg from "../assets/images/background/chooseus-bg.jpg"
import shape21 from "../assets/images/shape/shape-21.png" 
import Iso from "../assets/images/new-home/iso-new.png"
import Image from "next/image";
import NabalLogo from "../assets/images/new-home/nabl-logo.png"
import Quality from "../assets/images/new-home/quality.png"
import Inhouse from "../assets/images/new-home/inhouse.png"
import { Row } from "react-bootstrap";
const WhyUS = () => {
  return (
    <React.Fragment>
      <section className="chooseus-section about-page bg-color-1 buradon">
        <div
          className="bg-layer"
         style={{ backgroundImage: `url(${ChoseBg.src})` }}
        />
        <div className="auto-container">
          <div className="sec-title mb-3">
            <span className="sub-title">Why Choose Us</span>
            <h2>
              Why <span className="hightlight-blue">Buradon</span>
            </h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 chooseus-block">
              <p className="mb-5">
                Buradon Inc. is a trusted manufacturer and exporter of
                high-purity fine chemicals, serving diverse industries for over
                24 years. Specializing in LR, AR, ACS grade chemicals, Buradon
                delivers quality and reliability across its expanding product
                portfolio. With expertise in production, synthesis, and
                purification, Buradon caters to global markets, ensuring prompt
                service and competitive pricing. Trusted by 80+ customers in 2
                countries, Buradon is committed to meeting every need with
                excellence.
              </p>
            </div>
            {/* <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
              <div className="chooseus-block-one"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
              <div className="chooseus-block-one"></div>
            </div> */}
            <Row>
            <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div
                    className="shape"
                    style={{ backgroundImage: `url(${shape21.src})` }}
                  />
                  <div className="icon-box">
                    <Image src={Iso} alt="logo" />
                  </div>
                  {/* <span>We Are</span> */}
                  <h3>
                    ISO <br /> Certified
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div
                    className="shape"
                    style={{ backgroundImage: `url(${shape21.src})` }}
                  />
                  <div className="icon-box">
                    <Image src={NabalLogo} alt="logo" />
                  </div>
                  {/* <span>We provide</span> */}
                  <h3>NABL Accredited Testing Lab</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div
                    className="shape"
                    style={{ backgroundImage: `url(${shape21.src})` }}
                  />
                  <div className="icon-box">
                    <Image src={Quality} alt="logo" />
                  </div>
                  {/* <span>We provide</span> */}
                  <h3>
                    Highest <br /> Purity
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 chooseus-block">
              <div className="chooseus-block-one">
                <div className="inner-box">
                  <div
                    className="shape"
                    style={{ backgroundImage: `url(${shape21.src})` }}
                  />
                  <div className="icon-box">
                    <Image src={Inhouse} alt="logo" />
                  </div>
                  {/* <span>We provide</span> */}
                  <h3>Integrated Manufacturing System</h3>
                </div>
              </div>
            </div>
            </Row>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default WhyUS;
