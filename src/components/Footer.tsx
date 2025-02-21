
import { Facebook, Youtube, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-4">
              Enabridge
            </h3>
            <p className="text-gray-400">
              เชื่อมต่อธุรกิจของคุณกับพลังของ AI เพื่อการเติบโตที่ไม่มีขีดจำกัด
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">ลิงก์ที่เป็นประโยชน์</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  นโยบายความเป็นส่วนตัว
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  เงื่อนไขการใช้งาน
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-emerald-500 transition-colors">
                  ติดต่อเรา
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">ติดต่อ</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <a href="tel:0656688686" className="hover:text-emerald-500 transition-colors">
                  065-668-8686
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:ekkachai.n@enabridge.co" className="hover:text-emerald-500 transition-colors">
                  ekkachai.n@enabridge.co
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">โซเชียลมีเดีย</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61563096624780"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC2xbIQqhPKUR4TYSw1ZuzcQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://line.me/R/ti/p/@454npsem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-500 transition-colors"
              >
                <img src="/line-icon.svg" alt="Line" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Enabridge. สงวนลิขสิทธิ์
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
