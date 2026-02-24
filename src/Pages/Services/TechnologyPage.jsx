import ServicePage from '../ServicePage';
import { services } from '../../content/oneMobilityContent';

export default function TechnologyPage() {
  return (
    <ServicePage
      title={services.technology.title}
      intro="We leverage cutting-edge technologies to provide innovative mobility solutions."
      points={services.technology.points}
      image="/assets/img/destails/Leading-In-Technology 1.png"
      bgimg="/assets/img/breadcrumb/header-banner-02.jpg"
    />
  );
}
