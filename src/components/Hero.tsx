
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

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16">
      <FloatingPaths />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fadeIn">
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
