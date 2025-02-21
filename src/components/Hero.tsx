
import { WavyBackground } from "@/components/ui/wavy-background";

const Hero = () => {
  return (
    <WavyBackground
      className="max-w-4xl mx-auto"
      colors={["#10b981", "#059669", "#047857", "#065f46", "#064e3b"]}
      backgroundFill="#111111"
      blur={20}
      speed="slow"
      waveWidth={100}
      containerClassName="min-h-screen"
      waveOpacity={0.5}
    >
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
    </WavyBackground>
  );
};

export default Hero;
