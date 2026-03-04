import React, { useState } from 'react';

const Contact = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        // Show notification
        setShowNotification(true);
        // Hide notification after 5 seconds
        setTimeout(() => {
            setShowNotification(false);
        }, 5000);
    };
    
    return (
        <div>
            {showNotification && (
                <div style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    padding: '20px 30px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    zIndex: 9999
                }}>
                    <div style={{fontSize: '16px', fontWeight: '600'}}>✓ Success!</div>
                    <div style={{fontSize: '14px', marginTop: '5px'}}>We have received your email. We will contact you ASAP!</div>
                </div>
            )}
            
         <section className="contact-us-section fix section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="contact-us-main">
                            <div className="contact-box-items">
                                <div className="icon">
                                    <img src="/assets/img/icon/18.svg" alt="img" />
                                </div>
                                <div className="content">
                                    <h3>
                                        Our Address
                                    </h3>
                                    <p>
                                        Musaffah - M2<br/>
                                        Abu Dhabi,
                                        United Arab Emirates<br/>
                                        {/* <a href="https://maps.google.com/?q=Musaffah+M2+Abu+Dhabi" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'underline'}}>View on Map</a> */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="contact-us-main style-2">
                            <div className="contact-box-items">
                                <div className="icon">
                                    <img src="/assets/img/icon/19.svg" alt="img" />
                                </div>
                                <div className="content">
                                    <h3>
                                        <a href="https://www.mwasalat.ae" target="_blank" rel="noopener noreferrer">www.mwasalat.ae</a>
                                    </h3>
                                    <p>
                                        Visit our website for inquiries <br/> and more information.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="contact-us-main">
                            <div className="contact-box-items">
                                <div className="icon">
                                    <img src="/assets/img/icon/20.svg" alt="img" />
                                </div>
                                <div className="content">
                                    <h3>
                                        <a href="https://www.mwasalat.ae" target="_blank" rel="noopener noreferrer">Contact Us</a>
                                    </h3>
                                    <p>
                                        Get in touch via our website for support and quotes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>           

          <section className="contact-us-section-2 section-bg-2 fix">
            <div className="container">
                <div className="contact-us-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="contact-us-contact">
                                <div className="section-title">
                                    <span className="sub-title text-white wow fadeInUp">
                                        Get in Touch!
                                    </span>
                                    <h2 className=" text-white wow fadeInUp wow" data-wow-delay=".2s">
                                        Submit an Online Enquiry
                                    </h2>
                                    <p className="text-white wow fadeInUp" data-wow-delay=".3s">
                                        Feel free to reach out and connect with us. We're here to help with any enquiries.
                                    </p>
                                </div>
                                <div className="comment-form-wrap">
                                    <form onSubmit={handleSubmit} id="contact-form">
                                        <div className="row g-4">
                                            <div className="col-lg-6">
                                                <div className="form-clt">
                                                    <input type="text" name="name" id="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-clt">
                                                    <input type="email" name="email" id="email4" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-clt">
                                                   <input type="text" name="subject" id="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} required />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-clt">
                                                    <textarea name="message" id="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <button type="submit" className="theme-btn">
                                                    Submit Massage
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="map-area">
                                <div className="google-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5233894737!2d54.51904!3d24.375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae5f6496464e925%3A0x54ea0e1a5d64e0e5!2s9G69%2B2W2%20Abu%20Dhabi%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2suae!4v1641984054261" loading="lazy" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade" sandbox="allow-scripts allow-same-origin allow-popups"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>           
        </div>
    );
};

export default Contact;