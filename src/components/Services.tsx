
import { MessageSquare, Users, Database, Wrench } from "lucide-react";

const serviceItems = [
  {
    icon: <Users className="w-8 h-8 text-emerald-500" />,
    title: "Lead Nurturing",
    description: "เพิ่มยอดขายด้วยระบบติดตามลูกค้าและการขายต่อยอดอัตโนมัติ ช่วยให้คุณไม่พลาดทุกโอกาสทางธุรกิจ",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-emerald-500" />,
    title: "24/7 Chatbot Assistant",
    description: "ระบบแชทบอทอัจฉริยะที่พร้อมตอบคำถามลูกค้าตลอด 24 ชั่วโมง เพิ่มความพึงพอใจและอัตราการเปลี่ยนเป็นลูกค้า",
  },
  {
    icon: <Database className="w-8 h-8 text-emerald-500" />,
    title: "Tool Integration",
    description: "รวมทุกเครื่องมือเข้าด้วยกันบนแพลตฟอร์มเดียว ลดความซ้ำซ้อนและเพิ่มประสิทธิภาพการทำงาน",
  },
  {
    icon: <Wrench className="w-8 h-8 text-emerald-500" />,
    title: "Customized Business Solutions",
    description: "วิเคราะห์และแก้ปัญหาธุรกิจของคุณด้วยโซลูชัน AI ที่ออกแบบมาโดยเฉพาะ",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">บริการของเรา</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            เราพร้อมยกระดับธุรกิจของคุณด้วยโซลูชัน AI ที่ครอบคลุมทุกความต้องการ
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
