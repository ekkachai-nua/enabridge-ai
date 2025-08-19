import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          กลับหน้าหลัก / Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent mb-4">
              นโยบายความเป็นส่วนตัว
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">
              Privacy Policy
            </h2>
            <p className="text-gray-400">
              อัปเดตล่าสุด: {new Date().toLocaleDateString('th-TH')} | Last Updated: {new Date().toLocaleDateString('en-US')}
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-invert prose-emerald max-w-none">
            
            {/* Thai Content */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">ภาษาไทย</h3>
              
              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">1. ข้อมูลที่เราเก็บรวบรวม</h4>
                <p className="text-gray-300 mb-3">
                  เราเก็บรวบรวมข้อมูลส่วนบุคคลที่คุณให้ไว้ในแบบฟอร์มติดต่อ ได้แก่:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>ชื่อ-นามสกุล</li>
                  <li>ชื่อบริษัท</li>
                  <li>อีเมล</li>
                  <li>หมายเลขโทรศัพท์</li>
                  <li>ข้อความที่ส่งมาสอบถาม</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">2. วัตถุประสงค์ในการใช้ข้อมูล</h4>
                <p className="text-gray-300 mb-3">เราใช้ข้อมูลของคุณเพื่อ:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>ติดต่อกลับเพื่อให้คำปรึกษาด้าน AI Integration</li>
                  <li>ส่งข้อมูลบริการและข่าวสารที่เกี่ยวข้อง</li>
                  <li>ปรับปรุงคุณภาพบริการของเรา</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">3. การแบ่งปันข้อมูล</h4>
                <p className="text-gray-300">
                  เราจะไม่เปิดเผยข้อมูลส่วนบุคคลของคุณให้กับบุคคลที่สาม เว้นแต่จะได้รับความยินยอมจากคุณ 
                  หรือเป็นไปตามกฎหมายที่บังคับใช้
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">4. สิทธิของเจ้าของข้อมูล</h4>
                <p className="text-gray-300 mb-3">คุณมีสิทธิ์:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>เข้าถึงและขอสำเนาข้อมูลส่วนบุคคล</li>
                  <li>แก้ไขข้อมูลที่ไม่ถูกต้อง</li>
                  <li>ลบข้อมูลส่วนบุคคล</li>
                  <li>คัดค้านการประมวลผลข้อมูล</li>
                </ul>
              </div>
            </section>

            {/* English Content */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">English</h3>
              
              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">1. Information We Collect</h4>
                <p className="text-gray-300 mb-3">
                  We collect personal information that you provide through our contact form, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Your full name</li>
                  <li>Company name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Inquiry message</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">2. How We Use Your Information</h4>
                <p className="text-gray-300 mb-3">We use your information to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Contact you regarding AI Integration consulting services</li>
                  <li>Send relevant service information and updates</li>
                  <li>Improve our service quality</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">3. Information Sharing</h4>
                <p className="text-gray-300">
                  We do not share your personal information with third parties without your consent, 
                  except as required by applicable law.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">4. Your Rights</h4>
                <p className="text-gray-300 mb-3">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your personal data</li>
                  <li>Object to data processing</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-emerald-900/20 rounded-lg p-6 border border-emerald-500/20">
              <h3 className="text-xl font-bold text-emerald-300 mb-4">
                ติดต่อเรา / Contact Us
              </h3>
              <p className="text-gray-300 mb-2">
                หากคุณมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ กรุณาติดต่อ:
              </p>
              <p className="text-gray-300 mb-4">
                If you have questions about this Privacy Policy, please contact:
              </p>
              <div className="text-emerald-400">
                <p>Email: ekkachai.n@enabridge.ai</p>
                <p>Phone: 080-008-8686</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;