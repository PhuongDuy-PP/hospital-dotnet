import React from 'react';
import { Link } from 'react-router-dom';

const BlogSinglePage = () => {
    return (
        <>
            <section id="intro" style={{ backgroundColor: '#E8F0F1' }}>
                <div className="container">
                    <div className="banner-content padding-large">
                        <h1 className="display-3 fw-bold text-dark">Blog-Single</h1>
                        <span className="item"><Link to="/" className="">Home</Link></span> &nbsp; <span className="">/</span> &nbsp; <span
                            className=" item">Blog-Single</span>
                    </div>
                </div>
            </section>

            <section className="padding-small">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className="post-content ">
                                <h2 className="mt-5 text-capitalize">How to be relax & calm in hard situations</h2>
                                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eisusmod tempor
                                    incidunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation equip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
                                    sit voluptatem accusantium doloremque laudantium.</p>
                                <div className="post-image mt-5">
                                    <img src="/images/single-post-item.jpg" alt="post-image" className="img-fluid" />
                                </div>
                                <h4 className="mt-5">How to see the bright side of things</h4>
                                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eisusmod tempor
                                    incidunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation equip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
                                    sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                    inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                                    dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                                    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                                    tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                <blockquote className="blockquote text-start p-5 my-5">
                                    <p>A great discovery solves a great problem but there is a grain of discovery in the solution
                                        of any problem. Your problem may be modest; but if it challenges your curiosity and brings
                                        into play your inventive faculties, and if you solve it by your own means, you may
                                        experience the tension and enjoy the triumph of discovery.</p>
                                    <cite className="fs-5 fw-semibold mt-3 text-dark d-block">– George Polya</cite>
                                </blockquote>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eisusmod tempor incidunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation equip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
                                    sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                    inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                                    dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                                    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                                    tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogSinglePage; 