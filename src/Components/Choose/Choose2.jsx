import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Choose2 = () => {

            useEffect(() => {
                loadBackgroudImages();
            }, []);

    return (
        <section className="choose-us-section section-padding bg-cover fix" data-background="/assets/img/choose-us-bg-2.jpg" style={{position: 'relative'}}>
            {/* <div className="float-bob-x" style={{position: 'absolute', top: '50px', left: '30px', zIndex: 10}}>
                <img src="/assets/img/destination/drone.png" alt="drone" style={{width: '120px'}} />
            </div> */}
            <div className="container">
                <div className="choose-us-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-xl-7 col-lg-6">
                            <div className="choose-us-content">
                                <div className="section-title">
                                    {/* <span className="sub-title wow fadeInUp">
                                        Why Choose Us
                                    </span> */}
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                                         Why Choose Us
                                    </h2>
                                </div>
                                <p className="wow fadeInUp wow" data-wow-delay=".3s">
                                    We own a diverse portfolio of companies catering to various market segments in the transportation industry. Every company feeds off the expertise, experience and networks of the group to deliver world-class mobility solutions.
                                </p>
                                <div className="choose-us-area">
                                    <div className="line-shape">
                                        <img src="/assets/img/line-shape2.png" alt="img" />
                                    </div>
                                    <div className="choose-us-items wow fadeInUp wow" data-wow-delay=".3s">
                                        <h3 className="number">
                                            01
                                        </h3>
                                        <div className="content">
                                            <h4>
                                                Innovation & Technology
                                            </h4>
                                            <p>
                                                We utilize the latest technologies to make our services <br/> more convenient, accessible, and environmentally responsible.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="choose-us-items wow fadeInUp wow" data-wow-delay=".5s">
                                        <h3 className="number">
                                            02
                                        </h3>
                                        <div className="content">
                                            <h4>
                                                Expertise & Experience
                                            </h4>
                                            <p>
                                                Our team includes experts in transportation, engineering, <br/> and technology, dedicated to continuous improvement and innovation.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="choose-us-items wow fadeInUp wow" data-wow-delay=".7s">
                                        <h3 className="number">
                                            03
                                        </h3>
                                        <div className="content">
                                            <h4>
                                                Commitment to Excellence
                                            </h4>
                                            <p>
                                                We are committed to delivering the highest level of service <br/> and setting benchmarks in the field of mobility.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 wow fadeInUp wow" data-wow-delay=".3s">
                            <div className="choose-us-thumb">
                                <img
                                    src="/assets/img/mwasalat_holdings_dubai_img.png"
                                    alt="img"
                                    className="wow"
                                    style={{ width: '100%', height: 'auto', objectFit: 'contain', objectPosition: 'center', display: 'block' }}
                                />
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    );
};

export default Choose2;