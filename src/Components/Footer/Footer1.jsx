import React, { useEffect } from 'react';
import { Link } from 'react-router';
import loadBackgroudImages from '../Common/loadBackgroudImages';

const Footer1 = () => {

    useEffect(() => {
        loadBackgroudImages();
    }, []);

    return (
        <footer className="footer-section fix bg-cover" data-background="/assets/img/footer/footer-background.jpg">
            <div className="container">
                <div className="footer-widget-wrapper-new">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-8 col-sm-6 wow fadeInUp wow" data-wow-delay=".2s">
                            <div className="single-widget-items text-center">
                                <div className="widget-head">
                                    <a href="https://www.mwasalat.ae" target="_blank" rel="noopener noreferrer">
                                        <img src="/assets/img/logo/mwasalat_holding_white_LOGO.png" alt="Mwasalat Holdings" className="footer-logo-small" />
                                    </a>
                                </div>
                                <div className="footer-content">
                                    <h3>Questions? Reach us</h3>
                                    <p>Monday – Friday from 8 am to 5:30 pm</p>
                                    <p><a href="tel:+97126220088" style={{color: 'inherit', fontWeight: '600'}}>+971 2 622 00 88</a></p>
                                    <div className="social-icon d-flex align-items-center justify-content-center mt-3">
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                        <a href="#"><i className="bi bi-twitter-x"></i></a>
                                        <a href="#"><i className="bi bi-linkedin"></i></a>
                                        <a href="#"><i className="bi bi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 ps-lg-5 wow fadeInUp wow" data-wow-delay=".4s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Quick Links</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <Link to="/">
                                            Home 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about">
                                            About Us  
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            Blog
                                        </Link>
                                    </li>
<li>
                                    <Link to="/destination">
                                            Our Services 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/tour">
                                            GCEO Message 
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-lg-5 wow fadeInUp wow" data-wow-delay=".6s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Our Services</h4>
                                </div>
                                <ul className="list-items">
                                    <li>
                                    <Link to="/services/auto-rental">
                                            Premier Auto Rental
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/services/taxi">
                                            Taxi Services
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/services/public-transport">
                                            Public Transport
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/services/school-transport">
                                            School Transport
                                    </Link>
                                    </li>
                                    <li>
                                    <Link to="/contact">
                                            Contact
                                    </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ps-xl-5 wow fadeInUp wow" data-wow-delay=".6s">
                            <div className="single-widget-items">
                                <div className="widget-head">
                                   <h4>Contact Us</h4>
                                </div>
                                <div className="contact-info">
                                    <div className="contact-items">
                                        <div className="icon">
                                        <i className="bi bi-geo-alt-fill"></i>
                                        </div>
                                        <div className="content">
                                            <h6>United Arab Emirates <br/>
                                                <a href="https://www.mwasalat.ae" target="_blank" rel="noopener noreferrer">www.mwasalat.ae</a>
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="contact-items">
                                        <div className="icon">
                                        <i className="bi bi-envelope-fill"></i>
                                        </div>
                                        <div className="content">
                                         <h6>
                                             <a href="mailto:info@mwasalat.ae">info@mwasalat.ae</a> 
                                         </h6>
                                      </div>
                                    </div>
                                    <div className="contact-items">
                                       <div className="icon">
                                       <i className="bi bi-telephone-fill"></i>
                                       </div>
                                       <div className="content">
                                           <h6>
                                               <a href="tel:+97126220088">+971 2 622 00 88</a>
                                           </h6>
                                       </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-wrapper">
                        <p className="wow fadeInUp" data-wow-delay=".3s">
                            © 2026 <span>MWASALAT HOLDINGS</span>. ALL RIGHTS RESERVED.
                        </p>
                        <ul className="bottom-list wow fadeInUp" data-wow-delay=".5s">
                            <li>Terms of use</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer1;