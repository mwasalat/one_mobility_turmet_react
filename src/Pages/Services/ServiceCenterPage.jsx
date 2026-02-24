import ServicePage from '../ServicePage';
import { services } from '../../content/oneMobilityContent';

export default function ServiceCenterPage() {
  return (
    <ServicePage
      title={services.serviceCenter.title}
      intro={services.serviceCenter.intro}
      points={services.serviceCenter.points}
      image="/assets/img/destails/Car-Service 1.png"
      bgimg="/assets/img/breadcrumb/header-banner-02.jpg"
    />
  );
}
