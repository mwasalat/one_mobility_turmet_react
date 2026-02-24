import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Main from "../Layout/Main";
import AboutPage from "../Pages/AboutPage";
import Layout2 from "../Layout/Layout2";
import Home2 from "../Pages/Home2";
import Layout3 from "../Layout/Layout3";
import Home3 from "../Pages/Home3";
import DestinationPage from "../Pages/DestinationPage";
import DestinationDetailsPage from "../Pages/DestinationDetailsPage";
import TourPage from "../Pages/TourPage";
import TourDetailsPage from "../Pages/TourDetailsPage";
import ActivitiesPage from "../Pages/ActivitiesPage";
import ActivitiesDetailsPage from "../Pages/ActivitiesDetailsPage";
import TeamPage from "../Pages/TeamPage";
import TeamDetailsPage from "../Pages/TeamDetailsPage";
import ContactPage from "../Pages/ContactPage";
import BlogGrid from "../Pages/BlogGrid";
import BlogDetailsPage from "../Pages/BlogDetailsPage";
import BlogSidebarPage from "../Pages/BlogSidebarPage";
// Service Pages
import AutoRentalPage from "../Pages/Services/AutoRentalPage";
import TaxiPage from "../Pages/Services/TaxiPage";
import PublicTransportPage from "../Pages/Services/PublicTransportPage";
import SchoolTransportPage from "../Pages/Services/SchoolTransportPage";
import InsurancePage from "../Pages/Services/InsurancePage";
import AutomobileTradingPage from "../Pages/Services/AutomobileTradingPage";
import ServiceCenterPage from "../Pages/Services/ServiceCenterPage";
import TechnologyPage from "../Pages/Services/TechnologyPage";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout3,
      children: [                      
        {
            path: "/home2",
            Component: Home2
        },  
        {
          path: "/about",
          Component: AboutPage
        },
        {
          path: "/destination",
          Component: DestinationPage
        },          
        {
          path: "/destination/destination-details",
          Component: DestinationDetailsPage
        },        
        {
          path: "/tour",
          Component: TourPage
        },
        {
          path: "/tour/tour-details",
          Component: TourDetailsPage
        },
        {
          path: "/activities",
          Component: ActivitiesPage
        },
        {
          path: "/activities/activities-details",
          Component: ActivitiesDetailsPage
        },
        {
          path: "/team",
          Component: TeamPage
        },
        {
          path: "/team/team-details",
          Component: TeamDetailsPage
        },
        {
          path: "/contact",
          Component: ContactPage
        },
        {
          path: "/blog",
          Component: BlogGrid
        },
        {
          path: "/blog-sidebar",
          Component: BlogSidebarPage
        },        
        {
          path: "/blog/blog-details",
          Component: BlogDetailsPage
        },
        // Service Pages
        {
          path: "/services/auto-rental",
          Component: AutoRentalPage
        },
        {
          path: "/services/taxi",
          Component: TaxiPage
        },
        {
          path: "/services/public-transport",
          Component: PublicTransportPage
        },
        {
          path: "/services/school-transport",
          Component: SchoolTransportPage
        },
        {
          path: "/services/insurance",
          Component: InsurancePage
        },
        {
          path: "/services/automobile-trading",
          Component: AutomobileTradingPage
        },
        {
          path: "/services/service-center",
          Component: ServiceCenterPage
        },
        {
          path: "/services/technology",
          Component: TechnologyPage
        },

      ],
    },
    {
      path: '/',
      Component: Layout2,
      children: [
        {
          index: true,
          Component: Home,
        },                           
      ],
    },     
    {
      path: 'home3',
      Component: Main,
      children: [
        {
          index: true,
          Component: Home3,
        },                           
      ],
    },      

  ]);