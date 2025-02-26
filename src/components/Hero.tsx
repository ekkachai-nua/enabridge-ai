
import { motion } from "framer-motion";

const FloatingPaths = () => {
  const paths = Array.from({ length: 48 }, (_, i) => ({
    id: i,
    d: `M${480 - i * 8} -${289 + i * 8}C${480 - i * 8} -${
      289 + i * 8
    } ${412 - i * 8} ${316 - i * 8} -${252 - i * 8} ${443 - i * 8}C-${816 - i * 8} ${
      570 - i * 8
    } -${884 - i * 8} ${975 - i * 8} -${884 - i * 8} ${975 - i * 8}`,
    width: 0.5 + i * 0.02,
  }));

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden">
      <svg className="w-full h-full text-white/50" viewBox="-200 -200 1200 800" fill="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const BridgeIcon = () => {
  return (
    <svg width="220" height="100" viewBox="0 0 400 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4">
      <path 
        d="M90,150 C120,80 170,150 210,80 C250,20 290,80 320,80"
        stroke="white" 
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path 
        d="M135,80 L135,150 M270,80 L270,150"
        stroke="white" 
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16">
      <FloatingPaths />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12 animate-fadeIn">
          <div className="space-y-6">
            <BridgeIcon />
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-emerald-500">
              Enabridge
            </h1>
          </div>
          
          <div className="space-y-6">
            <p className="text-2xl md:text-4xl text-emerald-500 font-medium">
              AI Integration Solutions
            </p>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              Bringing top-tier AI to your business – fast, affordable, and impactful
            </p>
            
            <p className="text-lg md:text-xl text-emerald-400 font-medium mt-6">
              เชื่อม AI เข้ากับธุรกิจของคุณ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
