
import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "th" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  th: {
    // Navbar
    "about": "เกี่ยวกับเรา",
    "services": "บริการของเรา",
    "contact": "ติดต่อ",
    
    // Hero
    "hero.title": "เพิ่มประสิทธิภาพธุรกิจของคุณ",
    "hero.subtitle": "ด้วย AI ที่ใช้งานได้จริง",
    "hero.description": "เราช่วยคุณนำ AI มาใช้ในธุรกิจอย่างรวดเร็วและมีประสิทธิภาพ",
    "hero.cta": "เริ่มต้นวันนี้",
    
    // Footer
    "footer.rights": "สงวนลิขสิทธิ์",
    
    // Not found
    "notfound.title": "ไม่พบหน้าที่ต้องการ",
    "notfound.description": "ขออภัย เราไม่สามารถค้นหาหน้าที่คุณต้องการได้",
    "notfound.back": "กลับไปหน้าหลัก",
  },
  en: {
    // Navbar
    "about": "About Us",
    "services": "Our Services",
    "contact": "Contact",
    
    // Hero
    "hero.title": "Empower Your Business",
    "hero.subtitle": "With Practical AI Solutions",
    "hero.description": "We help you implement AI in your business quickly and efficiently",
    "hero.cta": "Get Started",
    
    // Footer
    "footer.rights": "All Rights Reserved",
    
    // Not found
    "notfound.title": "Page Not Found",
    "notfound.description": "Sorry, we couldn't find the page you're looking for",
    "notfound.back": "Back to Home",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("th");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
