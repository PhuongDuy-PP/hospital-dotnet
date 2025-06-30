import React from 'react';
import { Link } from 'react-router-dom';

export default function DepartmentsPage() {
  return (
    <React.Fragment>
      {/* Banner Section */}
      <section id="intro" style={{ backgroundColor: '#E8F0F1' }}>
        <div className="container">
          <div className="banner-content padding-large">
            <h1 className="display-3 fw-bold text-dark">Departments</h1>
            <span className="item"><Link to="/" className="">Home</Link></span> &nbsp; <span className="">/</span> &nbsp;
            <span className="item">Departments</span>
          </div>
        </div>
      </section>

      <div className="post-wrap py-5 no-padding-bottom">
        <div className="container">
          <div className="row flex-md-row-reverse g-5 mt-4">
            <main className="post-grid col-md-9">
              <div className="row">
                <article className="post-item">
                  <h2 className="display-5 fw-bold pb-5 text-dark">Laboratory Analysis</h2>
                  <p>Velit, praesent pharetra malesuada id pulvinar amet. Consequat potenti mollis massa iaculis et, dolor, eget lectus. Aliquam pellentesque molestie felis fames sed eget non euismod eget. Et eget ullamcorper urna, elit ac diam tellus viverra lacus.</p>
                  <p>Id pulvinar amet. Consequat potenti mollis massa iaculis et, dolor, eget lectus. Aliquam pellentesque molestie felis fames sed eget non euismod eget. Et eget ullamcorper urna, elit ac diam tellus viverra lacus.</p>
                  <div className="hero-image mt-5">
                    <img src="/images/blog-large1.jpg" alt="single-post" className="img-fluid" />
                  </div>
                  <div className="post-content py-5">
                    <div className="post-description">
                      <blockquote>"Sit suscipit tortor turpis sed fringilla lectus facilisis amet. Ipsum, amet dolor curabitur non aliquet orci urna volutpat. Id aliquam neque, ut vivamus sit imperdiet enim, lacus, vel."</blockquote>
                      <h2 className="my-5">Investigation and Treatments</h2>
                      <div className="row">
                        <div className="col-md-6">
                          <table className="table mb-5">
                            <thead>
                              <tr>
                                <th scope="col">Investigation</th>
                                <th scope="col">Costs</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td scope="row">Colonoscopy</td>
                                <td className="text-primary">$250</td>
                              </tr>
                              <tr>
                                <td scope="row">Gastroscopy</td>
                                <td className="text-primary">$236</td>
                              </tr>
                              <tr>
                                <td scope="row">Allergy testing</td>
                                <td className="text-primary">$150</td>
                              </tr>
                              <tr>
                                <td scope="row">CT scan</td>
                                <td className="text-primary">$565</td>
                              </tr>
                              <tr>
                                <td scope="row">Cardiac CT scan</td>
                                <td className="text-primary">$300</td>
                              </tr>
                              <tr>
                                <td scope="row">Paratryroid scan</td>
                                <td className="text-primary">$180</td>
                              </tr>
                              <tr>
                                <td scope="row">Captopril renogram</td>
                                <td className="text-primary">$320</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-md-6">
                          <table className="table mb-5">
                            <thead>
                              <tr>
                                <th scope="col">Treatments</th>
                                <th scope="col">Costs</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td scope="row">Bronchoscopy</td>
                                <td className="text-primary">$150-300</td>
                              </tr>
                              <tr>
                                <td scope="row">Cardiac ablation</td>
                                <td className="text-primary">$250-400</td>
                              </tr>
                              <tr>
                                <td scope="row">Sport injuries</td>
                                <td className="text-primary">$150</td>
                              </tr>
                              <tr>
                                <td scope="row">Women's health</td>
                                <td className="text-primary">$565</td>
                              </tr>
                              <tr>
                                <td scope="row">Orthotics</td>
                                <td className="text-primary">$300</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p>Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et eros purus fermentum, massa ullamcorper sit sollicitudin. Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec, rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis eget leo, lectus.</p>
                      <h2 className="my-5">Our Doctors</h2>
                      <div className="row my-4">
                        <div className="col-md-6">
                          <img src="/images/team-item1.jpg" alt="post-image" className=" img-fluid align-left" />
                          <h5 className=" mt-3">Velit, praesent pharetra malesuada</h5>
                        </div>
                        <div className="col-md-6">
                          <img src="/images/team-item.jpg" alt="post-image" className=" img-fluid align-right" />
                          <h5 className=" mt-3">Velit, praesent pharetra malesuada</h5>
                        </div>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur facilisis vivamus massa magna. Blandit mauris libero condimentum commodo morbi consectetur sociis convallis sit. Magna diam amet justo sed vel dolor et volutpat integer. Iaculis sit sapien hac odio elementum egestas neque. Adipiscing purus euismod orci sem amet, et. Turpis erat ornare nisi laoreet est euismod.</p>
                      <div className="my-5">
                        <h2 className="mb-5">Our Best Services </h2>
                        <ul className="inner-list list-unstyled">
                          <li><span className="price-tick">✓</span> Blandit mauris libero condimentum commodo sociis convallis sit.</li>
                          <li><span className="price-tick">✓</span> Magna diam amet justo sed vel dolor et volutpat integer.</li>
                          <li><span className="price-tick">✓</span> Laculis sit sapien hac odio elementum egestas neque.</li>
                          <li><span className="price-tick">✓</span> Blandit mauris libero condimentum commodo sociis convallis sit.</li>
                          <li><span className="price-tick">✓</span> Magna diam amet justo sed vel dolor et volutpat integer.</li>
                          <li><span className="price-tick">✓</span> Laculis sit sapien hac odio elementum egestas neque.</li>
                        </ul>
                      </div>
                      <p>Tortor diam dignissim amet, in interdum aliquet. Magnis dictum et eros purus fermentum, massa ullamcorper sit sollicitudin. Nascetur libero elementum adipiscing mauris maecenas et magna. Etiam nec, rutrum a diam lacus, nunc integer etiam. Mattis pulvinar non viverra donec pellentesque. Odio mi consequat libero dolor. Porta ut diam lobortis eget leo, lectus.</p>
                    </div>
                  </div>
                </article>
              </div>
            </main>

            <aside className="col-md-3">
              <div className="post-sidebar">
                <div className="widget block-tag border p-3 mb-5">
                  <h5 className="widget-title text-uppercase border-bottom pb-3 mb-3">Book Appointment</h5>
                  <p>Blandit mauris libero condimentum commodo morbi consectetur sociis convallis sit</p>
                  <div className="btn-book">
                    <Link to="/booking" className="btn btn-medium btn-outline-primary btn-pill text-uppercase px-4 py-3">Book Now</Link>
                  </div>
                </div>
                <div className="widget sidebar-categories border p-3 mb-5">
                  <h5 className="widget-title text-uppercase border-bottom pb-3 mb-3">Deparments</h5>
                  <ul className="list-unstyled">
                    <li className="my-2 d-flex align-items-center">
                      <svg width="20" height="20"><use href="#arrow-right"></use></svg>
                      <Link to="/departments" className="item-anchor text-uppercase ps-2"> Laboratory Analysis</Link>
                    </li>
                    <li className="my-2 d-flex align-items-center">
                      <svg width="20" height="20"><use href="#arrow-right"></use></svg>
                      <Link to="/departments" className="item-anchor text-uppercase ps-2"> Cardiology Clinic</Link>
                    </li>
                    <li className="my-2 d-flex align-items-center">
                      <svg width="20" height="20"><use href="#arrow-right"></use></svg>
                      <Link to="/departments" className="item-anchor text-uppercase ps-2"> Gynecology Clinic</Link>
                    </li>
                    <li className="my-2 d-flex align-items-center">
                      <svg width="20" height="20"><use href="#arrow-right"></use></svg>
                      <Link to="/departments" className="item-anchor text-uppercase ps-2"> Pathology Clinic</Link>
                    </li>
                    <li className="my-2 d-flex align-items-center">
                      <svg width="20" height="20"><use href="#arrow-right"></use></svg>
                      <Link to="/departments" className="item-anchor text-uppercase ps-2"> Pediatrics Clinic</Link>
                    </li>
                    <li className="my-2 d-flex align-items-center">
                      <svg width="20" height="20"><use href="#arrow-right"></use></svg>
                      <Link to="/departments" className="item-anchor text-uppercase ps-2"> Neurology Clinic</Link>
                    </li>
                  </ul>
                </div>
                <div className="widget sidebar-recent-post mb-5">
                  <h5 className="widget-title text-uppercase border-bottom pb-3 mb-3">Recent Posts</h5>
                  <div className="sidebar-post-item d-flex justify-content-center my-2">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="image-holder mt-1">
                          <Link to="/blog-single"><img src="/images/post-item1.jpg" alt="blog" className="img-fluid" /></Link>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="sidebar-post-content text-uppercase">
                          <div className="post-meta fs-6 text-secondary">
                            <span className="meta-date">jul 11, 2022</span>
                          </div>
                          <h6 className="post-title">
                            <Link to="/blog-single">How to take care of health</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-post-item d-flex justify-content-center my-2">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="image-holder mt-1">
                          <Link to="/blog-single"><img src="/images/post-item2.jpg" alt="blog" className="img-fluid" /></Link>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="sidebar-post-content text-uppercase">
                          <div className="post-meta fs-6 text-secondary">
                            <span className="meta-date">jul 18, 2022</span>
                          </div>
                          <h6 className="post-title">
                            <Link to="/blog-single">Top 10 hacks for healthy life </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-post-item d-flex justify-content-center my-2">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="image-holder mt-1">
                          <Link to="/blog-single"><img src="/images/post-item3.jpg" alt="blog" className="img-fluid" /></Link>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="sidebar-post-content text-uppercase">
                          <div className="post-meta fs-6 text-secondary">
                            <span className="meta-date">Aug 21, 2022</span>
                          </div>
                          <h6 className="post-title">
                            <Link to="/blog-single">Best ways to clean your teeth</Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}