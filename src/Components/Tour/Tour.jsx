import React from 'react';
import { Link } from 'react-router';

const Tour = () => {

    const destinationContent = [
        {img:'/assets/img/destination/01.jpg', location:'UAE', title:'Premier Auto Rental Services', rating:'4.7', day:'Daily', number:'20+', price:'Quote'},      
        {img:'/assets/img/destination/02.jpg', location:'UAE', title:'Taxi Services', rating:'4.7', day:'24/7', number:'2000+', price:'Quote'},      
        {img:'/assets/img/destination/03.jpg', location:'UAE', title:'Public Transport', rating:'4.7', day:'Daily', number:'1000+', price:'Quote'},      
        {img:'/assets/img/destination/04.jpg', location:'UAE', title:'School Transportation', rating:'4.7', day:'Daily', number:'350+', price:'Quote'},      
        {img:'/assets/img/destination/05.jpg', location:'UAE', title:'Insurance Brokers', rating:'4.7', day:'—', number:'—', price:'Quote'},      
        {img:'/assets/img/destination/06.jpg', location:'UAE', title:'Automobile Trading', rating:'4.7', day:'—', number:'—', price:'Quote'},      
        {img:'/assets/img/destination/07.jpg', location:'UAE', title:'Service Center', rating:'4.7', day:'Since 1997', number:'7500+', price:'Quote'},      
        {img:'/assets/img/destination/08.jpg', location:'Global', title:'Leading in Technology', rating:'4.7', day:'—', number:'—', price:'Quote'},       
        {img:'/assets/img/destination/04.jpg', location:'UAE', title:'School Transportation', rating:'4.7', day:'Daily', number:'350+', price:'Quote'},          
      ]; 


    return (
<section className="tour-section section-padding fix">
            <div className="container custom-container">
                <div className="tour-destination-wrapper">
                    <div className="row g-4">
                        <div className="col-xl-8">
                            <div className="row g-4">
                            {destinationContent.map((item, i) => (
                                <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp wow" data-wow-delay=".3s">
                                    <div className="destination-card-items mt-0">
                                        <div className="destination-image">
                                        <img src={item.img} alt="img" />
                                            <div className="heart-icon">
                                            <i className="bi bi-heart"></i>
                                            </div>
                                        </div>
                                        <div className="destination-content">
                                            <ul className="meta">
                                                <li>
                                                <i className="bi bi-geo-alt"></i>
                                                    {item.location}
                                                </li>
                                                <li className="rating">
                                                    <div className="star">
                                                    <i className="bi bi-star-fill"></i>
                                                    </div>
                                                    <p>{item.rating}</p>
                                                </li>
                                            </ul>
                                            <h5>
                                            <Link to="/contact">
                                                {item.title}
                                                </Link>
                                            </h5>
                                            <ul className="info">
                                                <li>
                                                <i className="bi bi-clock"></i>
                                                    {item.day}
                                                </li>
                                                <li>
                                                <i className="bi bi-person"></i>
                                                {item.number}
                                                </li>
                                            </ul>
                                            <div className="price">
                                                <h6>{item.price}<span></span></h6>
                                                <Link to="/contact" className="theme-btn style-2">Request Quote<i className="bi bi-arrow-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}

                            </div>
                            <div className="page-nav-wrap text-center">
                                <ul>
                                    <li><a className="page-numbers" href="#"><i className="bi bi-arrow-left"></i></a></li>
                                    <li><a className="page-numbers" href="#">01</a></li>
                                    <li><a className="page-numbers" href="#">02</a></li>
                                    <li><a className="page-numbers" href="#">03</a></li>
                                    <li><a className="page-numbers" href="#"><i className="bi bi-arrow-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="main-sidebar mt-0">
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Service Category</h3>
                                    </div>
                                    <div className="categories-list">
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Canada
                                                </span>
                                            </span>
                                            <span className="text-color">04</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Europe
                                                </span>
                                            </span>
                                            <span className="text-color">03</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    France
                                                </span>
                                            </span>
                                            <span className="text-color">05</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Indonesia
                                                </span>
                                            </span>
                                            <span className="text-color">06</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Nepal
                                                </span>
                                            </span>
                                            <span className="text-color">05</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Maldives
                                                </span>
                                            </span>
                                            <span className="text-color">04</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Activities</h3>
                                    </div>
                                    <div className="categories-list">
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" readOnly />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Canada
                                                </span>
                                            </span>
                                            <span className="text-color">04</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Europe
                                                </span>
                                            </span>
                                            <span className="text-color">03</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    France
                                                </span>
                                            </span>
                                            <span className="text-color">05</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox"  />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Indonesia
                                                </span>
                                            </span>
                                            <span className="text-color">06</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Nepal
                                                </span>
                                            </span>
                                            <span className="text-color">05</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Maldives
                                                </span>
                                            </span>
                                            <span className="text-color">04</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="single-sidebar-widget">
                                    <div className="wid-title style-2">
                                        <h3>Tour Types</h3>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="categories-list">
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Premium
                                                </span>
                                            </span>
                                            <span className="text-color">04</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Luxury 
                                                </span>
                                            </span>
                                            <span className="text-color">03</span>
                                        </label>
                                        <label className="checkbox-single d-flex justify-content-between align-items-center">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox"  />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Standard
                                                </span>
                                            </span>
                                            <span className="text-color">05</span>
                                        </label>
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

export default Tour;