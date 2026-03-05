import React from 'react';
import { Link } from 'react-router';

const About2 = () => {
    return (
<section className="about-section section-padding fix">
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row g-4 align-items-stretch">
                        <div className="col-lg-6 d-flex">
                            <div className="w-100 float-bob-y d-flex flex-column" style={{gap: '12px'}}>
                                {/* Top row: horizontal image */}
                                <div style={{flex: '0 0 auto'}}>
                                    <img src="/assets/img/dubai_workshop_smart.png" alt="Smart City Workshop" className="wow img-custom-anim-left w-100" style={{objectFit: 'cover', borderRadius: '12px', height: '180px'}} data-wow-duration="1.5s" data-wow-delay="0.2s" />
                                </div>
                                {/* Bottom row: two vertical images side by side */}
                                <div className="d-flex" style={{flex: '1 1 auto', gap: '12px'}}>
                                    <div style={{flex: 1}}>
                                        <img src="/assets/img/about/03.png" alt="Smart City" className="wow img-custom-anim-top w-100 h-100" style={{objectFit: 'cover', borderRadius: '12px'}} data-wow-duration="1.5s" data-wow-delay="0.4s" />
                                    </div>
                                    <div style={{flex: 1}}>
                                        <img src="/assets/img/smart_city_school_buses.png" alt="School Buses" className="wow img-custom-anim-right w-100 h-100" style={{objectFit: 'cover', borderRadius: '12px'}} data-wow-duration="1.5s" data-wow-delay="0.6s" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">
                                        Genesis About Us
                                    </span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                                        We Are Committed to Innovation,
                                        Customer Service & Environmental Responsibility
                                    </h2>
                                </div>
                                <p className="wow fadeInUp wow" data-wow-delay=".5s">
                                    Mwasalat Holdings is a group of companies that work to make it easier, faster and more convenient for you to get around. We provide transportation options that are dependable, cost-effective and environmentally conscious enhancing the daily lives of all our urban residents.
                                </p>
                                <div className="about-items wow fadeInUp wow" data-wow-delay=".3s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <img src="/assets/img/check.png" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Wide Range of <br/> Services
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Auto rental, taxi, public & school transport, <br/> insurance, trading, service center & technology.
                                        </p>
                                    </div>
                                </div>
                                <div className="about-items wow fadeInUp wow" data-wow-delay=".5s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <img src="/assets/img/check.png" alt="img" />
                                        </div>
                                        <div className="content">
                                            <h5>
                                                Expert Team <br/> & Know-How
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Experts in transportation & technology <br/> delivering the highest level of service.
                                        </p>
                                    </div>
                                </div>
                                <Link to="/about" className="theme-btn wow fadeInUp wow" data-wow-delay=".7s">Discover More<i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;