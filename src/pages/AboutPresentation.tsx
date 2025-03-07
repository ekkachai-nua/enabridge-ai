
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 9;
  const navigate = useNavigate();

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const closePresentation = () => {
    navigate("/");
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "Escape") {
        closePresentation();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide]);

  return (
    <div className="bg-background min-h-screen">
      <div className="relative w-full overflow-hidden">
        {/* Slide 1: Company Introduction */}
        <div className={`w-full transition-opacity duration-500 ease-in-out ${currentSlide === 0 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12 pb-6 border-b border-emerald-500">
              <div className="flex flex-col items-center mb-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 879.75 383.96" className="w-40 h-auto mb-8">
                  <defs>
                    <style>
                      {`.cls-1 {
                        fill: none;
                        stroke-linecap: round;
                        stroke-linejoin: round;
                        stroke-width: 6px;
                        stroke: #fff;
                      }
                      .cls-2 {
                        fill: #121212;
                        stroke: none;
                      }`}
                    </style>
                  </defs>
                  <rect className="cls-2" x=".5" y=".5" width="878.75" height="382.96"/>
                  <path className="cls-1" d="M29.51,299.67C194.67,207.57,262.71,103.99,297.34,24.78c-6.97,94.32-7.86,175.44-13.16,270.06,19.89-7.69,43.5-.08,63.48-6.98-4.61-87.38-9.27-174.75-13.76-262.15-4.83-.8-7.25-1.22-12.08-2.09-.11,44.58,1.1,89.22,2.02,133.76-5.99,1.79-11.98,3.61-17.97,5.47-.55-46.15-1.44-92.44-.76-138.6,70.45,162.78,179.23,135.33,226.64,54.85-2.92,46.6-4.98,93.36-7.93,139.96,13.98-2.45,27.97-4.75,41.96-6.88-2.36-44.04-5.13-87.99-7.52-132.02-2.36-1.58-3.53-2.38-5.89-3.96-.81,22.87-1.46,45.76-2.09,68.66l-12.17,2.6c-.09,0-2.9-71.76-2.9-71.76.09-.03,16.23,26.64,25.08,36.45,38.26,42.41,80.89,55.57,122.36,61.81-30.57-6.52-69.77-15.37-100.52-17.12-155.1-8.81-294.34,15.8-471.38,161.8.01,14.39,1.33,34.24,3.25,48.93C373.52,109.21,647.11,152.79,827.64,223.45"/>
                </svg>
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-8">Enabridge</h1>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-emerald-500 mb-6">AI Integration Solutions</h2>
              <div className="text-xl md:text-2xl text-gray-400 mb-8">Bringing top-tier AI to your business – fast, affordable, and impactful</div>
            </div>
            <p className="text-lg md:text-xl">We specialize in integrating existing AI solutions into client systems, helping businesses harness the power of artificial intelligence without the complexity.</p>
          </div>
        </div>

        {/* Slide 2: Company Background */}
        <div className={`w-full transition-opacity duration-500 ease-in-out ${currentSlide === 1 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12 pb-6 border-b border-emerald-500">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">About Enabridge</h1>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg mb-6">
              <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">Our Origins</h3>
              <p className="text-lg">Enabridge was established as a specialized division from an existing technology company under the same visionary leadership.</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg mb-6">
              <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">Our Parent Organization</h3>
              <p className="text-lg">The parent company focuses on IT Outsourcing and Software house services with a strong background in banking, crypto (exchange and on-chain), and large-scale software systems.</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">Why a Specialized AI Company?</h3>
              <ul className="list-disc pl-6 text-lg space-y-2">
                <li>To pursue a differentiated vision requiring specialized focus</li>
                <li>To deliver laser-focused AI adoption and integration rather than general software solutions</li>
                <li>To build a team of AI integration specialists committed to transformation through artificial intelligence</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Slide 3: Founder Profile */}
        <div className={`w-full transition-opacity duration-500 ease-in-out ${currentSlide === 2 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12 pb-6 border-b border-emerald-500">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">Leadership</h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-emerald-500 mb-6">Ekkachai Nuangsapsaen</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">Experience Highlights</h3>
            <ul className="list-disc pl-6 text-lg space-y-2 mb-8">
              <li>20 years of experience in software development & IT strategy</li>
              <li>Experience in global giant tech companies</li>
              <li>Led teams delivering software for top-tier banks and crypto exchanges</li>
              <li>Experience in bundling AI into development processes</li>
              <li>Proven ability to scale software products efficiently</li>
            </ul>
            <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">Industry Expertise</h3>
            <ul className="list-disc pl-6 text-lg space-y-2">
              <li>Banking and financial services</li>
              <li>Cryptocurrency and blockchain technologies</li>
              <li>EV car rental solutions</li>
            </ul>
          </div>
        </div>

        {/* Slide 4: Our Vision & Mission */}
        <div className={`w-full transition-opacity duration-500 ease-in-out ${currentSlide === 3 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12 pb-6 border-b border-emerald-500">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">Our Vision & Mission</h1>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg mb-6">
              <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">Vision</h3>
              <p className="text-lg">To democratize AI by making advanced technologies accessible and affordable for businesses of all sizes</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">Mission</h3>
              <ul className="list-disc pl-6 text-lg space-y-2">
                <li>Integrate the best AI tools available on the market (LLMs, generative AI, etc.) into existing enterprise systems</li>
                <li>Optimize business operations, reduce costs, and accelerate innovation</li>
                <li>Empower clients to leverage AI quickly and effectively without massive upfront investments</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Slide 5: Our Approach to AI */}
        <div className={`w-full transition-opacity duration-500 ease-in-out ${currentSlide === 4 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12 pb-6 border-b border-emerald-500">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">The Enabridge Advantage</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">Rapid Innovation</h3>
                <p className="text-lg">AI is evolving quickly—we help you implement proven solutions without reinventing the wheel</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">Lower Cost, Faster Results</h3>
                <p className="text-lg">Implement proven AI models and frameworks with minimal downtime</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">Scalable Solutions</h3>
                <p className="text-lg">Start small and grow as your needs expand</p>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">Competitive Edge</h3>
              <p className="text-lg">Automate processes, gain insights, and drive data-driven decisions to stay ahead in your industry</p>
            </div>
          </div>
        </div>

        {/* Slide 6: Our Services */}
        <div className={`w-full transition-opacity duration-500 ease-in-out ${currentSlide === 5 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12 pb-6 border-b border-emerald-500">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">Our Services</h1>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg mb-6">
              <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">1. Discovery & Assessment</h3>
              <ul className="list-disc pl-6 text-lg space-y-2">
                <li>Understand your business challenges, existing systems, and AI-readiness</li>
                <li>Identify high-impact opportunities for AI</li>
                <li>Select best-in-class AI tools (open-source, third-party, or commercial)</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg mb-6">
              <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">2. Custom AI Integration</h3>
              <ul className="list-disc pl-6 text-lg space-y-2">
                <li>Seamlessly integrate with your existing software and workflows</li>
                <li>Deploy solutions with minimal disruption</li>
                <li>Provide staff training and ongoing support</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">3. Continuous Improvement</h3>
              <ul className="list-disc pl-6 text-lg space-y-2">
                <li>Monitor performance and refine models</li>
                <li>Offer extended maintenance and updates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Slide 7: Value Proposition */}
        <div className={`w-full transition-opacity duration-500 ease-in-out ${currentSlide === 6 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12 pb-6 border-b border-emerald-500">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">Why Choose Enabridge</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">Cost-Effective</h3>
                <p className="text-lg">Focus on proven AI technologies rather than building from scratch</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">Fast Implementation</h3>
                <p className="text-lg">Streamlined process to get you up and running quickly</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">Long-Term Partnership</h3>
                <p className="text-lg">Ongoing support to adapt and scale AI solutions with your business</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 8: Our Process */}
        <div className={`w-full transition-opacity duration-500 ease-in-out ${currentSlide === 7 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12 pb-6 border-b border-emerald-500">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">Our Implementation Process</h1>
            </div>
            <ol className="list-decimal pl-6 text-lg space-y-4">
              <li><span className="text-emerald-500 font-semibold">Initial Consultation</span> – Understanding your vision and business challenges</li>
              <li><span className="text-emerald-500 font-semibold">Solution Proposal</span> – High-level approach and estimated ROI</li>
              <li><span className="text-emerald-500 font-semibold">Pilot Project</span> – Implementing a small-scale proof-of-concept</li>
              <li><span className="text-emerald-500 font-semibold">Full Integration</span> – Deploying a robust, production-ready solution</li>
              <li><span className="text-emerald-500 font-semibold">Ongoing Support</span> – Continuous updates, improvements, and new features</li>
            </ol>
          </div>
        </div>

        {/* Slide 9: Contact */}
        <div className={`w-full transition-opacity duration-500 ease-in-out ${currentSlide === 8 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-12 pb-6 border-b border-emerald-500">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">Connect With Us</h1>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">Contact Information</h3>
              <p className="text-lg mb-2">Email: ekkachai.n@enabridge.ai</p>
              <p className="text-lg mb-2">Phone: 065-668 8686</p>
              <p className="text-lg">Website: https://enabridge.ai</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-emerald-500 mb-6">Let's Transform Your Business Together</h2>
            <p className="text-lg">Discover how Enabridge can help your organization leverage the power of artificial intelligence to drive growth, efficiency, and innovation.</p>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-4">
        <button 
          onClick={prevSlide} 
          className={`w-12 h-12 bg-card border-2 border-emerald-500 rounded-full flex items-center justify-center transition-colors ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-emerald-500 hover:text-background'}`}
          disabled={currentSlide === 0}
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide} 
          className={`w-12 h-12 bg-card border-2 border-emerald-500 rounded-full flex items-center justify-center transition-colors ${currentSlide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-emerald-500 hover:text-background'}`}
          disabled={currentSlide === totalSlides - 1}
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      <div className="fixed bottom-8 left-8 z-50 text-gray-400 text-sm">
        {currentSlide + 1} / {totalSlides}
      </div>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-emerald-500 transform scale-125' : 'bg-gray-400'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Close Button */}
      <button 
        onClick={closePresentation}
        className="fixed top-6 right-6 z-50 w-10 h-10 bg-card border-2 border-emerald-500 rounded-full flex items-center justify-center transition-colors hover:bg-emerald-500 hover:text-background"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default AboutPresentation;
