import React from "react";
import CountUp from "react-countup";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaUserTie,FaBoxOpen  } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { Col, Row } from "react-bootstrap";




const Counter = () => {
  return (
    <React.Fragment>
      <section className="funfact-section alternat-2 centred buradon">
        <div className="auto-container">
          <div className="inner-content">
            <Row className=" clearfix" style={{alignItems:"center"}}>
              {/* Customers */}
              <Col    xs={6} className="col-lg col-md  funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <RiTeamLine className="flaticon-rating" />
                    </div>
                    <div className="count-outer count-box">
                      <span className="count-text">
                        <CountUp end={80} duration={2} />+
                      </span>
                    </div>
                    <h3>Customers</h3>
                  </div>
                </div>
              </Col>

              {/* Countries */}
              <Col  xs={6} className="col-lg col-md  funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <AiOutlineGlobal className="flaticon-atom" />
                    </div>
                    <div className="count-outer count-box">
                      <span className="count-text">
                        <CountUp end={2} duration={2} />
                      </span>
                    </div>
                    <h3>Countries</h3>
                  </div>
                </div>
              </Col>

              {/* Employees */}
              <Col  xs={6} className="col-lg col-md  funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <FaUserTie className="flaticon-lab" />
                    </div>
                    <div className="count-outer count-box">
                      <span className="count-text">
                        <CountUp end={90} duration={1.5} />+
                      </span>
                    </div>
                    <h3>Employees</h3>
                  </div>
                </div>
              </Col>

              {/* Products */}
              <Col   xs={6} className="col-lg col-md  funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <FaBoxOpen  className="flaticon-lab" />
                    </div>
                    <div className="count-outer count-box">
                      <span className="count-text">
                        <CountUp end={200} duration={1.5} />+
                      </span>
                    </div>
                    <h3>Products</h3>
                  </div>
                </div>
              </Col>

              {/* Years of Experience */}
              <Col   xs={6} className="col-lg  col-md funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="icon-box">
                      <GiAchievement  className="flaticon-rating" />
                    </div>
                    <div className="count-outer count-box">
                      <span className="count-text">
                        <CountUp end={24} duration={2} />+
                      </span>
                    </div>
                    <h3>Years Of Experience</h3>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Counter;
