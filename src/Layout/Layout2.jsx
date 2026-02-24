import { Outlet } from 'react-router';
import Footer1 from '../Components/Footer/Footer1';
import Header1 from '../Components/Header/Header1';
import ScrollToTop from '../Components/Common/ScrollToTop';
import Entities from '../Components/Entities/Entities';

const Layout2 = () => {
    return (
        <div className='main-page-area2'>
            <ScrollToTop />
            <Header1></Header1>
            <Outlet></Outlet>
            <Entities></Entities>
            <Footer1></Footer1>
        </div>
    );
};

export default Layout2;