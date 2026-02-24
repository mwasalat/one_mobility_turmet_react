import ServicePage from '../ServicePage';
import { services } from '../../content/oneMobilityContent';

export default function AutoRentalPage() {
  return (
    <ServicePage
      title={services.autoRental.title}
      intro={services.autoRental.intro}
      points={services.autoRental.points}
      image="/assets/img/destails/Premier-Auto-Rental-&-Fleet-Solutions.png"
      bgimg="/assets/img/breadcrumb/header-banner-02.jpg"
    />
  );
}
