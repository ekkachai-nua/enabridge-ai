
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LeadForm from "@/components/LeadForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-thai">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <LeadForm />
      </div>
    </div>
  );
};

export default Index;
