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

const EnabridgeLogo = () => {
  return (
    <svg width="300" viewBox="0 0 879.75 383.96" className="mx-auto mb-6">
      <defs>
        <style>
          {`
            .cls-1 {
              fill: none;
              stroke: #fff;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 6px;
            }
          `}
        </style>
      </defs>
      <path className="cls-1" d="M29.51,299.67C194.67,207.57,262.71,103.99,297.34,24.78c-6.97,94.32-7.86,175.44-13.16,270.06,19.89-7.69,43.5-.08,63.48-6.98-4.61-87.38-9.27-174.75-13.76-262.15-4.83-.8-7.25-1.22-12.08-2.09-.11,44.58,1.1,89.22,2.02,133.76-5.99,1.79-11.98,3.61-17.97,5.47-.55-46.15-1.44-92.44-.76-138.6,70.45,162.78,179.23,135.33,226.64,54.85-2.92,46.6-4.98,93.36-7.93,139.96,13.98-2.45,27.97-4.75,41.96-6.88-2.36-44.04-5.13-87.99-7.52-132.02-2.36-1.58-3.53-2.38-5.89-3.96-.81,22.87-1.46,45.76-2.09,68.66l-12.17,2.6c-.09,0-2.9-71.76-2.9-71.76.09-.03,16.23,26.64,25.08,36.45,38.26,42.41,80.89,55.57,122.36,61.81-30.57-6.52-69.77-15.37-100.52-17.12-155.1-8.81-294.34,15.8-471.38,161.8.01,14.39,1.33,34.24,3.25,48.93C373.52,109.21,647.11,152.79,827.64,223.45"/>
    </svg>
  );
};

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16">
      <FloatingPaths />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fadeIn">
          <EnabridgeLogo />
          <div className="inline-block glass px-4 py-2 rounded-full">
            <span className="text-emerald-500">AI Integration Partner</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Enabridge
            </h1>
            <p className="text-2xl md:text-4xl text-emerald-500 font-medium">
              เชื่อม AI เข้ากับธุรกิจของคุณ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
