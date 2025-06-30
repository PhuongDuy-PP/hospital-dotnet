import React from 'react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
    return (
        <>
            <section id="intro" style={{ backgroundColor: "#E8F0F1" }}>
                <div className="container">
                    <div className="banner-content padding-large">
                        <h1 className="display-3 fw-bold text-dark">Pricing Plan</h1>
                        <span className="item"><Link to="/" className="">Home</Link></span> &nbsp; <span className="">/</span> &nbsp; <span
                            className=" item">Pricing</span>
                    </div>
                </div>
            </section>

            <section id="price" className="my-5">
                <div className="container py-5">

                    <h2 className=" fw-bold display-4 mb-5">Pricing Plans</h2>

                    <div className="row py-4">
                        <div className="col-md-6 col-lg-3 pb-4">
                            <div className="py-5 plan-post text-center">

                                <h6 className="mb-3">standard</h6>

                                <h2 className="heading-color display-5 fw-bold mb-5">$56.95</h2>
                                <div className="price-option">
                                    <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                    <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                    <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                    <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                </div>

                                <Link to="/booking" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now </Link>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 pb-4">
                            <div className="py-5 plan-post recommend-price text-center">

                                <h6 className="text-white mb-3">basic</h6>

                                <h2 className="text-white display-5 fw-bold mb-5">$79.50</h2>
                                <div className="price-option">
                                    <p className="text-white"><span className="price-tick text-white">✓</span> Quisque rhoncus</p>
                                    <p className="text-white"><span className="price-tick text-white">✓</span> Lorem ipsum dolor</p>
                                    <p className="text-white"><span className="price-tick text-white">✓</span> Vivamus velit mir</p>
                                    <p className="text-white"><span className="price-tick text-white">✓</span> Velit mir</p>
                                    <p className="text-white"><span className="price-tick text-white">✓</span> Elit mir ivamus</p>
                                </div>

                                <Link to="/booking" className="btn btn-primary text-black mt-3 px-4 py-3 mx-2"
                                    style={{ background: 'white' }}>Book now </Link>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 pb-4">
                            <div className="py-5 plan-post text-center">

                                <h6 className="mb-3">Deluxe</h6>

                                <h2 className="heading-color display-5 fw-bold mb-5">$103.40</h2>
                                <div className="price-option">
                                    <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                    <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                    <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                    <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                    <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                    <p><span className="price-tick">✓</span> Ipsum dolor</p>
                                </div>

                                <Link to="/booking" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now </Link>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 pb-4">
                            <div className="py-5 plan-post text-center">

                                <h6 className="mb-3">Ultimate</h6>

                                <h2 className="heading-color display-5 fw-bold mb-5">$190.50</h2>
                                <div className="price-option">
                                    <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                    <p><span className="price-tick">✓</span> Lorem ipsum dolor</p>
                                    <p><span className="price-tick">✓</span> Vivamus velit mir</p>
                                    <p><span className="price-tick">✓</span> It ir ivamus</p>
                                    <p><span className="price-tick">✓</span> Elit mir ivamus</p>
                                    <p><span className="price-tick">✓</span> Quisque rhoncus</p>
                                    <p><span className="price-tick">✓</span> lit mir iamus</p>
                                </div>

                                <Link to="/booking" className="btn btn-primary mt-3 px-4 py-3 mx-2 ">Book now </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section id="about-us" className="padding-large pt-0">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter-info text-center">
                                <div
                                    className="counter-number text-primary-500 display-2 fw-semibold d-flex align-items-center justify-content-center">
                                    <span className="counter-prefix">+</span>
                                    <h5 className="timer display-4 fw-bold m-0" data-to="5120" data-speed="8000">5120</h5>
                                </div>
                                <p className="counter-description">Happy Patients</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter-info text-center">
                                <div
                                    className="counter-number text-primary-500 display-2 fw-semibold d-flex align-items-center justify-content-center">
                                    <span className="counter-prefix">+</span>
                                    <h5 className="timer display-4 fw-bold m-0" data-to="5120" data-speed="8000">26</h5>
                                </div>
                                <p className="counter-description">Total Branches</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter-info text-center">
                                <div
                                    className="counter-number text-primary-500 display-2 fw-semibold d-flex align-items-center justify-content-center">
                                    <span className="counter-prefix">+</span>
                                    <h5 className="timer display-4 fw-bold m-0" data-to="5120" data-speed="8000">53</h5>
                                </div>
                                <p className="counter-description">Senior Doctors</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter-info text-center">
                                <div
                                    className="counter-number text-primary-500 display-2 fw-semibold d-flex align-items-center justify-content-center">
                                    <span className="counter-prefix">+</span>
                                    <h5 className="timer display-4 fw-bold m-0" data-to="5120" data-speed="8000">10</h5>
                                </div>
                                <p className="counter-description">Years Experience</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="our-services"
                style={{ backgroundImage: "url(images/services-bg.jpg)", backgroundRepeat: "no-repeat", backgroundPosition: "center top" }}>
                <div className="container">
                    <div className="row">

                        <div className="display-header text-light d-flex flex-wrap justify-content-between padding-medium">
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <h2 className="text-light">Our Best Services For Your Solution</h2>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <p className="text-light">Vitae aliquam vestibulum elit adipiscing massa diam in dignissim. Risus tellus libero
                                    elementum aliquam etiam. Lectus adipiscing est auctor mi quisque nunc non viverra est.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="icon-box p-4 bg-light border-radius-10 text-center">
                                <div className="icon-box-icon">
                                    <svg className="home-thermometer mt-3 primary-color-500" width="50" height="50">
                                        <use xlinkHref="#home-thermometer" />
                                    </svg>
                                </div>
                                <div className="icon-box-content">
                                    <h3 className="card-title py-2">General Practitioners</h3>
                                    <p>Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="icon-box p-4 bg-light border-radius-10 text-center">
                                <div className="icon-box-icon">
                                    <svg className="pregnant-woman mt-3 primary-color-500" width="50" height="50">
                                        <use xlinkHref="#pregnant-woman" />
                                    </svg>
                                </div>
                                <div className="icon-box-content">
                                    <h3 className="card-title py-2">Pregnancy Support</h3>
                                    <p>Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="icon-box p-4 bg-light border-radius-10 text-center">
                                <div className="icon-box-icon">
                                    <svg className="nutrition mt-3 primary-color-500" width="50" height="50">
                                        <use xlinkHref="#nutrition" />
                                    </svg>
                                </div>
                                <div className="icon-box-content">
                                    <h3 className="card-title py-2">Nutritional Support</h3>
                                    <p>Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pb-3">
                            <div className="icon-box p-4 bg-light border-radius-10 text-center">
                                <div className="icon-box-icon">
                                    <svg className="local-pharmacy mt-3 primary-color-500" width="50" height="50">
                                        <use xlinkHref="#local-pharmacy" />
                                    </svg>
                                </div>
                                <div className="icon-box-content">
                                    <h3 className="card-title py-2">Pharmaceutical care</h3>
                                    <p>Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="book-appointment" className="padding-large mb-0">
                <div className="container">
                    <div className="row">
                        <div className="display-header">
                            <h2 className="display-5 fw-bold text-dark">Book Appointment or call: <span className="text-primary-500">
                                (+487) 384
                                9452</span></h2>
                        </div>
                        <form className="contact-form d-flex flex-wrap mt-5 gx-1">
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <select className="form-select focus-transparent border border-radius-10 ps-4" aria-invalid="false"
                                    name="choose">
                                    <option value="Select Your Department">Select Department </option>
                                    <option value="Department">Department of Physiotherapy</option>
                                    <option value="Department">Department of Dentistry</option>
                                    <option value="Department">ENT Department</option>
                                    <option value="Department">Department of Pharmacy</option>
                                    <option value="Department">Nursing Department</option>
                                </select>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <select className="form-select focus-transparent border ps-4 border-radius-10" aria-invalid="false"
                                    name="choose">
                                    <option value="Select Your Doctor">Select Doctor</option>
                                    <option value="Naidan Smith">William Davies</option>
                                    <option value="Danial Frankie">Charlotte Taylor</option>
                                    <option value="Jason Roy">William Jones</option>
                                </select>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <input type="text" name="name" placeholder="Full Name" className="border ps-4 border-radius-10" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <input type="text" name="name" placeholder="Phone Number" className="border ps-4 border-radius-10" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <div className="input-group date" id="datepicker">
                                    <input type="date" id="start" name="appointment" min="2018-01-01" max="2018-12-31"
                                        placeholder="Choose Date" className="bg-transparent ps-4 border border-radius-10 position-relative" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <div className="input-group time" id="timepicker">
                                    <input type="time" id="start" name="appointment" min="9AM" max="6PM"
                                        className="bg-transparent ps-4 border border-radius-10 position-relative" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <a href="#" className="btn btn-medium btn-primary btn-pill mt-3 text-uppercase">Book an appointment</a>
                </div>
            </section>
        </>
    );
};

export default PricingPage;