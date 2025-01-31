"use client";

import Hader from "@/Component/Hader";
import React, { useEffect, useState } from "react";
import PlaceHolder from "@/Component/Placeholder";
import Bradcrum from "@/Component/Bradcrum";
import Footer from "@/Component/Footer";
import BradcrumAboutImg from "@/assets/images/new-home/breadcrumb-profile.jpg";
import ScrollTopBtn from "@/Component/ScrollTopBtn";
import AboutUsComponent from "@/Component/AboutUs";
import WhyUS from "@/Component/WhyUS";
import OverGol from "@/Component/OverGol";
import AboutTwo from "@/assets/images/new-home/about-2.png";
import EticImg from "@/assets/images/new-home/ethics.png"
import OverVision from  "@/assets/images/new-home/vision.png"
import OverMisson from  "@/assets/images/new-home/mission.png"
import Image from "next/image";
import axios from "axios";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL_COFFEE}/api/auth/get/blogsList/AboutUs`
      )
      .then((res) => setData(res.data))
      .catch((err)=>console.log("Error",err))
  }, []);
  return (
    <React.Fragment>
      <Hader />
      <PlaceHolder />
      <Bradcrum BradCrumProduct={BradcrumAboutImg} Title="Profile" />
      <AboutUsComponent />

      {data.length > 0 && data.map((it,index)=>
          <div key={index} dangerouslySetInnerHTML={{ __html: it.blogDesc }}></div>
        )}
      {/* <section className="statements-section centred buradon">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>
              Our <span className="hightlight-blue">Principles</span>
            </h2>
          </div>
          <div className=" clearfix row">
            <div className=" statements-block col-lg-12 col-md-6 col-sm-12">
              <div className="statements-block-one">
                <div className="inner-box">
                  <div className="text">
                    <h3>Our Vision</h3>
                    <p>
                      Being a quality conscious company, we ensure that quality
                      is maintained at every level of the organization. Our
                      focus on quality is evident in our product range. We have
                      never compromised on quality and have successfully
                      achieved a high level of customer appreciation resulting
                      in long-lasting relations.
                    </p>
                  </div>
                  <div className="image-box">
                    <figure className="image">
                    <Image src={OverVision} alt="img" />

                    </figure>
                    <div className="icon-box">
                      <img
                        alt="icon"
                        loading="lazy"
                        width={36}
                        height={36}
                        decoding="async"
                        data-nimg={1}
                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-1.06898d75.png&w=48&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-1.06898d75.png&w=96&q=75 2x"
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-1.06898d75.png&w=96&q=75"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div
                      className="pattern-1"
                      style={{
                        backgroundImage:
                          'url("/_next/static/media/shape-26.813448fe.png")',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" statements-block col-lg-12 col-md-6 col-sm-12">
              <div className="statements-block-one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                    <Image src={OverMisson} alt="img" />
                    </figure>
                    <div className="icon-box">
                      <img
                        alt="img"
                        loading="lazy"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-2.017eb785.png&w=48&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-2.017eb785.png&w=96&q=75 2x"
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-2.017eb785.png&w=96&q=75"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div
                      className="pattern-1"
                      style={{
                        backgroundImage:
                          'url("/_next/static/media/shape-26.813448fe.png")',
                      }}
                    />
                  </div>
                  <div className="text">
                    <h3>Our Mission</h3>
                    <p>
                      Our products are well appreciated by our much revered
                      clients all over India . We have a satisfactory client
                      base in India and abroad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          <div className="col-lg-12 col-md-6 col-sm-12 statements-block mt-5">
  <div className="statements-block-one">
    <div className="inner-box">
      <div className="text">
        <h3>Our Ethics</h3>
        <p>Being a quality conscious company, we ensure that quality is maintained at every
          level of the organization. Our focus on quality is evident in our product range.
          We have never compromised on quality and have successfully achieved a high level
          of customer appreciation resulting in long-lasting relations.</p>
      </div>
      <div className="image-box">
        <figure className="image"><Image src={EticImg} alt="img" />
        </figure>
        <div className="icon-box">
                      <img
                        alt="icon"
                        loading="lazy"
                        width={36}
                        height={36}
                        decoding="async"
                        data-nimg={1}
                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-1.06898d75.png&w=48&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-1.06898d75.png&w=96&q=75 2x"
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-1.06898d75.png&w=96&q=75"
                        style={{ color: "transparent" }}
                      />
                    </div>
        <div className="pattern-1" style={{
                        backgroundImage:
                          'url("/_next/static/media/shape-26.813448fe.png")',
                      }} />
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </section> */}

      <ScrollTopBtn />
      <Footer />
    </React.Fragment>
  );
};

export default Page;
