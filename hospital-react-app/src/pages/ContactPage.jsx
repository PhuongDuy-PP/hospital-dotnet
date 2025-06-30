import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <>
      <section id="intro" style={{ backgroundColor: '#E8F0F1' }}>
        <div className="container">
          <div className="banner-content padding-large">
            <h1 className="display-3 fw-bold text-dark">Contact Us</h1>
            <span className="item"><Link to="/" className="">Home</Link></span> &nbsp; <span className="">/</span> &nbsp; <span
              className=" item">Contact</span>
          </div>
        </div>
      </section>

      <section className="contact-us-wrap py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="contact-info col-md-6">
              <h2>Contact information</h2>
              <p>Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
              <div className="page-content">
                <div className="col-md-6">
                  <div className="content-box my-5">
                    <h5 className="element-title text-uppercase fs-6 fw-bold ">Head Office</h5>
                    <div className="contact-address">
                      <p>730 Glenstone Ave 65802, Springfield, US</p>
                      <p>+123 987 321</p>
                      <p>
                        <a href="mailto:">contact@yourstore.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="content-box my-5">
                    <h5 className="element-title text-uppercase fs-6 fw-bold ">OPENING HOURS</h5>
                    <div className="contact-address">
                      <p>
                        Mon – Thu: 10:00 – 19:00
                      </p>
                      <p>
                        Fri – Sat: 10:00 – 16:00
                      </p>
                      <p>
                        Sunday: Emergency Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="inquiry-form col-md-6">
              <h2>have any question?</h2>
              <p>Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>
              <form action="#" method="post" className="form-group mt-5">
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" name="name" placeholder="Write Your Name" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" name="email" placeholder="Write Your Email" className="form-control" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <textarea className="form-control" placeholder="Write Your Message" style={{ height: '150px' }}></textarea>
                    <button type="submit" name="submit"
                      className="btn btn-primary btn-lg rounded-pill px-5 py-3 mt-4">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="google-map-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.266224823434!2d106.65496157480539!3d10.790932389358992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752934f253e733%3A0x2323e3514a29a32e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIC0gxJBIUUcgVFAuSENNLCBDxqEgc-G7nyBMw70gVGjGsOG7nW5nIEtp4buHdCE!5e0!3m2!1svi!2s!4v1716183955609!5m2!1svi!2s"
                width="100%" height="500" style={{ border: '0' }} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage; 