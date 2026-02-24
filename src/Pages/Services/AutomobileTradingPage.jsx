import ServicePage from '../ServicePage';
import { services } from '../../content/oneMobilityContent';

export default function AutomobileTradingPage() {
  return (
    <ServicePage
      title={services.automobileTrading.title}
      intro={services.automobileTrading.intro}
      points={services.automobileTrading.points}
      image="/assets/img/destails/Automobile-Trading 1.png"
      bgimg="/assets/img/breadcrumb/header-banner-02.jpg"
    />
  );
}
