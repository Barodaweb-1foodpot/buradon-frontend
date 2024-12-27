import Image from 'next/image'
import React from 'react'
import GlobalGraph from "../assets/images/new-home/global-graph.png"
import IndinaMap from "../assets/images/new-home/india-map.png"
import { Col, Container, Row } from 'react-bootstrap'

const Loaction = () => {
  return (
    <React.Fragment>
       <section className="map-sec">
  <Container >
    <Row >
      <Col lg="12"  className=" col-12">
        <div className="sec-title text-center">
          {/* <span class="sub-title">About Company</span> */}
          <h2>Our <span className="hightlight-blue">Locations</span></h2>
        </div>
      </Col>
      <Col lg={8} >
        <Image src={GlobalGraph} alt="img" />
        <h3 className="map-title">Our Global Identity</h3>
      </Col>
      <Col lg={4} >
        <Image src={IndinaMap} alt="img" />
        <h3 className="map-title">Our Clients in India</h3>
      </Col>
    </Row>
  </Container>
</section>

    </React.Fragment>
  )
}

export default Loaction