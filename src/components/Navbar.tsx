
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Enabridge
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-emerald-500 transition-colors">
                บริการของเรา
              </a>
              <a href="#contact" className="text-gray-300 hover:text-emerald-500 transition-colors">
                ติดต่อ
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-emerald-500 transition-colors"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden glass">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#services"
              className="block px-3 py-2 text-gray-300 hover:text-emerald-500 transition-colors"
            >
              บริการของเรา
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-300 hover:text-emerald-500 transition-colors"
            >
              ติดต่อ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
