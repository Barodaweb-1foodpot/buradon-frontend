"use client";

import Hader from "@/Component/Hader";
import React, { useEffect, useState } from "react";
import Placeholder from "@/Component/Placeholder";
import Bradcrum from "@/Component/Bradcrum";
import CertificatBanner from "@/assets/images/new-home/breadcrumb.jpg";
import Footer from "@/Component/Footer";
import cetificate1 from "@/assets/images/new-home/certificates/1.jpg";
import cetificate2 from "@/assets/images/new-home/certificates/2.jpg";
import cetificate3 from "@/assets/images/new-home/certificates/3.jpg";
import cetificate4 from "@/assets/images/new-home/certificates/4.jpg";
import cetificate5 from "@/assets/images/new-home/certificates/certificate5.jpg";
import Image from "next/image";
import { Row } from "react-bootstrap";
import ScrollTopBtn from "@/Component/ScrollTopBtn";
import axios from "axios";
import Head from "next/head";

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL_COFFEE}/api/auth/get/blogsList/Certificate`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error", err));
  }, []);

  const certificatesData = [
    {
      img: cetificate1,
      title: "Certificate Of Registration",
    },
    {
      img: cetificate2,
      title: "Certificate Of Registration",
    },
    {
      img: cetificate3,
      title: "25 Years Environment Management",
    },
    {
      img: cetificate4,
      title: "Certificate Of Appendix",
    },
    {
      img: cetificate5,
      title: "Certificate of Compliance",
    },
  ];
  return (
    <React.Fragment>
      <Head>
        {/* About Us Page SEO */}
        <title>
          Certificates | Our Industry Certifications and Achievements
        </title>
        <meta
          name="description"
          content="Explore our certifications, achievements, and industry recognition. Learn how our commitment to quality sets us apart."
        />
        <meta
          name="keywords"
          content="Certificates, Industry Certifications, Achievements, Quality, Recognition"
        />
        <meta
          property="og:title"
          content="Certificates | Our Industry Certifications and Achievements"
        />
        <meta
          property="og:description"
          content="Explore our certifications, achievements, and industry recognition. Learn how our commitment to quality sets us apart."
        />
        <meta
          property="og:image"
          content="https://example.com/your-image.jpg"
        />{" "}
        {/* Replace with your image URL */}
        <meta property="og:type" content="website" />
      </Head>

      <Hader />
      <Placeholder />
      <Bradcrum BradCrumProduct={CertificatBanner} Title="Certificates" />
      {/* <section className="team-section sec-pad certificate-buradon">
        <div className="auto-container">
          <div className="sec-title centred">
            <h2>
              Our <span className="hightlight">Certification</span>
            </h2>
          </div>
          <Row className=" clearfix">
            {certificatesData?.map((d,index)=>
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 team-block certificate-block">
              <div className="team-block-one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Image
                        src={d.img}
                        alt="img"
                      />
                    </figure>
                  </div>
                  <div className="lower-content">
                    <h3>
                    {d.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            )}
            
          </Row>
        </div>
      </section> */}
      {data.length > 0 &&
        data.map((it, certificate) => (
          <div
            key={certificate}
            dangerouslySetInnerHTML={{ __html: it.blogDesc }}
          ></div>
        ))}
      <ScrollTopBtn />
      <Footer />
    </React.Fragment>
  );
};

export default Page;
