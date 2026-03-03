import React from 'react';
import { Link } from 'react-router';
import { missionVision } from '../../content/oneMobilityContent';

const Destination2 = () => {
    return (
        <section className="fix section-padding" style={{ background: 'linear-gradient(135deg, #f8fbff 0%, #e8f4fd 100%)' }}>
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-5">
                    <span className="sub-title wow fadeInUp" style={{ color: '#1CA8CB', fontWeight: '600', letterSpacing: '2px' }}>
                        WHO WE ARE
                    </span>
                    <h2 className="wow fadeInUp mt-3" data-wow-delay=".3s" style={{ fontSize: '42px', fontWeight: '700', color: '#0a2540' }}>
                        Mission & Vision
                    </h2>
                    <p className="wow fadeInUp mt-3" data-wow-delay=".4s" style={{ maxWidth: '600px', margin: '0 auto', color: '#5a6a7a', fontSize: '18px' }}>
                        Driving the future of urban mobility with innovation, sustainability, and excellence.
                    </p>
                </div>

                {/* Mission & Vision Cards */}
                <div className="row g-4 justify-content-center">
                    {/* Mission Card */}
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div style={{
                            background: 'linear-gradient(145deg, #1CA8CB 0%, #0d7a94 100%)',
                            borderRadius: '24px',
                            padding: '50px 40px',
                            height: '100%',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 20px 60px rgba(28, 168, 203, 0.3)'
                        }}>
                            {/* Decorative Circle */}
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.1)'
                            }}></div>
                            <div style={{
                                position: 'absolute',
                                bottom: '-30px',
                                left: '-30px',
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.08)'
                            }}></div>
                            
                            {/* Icon */}
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'rgba(255,255,255,0.2)',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '30px'
                            }}>
                                <i className="bi bi-rocket-takeoff-fill" style={{ fontSize: '36px', color: '#fff' }}></i>
                            </div>
                            
                            <h3 style={{ color: '#fff', fontSize: '32px', fontWeight: '700', marginBottom: '20px' }}>
                                Our Mission
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', lineHeight: '1.8', position: 'relative', zIndex: 1 }}>
                                {missionVision.mission}
                            </p>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <div style={{
                            background: '#fff',
                            borderRadius: '24px',
                            padding: '50px 40px',
                            height: '100%',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 20px 60px rgba(10, 37, 64, 0.1)',
                            border: '1px solid rgba(28, 168, 203, 0.1)'
                        }}>
                            {/* Decorative Circle */}
                            <div style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '-50px',
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                background: 'rgba(28, 168, 203, 0.05)'
                            }}></div>
                            <div style={{
                                position: 'absolute',
                                bottom: '-30px',
                                left: '-30px',
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: 'rgba(28, 168, 203, 0.03)'
                            }}></div>
                            
                            {/* Icon */}
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: 'linear-gradient(145deg, #1CA8CB 0%, #0d7a94 100%)',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '30px'
                            }}>
                                <i className="bi bi-eye-fill" style={{ fontSize: '44px', color: '#fff' }}></i>
                            </div>
                            
                            <h3 style={{ color: '#0a2540', fontSize: '32px', fontWeight: '700', marginBottom: '20px' }}>
                                Our Vision
                            </h3>
                            <p style={{ color: '#5a6a7a', fontSize: '18px', lineHeight: '1.8', position: 'relative', zIndex: 1 }}>
                                {missionVision.vision}
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".6s">
                    <Link to="/destination" className="theme-btn" style={{ padding: '16px 40px', fontSize: '16px' }}>
                        Learn More About Us <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Destination2;