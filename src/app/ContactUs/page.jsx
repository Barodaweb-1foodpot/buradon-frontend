"use client";

import Bradcrum from '@/Component/Bradcrum'
import Hader from '@/Component/Hader'
import React, { useEffect, useState } from 'react'
import BradCrumContactImg from "../../assets/images/new-home/breadcrumb.jpg"
import { IoLocationOutline } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import { PiPhoneCallBold } from "react-icons/pi";
import Placeholder from "../../Component/Placeholder"
import { FaUserCircle,FaPen } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { LiaTextWidthSolid } from "react-icons/lia";
import Footer from '@/Component/Footer'
import ScrollTopBtn from '@/Component/ScrollTopBtn';
import axios from 'axios';

const Page = () => {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState({
    firstName : "",
    email : "",
    contact : "",
    subject : "",
    message : ""
  })

  

  const handleChange=(e)=>{
    setDetail({
      ...detail,
      [e.target.name] : e.target.value
    })
  }

  const handleSend=()=>{
    if(detail.firstName !== "" && detail.email !== "" && detail.contact !== "" && detail.subject !== "" && detail.message !== "")
      {
        console.log("sachin",detail)
        axios.post(`${process.env.NEXT_PUBLIC_API_URL_COFFEE}/api/auth/Inquiry`,detail)
        .then((res)=>console.log(res))
      }
  }

  useEffect(()=>{
      axios.get(`${process.env.NEXT_PUBLIC_API_URL_COFFEE}/api/auth/get/blogsList/ContactUs`)
      .then((res)=>setData(res.data))
  },[])

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
      
      </div>
    </div>
  </div>
</section>
      {/* {data.length > 0 && data.map((it,contact)=>
          <div key={contact} dangerouslySetInnerHTML={{ __html: it.blogDesc }}></div>
        )} */}
  <section className="contact-section sec-pad centred contact-buradon">
        <div className="auto-container">
          
          <div className="row clearfix">
            <div className="col-xl-8 col-lg-12 col-md-12 offset-xl-2 inner-column">
              <div className="inner-box">
                <div className="sec-title">
                  {/* <span class="sub-title">Send a Message</span> */}
                  <h2>
                    Get A <span className="hightlight-blue">Contact</span>
                  </h2>
                </div>
                <div className="form-inner">
                  <form method="post" action="#" id="contact-form">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label>Name</label>
                        <i> <FaUserCircle className="fa-solid fa-circle-user" /> </i>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="xxxxxx"
                          required
                          onChange={handleChange}
                          value={detail.firstName}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label>Email</label>
                       <i> <IoMdMail className="fa-solid fa-envelope" /></i> 
                        <input type="email" name="email" required onChange={handleChange} value={detail.email}/>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label>Ph Num</label>
                        <i><IoCall className="fa-solid fa-phone-flip" /></i> 
                        <input
                          type="text"
                          name="contact"
                          required
                          placeholder="Phone"
                          onChange={handleChange}
                          value={detail.contact}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label>Subject</label>
                        <i><FaPen className="fa-solid fa-pencil" /></i>
                        <input
                          type="text"
                          name="subject"
                          required
                          placeholder="Subject"
                          onChange={handleChange}
                          value={detail.subject}
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <label>Message</label>
                        <i><LiaTextWidthSolid className="fa-sharp fa-solid fa-text-width" /></i>
                        <textarea name="message" defaultValue={""} required onChange={handleChange} value={detail.message}/>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn careerBtn">
                        <button
                          type="submit"
                          className="theme-btn"
                          name="submit-form"
                          onClick={handleSend}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14769.394083923264!2d73.028771!3d22.264784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fb9797cbd924d%3A0x2b449714c52454ea!2sBuradon%20Inc.!5e0!3m2!1sen!2sin!4v1735215908895!5m2!1sen!2sin" width="100%" height={300} style={{border: 0, marginTop: 100}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        </div>
      </section>
<ScrollTopBtn />
<Footer />

    </React.Fragment>
  )
}

export default Page