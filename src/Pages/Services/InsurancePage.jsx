import ServicePage from '../ServicePage';
import { services } from '../../content/oneMobilityContent';

export default function InsurancePage() {
  return (
    <ServicePage
      title={services.insurance.title}
      intro={services.insurance.intro}
      points={services.insurance.points}
      image="/assets/img/destails/Insurance-Brokers 1.png"
      bgimg="/assets/img/breadcrumb/header-banner-02.jpg"
    />
  );
}
