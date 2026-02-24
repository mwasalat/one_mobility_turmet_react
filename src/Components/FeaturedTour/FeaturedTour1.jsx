import React, { useRef } from 'react';
import Slider from 'react-slick';
import parse from 'html-react-parser';
import { Link } from 'react-router';

const FeaturedTour1 = () => {

      const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

      const sliderRef = useRef(null);

      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      };       

      const tourContent = [
        
        {img:'/assets/img/destails/Premier-Auto-Rental-&-Fleet-Solutions.png', location:'UAE', title:'Premier Auto Rental <br>& Fleet Solutions', price:'Quote'},                  
        {img:'/assets/img/destails/Safe-&-Reliable-Taxi-Services.png', location:'UAE', title:'Safe & Reliable <br>Taxi Services', price:'Quote'},                  
        {img:'/assets/img/destails/Leading-In-Technology 1.png', location:'UAE & Egypt', title:'Public Transport <br>Services', price:'Quote'},                  
        {img:'/assets/img/destails/School-Transportation-Services.png', location:'UAE', title:'School Transportation <br>Services', price:'Quote'},                               
      ]; 


    return (
        <section className="featured-tour-section section-padding section-bg">
            <div className="left-shape">
                <img src="/assets/img/feature/plane-shape.png" alt="img" />
            </div> 
            <div className="right-shape">
                <img src="/assets/img/feature/plane-shape.png" alt="img" />
            </div>
            <div className="array-button">
                <button onClick={previous} className="array-prev"><img src="/assets/img/offer/chervon-right.png" alt="img" /></button>
                <button onClick={next} className="array-next"><img src="/assets/img/icon/39.svg" alt="img" /></button>
            </div>
            <div className="container">
                <div className="section-title">
                    <span className="sub-title wow fadeInUp">
                        Our Services
                    </span>
                    <h2 className="wow fadeInUp wow" data-wow-delay=".5s">
                        Mwasalat Holdings Services
                    </h2>
                </div>
                <p className="wow fadeInUp wow" data-wow-delay=".7s">
                    From auto rental and taxi to public and school transport, insurance, automobile trading, service center, and cutting-edge technology—we deliver mobility solutions for smarter cities.
                </p>
                <div className="swiper tour-slider">
                    <div className="swiper-wrapper cs_slider_gap_301">
                    <Slider ref={sliderRef} {...settings}>
                    {tourContent.map((item, i) => (
                        <div key={i} className="swiper-slide">
                            <div className="feature-tour-items">
                                <div className="feature-tour-image">
                                    <img src={item.img} alt="img" />
                                    <ul className="location">
                                        <li>
                                        <i className="bi bi-geo-alt-fill"></i>
                                            {item.location}
                                        </li>
                                    </ul>
                                </div>
                                <div className="feature-tour-content">
                                    <h4>
                                        <Link to="/contact">
                                        {parse(item.title)}
                                        </Link>
                                    </h4>
                                   
                                    <Link to="/contact" className="icon">
                                    <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    </Slider>                         
                    </div>
                </div>
            </div>
         </section>
    );
};

export default FeaturedTour1;