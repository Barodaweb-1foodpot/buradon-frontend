"use client"; // Ensure this file is a client-side component in Next.js
import React from "react";
import dynamic from "next/dynamic";
import Banner1 from "../assets/images/new-home/banner1.jpg";
import Banner2 from "../assets/images/new-home/banner2.jpg";
import Shape21 from "../assets/images/shape/shape-21.png"
import Hader from "../Component/Hader"; // Adjust the path as needed
import { motion } from "framer-motion"; // Import Framer Motion
import { GiCheckMark } from "react-icons/gi";
import statment1 from "../assets/images/resource/statements-1.jpg"
import Statment2 from "../assets/images/resource/statements-2.jpg"
// Dynamically import the Slider component
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import Shape26 from "../assets/images/shape/shape-26.png"
import "slick-carousel/slick/slick.css"; // Import Slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme styles
import Image from "next/image";
import { Col, Container, Fade, Row } from "react-bootstrap";
import AboutUs from "@/Component/AboutUs";
import Loaction from "@/Component/Loaction";
import Counter from "@/Component/Counter";
import Icon1 from "@/assets/images/icons/icon-1.png";
import Icon2 from "@/assets/images/icons/icon-2.png"
import NewsletterSection from "@/Component/NewsletterSection";
import Footer from "@/Component/Footer";
import Placeholder from "@/Component/Placeholder"
import ScrollTopBtn from "@/Component/ScrollTopBtn";
import WhyUS from "@/Component/WhyUS";
// import ScrollTopBtn from "@/Component/ScrollTopBtn";

// Custom arrow components
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-prev" onClick={onClick}>
      {/* Left arrow symbol, you can customize */}
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="slick-next" onClick={onClick}>
      {/* Right arrow symbol, you can customize */}
    </button>
  );
};

const Home = () => {
  const banerData = [
    {
      img: Banner1,
      title: "Strategic Approach to Sourcing ",
      subTitle: "Fine Chemicals",
    },
    {
        img: Banner2,
        title: "Strategic Approach to Sourcing ",
        subTitle: "Fine Chemicals",
      },
      {
        img: Banner1,
        title: "Strategic Approach to Sourcing ",
        subTitle: "Fine Chemicals",
      },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: <PrevArrow />, // Custom previous arrow
    nextArrow: <NextArrow />, // Custom next arrow
    autoplay: true,
    autoplaySpeed: 5000, // Time interval between slides
  };


  return (
    <React.Fragment>
      <Hader />
      <Placeholder />
      {/* Banner section with slick slider */}
      <section className="bannerImgSection banner-style-three centred">
        <Slider
          className="banner-carousel banner-buradon owl-theme owl-carousel owl-dots-none nav-style-one"
          {...settings}
        >
          {/* Slide 1 */}
          {banerData?.map((d,index) => (
            <div key={index}>
              <div className="slide-item">
                <div className="image-layer">
                  <Image
                    src={d.img}
                    alt="Strategic Approach to Sourcing"
                    layout="responsive"
                    width={1920}
                    height={1080}
                  />
                </div>
                <div className="auto-container">
                  <div className="content-box">
                    {/* Framer Motion applied to h2 and span */}
                    <motion.h2
                      initial={{ opacity: 0, y: 50 }} // Initial state: hidden and moved down
                      animate={{ opacity: 1, y: 0 }} // Final state: visible and in normal position
                      transition={{ duration: 1 }} // Duration of animation
                    >
                      {d.title} <br />
                      <motion.span
                        initial={{ opacity: 0 }} // Span starts hidden
                        animate={{ opacity: 1 }} // Span fades in
                        transition={{ duration: 1, delay: 0.5 }} // Add delay for staggered effect
                      >
                        {d.subTitle}
                      </motion.span>
                    </motion.h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
 <section className="highlights-section">
  <div className="auto-container">
    <div className="inner-container">
      <Row className=" clearfix">
        <Col lg={3} md={6} sm={12} className=" chooseus-block">
          <div className="chooseus-block-one">
            <div className="inner-box">
              <div className="shape" style={{backgroundImage: `url(${Shape21.src})`}}>
              </div>
              <div className="icon-box"><GiCheckMark className="flaticon-check-mark" /></div>
              {/* <span>We provide</span> */}
              <h3>Strategic Sourcing</h3>
            </div>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12} className=" chooseus-block">
          <div className="chooseus-block-one">
            <div className="inner-box">
              <div className="shape" style={{backgroundImage: `url(${Shape21.src})`}}>
              </div>
              <div className="icon-box"><GiCheckMark className="flaticon-check-mark" /></div>
              {/* <span>We provide</span> */}
              <h3>Commitment to Quality</h3>
            </div>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12} className=" chooseus-block">
          <div className="chooseus-block-one">
            <div className="inner-box">
              <div className="shape" style={{backgroundImage: `url(${Shape21.src})`}}>
                {/* <img src="assets/images/shape/shape-21.png" alt /> */}
              </div>
              <div className="icon-box"><GiCheckMark className="flaticon-check-mark" /></div>
              {/* <span>We provide</span> */}
              <h3>Cost-Effectiveness</h3>
            </div>
          </div>
        </Col>
        <Col lg={3} md={6} sm={12} className=" chooseus-block">
          <div className="chooseus-block-one">
            <div className="inner-box">
              <div className="shape" style={{backgroundImage: `url(${Shape21.src})`}}>
              </div>
              <div className="icon-box"><GiCheckMark className="flaticon-check-mark" /></div>
              {/* <span>We provide</span> */}
              <h3>Efficiency in Delivery</h3>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</section>
{/* //// about us section ====>  */}
<AboutUs />
{/* ///// Location section =====>  */}
<Loaction />
{/* // counter section =====>  */}
<Counter />
{/* ///// product section =====>  */}
<section className="product-sec">
  <Container >
    <Row className=" justify-content-center">
      <Col lg={12} className=" col-12">
        <div className="sec-title text-center">
          {/* <span class="sub-title">About Company</span> */}
          <h2>Leading the Way in  <span className="hightlight">Fine Chemicals</span></h2>
        </div>
      </Col>
      <Col lg={9}  className=" col-12">
        <p className="text">Buradon, established in 2001, is a leading Indian manufacturer and exporter of fine chemicals, meeting GR, AR, EL, ACS, and LR standards. Renowned for quality and reliability, we deliver exceptional products worldwide with a commitment to excellence and competitive pricing.
        </p>
        <div className="text-center">
          <a href="product.html" className="theme-btn buradon mt-5">Explore Products</a>
        </div>
      </Col>
    </Row>
  </Container>
</section>
{/* //// why us ====>  */}
<WhyUS />
{/* //// over gols section ====>  */}
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
{/* ///// news later section =====>  */}
<NewsletterSection />
{/* /// footer section ====>  */}
<Footer />
{/* scroll to top btn ===> */}
{/* <ScrollTopBtn /> */}
<ScrollTopBtn />


    </React.Fragment>
  );
};

export default Home;
