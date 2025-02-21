
import { Vortex } from "@/components/ui/vortex";

const Hero = () => {
  return (
    <div className="h-screen">
      <Vortex
        backgroundColor="#000000"
        baseHue={142}
        rangeY={800}
        particleCount={800}
        baseSpeed={0.1}
        rangeSpeed={2.0}
        baseRadius={1.5}
        rangeRadius={2.5}
        className="flex items-center flex-col justify-center px-4 sm:px-6 lg:px-8 w-full h-full"
      >
        <div className="text-center space-y-8 animate-fadeIn">
          <div className="inline-block glass px-4 py-2 rounded-full">
            <span className="text-emerald-400">AI Integration Partner</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Enabridge
            </h1>
            <p className="text-2xl md:text-4xl text-emerald-400 font-medium">
              เชื่อม AI เข้ากับธุรกิจของคุณ
            </p>
          </div>
        </div>
      </Vortex>
    </div>
  );
};

export default Hero;
