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
            <div className="hero-2 bg-cover" data-background="/assets/img/hero/banner_01.png" style={{position: 'relative', backgroundPosition: 'center center', backgroundSize: 'cover'}}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
                    zIndex: 1,
                    borderRadius: '20px'
                }}></div>
                <div className="container custom-container-3" style={{position: 'relative', zIndex: 2}}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="hero-content">
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
                                <Link to="/contact" className="theme-btn style-2 wow fadeInUp ms-3" data-wow-delay=".5s">
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