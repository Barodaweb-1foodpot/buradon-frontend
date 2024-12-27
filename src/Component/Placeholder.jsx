import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading duration
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide preloader after some time
    }, 1500); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsLoading(false); // Manually close the preloader
  };

  return (
    isLoading && (
      <div className="loader-wrap">
        <div className="preloader">
          <div className="preloader-close" onClick={handleClose}>
            x
          </div>
          <div id="handle-preloader" className="handle-preloader">
            <div className="animation-preloader">
              <div className="spinner"></div>
              <div className="txt-loading">
                <span data-text-preloader="b" className="letters-loading">
                  B
                </span>
                <span data-text-preloader="u" className="letters-loading">
                  U
                </span>
                <span data-text-preloader="r" className="letters-loading">
                  R
                </span>
                <span data-text-preloader="a" className="letters-loading">
                  A
                </span>
                <span data-text-preloader="d" className="letters-loading">
                  D
                </span>
                <span data-text-preloader="o" className="letters-loading">
                  O
                </span>
                <span data-text-preloader="n" className="letters-loading">
                  N
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Preloader;
