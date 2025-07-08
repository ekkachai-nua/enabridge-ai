import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CompanyProfile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Clean up slide nodes on component mount
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Escape') {
        navigate('/');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, navigate]);

  const slides = [
    // Slide 1: Title & Introduction
    <div className="slide-content" key="slide1">
      <div className="slide-header text-center">
        <div className="flex flex-col items-center mb-10">
          <svg id="enabridge-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 879.75 383.96" className="w-64 h-auto mb-5">
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
          <h1 className="text-4xl md:text-6xl mb-10 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Enabridge</h1>
        </div>
        <h2 className="text-2xl md:text-3xl text-emerald-500 mb-6">AI Integration Solutions</h2>
        <div className="text-xl md:text-2xl text-gray-400 mb-8">Bringing top-tier AI to your business – fast, affordable, and impactful</div>
      </div>
      <p className="text-lg md:text-xl">We specialize in integrating existing AI solutions into client systems, helping businesses like yours harness the power of artificial intelligence without the complexity.</p>
    </div>,

    // Slide 2: Company Background
    <div className="slide-content" key="slide3">
      <div className="slide-header">
        <h1 className="text-3xl md:text-5xl bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">Company Background</h1>
      </div>
      <div className="bg-gray-800 rounded-lg p-5 mb-4 shadow-md">
        <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">The AI Revolution</h3>
        <p className="text-lg md:text-xl">AI technology is transforming industries at an unprecedented pace, creating new opportunities for businesses to innovate and compete</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-5 mb-4 shadow-md">
        <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">Supporting AI Adoption</h3>
        <p className="text-lg md:text-xl">Many businesses recognize AI's potential but lack the expertise and resources to implement it effectively</p>
        <p className="text-lg md:text-xl">There's a growing need for specialized companies that can bridge this gap and democratize AI access</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-5 mb-4 shadow-md">
        <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">Why Now?</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-lg md:text-xl">AI tools have matured to enterprise-grade reliability</li>
          <li className="text-lg md:text-xl">Cost-effective integration solutions are becoming essential for competitive advantage</li>
          <li className="text-lg md:text-xl">Businesses need rapid deployment without extensive R&D investments</li>
        </ul>
      </div>
    </div>,

    // Slide 3: Founder Spotlight
    <div className="slide-content" key="slide4">
      <div className="slide-header">
        <h1 className="text-3xl md:text-5xl bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">Founder Spotlight</h1>
      </div>
      <h2 className="text-2xl md:text-3xl text-emerald-500 mb-4">Ekkachai Nuangsapsaen</h2>
      <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">Experience Highlights</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li className="text-lg md:text-xl">20 years of experience in software development & IT strategy</li>
        <li className="text-lg md:text-xl">Experience in global giant tech companies</li>
        <li className="text-lg md:text-xl">Led teams delivering software for top-tier banks and crypto exchanges</li>
        <li className="text-lg md:text-xl">Experience in bundling AI into development processes</li>
        <li className="text-lg md:text-xl">Proven ability to scale software products efficiently</li>
      </ul>
      <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">Industry Expertise</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li className="text-lg md:text-xl">Banking and financial services</li>
        <li className="text-lg md:text-xl">Cryptocurrency and blockchain technologies</li>
        <li className="text-lg md:text-xl">EV car rental solutions</li>
      </ul>
    </div>,

    // Slide 4: Our Vision & Mission
    <div className="slide-content" key="slide5">
      <div className="slide-header">
        <h1 className="text-3xl md:text-5xl bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">Our Vision & Mission</h1>
      </div>
      <div className="bg-gray-800 rounded-lg p-5 mb-4 shadow-md">
        <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">Vision</h3>
        <p className="text-lg md:text-xl">To democratize AI by making advanced technologies accessible and affordable for businesses of all sizes</p>
      </div>
      <div className="bg-gray-800 rounded-lg p-5 mb-4 shadow-md">
        <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">Mission</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-lg md:text-xl">Integrate the best AI tools available on the market (LLMs, generative AI, etc.) into existing enterprise systems</li>
          <li className="text-lg md:text-xl">Optimize business operations, reduce costs, and accelerate innovation</li>
          <li className="text-lg md:text-xl">Empower clients to leverage AI quickly and effectively without massive upfront investments</li>
        </ul>
      </div>
    </div>,

    // Slide 5: Why AI Integration?
    <div className="slide-content" key="slide6">
      <div className="slide-header">
        <h1 className="text-3xl md:text-5xl bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">Why AI Integration?</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800 rounded-lg p-5 shadow-md">
          <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">Rapid Innovation</h3>
          <p className="text-lg md:text-xl">AI is evolving quickly—no need to reinvent the wheel</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-5 shadow-md">
          <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">Lower Cost, Faster Results</h3>
          <p className="text-lg md:text-xl">Implement proven AI models and frameworks with minimal downtime</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-5 shadow-md">
          <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">Scalable Solutions</h3>
          <p className="text-lg md:text-xl">Start small and grow as your needs expand</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-5 shadow-md">
          <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">Competitive Edge</h3>
          <p className="text-lg md:text-xl">Automate processes, gain insights, and drive data-driven decisions</p>
        </div>
      </div>
    </div>,

    // Slide 6: Our Approach & Services
    <div className="slide-content" key="slide7">
      <div className="slide-header">
        <h1 className="text-3xl md:text-5xl bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">Our Approach & Services</h1>
      </div>
      <div className="bg-gray-800 rounded-lg p-5 mb-4 shadow-md">
        <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">1. Discovery & Assessment</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-lg md:text-xl">Understand your business challenges, existing systems, and AI-readiness</li>
          <li className="text-lg md:text-xl">Identify high-impact opportunities for AI</li>
          <li className="text-lg md:text-xl">Select best-in-class AI tools (open-source, third-party, or commercial)</li>
        </ul>
      </div>
      <div className="bg-gray-800 rounded-lg p-5 mb-4 shadow-md">
        <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">2. Custom AI Integration</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-lg md:text-xl">Seamlessly integrate with your existing software and workflows</li>
          <li className="text-lg md:text-xl">Deploy solutions with minimal disruption</li>
          <li className="text-lg md:text-xl">Provide staff training and ongoing support</li>
        </ul>
      </div>
      <div className="bg-gray-800 rounded-lg p-5 mb-4 shadow-md">
        <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">3. Continuous Improvement</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li className="text-lg md:text-xl">Monitor performance and refine models</li>
          <li className="text-lg md:text-xl">Offer extended maintenance and updates</li>
        </ul>
      </div>
    </div>,

    // Slide 7: Value Proposition
    <div className="slide-content" key="slide8">
      <div className="slide-header">
        <h1 className="text-3xl md:text-5xl bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">Value Proposition</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-800 rounded-lg p-5 shadow-md">
          <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">Cost-Effective</h3>
          <p className="text-lg md:text-xl">Focus on proven AI technologies rather than building from scratch</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-5 shadow-md">
          <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">Fast Implementation</h3>
          <p className="text-lg md:text-xl">Streamlined process to get you up and running quickly</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-5 shadow-md">
          <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">Long-Term Partnership</h3>
          <p className="text-lg md:text-xl">Ongoing support to adapt and scale AI solutions with your business</p>
        </div>
      </div>
    </div>,

    // Slide 8: The Process & Next Steps
    <div className="slide-content" key="slide9">
      <div className="slide-header">
        <h1 className="text-3xl md:text-5xl bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">The Process & Next Steps</h1>
      </div>
      <ol className="list-decimal pl-6 space-y-4">
        <li className="text-lg md:text-xl"><span className="text-emerald-500 font-bold">Initial Consultation</span> – Understand your vision and business challenges</li>
        <li className="text-lg md:text-xl"><span className="text-emerald-500 font-bold">Solution Proposal</span> – High-level approach and estimated ROI</li>
        <li className="text-lg md:text-xl"><span className="text-emerald-500 font-bold">Pilot Project</span> – Implement a small-scale proof-of-concept</li>
        <li className="text-lg md:text-xl"><span className="text-emerald-500 font-bold">Full Integration</span> – Deploy a robust, production-ready solution</li>
        <li className="text-lg md:text-xl"><span className="text-emerald-500 font-bold">Ongoing Support</span> – Continuous updates, improvements, and new features</li>
      </ol>
    </div>,

    // Slide 9: Contact (modified to update email and phone number)
    <div className="slide-content" key="slide11">
      <div className="slide-header">
        <h1 className="text-3xl md:text-5xl bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-6">Contact</h1>
      </div>
      <div className="bg-gray-800 rounded-lg p-5 mb-6 shadow-md">
        <h3 className="text-xl md:text-2xl text-emerald-400 mb-3">Contact Information</h3>
        <p className="text-lg md:text-xl">Email: ekkachai.n@enabridge.ai</p>
        <p className="text-lg md:text-xl">Phone: 080-008-8686</p>
        <p className="text-lg md:text-xl">Website: enabridge.ai</p>
      </div>
    </div>,
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center">
      <div className="flex-grow relative w-full max-w-6xl flex items-center justify-center">
        {/* Close Button */}
        <button 
          onClick={() => navigate('/')} 
          className="absolute top-5 right-5 z-50 p-2 rounded-full bg-gray-800 hover:bg-emerald-600 transition-colors"
        >
          <X className="text-white" />
        </button>

        {/* Slide Container */}
        <div className="slide-container h-full w-full overflow-hidden relative flex items-center justify-center">
          <div className="slide active h-full w-full flex flex-col justify-center items-center">
            <div className="max-w-6xl mx-auto w-full px-6 md:px-10">
              {slides[currentSlide]}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="fixed bottom-6 right-6 z-50 flex gap-4">
          <button 
            onClick={prevSlide} 
            className="control-btn w-12 h-12 flex items-center justify-center bg-gray-800 text-white border-2 border-emerald-500 rounded-full hover:bg-emerald-500 hover:text-gray-900 transition-colors"
            disabled={currentSlide === 0}
          >
            &#8592;
          </button>
          <button 
            onClick={nextSlide} 
            className="control-btn w-12 h-12 flex items-center justify-center bg-gray-800 text-white border-2 border-emerald-500 rounded-full hover:bg-emerald-500 hover:text-gray-900 transition-colors"
            disabled={currentSlide === totalSlides - 1}
          >
            &#8594;
          </button>
        </div>

        {/* Slide Number */}
        <div className="fixed bottom-6 left-6 z-50 text-gray-400">
          {currentSlide + 1} / {totalSlides}
        </div>

        {/* Dots Navigation */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-emerald-500 transform scale-110" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
