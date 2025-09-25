import Hero from '../components/Hero';
// import Philosophy from '../components/Philosophy';
import FeaturedDishes from '../components/FeaturedDishes';
import AboutChef from '../components/AboutChef';
import SectionDivider from '../components/SectionDivider';
import PhilosophyPage from './PhilosophyPage';

function HomePage() {
  return (
    <>
      <Hero />
      <PhilosophyPage/>
      <SectionDivider />
      <FeaturedDishes />
      <SectionDivider />
      <AboutChef />
    </>
  );
}

export default HomePage;