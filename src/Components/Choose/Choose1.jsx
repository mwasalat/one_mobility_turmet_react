import React, { useEffect } from 'react';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import { Link } from 'react-router';

const Choose1 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    const features = [
        {
            icon: 'bi bi-lightbulb',
            title: 'Innovation & Technology',
            desc: 'Leveraging the latest technologies for convenient, accessible and sustainable mobility services.'
        },
        {
            icon: 'bi bi-award',
            title: 'Expertise & Know-How',
            desc: 'Over three decades of expertise in transportation & technology delivering the highest level of service.'
        },
        {
            icon: 'bi bi-globe',
            title: 'Diverse Portfolio',
            desc: 'A broad range of subsidiaries covering public transport, taxi, auto rental, school buses and more.'
        },
        {
            icon: 'bi bi-shield-check',
            title: 'Safety & Reliability',
            desc: 'Committed to the highest safety standards ensuring reliable journeys for every passenger.'
        },
    ];

    return (
        <section className="choose-us-section section-padding fix" style={{background: 'linear-gradient(135deg, #f0f9ff 0%, #e8f4f8 100%)'}}>
            <div className="container">
                <div className="row g-5 align-items-center">
                    {/* Image Side */}
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                        <div style={{position: 'relative'}}>
                            <img
                                src="/assets/img/about/un_design.jpg"
                                alt="Mwasalat Holdings"
                                style={{width: '100%', borderRadius: '16px', objectFit: 'cover', maxHeight: '520px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)'}}
                            />
                            {/* Stats badge */}
                            <div style={{
                                position: 'absolute', bottom: '30px', left: '-20px',
                                background: '#1CA8CB', color: '#fff', borderRadius: '12px',
                                padding: '18px 24px', boxShadow: '0 10px 30px rgba(28,168,203,0.4)',
                                textAlign: 'center', minWidth: '140px'
                            }}>
                                <div style={{fontSize: '2rem', fontWeight: '800', lineHeight: 1}}>30+</div>
                                <div style={{fontSize: '0.82rem', fontWeight: '500', marginTop: '4px', opacity: 0.9}}>Years of Experience</div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay=".3s">
                        <div className="section-title mb-4">
                            <span className="sub-title wow fadeInUp">Why Choose Us</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s">
                                Welcome to Mwasalat Holdings
                            </h2>
                        </div>
                        <p className="wow fadeInUp mb-4" data-wow-delay=".3s" style={{color: '#666', lineHeight: '1.8'}}>
                            We own a diverse portfolio of companies catering to various market segments in the transportation industry. Every company feeds off the expertise, experience and networks of the group to deliver world-class mobility solutions.
                        </p>

                        <div className="row g-3 mb-4">
                            {features.map((f, i) => (
                                <div key={i} className="col-sm-6 wow fadeInUp" data-wow-delay={`${0.3 + i * 0.1}s`}>
                                    <div style={{
                                        background: '#fff',
                                        borderRadius: '12px',
                                        padding: '20px 16px',
                                        height: '100%',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                                        borderLeft: '4px solid #1CA8CB',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                    }}>
                                        <div style={{
                                            width: '44px', height: '44px', borderRadius: '10px',
                                            background: 'linear-gradient(135deg, #1CA8CB, #0d7a9a)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            marginBottom: '12px'
                                        }}>
                                            <i className={f.icon} style={{color: '#fff', fontSize: '1.2rem'}}></i>
                                        </div>
                                        <h6 style={{fontWeight: '700', marginBottom: '6px', fontSize: '0.95rem', color: '#1a2e4a'}}>{f.title}</h6>
                                        <p style={{margin: 0, fontSize: '0.82rem', color: '#888', lineHeight: '1.6'}}>{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link to="/contact" className="theme-btn wow fadeInUp" data-wow-delay=".7s">
                            Contact Us <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose1;