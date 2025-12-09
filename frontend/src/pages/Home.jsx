import {
  Navbar,
  Body,
  HeroSection,
  PrepPartner,
  PlaceJourney,
  ResourcesContainer,
  Footer,
} from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PrepPartner />

      <ResourcesContainer />
      <PlaceJourney />
      <Footer />
    </div>
  );
};

export default Home;
