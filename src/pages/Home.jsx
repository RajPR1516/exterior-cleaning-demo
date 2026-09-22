import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Process from "../components/Process";
import QuoteForm from "../components/QuoteForm";
import RoofRevival from "../components/RoofRevival";
import ServiceAreas from "../components/ServiceAreas";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <RoofRevival />
      <WhyChooseUs />
      <Process />
      <Pricing />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <QuoteForm />
    </>
  );
}

export default Home;