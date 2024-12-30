"use client";

import React, { useEffect } from "react";
import Logo from "../assets/images/new-home/buradon-logo.png";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebook, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import Link from "next/link";

const Hader = () => {
  // Sticky functionality
  const isSticky = () => {
    const header = document.querySelector(".header-lower");
    const scrollTop = window.scrollY;
    if (header) {
      scrollTop >= 160
        ? header.classList.add("is-sticky")
        : header.classList.remove("is-sticky");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  return (
    <React.Fragment>
      <header className="main-header header-style-three">
        {/* header-top */}
        <div className="header-top-three">
          <div className="auto-container">
            <div className="top-inner">
              <div className="logo-box">
                <figure className="logo">
                  <a href="/">
                    <Image src={Logo} alt="logo" />
                  </a>
                </figure>
              </div>
              <div className="right-column">
                <div className="info-box">
                  <div className="icon-box">
                    <HiOutlineLocationMarker className="flaticon-map" />
                  </div>
                  <h6>
                    Village: Umraya-391440
                    <br /> Taluka: Padra
                  </h6>
                </div>
                <div className="info-box">
                  <div className="icon-box">
                    <HiOutlineLocationMarker className="flaticon-map" />
                  </div>
                  <h6>
                    Open Hours <br /> Mon to Sat: 10.00 AM to 6.00 PM
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* header-lower */}
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <div className="menu-area clearfix">
                <nav className="main-menu navbar-expand-md navbar-light">
                  <ul className="navigation clearfix">
                    <li className="current">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="#">Profile</a>
                    </li>
                    <li>
                      <Link href="/page/productList">Products</Link>
                    </li>
                    <li>
                      <a href="#">Certification</a>
                    </li>
                    <li>
                      <a href="#">General Information</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Get A Quote</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="nav-right">
                <ul className="social-links clearfix">
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitterSquare />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
                <ul className="menu-right-content">
                  <li className="support-box">
                    <div className="icon-box">
                      <BiSolidPhoneCall />
                    </div>
                    <a href="tel:+91-7486020636">+91-7486020636</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* sticky-header */}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box">
              <div className="menu-area clearfix">
                <nav className="main-menu clearfix"></nav>
              </div>
              <div className="nav-right">
                <ul className="social-links clearfix">
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitterSquare />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
                <ul className="menu-right-content">
                  <li className="support-box">
                    <div className="icon-box">
                      <BiSolidPhoneCall />
                    </div>
                    <a href="tel:+91-7486020636">+91-7486020636</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Hader;
