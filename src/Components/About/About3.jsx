import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const About3 = () => {

            useEffect(() => {
                loadBackgroudImages();
            }, []);

    return (
        <section className="about-section section-padding bg-color" data-background="/assets/img/about/about-bg-2.jpg" >
            <div className="container">
                <div className="left-shape float-bob-x">
                    <img src="/assets/img/about/bag-shape.png" alt="img" />
                </div>
                <div className="about-wrapper-3">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image wow fadeInUp wow" data-wow-delay=".3s">
                                <img src="/assets/img/about/06.png" alt="img" />
                                <div className="about-image-2 wow fadeInUp wow" data-wow-delay=".5s">
                                    <img src="/assets/img/about/07.png" alt="img" />
                                    <div className="plane-shape float-bob-y">
                                        <img src="/assets/img/about/plane-shape3.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span className="sub-title wow fadeInUp">Mission & Vision</span>
                                    <h2 className="wow fadeInUp wow" data-wow-delay=".3s">
                                        Mwasalat Holdings Vision for <br/>
                                        Smarter, Sustainable Cities
                                    </h2>
                                </div>
                                <p className="wow fadeInUp wow" data-wow-delay=".5s">
                                    Mwasalat Holdings is a group of companies that precisely enhances mass transit approachability, efficiency, and convenience for smarter cities worldwide. It provides reliable, affordable, and sustainable transportation solutions that improve the daily lives of all urban residents.
                                </p>
                                <div className="about-items wow fadeInUp wow" data-wow-delay=".3s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <i className="bi bi-target"></i>
                                        </div>
                                        <div className="content">
                                            <h4>
                                                Our Mission
                                            </h4>
                                            <p>
                                                To deliver sustainable world class mobility services <br/>
                                                experience by leveraging on Technology, Intellectual <br/>
                                                resources, and a fabulous infrastructure.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-items wow fadeInUp wow" data-wow-delay=".5s">
                                    <div className="about-icon-items">
                                        <div className="icon">
                                            <i className="bi bi-eye-fill"></i>
                                        </div>
                                        <div className="content">
                                            <h4>
                                                Our Vision
                                            </h4>
                                            <p>
                                                To be the premier and most-admired mobility service <br/>
                                                provider in the global mobility landscape through one <br/>
                                                platform that offers a sustainable value for all stakeholders.
                                            </p>
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

export default About3;