import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="overflow-hidden padding-large pb-0">
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 pb-3">
            <div className="footer-menu">
              <img src="/images/main-logo.png" alt="logo" className="pb-3" />
              <p>Elit adipi massa diam in dignissim. Sagittis pulvinar ut dis venenatis nunc nunc.</p>
              <div className="contact-item">
                <p>
                  <svg className="location primary-color" width="25" height="25">
                    <use xlinkHref="#location"></use>
                  </svg>
                  <span>123 Arling, Miola, NY</span>
                </p>
                <p>
                  <svg className="email primary-color" width="25" height="25">
                    <use xlinkHref="#email"></use>
                  </svg>
                  <a href="mailto:">Info@yourinfo.com</a>
                </p>
                <p>
                  <svg className="phone primary-color" width="25" height="25">
                    <use xlinkHref="#phone"></use>
                  </svg>
                  <span>(+487) 384 9452</span>
                </p>
                <ul className="social-links list-unstyled d-flex mt-3">
                  <li>
                    <Link to="#">
                      <svg className="facebook text-primary-500 me-3" width="25" height="25">
                        <use xlinkHref="#facebook"></use>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <svg className="twitter text-primary-500 me-3" width="25" height="25">
                        <use xlinkHref="#twitter"></use>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <svg className="instagram text-primary-500 me-3" width="25" height="25">
                        <use xlinkHref="#instagram"></use>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <svg className="youtube text-primary-500 me-3" width="25" height="25">
                        <use xlinkHref="#youtube"></use>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <svg className="linkedin text-primary-500" width="25" height="25">
                        <use xlinkHref="#linkedin"></use>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 pb-3">
            <div className="footer-menu">
              <h5 className="widget-title pb-2 fw-semibold">Quick Links</h5>
              <ul className="menu-list list-unstyled">
                <li className="pb-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="pb-2">
                  <Link to="/about">About</Link>
                </li>
                <li className="pb-2">
                  <Link to="/services">Services</Link>
                </li>
                <li className="pb-2">
                  <Link to="/booking">Booking</Link>
                </li>
                <li className="pb-2">
                  <Link to="/review">Testimonial</Link>
                </li>
                <li className="pb-2">
                  <Link to="/team">Our Team</Link>
                </li>
                <li className="pb-2">
                  <Link to="/faq">Faqs</Link>
                </li>
                <li className="pb-2">
                  <Link to="/departments">Department</Link>
                </li>
                <li className="pb-2">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 pb-3">
            <div className="footer-menu">
              <h5 className="widget-title fw-semibold">Opening Hours</h5>
              <table className="schedule">
                <tbody>
                  <tr className="d-flex justify-content-between border-bottom py-2">
                    <td>Monday - Thursday</td>
                    <td className="text-primary">8:00 am - 6:00 pm</td>
                  </tr>
                  <tr className="d-flex justify-content-between border-bottom py-2">
                    <td>Friday - Saturday</td>
                    <td className="text-primary">10:00 am - 4:00 pm</td>
                  </tr>
                  <tr className="d-flex justify-content-between border-bottom py-2">
                    <td>Sunday</td>
                    <td className="text-primary">Emergency only</td>
                  </tr>
                  <tr className="d-flex justify-content-between border-bottom py-2">
                    <td>Personal</td>
                    <td className="text-primary">7:00 pm - 9:00 pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="d-md-flex text-center justify-content-between border-top mt-5 py-4">
          <p>© 2023 Insove - All rights reserved</p>
          <p>Free HTML Templates by: <a href="https://templatesjungle.com/" className="fw-semibold"> TemplatesJungle</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 