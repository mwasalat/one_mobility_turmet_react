import BreadCumb from '../Components/Common/BreadCumb';
import { useEffect } from 'react';

export default function ServicePage({ title, intro, points, image, bgimg }) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <BreadCumb Title={title} bgimg={bgimg} />
      <section className="about-section section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div className="about-image">
                    <img 
                      src={image || "/assets/img/about/about.jpg"} 
                      alt={title}
                      style={{ borderRadius: '10px', width: '100%' }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-title style-2">Our Services</span>
                    <h2>{title}</h2>
                  </div>
                  {intro && <p className="mt-3 mb-4">{intro}</p>}
                  <ul className="list-unstyled">
                    {points && points.map((point, index) => (
                      <li key={index} className="d-flex align-items-start mb-3">
                        <i className="fas fa-check-circle text-primary me-3 mt-1"></i>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="theme-btn mt-4">
                    Request a Quote <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
