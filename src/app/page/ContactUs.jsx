import Bradcrum from '@/Component/Bradcrum'
import Hader from '@/Component/Hader'
import React from 'react'
import BradCrumContactImg from "../../assets/images/new-home/breadcrumb.jpg"
import { IoLocationOutline } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { PiPhoneCallBold } from "react-icons/pi";
import Placeholder from "../../Component/Placeholder"

import Footer from '@/Component/Footer'

const ContactUs = () => {
  return (
    <React.Fragment>
        <Hader />
        <Placeholder />
        <Bradcrum BradCrumProduct={BradCrumContactImg} Title="Contact Us" />
    <section className="contact-info-section buradon">
  <div className="auto-container">
    <div className="lower-box">
      <div className="row clearfix">
        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
          <div className="single-item">
            <div className="icon-box"><IoLocationOutline className="flaticon-pin" /></div>
            <h3>Location</h3>
            <p>Block No: 429, Village: Umraya-391440 Taluka: Padra Dist: Vadodara Gujarat (INDIA)</p>
            <h6><a href="https://maps.app.goo.gl/o91R6MX5GgQEZmMW6" target="_blank">Check Location<FaArrowRight className="flaticon-right-arrow" /></a></h6>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
          <div className="single-item">
            <div className="icon-box"><PiPhoneCallBold className="flaticon-phone-call-1" /></div>
            <h3><a href="tel:+91-7486020636">+91-7486020636</a></h3>
            <h3><a href="tel:+91-7574886714">+91-7574886714</a></h3>
            <p>Mon to Sat <br /> 9.00 AM to 6.00 PM</p>
            <h6><a href="#">Chat On Whatsapp <FaArrowRight className="flaticon-right-arrow" /></a></h6>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
          <div className="single-item">
            <div className="icon-box"><RiMailSendLine className="flaticon-message" /></div>
            <h3><a href="mailto:sales@buradon.com">sales@buradon.com</a></h3>
            <h3><a href="mailto:info@buradon.com">info@buradon.com</a></h3>
            <p>To better connect with our team send your mail.</p>
            <h6><a href="get-quote.html">Get A Quote<FaArrowRight className="flaticon-right-arrow" /></a></h6>
          </div>
        </div>
        <div className="col-lg-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14769.394083923264!2d73.028771!3d22.264784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fb9797cbd924d%3A0x2b449714c52454ea!2sBuradon%20Inc.!5e0!3m2!1sen!2sin!4v1735215908895!5m2!1sen!2sin" width="100%" height={300} style={{border: 0, marginTop: 100}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </div>
  </div>
</section>
<Footer />

    </React.Fragment>
  )
}

export default ContactUs