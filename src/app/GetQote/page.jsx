import Hader from "@/Component/Hader";
import React from "react";
import PlaceHolder from "@/Component/Placeholder";
import Bradcrum from "@/Component/Bradcrum";
import BannerImg from "@/assets/images/new-home/breadcrumb.jpg";
import Footer from "@/Component/Footer";
import ScrollTopBtn from "@/Component/ScrollTopBtn";
import { FaUserCircle,FaPen } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { LiaTextWidthSolid } from "react-icons/lia";




const Page = () => {
  return (
    <React.Fragment>
      <Hader />
      <PlaceHolder />
      <Bradcrum BradCrumProduct={BannerImg} Title="Get A Quote" />
      <section className="contact-section sec-pad centred contact-buradon">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-xl-8 col-lg-12 col-md-12 offset-xl-2 inner-column">
              <div className="inner-box">
                <div className="sec-title">
                  {/* <span class="sub-title">Send a Message</span> */}
                  <h2>
                    Get A <span className="hightlight-blue">Quote</span>
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
                          name="username"
                          placeholder="xxxxxx"
                          required
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label>Email</label>
                       <i> <IoMdMail className="fa-solid fa-envelope" /></i> 
                        <input type="email" name="email" required />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label>Ph Num</label>
                        <i><IoCall className="fa-solid fa-phone-flip" /></i> 
                        <input
                          type="text"
                          name="phone"
                          required
                          placeholder="Phone"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <label>Subject</label>
                        <i><FaPen className="fa-solid fa-pencil" /></i>
                        <input
                          type="text"
                          name="phone"
                          required
                          placeholder="Subject"
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <label>Message</label>
                        <i><LiaTextWidthSolid className="fa-sharp fa-solid fa-text-width" /></i>
                        <textarea name="message" defaultValue={""} />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                        <button
                          type="submit"
                          className="theme-btn"
                          name="submit-form"
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
        </div>
      </section>

      <ScrollTopBtn />
      <Footer />
    </React.Fragment>
  );
};

export default Page;
