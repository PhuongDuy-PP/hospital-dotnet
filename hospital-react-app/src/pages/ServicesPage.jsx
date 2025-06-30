import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    return (
        <React.Fragment>
            <section id="intro" style={{ backgroundColor: '#E8F0F1' }}>
                <div className="container ">
                    <div className="banner-content padding-large">
                        <h1 className="display-3 fw-bold text-dark">Services</h1>
                        <span className="item"><Link to="/" className="">Home</Link></span> &nbsp; <span className="">/</span> &nbsp; <span
                            className=" item">Services</span>
                    </div>
                </div>
            </section>

            <section id="about-us" className="py-5 mt-5">
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
                                    <h5 className="timer display-4 fw-bold m-0" data-to="25" data-speed="8000">25</h5>
                                </div>
                                <p className="counter-description">Years of experience</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter-info text-center">
                                <div
                                    className="counter-number text-primary-500 display-2 fw-semibold d-flex align-items-center justify-content-center">
                                    <h5 className="timer display-4 fw-bold m-0" data-to="45" data-speed="8000">45</h5>
                                </div>
                                <p className="counter-description">Qualified Doctors</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter-info text-center">
                                <div
                                    className="counter-number text-primary-500 display-2 fw-semibold d-flex align-items-center justify-content-center">
                                    <h5 className="timer display-4 fw-bold m-0" data-to="30" data-speed="8000">30</h5>
                                </div>
                                <p className="counter-description">Departments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="our-services" className="padding-large" style={{
                background: `url(/images/services-bg.jpg) no-repeat`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <div className="container">
                    <div className="display-header text-center position-relative">
                        <h2 className="display-2 fw-bold text-white">Our Services</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="card-item p-4 my-4">
                                <div className="card-icon">
                                    <svg className="home-thermometer" width="50" height="50">
                                        <use href="#home-thermometer"></use>
                                    </svg>
                                </div>
                                <h4 className="card-title fw-bold py-3">General Checkup</h4>
                                <p className="card-paragraph">A general check-up, also known as a routine physical exam, is a
                                    fundamental aspect of preventive healthcare. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="card-item p-4 my-4">
                                <div className="card-icon">
                                    <svg className="pregnant-woman" width="50" height="50">
                                        <use href="#pregnant-woman"></use>
                                    </svg>
                                </div>
                                <h4 className="card-title fw-bold py-3">Gynaecology</h4>
                                <p className="card-paragraph">It is a medical specialty that deals with the health of the female
                                    reproductive system, including the diagnosis and treatment</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="card-item p-4 my-4">
                                <div className="card-icon">
                                    <svg className="nutrition" width="50" height="50">
                                        <use href="#nutrition"></use>
                                    </svg>
                                </div>
                                <h4 className="card-title fw-bold py-3">Nutrition</h4>
                                <p className="card-paragraph">Nutrition is the study of how food and drink affect our bodies, with a
                                    focus on the essential nutrients necessary to support human health.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="card-item p-4 my-4">
                                <div className="card-icon">
                                    <svg className="local-pharmacy" width="50" height="50">
                                        <use href="#local-pharmacy"></use>
                                    </svg>
                                </div>
                                <h4 className="card-title fw-bold py-3">Pharmacy</h4>
                                <p className="card-paragraph">A pharmacy is a healthcare facility that is licensed to store,
                                    dispense, and sell prescription and non-prescription drugs, </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="card-item p-4 my-4">
                                <div className="card-icon">
                                    <svg className="calendar" width="50" height="50">
                                        <use href="#calendar"></use>
                                    </svg>
                                </div>
                                <h4 className="card-title fw-bold py-3">Appointment</h4>
                                <p className="card-paragraph">You can book your appointment by calling us or you can directly book
                                    from our website that is easy for everyone. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="card-item p-4 my-4">
                                <div className="card-icon">
                                    <svg className="clock" width="50" height="50">
                                        <use href="#clock"></use>
                                    </svg>
                                </div>
                                <h4 className="card-title fw-bold py-3">Opening Hours</h4>
                                <p className="card-paragraph">Our clinic is open 24/7. So that we can help our every patient. Our
                                    doctors are always available for our patients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ServicesPage; 