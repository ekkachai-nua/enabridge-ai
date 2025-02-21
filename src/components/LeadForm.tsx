
import { useState } from "react";
import { Send } from "lucide-react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">ติดต่อเรา</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">ชื่อ</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-colors"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">บริษัท</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-colors"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">อีเมล</label>
            <input
              type="email"
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
          className="w-full glass px-8 py-4 rounded-lg text-emerald-500 hover:text-emerald-400 transition-all hover:scale-105 flex items-center justify-center gap-2"
        >
          ส่งข้อความ
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
