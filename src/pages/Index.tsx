
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-thai">
      <Navbar />
      <Hero />
      <Services />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <LeadForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
