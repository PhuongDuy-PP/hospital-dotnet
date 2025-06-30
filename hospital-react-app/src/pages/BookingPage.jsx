import React from 'react';
import { Link } from 'react-router-dom';
import SubscribeSection from '../components/SubscribeSection';

const BookingPage = () => {
    return (
        <React.Fragment>
            <section id="intro" style={{ backgroundColor: '#E8F0F1' }}>
                <div className="container">
                    <div className="banner-content padding-large">
                        <h1 className="display-3 fw-bold text-dark">Booking</h1>
                        <span className="item"><Link to="/" className="">Home</Link></span> &nbsp; <span className="">/</span> &nbsp;
                        <span className=" item">Booking</span>
                    </div>
                </div>
            </section>

            <section id="book-appointment" className="padding-large mb-0">
                <div className="container">
                    <div className="row">
                        <div className="display-header">
                            <h2 className="display-5 fw-bold text-dark">Book Appointment or call: <span
                                className="text-primary-500">(+487) 384 9452</span></h2>
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
                                <select className="form-select focus-transparent border ps-4 border-radius-10 w-100"
                                    aria-invalid="false" name="choose">
                                    <option value="Select Your Doctor">Select Doctor</option>
                                    <option value="Naidan Smith">William Davies</option>
                                    <option value="Danial Frankie">Charlotte Taylor</option>
                                    <option value="Jason Roy">William Jones</option>
                                </select>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <div className="input-group date" id="datepicker">
                                    <input type="date" id="start" name="appointment" min="2018-01-01" max="2018-12-31"
                                        placeholder="Choose Date"
                                        className="bg-transparent ps-4 border border-radius-10 position-relative w-100" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <div className="input-group time" id="timepicker">
                                    <input type="time" id="time" name="appointment" min="09:00" max="18:00"
                                        className="bg-transparent ps-4 border border-radius-10 position-relative w-100" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <select className="form-select focus-transparent border ps-4 border-radius-10 " aria-invalid="false"
                                    name="choose">
                                    <option>Select Pricing Plan (optional)</option>
                                    <option value="1">Standard</option>
                                    <option value="2">Basic</option>
                                    <option value="3">Deluxe</option>
                                    <option value="4">Ultimate</option>
                                </select>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <input type="text" name="phone" placeholder="Phone Number"
                                    className="border ps-4 border-radius-10 w-100" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <input type="text" name="name" placeholder="Full Name" className="border ps-4 border-radius-10 w-100" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
                                <input type="email" name="email" placeholder="E-Mail" className="border ps-4 border-radius-10 w-100" />
                            </div>

                            <div className="col-lg-12 mb-3">
                                <textarea placeholder="Write Your Message Here"
                                    className="form-control ps-3 bg-transparent ps-4 border-radius-10" rows="8"></textarea>
                            </div>
                        </form>
                    </div>
                    <Link to="#" className="btn btn-medium btn-primary btn-pill mt-3 text-uppercase">Book an appointment</Link>
                </div>
            </section>

            <section id="price">
                <div className="container pt-5">
                    <h2 className=" fw-bold display-4 mb-5">Pricing Plans</h2>
                    <div className="row py-4">
                        <div className="col-lg-3 pb-4">
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

                        <div className="col-lg-3 pb-4">
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

                        <div className="col-lg-3 pb-4">
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

                        <div className="col-lg-3 pb-4">
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

            <section id="faqs" className="padding-large">
                <div className="container">
                    <div className="row">
                        <div className="display-header mb-5">
                            <h2 className="display-5 fw-bold text-center text-dark">We've Got Answers</h2>
                        </div>
                        <div className="accordion" id="accordion">
                            <div className="accordion-item border-0 py-3">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button fs-4 fw-bold text-dark bg-transparent focus-transparent text-capitalize shadow-none"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                        Why to believe with Insove medical healthcare ?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse border-0 collapse show"
                                    data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <p>Diam orci gravida convallis at enim risus viverra. Hac mi tristique in aliquet
                                            tincidunt nam lectus nec. Placerat interdum auctor facilisi massa laoreet hendrerit
                                            posuere a. Tristique ultricies consectetu at.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 py-3">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button fs-4 fw-bold text-dark bg-transparent collapsed focus-transparent text-capitalize shadow-none"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                        aria-expanded="false" aria-controls="collapseTwo">
                                        Will we get healthcare updates after surgery ?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <p>This is the second item's accordion body.It is hidden by default, until the collapse
                                            plugin adds the appropriate classes that we use to style each element. These classes
                                            control the overall appearance, as well as the showing and hiding via CSS
                                            transitions. You can modify any of this with custom CSS or overriding our default
                                            variables.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 py-3">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button fs-4 fw-bold text-dark bg-transparent collapsed focus-transparent text-capitalize shadow-none"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                        aria-expanded="false" aria-controls="collapseThree">
                                        What is the cost for just check-up ?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <p>This is the third item's accordion body.It is hidden by default, until the collapse
                                            plugin adds the appropriate classes that we use to style each element. These classes
                                            control the overall appearance, as well as the showing and hiding via CSS
                                            transitions. You can modify any of this with custom CSS or overriding our default
                                            variables.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item border-0 py-3">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button fs-4 fw-bold text-dark bg-transparent collapsed focus-transparent text-capitalize shadow-none"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                        aria-expanded="false" aria-controls="collapseFour">
                                        Can i cancel my appointment ?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                    <div className="accordion-body">
                                        <p>This is the third item's accordion body.It is hidden by default, until the collapse
                                            plugin adds the appropriate classes that we use to style each element. These classes
                                            control the overall appearance, as well as the showing and hiding via CSS
                                            transitions. You can modify any of this with custom CSS or overriding our default
                                            variables.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SubscribeSection />
        </React.Fragment>
    );
};

export default BookingPage; 