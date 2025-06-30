import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header">
      <nav className="header-top pt-4 pb-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-md-4 col-sm-6">
              <Link className="navbar-brand" to="/">
                <img src="/images/main-logo.png" className="logo" alt="logo" />
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 d-md-block d-sm-none">
              <ul className="contact-list d-flex justify-content-lg-end flex-wrap list-unstyled m-0">
                <li className="pe-5 pe-lg-0 pe-xxl-5 pb-3 pb-lg-0">
                  <svg
                    className="location primary-color"
                    width="24"
                    height="24"
                  >
                    <use xlinkHref="#location"></use>
                  </svg>
                  123 Arling, Miola, NY
                </li>
                <li className="ps-xl-3">
                  <svg className="phone primary-color" width="24" height="24">
                    <use xlinkHref="#phone"></use>
                  </svg>
                  (+487) 384 9452
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="btn-book text-end">
                <Link
                  to="/booking"
                  className="btn btn-medium btn-outline-primary btn-pill text-uppercase"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav
        id="primary-header"
        className={`navbar navbar-expand-lg shadow-none ${
          isSticky ? "fixed-top" : ""
        }`}
        aria-label="navbar"
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-primary"
            aria-controls="navbar-primary"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              className="navbar-icon mt-3 primary-color-500 bg-light"
              width="50"
              height="50"
            >
              <use xlinkHref="#navbar-icon"></use>
            </svg>
          </button>
          <div
            className="header-bottom collapse navbar-collapse bg-light border-radius-10 py-2"
            id="navbar-primary"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ps-4 pe-4 border-right">
                <NavLink
                  className="nav-link text-dark p-0 mt-3 mt-lg-0"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ps-4 pe-4 border-right">
                <NavLink className="nav-link text-dark p-0" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item ps-4 pe-4 border-right">
                <NavLink className="nav-link text-dark p-0" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item ps-4 pe-4 border-right">
                <NavLink className="nav-link text-dark p-0" to="/booking">
                  Booking
                </NavLink>
              </li>
              <li className="nav-item ps-4 pe-4 border-right">
                <NavLink className="nav-link text-dark p-0" to="/team">
                  Team
                </NavLink>
              </li>
              <li className="nav-item ps-4 pe-4 border-right">
                <NavLink className="nav-link text-dark p-0" to="/faq">
                  Faqs
                </NavLink>
              </li>
              <li className="nav-item ps-4 pe-4 border-right">
                <NavLink className="nav-link text-dark p-0" to="/departments">
                  Department
                </NavLink>
              </li>
              <li className="nav-item ps-4 pe-3 dropdown border-right">
                <a
                  className="nav-link text-dark p-0 dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Pages{" "}
                  <iconify-icon icon="iconamoon:arrow-down-2-fill"></iconify-icon>{" "}
                </a>
                <ul className="dropdown-menu">
                  <li className="py-1">
                    <Link to="/about" className="dropdown-item text-uppercase">
                      About
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link to="/blog" className="dropdown-item text-uppercase">
                      Blog
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      to="/blog-single"
                      className="dropdown-item text-uppercase"
                    >
                      Blog-Single
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      to="/booking"
                      className="dropdown-item text-uppercase"
                    >
                      Booking
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      to="/services"
                      className="dropdown-item text-uppercase"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      to="/departments"
                      className="dropdown-item text-uppercase"
                    >
                      Departments
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      to="/gallery"
                      className="dropdown-item text-uppercase"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      to="/pricing"
                      className="dropdown-item text-uppercase"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link
                      to="/contact"
                      className="dropdown-item text-uppercase"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link to="/team" className="dropdown-item text-uppercase">
                      Our Team
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link to="/review" className="dropdown-item text-uppercase">
                      Reviews
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link to="/faq" className="dropdown-item text-uppercase">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item ps-4 pe-4 ">
                <a
                  className="nav-link get-pro text-dark fw-bold p-0"
                  href="https://templatesjungle.gumroad.com/l/free-insove-medical-healthcare-bootstrap-5-html-website-template"
                >
                  GET PRO
                </a>
              </li>
            </ul>
            <form className="search-form mb-3 mb-lg-0" role="search">
              <svg
                className="search primary-color position-absolute"
                width="18"
                height="18"
              >
                <use xlinkHref="#search"></use>
              </svg>
              <input
                className="form-control border-0 ps-4 position-relative"
                type="search"
                placeholder="Search.."
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
