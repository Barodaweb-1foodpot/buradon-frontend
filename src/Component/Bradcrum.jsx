import React from "react";

const Bradcrum = ({ BradCrumProduct = { src: "default-image-path.jpg" }, Title }) => {
  return (
    <React.Fragment>
      <section className="page-title buradon">
        <div
          className="bg-layer"
          style={{
            backgroundImage: `url(${BradCrumProduct?.src || "default-image-path.jpg"})`,
          }}
        />
        <div className="auto-container">
          <div className="content-box">
            <h1>{Title}</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="/">Home</a>
              </li>
              <li>{Title}</li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Bradcrum;
