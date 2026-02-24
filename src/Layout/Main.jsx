import { Outlet } from "react-router";
import Header3 from "../Components/Header/Header3";
import Footer1 from "../Components/Footer/Footer1";
import ScrollToTop from "../Components/Common/ScrollToTop";
import Entities from "../Components/Entities/Entities";

const Main = () => {
    return (
        <div className='main-page-area'>
            <ScrollToTop />
            <Header3></Header3>
            <Outlet></Outlet>
            <Entities></Entities>
            <Footer1></Footer1>
        </div>
    );
};

export default Main;