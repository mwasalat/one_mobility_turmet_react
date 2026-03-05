import React from 'react';

const Testimonial2 = () => {
    return (
        <section className="testimonial-section section-padding fix section-bg">
            <div className="container">
                <div className="testimonial-wrapper-2">
                    <div className="row g-4">
                        <div className="col-lg-5 wow fadeInUp" data-wow-delay=".3s">
                            <div className="testimonial-image">
                                <img src="/assets/img/testimonial/gceo_message.jpg" alt="Ahmed Abood Al Yafei - GCEO" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="testimonial-content">
                                <div className="section-title">
                                    {/* <span className="sub-title wow fadeInUp">
                                        About GCEO
                                    </span> */}
                                    <h2 className="wow fadeInUp" data-wow-delay=".5s">
                                        About GCEO
                                    </h2>
                                </div>
                                <div className="swiper testimonial-slider2">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="testimonial-card-items">
                                                <div className="star-item">
                                                    <div className="icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="48" viewBox="0 0 54 48" fill="none">
                                                            <path d="M2 24.8696H16.4927C20.3157 24.8696 22.9395 27.7946 22.9395 31.3751V39.4945C22.9395 43.075 20.3157 45.9998 16.4927 45.9998H8.44679C4.89858 45.9998 2 43.075 2 39.4945V24.8696" stroke="#1CA8CB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M2 24.8699C2 9.6148 4.82365 7.09343 13.3194 2" stroke="#1CA8CB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M31.0605 24.8696H45.5532C49.3763 24.8696 52 27.7946 52 31.3751V39.4945C52 43.075 49.3763 45.9998 45.5532 45.9998H37.5073C33.9591 45.9998 31.0605 43.075 31.0605 39.4945V24.8696" stroke="#1CA8CB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M31.0605 24.8699C31.0605 9.6148 33.884 7.09343 42.3798 2" stroke="#1CA8CB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p>
                                                    With an impressive work experience of over three decades in the transportation industry, Mr. Ahmed Abood Al Yafei is the driving force behind the group & well known in the industry. He has successfully fueled the growth of the group over the years to its current market-leading position. He has shaped and directed all aspects of the transport business to maximize revenue and growth taking advantage of every opportunity in the market. He is a born charismatic leader who is known to enhance the managerial skills of his associates. Holding a baccalaureate degree in Commerce from Middlesex University of UK and completed his master's degree in Business Administration at Torrens University, Australia. When he is not in the office, he is probably buried in a book or teeing off on the golf course.
                                                </p>
                                                <div className="client-info-items">
                                                    <div className="info-text">
                                                        <h6>Ahmed Abood Al Yafei</h6>
                                                        <p>Group CEO, Mwasalat Holdings</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial2;