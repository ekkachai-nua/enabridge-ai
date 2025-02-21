
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fadeIn">
          <div className="inline-block glass px-4 py-2 rounded-full">
            <span className="text-emerald-500">AI Integration Partner</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            เราเชื่อสุดใจว่า AI ไม่ใช่เครื่องมือที่ถูกจำกัด ไว้เฉพาะบริษัทยักษ์ใหญ่!
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Enabridge ถือกำเนิดขึ้นเพื่อ ปลดล็อกพลัง แห่งอนาคต ให้ธุรกิจทุกขนาด
            ก้าวข้ามขีดจำกัด สร้างแรงบันดาลใจ และผลลัพธ์ที่ยิ่งใหญ่
            เราพร้อมเป็น เพื่อนร่วมทาง ที่จะพาคุณทะยานไปพร้อมกัน
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button className="glass px-8 py-4 rounded-lg text-emerald-500 hover:text-emerald-400 transition-all hover:scale-105 flex items-center gap-2">
              จองปรึกษาฟรี
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
