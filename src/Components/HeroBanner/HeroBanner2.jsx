import React, { useEffect } from 'react';
import { Link } from 'react-router';
import loadBackgroudImages from '../Common/loadBackgroudImages';
import { hero } from '../../content/oneMobilityContent';

const HeroBanner2 = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);    

    return (
<section className="hero-section-2" style={{position: 'relative'}}>
            {/* <div className="float-bob-x" style={{position: 'absolute', bottom: '100px', left: '50px', zIndex: 10}}>
                <img src="/assets/img/destination/drone.png" alt="drone" style={{width: '150px'}} />
            </div> */}
            <div className="hero-2" style={{position: 'relative', backgroundPosition: 'center center', backgroundSize: 'cover', overflow: 'hidden'}}>
                {/* Video Background */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0
                    }}
                >
                    <source src="/assets/img/Smart_Mobility_The_Tech_Vision_(No_People).mp4" type="video/mp4" />
                </video>
                <div className="container custom-container-3" style={{position: 'relative', zIndex: 2}}>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="hero-content" style={{
                                background: 'rgba(0, 0, 0, 0.45)',
                                backdropFilter: 'blur(6px)',
                                WebkitBackdropFilter: 'blur(6px)',
                                borderRadius: '16px',
                                padding: '40px 44px',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                                border: '1px solid rgba(255, 255, 255, 0.08)'
                            }}>
                                <div className="sub-title wow fadeInUp">
                                    {hero.subtitle}
                                </div>
                                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                    {hero.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>)}
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay=".5s">
                                    {hero.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-cta-section mb-0">
                <div className="container custom-container-3">
                    <div className="hero-bottom">
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <Link to="/destination" className="theme-btn wow fadeInUp" data-wow-delay=".3s">
                                    Our Services <i className="bi bi-arrow-right"></i>
                                </Link>
                                <Link to="/contact" className="theme-btn style-2 wow fadeInUp ms-4" data-wow-delay=".5s" style={{marginLeft: '16px'}}>
                                    Contact Us <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner2;