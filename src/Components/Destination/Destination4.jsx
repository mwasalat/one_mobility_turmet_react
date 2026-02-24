import React from 'react';
import { Link } from 'react-router';

const Destination4 = () => {

    const destinationContent = [
        {img:'/assets/img/destails/Premier-Auto-Rental-&-Fleet-Solutions.png', location:'UAE', title:'Premier Auto Rental Services', rating:'4.7', day:'Daily', number:'20+', price:'Quote'},      
        {img:'/assets/img/destails/Safe-&-Reliable-Taxi-Services.png', location:'UAE', title:'Taxi Services', rating:'4.7', day:'24/7', number:'2000+', price:'Quote'},      
        {img:'/assets/img/destails/Leading-In-Technology 1.png', location:'UAE & Egypt', title:'Public Transport', rating:'4.7', day:'Daily', number:'1000+', price:'Quote'},      
        {img:'/assets/img/destails/School-Transportation-Services.png', location:'UAE', title:'School Transportation', rating:'4.7', day:'Daily', number:'350+', price:'Quote'},      
        {img:'/assets/img/destails/Insurance-Brokers 1.png', location:'UAE', title:'Insurance Brokers', rating:'4.7', day:'—', number:'—', price:'Quote'},      
        {img:'/assets/img/destails/Automobile-Trading 1.png', location:'UAE', title:'Automobile Trading', rating:'4.7', day:'—', number:'—', price:'Quote'},      
        {img:'/assets/img/destails/Car-Service 1.png', location:'UAE', title:'Service Center', rating:'4.7', day:'Since 1997', number:'7500+', price:'Quote'},      
        {img:'/assets/img/destails/Leading-In-Technology 1.png', location:'Global', title:'Leading in Technology', rating:'4.7', day:'—', number:'—', price:'Quote'},       
      ]; 

    return (
        <section className="popular-destination-section section-padding pb-0">
            {/* <div className="car-shape float-bob-x">
                <img src="/assets/img/destination/drone.png" alt="img" />
            </div> */}
            <div className="container">
                <div className="row g-4">
                {destinationContent.map((item, i) => (
                    <div key={i} className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp wow" data-wow-delay=".2s">
                        <div className="destination-card-items mt-0">
                            <div className="destination-image">
                                <img src={item.img} alt="img" />
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
                                    <Link to="/contact" className="theme-btn style-2">Request Quote<i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Destination4;