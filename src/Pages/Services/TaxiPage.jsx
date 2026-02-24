import ServicePage from '../ServicePage';
import { services } from '../../content/oneMobilityContent';

export default function TaxiPage() {
  return (
    <ServicePage
      title={services.taxi.title}
      intro="Our taxi service offers convenient and reliable transportation to customers."
      points={services.taxi.points}
      image="/assets/img/destails/Safe-&-Reliable-Taxi-Services.png"
      bgimg="/assets/img/breadcrumb/header-banner-02.jpg"
    />
  );
}
