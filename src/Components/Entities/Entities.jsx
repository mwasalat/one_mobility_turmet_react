import React from 'react';

const entities = [
    { img: '/assets/img/entities/aman public transport.jpg', name: 'Aman Public Transport' },
    { img: '/assets/img/entities/AMAN_Taxi-01-01-01.png', name: 'Aman Taxi' },
    { img: '/assets/img/entities/Autostrad Logo 2.png', name: 'Autostrad' },
    { img: '/assets/img/entities/colemont.jpg', name: 'Colemont' },
    // { img: '/assets/img/entities/Fastline Bus Logo-01.png', name: 'Fastline Bus' },
    // { img: '/assets/img/entities/One Technology logo.png', name: 'One Technology' },
    { img: '/assets/img/entities/Pioneer logo-01.png', name: 'Pioneer' },
];

const Entities = () => {
    return (
        <section className="entities-section section-padding">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <span className="sub-title wow fadeInUp">Our Group</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Our Entities</h2>
                    <p className="wow fadeInUp" data-wow-delay=".5s">Companies operating under Mwasalat Holdings</p>
                </div>
                <div className="entities-wrapper">
                    <div className="row g-4 justify-content-center align-items-center">
                        {entities.map((entity, i) => (
                            <div key={i} className="col-xl col-lg col-md-4 col-sm-6 col-6 wow fadeInUp" data-wow-delay={`${0.1 * (i + 1)}s`}>
                                <div className="entity-card">
                                    <img src={entity.img} alt={entity.name} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Entities;
