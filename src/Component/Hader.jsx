"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BiSolidPhoneCall } from "react-icons/bi";
import {
  FaBox,
  FaFacebook,
  FaHome,
  FaRegClock,
  FaTwitter,
  FaTwitterSquare,
  FaUserCircle,
  FaYoutube,
} from "react-icons/fa";
import { HiInformationCircle, HiOutlineLocationMarker } from "react-icons/hi";
import { MdContactPage } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { TbCertificate } from "react-icons/tb";
import Logo from "../assets/images/new-home/buradon-logo.png";

const Hader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
  const pathname = usePathname();
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
            <div className="top-inner justify-content-center justify-content-lg-between">
              <div className="logo-box">
                <figure className="logo">
                  <a href="/">
                    <Image src={Logo} alt="logo" />
                  </a>
                </figure>
              </div>
              <div className="right-column d-none d-lg-flex">
                <div className="info-box">
                  <div className="icon-box">
                    <HiOutlineLocationMarker className="flaticon-map" />
                  </div>
                  <h6>
                    Block No: 429, Umraya-391440
                    <br /> Taluka: Padra Vadodara Gujarat
                  </h6>
                </div>
                <div className="info-box">
                  <div className="icon-box">
                    <FaRegClock className="flaticon-map" />
                  </div>
                  <h6>
                    Open Hours <br /> Mon to Sat: 9.00 AM to 6.00 PM
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
                <div className="mobile-nav-toggler" onClick={handleShow}>
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                </div>

                <nav className="main-menu navbar-expand-md navbar-light">
                  <ul className="navigation clearfix">
                    <li>
                      {/* <Link href="/">Home</Link> */}
                      <Link
                        className={`${pathname === "/" ? "active" : ""}`}
                        href="/"
                      >
                        {" "}
                        Home{" "}
                      </Link>
                    </li>
                    <li>
                      {/* <Link href="/AboutUs">Profile</Link> */}
                      <Link
                        className={`${pathname === "/AboutUs" ? "active" : ""}`}
                        href="/AboutUs"
                      >
                        {" "}
                        Profile{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          pathname === "/ProductList" ? "active" : ""
                        }`}
                        href="/ProductList"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          pathname === "/Certificate" ? "active" : ""
                        }`}
                        href="/Certificate"
                      >
                        Certification
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          pathname === "/GeneralInformation" ? "active" : ""
                        }`}
                        href="/GeneralInformation"
                      >
                        General Information
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${pathname === "/Career" ? "active" : ""}`}
                        href="/Career"
                      >
                        Career
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          pathname === "/ContactUs" ? "active" : ""
                        }`}
                        href="/ContactUs"
                      >
                        Contact Us
                      </Link>
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
                <ul
                  className="menu-right-content"
                  style={{ paddingLeft: "2rem" }}
                >
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
                <ul
                  className="menu-right-content"
                  style={{ paddingLeft: "2rem" }}
                >
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
        {/* // mobile headar ===>  */}
        <Offcanvas
          className="mobileHeadar"
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              {" "}
              <div className="nav-logo">
                <a href="/">
                  <Image src={Logo} alt="logo" className="mobileLogo" />
                </a>
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <div>
              <div className="mobilHader">
                <Link
                  className={`${pathname === "/" ? "active" : ""}`}
                  href="/"
                >
                  {" "}
                  <FaHome className="mobilHaderIcon" /> Home
                </Link>
              </div>
              <div className="mobilHader">
                <Link
                  className={`${pathname === "/AboutUs" ? "active" : ""}`}
                  href="/AboutUs"
                >
                  <FaUserCircle className="mobilHaderIcon" />
                  Profile
                </Link>
              </div>
              <div className="mobilHader">
                <Link
                  className={`${pathname === "/ProductList" ? "active" : ""}`}
                  href="/ProductList"
                >
                  <FaBox className="mobilHaderIcon" />
                  Products
                </Link>
              </div>
              <div className="mobilHader">
                <Link
                  className={`${pathname === "/Certificate" ? "active" : ""}`}
                  href="/Certificate"
                >
                  <TbCertificate className="mobilHaderIcon" />
                  Certification
                </Link>
              </div>
              <div className="mobilHader">
                <Link
                  className={`${
                    pathname === "/GeneralInformation" ? "active" : ""
                  }`}
                  href="/GeneralInformation"
                >
                  <HiInformationCircle className="mobilHaderIcon" />
                  General Information
                </Link>
              </div>
              <div className="mobilHader">
                <Link
                  className={`${pathname === "/ContactUs" ? "active" : ""}`}
                  href="/ContactUs"
                >
                  <MdContactPage className="mobilHaderIcon" />
                  Contact Us
                </Link>
              </div>
              <div className="mobilHader">
                <Link
                  className={`${pathname === "/Career" ? "active" : ""}`}
                  href="/Career"
                >
                  <RiContactsFill className="mobilHaderIcon" />
                  Career
                </Link>
              </div>
            </div>
            <div>
              <div className="contact-info contactInfoMobile">
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
                <ul className="socialIcon">
                  <li>
                    <a href="#">
                      <FaTwitter className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaFacebook className="fab fa-facebook-square" />
                    </a>
                  </li>
                  {/* <li><a href="index.html"><span class="fab fa-pinterest-p"></span></a></li>
                  <li><a href="index.html"><span class="fab fa-instagram"></span></a></li> */}
                  <li>
                    <a href="#">
                      <FaYoutube className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </React.Fragment>
  );
};

export default Hader;
