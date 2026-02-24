import ServicePage from '../ServicePage';
import { services } from '../../content/oneMobilityContent';

export default function SchoolTransportPage() {
  return (
    <ServicePage
      title={services.schoolTransport.title}
      intro="Mwasalat Holdings is a leading provider of school transportation services."
      points={services.schoolTransport.points}
      image="/assets/img/destails/School-Transportation-Services.png"
      bgimg="/assets/img/breadcrumb/header-banner-02.jpg"
    />
  );
}
