import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import TourDetails from '../Components/TourDetails/TourDetails';

const TourDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb/header-banner-02.jpg"
                Title="Tour Details"
            ></BreadCumb>    
            <TourDetails></TourDetails>           
        </div>
    );
};

export default TourDetailsPage;