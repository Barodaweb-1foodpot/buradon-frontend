import Bradcrum from "@/Component/Bradcrum";
import Footer from "@/Component/Footer";
import Hader from "@/Component/Hader";
import React from "react";
import BradCrumBanner from "@/assets/images/new-home/breadcrumb.jpg";
import Placeholder from "@/Component/Placeholder";
import Image from "next/image";
import SpNot from "@/assets/images/new-home/sp-note.jpg"
import Price from "@/assets/images/new-home/price.jpg"
import Taxe from "@/assets/images/new-home/tax.jpg"
import delivery from "@/assets/images/new-home/delivery.jpg"
import Packing from "@/assets/images/new-home/packaging.jpg"
import Insurance from "@/assets/images/new-home/insurance.jpg"
import ScrollTopBtn from "@/Component/ScrollTopBtn";


const Page = () => {
  return (
    <React.Fragment>
      <Hader />
      <Placeholder />
      <Bradcrum BradCrumProduct={BradCrumBanner} Title="General Information" />
      <section className="locations-section sec-pad centred buradon">
        {/* <div class="pattern-layer" style="background-image: url(assets/images/shape/shape-10.png);"></div> */}
        <div className="auto-container">
          <div className="sec-title">
            <h2>
              Our <span className="hightlight">General Information</span>
            </h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-12">
              <p className="text-center mb-5">
                All Products in our price list conform to the highest of
                quality. They are classified as Analysed Reagents. Laboratory
                Reagents, Hipure and speciality products conforming to all
                chemicals are laboratory reagents grade. Our sales force
                comprises of technically qualified, highly motivated and
                customer oriented representatives operating throughout the
                country. The sales force in backed up by an efficient
                distribution network to ensure prompt service to our esteemed
                customer. Our products mix is being continuously reviewed and
                enlarged to meet the requirements of the customer. In view of
                modern trend in analytical method and research. it is our
                constant endeavour satisfy our customer both about quality and
                services.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 location-block">
              <div className="location-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <Image src={SpNot} alt="img" />
                  </figure>
                  <h3>Special Note</h3>
                  <p>
                    All Chemical listed in the price list are meant for
                    laboratory use. We do not assume any reposibility if they
                    are used for medicimnal or pharmaceutical application.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 location-block">
              <div className="location-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <Image src={Price} alt="img" />
                  </figure>
                  <h3>Condition Of Prices</h3>
                  <p>
                    All the price in the price list are bulk price and
                    applicable at the time of issue of this price list and are
                    subject to revision without notice. We reserve the right to
                    invoice goods at price prevelling on the date of despetch.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 location-block">
              <div className="location-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <Image src={Taxe} alt="img" />
                  </figure>
                  <h3>Taxes and Duties</h3>
                  <p>
                    Price indicated in our price list are exclusive of sales
                    tax, excise duty octroin and other government levies which
                    would be applicable as per the rules in force from time to
                    time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 location-block">
              <div className="location-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <Image src={delivery} alt="img" />
                  </figure>
                  <h3>Delivery</h3>
                  <p>
                    Every effort in made to adhere to the delivery schedule
                    specified by the customer. However we accept no
                    responsibility for non delivery or delayed delivery duo to
                    circumstances beyond our control.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 location-block">
              <div className="location-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <Image src={Packing} alt="img" />
                  </figure>
                  <h3>Packing</h3>
                  <ul className="list-item clearfix packing-list">
                    <li>
                      <i className="flaticon-check-mark" />
                      Lab products for your experiments
                    </li>
                    <li>
                      <i className="flaticon-check-mark" />
                      Because we think beyond your boundaries
                    </li>
                    <li>
                      <i className="flaticon-check-mark" />
                      Where science meets innovation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 location-block">
              <div className="location-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    <Image  src={Insurance} alt="img" />
                  </figure>
                  <h3>Insurance</h3>
                  <p>
                    Goods are packed with care but forwarded at the customer's
                    risk. Customers are advised to arrange insurance, as we are
                    not responsible for breakages or losses. Claims should be
                    made promptly with the carrier or insurance company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <ScrollTopBtn />
      <Footer />
    </React.Fragment>
  );
};

export default Page;
