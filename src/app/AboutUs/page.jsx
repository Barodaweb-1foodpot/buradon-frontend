import Hader from '@/Component/Hader'
import React from 'react'
import PlaceHolder from "@/Component/Placeholder"
import Bradcrum from '@/Component/Bradcrum'
import Footer from '@/Component/Footer'
import BradcrumAboutImg from "@/assets/images/new-home/breadcrumb-profile.jpg"
import ScrollTopBtn from '@/Component/ScrollTopBtn'
import AboutUsComponent from '@/Component/AboutUs'
import WhyUS from '@/Component/WhyUS'
import OverGol from '@/Component/OverGol'
import AboutTwo from "@/assets/images/new-home/about-2.png"
import Image from 'next/image'

const Page = () => {
  return (
    <React.Fragment>
        <Hader />
        <PlaceHolder />
        <Bradcrum BradCrumProduct={BradcrumAboutImg} Title="Profile" />
        <AboutUsComponent />
     <section className="service-details infra-sec">
  <div className="auto-container">
    <div className="row clearfix">
      <div className="col-lg-12 col-md-12 col-sm-12 content-side">
        <div className="service-details-content">
          <div className="content-two">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                <div className="content-box">
                  {/* <div class="text">
                                  <h2>  Infrastructure </h2>
                                  <p>Our state-of-the-art infrastructure is backed with technologically advanced tools and machineries that assist in the quality and quantity production of Minerals & Chemicals. The robust infrastructural base has also played a vital role in the consistent growth of the company.</p>
                              </div> */}
                  <div className="inner-box">
                    <div className="single-item">
                      <h3>Infrastructure</h3>
                      <p>Our advanced infrastructure is the foundation of our success, equipped with modern technology and efficient machinery to ensure high-quality production. Every stage, from raw material handling to final output, is meticulously managed to maintain consistency and excellence. Supported by a skilled team and a focus on innovation, our infrastructure enables us to meet diverse client needs and deliver superior results.</p>
                    </div>
                    <div className="single-item">
                      <h3>Our Principles</h3>
                      <p>We are committed to quality and client satisfaction, ensuring excellence in every product we deliver. With a client-focused approach, we serve a diverse base across India and abroad, fostering trust and lasting relationships through continuous improvement.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                <div className="image-inner">
                  <figure className="image-box p-0"><Image src={AboutTwo} alt="img" /></figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <WhyUS />
      <OverGol />
        <ScrollTopBtn />
        <Footer />
    </React.Fragment>
  )
}

export default Page