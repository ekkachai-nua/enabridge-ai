
import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://hook.us1.make.com/hgz01p0nu1nh3ml8mom5xv5wmbiemova",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast({
          title: "ส่งข้อความสำเร็จ",
          description: "เราจะติดต่อกลับโดยเร็วที่สุด",
        });
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "เกิดข้อผิดพลาด",
        description: "กรุณาลองใหม่อีกครั้ง",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="glass rounded-2xl p-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">ติดต่อเรา</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              ชื่อ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              บริษัท <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-colors"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              อีเมล <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-colors"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">เบอร์โทรศัพท์</label>
            <input
              type="tel"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-colors"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">ข้อความ</label>
          <textarea
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-colors h-32"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full glass px-8 py-4 rounded-lg text-emerald-500 hover:text-emerald-400 transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
        >
          {isSubmitting ? "กำลังส่ง..." : "ส่งข้อความ"}
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
