import { Outlet } from 'react-router';
import Footer1 from '../Components/Footer/Footer1';
import Header2 from '../Components/Header/Header2';
import ScrollToTop from '../Components/Common/ScrollToTop';
import Entities from '../Components/Entities/Entities';

const Layout3 = () => {
    return (
        <div className='main-page-area2'>
            <ScrollToTop />
            <Header2></Header2>
            <Outlet></Outlet>
            <Entities></Entities>
            <Footer1></Footer1>
        </div>
    );
};

export default Layout3;