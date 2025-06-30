import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
    return (
        <>
            <section id="intro" style={{ backgroundColor: '#E8F0F1' }}>
                <div className="container">
                    <div className="banner-content padding-large">
                        <h1 className="display-3 fw-bold text-dark">Blog</h1>
                        <span className="item"><Link to="/" className="">Home</Link></span> &nbsp; <span className="">/</span> &nbsp; <span
                            className=" item">Blog</span>
                    </div>
                </div>
            </section>

            <section id="latest-blog" className="padding-large">
                <div className="container">
                    <div className="row">

                        <div className="post-grid d-flex flex-wrap mt-4">
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                                <div className="card-item pe-3">
                                    <div className="card border-0 bg-transparent">
                                        <div className="card-image position-relative">
                                            <Link to="/blog/1"> <img src="/images/post-item1.jpg" alt=""
                                                className="post-image img-fluid border-radius-top-10" /> </Link>
                                            <span
                                                className="bg-primary-dim text-light position-absolute text-uppercase text-capitalize">Medical</span>
                                        </div>
                                    </div>
                                    <div className="card-body p-3 mt-2">
                                        <div className="meta-date">Jan 28, 2023</div>
                                        <h3 className="card-title fs-3 text-capitalize fw-semibold mt-3">
                                            <Link to="/blog/1">Normal anxiety happens to all of us</Link>
                                        </h3>
                                        <p>It's normal to feel anxiety, worry and grief any time you're diagnosed with a condition that's
                                            certainly true... <Link to="/blog/1" className="text-decoration-underline"><em>Read more</em></Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                                <div className="card-item pe-3">
                                    <div className="card border-0 bg-transparent">
                                        <div className="card-image position-relative">
                                            <Link to="/blog/1"> <img src="/images/post-item2.jpg" alt=""
                                                className="post-image img-fluid border-radius-top-10" /> </Link>
                                            <span
                                                className="bg-primary-dim text-light position-absolute text-uppercase text-capitalize">Health</span>
                                        </div>
                                    </div>
                                    <div className="card-body p-3 mt-2">
                                        <div className="meta-date">Jan 26, 2023</div>
                                        <h3 className="card-title fs-3 text-capitalize fw-semibold mt-3">
                                            <Link to="/blog/1">The best decision is to check your health</Link>
                                        </h3>
                                        <p>It's normal to feel anxiety, worry and grief any time you're diagnosed with a condition that's
                                            certainly true... <Link to="/blog/1" className="text-decoration-underline"><em>Read more</em></Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                                <div className="card-item pe-3">
                                    <div className="card border-0 bg-transparent">
                                        <div className="card-image position-relative">
                                            <Link to="/blog/1"> <img src="/images/post-item3.jpg" alt=""
                                                className="post-image img-fluid border-radius-top-10" /> </Link>
                                            <span
                                                className="bg-primary-dim text-light position-absolute text-uppercase text-capitalize">Dental
                                                Health</span>
                                        </div>
                                    </div>
                                    <div className="card-body p-3 mt-2">
                                        <div className="meta-date">Jan 4, 2023</div>
                                        <h3 className="card-title fs-3 text-capitalize fw-semibold mt-3">
                                            <Link to="/blog/1">Best ways to make your teeth strong</Link>
                                        </h3>
                                        <p>It's normal to feel anxiety, worry and grief any time you're diagnosed with a condition that's
                                            certainly true... <Link to="/blog/1" className="text-decoration-underline"><em>Read more</em></Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                                <div className="card-item pe-3">
                                    <div className="card border-0 bg-transparent">
                                        <div className="card-image position-relative">
                                            <Link to="/blog/1"> <img src="/images/post-item4.jpg" alt=""
                                                className="post-image img-fluid border-radius-top-10" /> </Link>
                                            <span
                                                className="bg-primary-dim text-light position-absolute text-uppercase text-capitalize">Medical</span>
                                        </div>
                                    </div>
                                    <div className="card-body p-3 mt-2">
                                        <div className="meta-date">Jan 28, 2023</div>
                                        <h3 className="card-title fs-3 text-capitalize fw-semibold mt-3">
                                            <Link to="/blog/1">Normal anxiety happens to all of us</Link>
                                        </h3>
                                        <p>It's normal to feel anxiety, worry and grief any time you're diagnosed with a condition that's
                                            certainly true... <Link to="/blog/1" className="text-decoration-underline"><em>Read more</em></Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                                <div className="card-item pe-3">
                                    <div className="card border-0 bg-transparent">
                                        <div className="card-image position-relative">
                                            <Link to="/blog/1"> <img src="/images/post-item5.jpg" alt=""
                                                className="post-image img-fluid border-radius-top-10" /> </Link>
                                            <span
                                                className="bg-primary-dim text-light position-absolute text-uppercase text-capitalize">Health</span>
                                        </div>
                                    </div>
                                    <div className="card-body p-3 mt-2">
                                        <div className="meta-date">Jan 26, 2023</div>
                                        <h3 className="card-title fs-3 text-capitalize fw-semibold mt-3">
                                            <Link to="/blog/1">The best decision is to check your health</Link>
                                        </h3>
                                        <p>It's normal to feel anxiety, worry and grief any time you're diagnosed with a condition that's
                                            certainly true... <Link to="/blog/1" className="text-decoration-underline"><em>Read more</em></Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
                                <div className="card-item pe-3">
                                    <div className="card border-0 bg-transparent">
                                        <div className="card-image position-relative">
                                            <Link to="/blog/1"> <img src="/images/post-item6.jpg" alt=""
                                                className="post-image img-fluid border-radius-top-10" /> </Link>
                                            <span
                                                className="bg-primary-dim text-light position-absolute text-uppercase text-capitalize">Dental
                                                Health</span>
                                        </div>
                                    </div>
                                    <div className="card-body p-3 mt-2">
                                        <div className="meta-date">Jan 4, 2023</div>
                                        <h3 className="card-title fs-3 text-capitalize fw-semibold mt-3">
                                            <Link to="/blog/1">Best ways to make your teeth strong</Link>
                                        </h3>
                                        <p>It's normal to feel anxiety, worry and grief any time you're diagnosed with a condition that's
                                            certainly true... <Link to="/blog/1" className="text-decoration-underline"><em>Read more</em></Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-center">
                                <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage; 