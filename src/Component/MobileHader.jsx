import Link from "next/link";
import React from "react";

const MobileHader = () => {
  return (
    <React.Fragment>
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn">
          <i className="fas fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <a href="index.html">
              <img
                src="assets/images/new-home/buradon-logo.png"
                alt="Logo"
                title="Logo"
              />
            </a>
          </div>
          <div className="menu-outer">
            {/* Dynamic Menu */}
            <ul className="mobile-navigation">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/AboutUs">Profile</Link>
              </li>
              <li>
                <Link href="/ProductList">Products</Link>
              </li>
              <li>
                <Link href="/Certificate">Certification</Link>
              </li>
              <li>
                <Link href="/GeneralInformation">General Information</Link>
              </li>
              <li>
                <Link href="/ContactUs">Contact Us</Link>
              </li>
              <li>
                <Link href="/GetQote">Get A Quote</Link>
              </li>
            </ul>
          </div>
          <div className="canvas-content">
            <h4>Explore More</h4>
            <p>
              Discover additional features and options in our mobile canvas
              section!
            </p>
            <ul className="canvas-links">
              <li>
                <a href="#">Special Offers</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>
                Block No: 429, Village: Umraya-391440 Taluka: Padra Dist:
                Vadodara Gujarat (INDIA)
              </li>
              <li>
                <a href="tel:+91-7486020636">+91-7486020636</a>
              </li>
              <li>
                <a href="tel:+91-7574886714">+91-7574886714</a>
              </li>
              <li>
                <a href="mailto:sales@buradon.com">sales@buradon.com</a>
              </li>
              <li>
                <a href="mailto:info@buradon.com">info@buradon.com</a>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <a href="#">
                  <span className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-facebook-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default MobileHader;
