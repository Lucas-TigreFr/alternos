import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Collection from "@/components/Collection";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Collection />
      <FAQ />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
