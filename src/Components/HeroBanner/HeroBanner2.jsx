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
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        minWidth: '100%',
                        minHeight: '100%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'cover',
                        zIndex: 0,
                        filter: 'contrast(1.1) saturate(1.2) brightness(1.05)'
                    }}
                >
                    <source src="/assets/img/MwasalatMobility4k.mp4" type="video/mp4" />
                </video>
                {/* Subtle vignette overlay for cinematic feel */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.35) 100%)',
                    zIndex: 1,
                    pointerEvents: 'none'
                }}></div>
                <div className="container custom-container-3" style={{position: 'relative', zIndex: 2}}>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="hero-content" style={{
                                background: 'rgba(0, 0, 0, 0.35)',
                                backdropFilter: 'blur(4px)',
                                WebkitBackdropFilter: 'blur(4px)',
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
        </section>
    );
};

export default HeroBanner2;