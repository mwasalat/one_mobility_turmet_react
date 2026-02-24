import DropDown from './DropDown';
import { Link } from "react-router";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      {/* Home */}
      <li>
        <Link to="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>

      {/* About Us */}
      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
      </li>

      {/* Mission & Vision */}
      <li>
        <Link to="/destination" onClick={() => setMobileToggle(false)}>
          Mission & Vision
        </Link>
      </li>

      {/* GCEO Message */}
      <li>
        <Link to="/tour" onClick={() => setMobileToggle(false)}>
          GCEO Message
        </Link>
      </li>

      {/* Our Services - Dropdown */}
      <li className="menu-item-has-children">
        <Link to="#">Our Services</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/services/auto-rental" onClick={() => setMobileToggle(false)}>
                Premier Auto Rental
              </Link>
            </li>
            <li>
              <Link to="/services/taxi" onClick={() => setMobileToggle(false)}>
                Taxi Services
              </Link>
            </li>
            <li>
              <Link to="/services/public-transport" onClick={() => setMobileToggle(false)}>
                Public Transport
              </Link>
            </li>
            <li>
              <Link to="/services/school-transport" onClick={() => setMobileToggle(false)}>
                School Transport
              </Link>
            </li>
            <li>
              <Link to="/services/insurance" onClick={() => setMobileToggle(false)}>
                Insurance Brokers
              </Link>
            </li>
            <li>
              <Link to="/services/automobile-trading" onClick={() => setMobileToggle(false)}>
                Automobile Trading
              </Link>
            </li>
            <li>
              <Link to="/services/service-center" onClick={() => setMobileToggle(false)}>
                Service Center
              </Link>
            </li>
            <li>
              <Link to="/services/technology" onClick={() => setMobileToggle(false)}>
                Technology Solutions
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      {/* Contact */}
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
