import AwardsSection from './components/home/AwardsSection';
import FeaturedInSection from './components/home/FeaturedInSection';
import FeaturedProperties from './components/home/FeaturedProperties';
import HeroSection from './components/home/HeroSection';
import StatsSection from './components/home/StatsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <FeaturedProperties />
      <AwardsSection />
      <FeaturedInSection />
    </main>
  );
}
