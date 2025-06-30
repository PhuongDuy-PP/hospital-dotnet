import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <section id="intro" style={{ backgroundColor: '#E8F0F1' }}>
        <div className="container">
          <div className="banner-content padding-large">
            <h1 className="display-3 fw-bold text-dark">About Us</h1>
            <span className="item"><Link to="/" className="">Home</Link></span> &nbsp; <span className="">/</span> &nbsp; <span
              className=" item">About Us</span>
          </div>
        </div>
      </section>

      <section id="about-us" className="mt-5 pt-5">
        <div className="vertical-element">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <div className="image-holder">
                  <img src="/images/post-item3.jpg" alt="about-us" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="section-element p-5 ps-0">
                  <h2 className="mb-3">Who are we?</h2>
                  <p>Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco. Adipiscing elit, sed do euismod tempor incidunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Adipiscing elit,
                    sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco. </p>
                  <p>Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco. Adipiscing elit, sed do euismod tempor incidunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
                  <Link to="/booking" className="btn btn-medium btn-primary btn-pill text-uppercase mt-4">Book An Appointment</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage; 