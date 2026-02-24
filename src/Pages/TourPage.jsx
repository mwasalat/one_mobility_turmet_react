import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import Testimonial2 from '../Components/Testimonial/Testimonial2';

const TourPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb/header-banner-02.jpg"
                Title="GCEO Message"
            ></BreadCumb>    
            <Testimonial2></Testimonial2>       
        </div>
    );
};

export default TourPage;