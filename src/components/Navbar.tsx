
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "th" ? "en" : "th");
  };

  return (
    <nav className="fixed w-full z-50 glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Enabridge
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/about" className="text-gray-300 hover:text-emerald-500 transition-colors">
                {t("about")}
              </Link>
              <a href="#services" className="text-gray-300 hover:text-emerald-500 transition-colors">
                {t("services")}
              </a>
              <a href="#contact" className="text-gray-300 hover:text-emerald-500 transition-colors">
                {t("contact")}
              </a>
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-gray-300 hover:text-emerald-500 transition-colors"
              >
                <Globe size={18} />
                <span>{language === "th" ? "EN" : "TH"}</span>
              </button>
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
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-300 hover:text-emerald-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("about")}
            </Link>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-300 hover:text-emerald-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("services")}
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-300 hover:text-emerald-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t("contact")}
            </a>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-2 text-gray-300 hover:text-emerald-500 transition-colors"
            >
              <Globe size={18} />
              <span>{language === "th" ? "EN" : "TH"}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
