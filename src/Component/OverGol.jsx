import React from 'react'
import Icon1 from "@/assets/images/icons/icon-1.png";
import Icon2 from "@/assets/images/icons/icon-2.png";
import Shape26 from "../assets/images/shape/shape-26.png"
import statment1 from "../assets/images/resource/statements-1.jpg"
import Statment2 from "../assets/images/resource/statements-2.jpg"
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
const OverGol = () => {
  return (
    <div>
        <section className="statements-section centred buradon">
  <div className="auto-container">
    <div className="sec-title text-center">
      {/* <span class="sub-title">About Company</span> */}
      <h2>Our <span className="hightlight-blue">Goals</span></h2>
    </div>
    <Row className=" clearfix">
      <Col lg={12} md={6} sm={12} className=" statements-block">
        <div className="statements-block-one">
          <div className="inner-box">
            <div className="text">
              <h3>QUALITY</h3>
              <p>Being a quality conscious company, we ensure that quality is maintained at every
                level of the organization. Our focus on quality is evident in our product range.
                We have never compromised on quality and have successfully achieved a high level
                of customer appreciation resulting in long-lasting relations.</p>
            </div>
            <div className="image-box">
              <figure className="image"><Image src={statment1} alt="img" />
              </figure>
              <div className="icon-box"><Image src={Icon1} alt="icon" /></div>
              <div className="pattern-1" style={{backgroundImage:`url(${Shape26.src})`}} />
            </div>
          </div>
        </div>
      </Col>
      <Col lg={12} md={6} sm={12} className=" statements-block">
        <div className="statements-block-one">
          <div className="inner-box">
            <div className="image-box">
              <figure className="image"><Image src={Statment2} alt="img" />
              </figure>
              <div className="icon-box"><Image src={Icon2} alt="img" /></div>
              <div className="pattern-1"  style={{backgroundImage:`url(${Shape26.src})`}} />
            </div>
            <div className="text">
              <h3>CLIENTS</h3>
              <p>Our products are well appreciated by our much revered clients all over India . We
                have a satisfactory client base in India and abroad.</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</section>
    </div>
  )
}

export default OverGol