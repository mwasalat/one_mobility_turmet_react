import React from 'react';
import { Link } from 'react-router';

const Cta1 = () => {
    return (
        <section className="cta-section section-padding">
        <div className="mobile-shape">
            <img src="/assets/img/mobile.png" alt="img" />
        </div>
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-6 col-md-6 wow fadeInUp wow" data-wow-delay=".3s">
                    <div className="cta-items">
                        <div className="cta-text">
                            <h2>Mwasalat Holdings</h2>
                            <p>
                                Premier Auto Rental <br/>
                                & Fleet Solutions.
                            </p>
                        </div>
                        <Link to="/contact" className="theme-btn">Request a Quote <i className="bi bi-arrow-right"></i></Link>
                        <div className="cta-image">
                            <img src="/assets/img/bag-shape.png" alt="img" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 wow fadeInUp wow" data-wow-delay=".5s">
                    <div className="cta-items style-2">
                        <div className="cta-text">
                            <h2>24/7 Service</h2>
                            <p>
                                Taxi & Transport <br/>
                                When You Need It.
                            </p>
                        </div>
                        <Link to="/contact" className="theme-btn">Request a Quote <i className="bi bi-arrow-right"></i></Link>
                        <div className="cta-image">
                            <img src="/assets/img/plane-shape.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Cta1;