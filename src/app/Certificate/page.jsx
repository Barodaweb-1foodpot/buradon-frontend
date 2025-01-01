"use client";

import Hader from "@/Component/Hader";
import React, { useEffect, useState } from 'react'
import Placeholder from "@/Component/Placeholder";
import Bradcrum from "@/Component/Bradcrum";
import CertificatBanner from "@/assets/images/new-home/breadcrumb.jpg";
import Footer from "@/Component/Footer";
import cetificate1 from "@/assets/images/new-home/certificates/1.jpg";
import cetificate2 from "@/assets/images/new-home/certificates/2.jpg";
import cetificate3 from "@/assets/images/new-home/certificates/3.jpg";
import cetificate4 from "@/assets/images/new-home/certificates/4.jpg";
import Image from "next/image";
import { Row } from "react-bootstrap";
import ScrollTopBtn from "@/Component/ScrollTopBtn";
import axios from 'axios';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
      axios.get(`${process.env.NEXT_PUBLIC_API_URL_COFFEE}/api/auth/get/blogsList/Certificate`)
      .then((res)=>setData(res.data))
  },[])

    const certificatesData =[
        {
            img:cetificate1 ,
            title:"Certificate Of Registration",
            
        },
        {
            img:cetificate2 ,
            title:"Certificate Of Registration",
            
        },
        {
            img:cetificate3 ,
            title:"25 Years Environment Management",
            
        },
        {
            img:cetificate4 ,
            title:"Certificate Of Appendix",
            
        },
    
    ]
  return (
    <React.Fragment>
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
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 team-block">
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
      {data.length > 0 && data.map((it,certificate)=>
          <div key={certificate} dangerouslySetInnerHTML={{ __html: it.blogDesc }}></div>
        )}
  <ScrollTopBtn />
      <Footer />
    </React.Fragment>
  );
};

export default Page;
