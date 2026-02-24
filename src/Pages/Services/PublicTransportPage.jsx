import ServicePage from '../ServicePage';
import { services } from '../../content/oneMobilityContent';

export default function PublicTransportPage() {
  return (
    <ServicePage
      title={services.publicTransport.title}
      intro="Revamping urban transportation with pioneering public transport services."
      points={services.publicTransport.points}
      image="/assets/img/destails/Leading-In-Technology 1.png"
      bgimg="/assets/img/breadcrumb/header-banner-02.jpg"
    />
  );
}
