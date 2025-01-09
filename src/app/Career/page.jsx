"use client";

import Hader from "@/Component/Hader";
import React, { useState } from "react";
import Placeholder from "@/Component/Placeholder";
import Bradcrum from "@/Component/Bradcrum";
import BradCrumContactImg from "../../assets/images/new-home/breadcrumb.jpg";
import ScrollTopBtn from "@/Component/ScrollTopBtn";
import Footer from "@/Component/Footer";


import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import { toast as notify, ToastContainer } from "react-toastify"; // Alias 'toast' to 'notify'
import "react-toastify/dist/ReactToastify.css";


const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    exSalary: "",
    position: "",
    resume: null,
    remarks: "",
  });

  const [error, setError] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newError = {};
    if (!formData.name.trim()) newError.name = "Enter name";
    if (!formData.email.trim()) newError.email = "Enter email";
    if (!formData.phone.trim()) newError.phone = "Enter phone number";
    if (!formData.exSalary.trim()) newError.exSalary = "Enter Ex. salary";
    if (!formData.position.trim()) newError.position = "Enter position";
    if (!formData.resume) newError.resume = "Upload resume";
    if (!formData.remarks.trim()) newError.remarks = "Enter remarks";
    return newError;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setError(errors);
      notify.error("Please fill in all required fields.");
      return;
    }

    const formdata = new FormData();
    formdata.append("name", formData.name);
    formdata.append("email", formData.email);
    formdata.append("phone", formData.phone);
    formdata.append("expectedSalary", formData.exSalary);
    formdata.append("position", formData.position);
    formdata.append("resume", formData.resume);
    formdata.append("remarks", formData.remarks);
    console.log(formdata)
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL_COFFEE}/api/auth/create/job-application`,
        formdata
      );
      if (res.data.isOk) {
        notify.success("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          exSalary: "",
          position: "",
          resume: null,
          remarks: "",
        });
        setError({});
        setSuccess(true);
      } else {
        notify.error("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      notify.error("An error occurred. Please try again later.");
    }
  };

  return (
    <React.Fragment>
      <Hader />
      <Placeholder />
      <Bradcrum BradCrumProduct={BradCrumContactImg} Title="Career" />
      <Container className="careerContainer">
        <form onSubmit={handleSubmit}>
          <Row>
            <Col lg={6}>
              <div className="inputLableDiv">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="carerInput"
                />
                {error.name && <span style={{ color: "red" }}>{error.name}</span>}
              </div>
            </Col>
            <Col lg={6}>
              <div className="inputLableDiv">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="carerInput"
                />
                {error.email && <span style={{ color: "red" }}>{error.email}</span>}
              </div>
            </Col>
            <Col lg={6}>
              <div className="inputLableDiv">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="carerInput"
                />
                {error.phone && <span style={{ color: "red" }}>{error.phone}</span>}
              </div>
            </Col>
            <Col lg={6}>
              <div className="inputLableDiv">
                <label htmlFor="exSalary">Ex. Salary</label>
                <input
                  type="number"
                  id="exSalary"
                  name="exSalary"
                  value={formData.exSalary}
                  onChange={handleChange}
                  className="carerInput"
                />
                {error.exSalary && (
                  <span style={{ color: "red" }}>{error.exSalary}</span>
                )}
              </div>
            </Col>
            <Col lg={6}>
              <div className="inputLableDiv">
                <label htmlFor="position">Position</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="carerInput"
                />
                {error.position && (
                  <span style={{ color: "red" }}>{error.position}</span>
                )}
              </div>
            </Col>
            <Col lg={6}>
              <div className="inputLableDiv">
                <label htmlFor="resume">Resume Upload</label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleChange}
                  className="carerInput"
                />
                {error.resume && (
                  <span style={{ color: "red" }}>{error.resume}</span>
                )}
              </div>
            </Col>
            <Col lg={6}>
              <div className="inputLableDiv">
                <label htmlFor="remarks">Any Remarks</label>
                <textarea
                  rows="3"
                  cols="50"
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                  className="carerInput"
                />
                {error.remarks && (
                  <span style={{ color: "red" }}>{error.remarks}</span>
                )}
              </div>
            </Col>
            <div className="col-lg-12 form-group message-btn careerBtn">
              <button
                type="submit"
                className="theme-btn"
                style={{ marginTop: "20px" }}
              >
                Submit
              </button>
            </div>
          </Row>
        </form>
        <ToastContainer />
      </Container>
      <ScrollTopBtn />
      <Footer />
    </React.Fragment>
  );
};

export default Page;
