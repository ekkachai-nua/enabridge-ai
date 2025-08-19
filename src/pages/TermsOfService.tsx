import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
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
              เงื่อนไขการใช้งาน
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">
              Terms of Service
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
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">1. การยอมรับเงื่อนไข</h4>
                <p className="text-gray-300">
                  การใช้เว็บไซต์และบริการของ Enabridge ถือว่าคุณยอมรับและตกลงที่จะปฏิบัติตามเงื่อนไขการใช้งานนี้ทั้งหมด
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">2. บริการที่เราให้</h4>
                <p className="text-gray-300 mb-3">
                  Enabridge ให้บริการ AI Integration Solutions ซึ่งรวมถึง:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>การปรึกษาและวิเคราะห์ความต้องการ AI</li>
                  <li>การติดตั้งและ integrate AI tools เข้ากับระบบที่มีอยู่</li>
                  <li>การฝึกอบรมและสนับสนุนการใช้งาน</li>
                  <li>การพัฒนาโซลูชัน AI ที่ออกแบบเฉพาะ</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">3. ข้อผูกพันของผู้ใช้</h4>
                <p className="text-gray-300 mb-3">คุณตกลงที่จะ:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>ให้ข้อมูลที่ถูกต้องและเป็นจริง</li>
                  <li>ใช้บริการเพื่อวัตถุประสงค์ทางธุรกิจที่ถูกกฎหมายเท่านั้น</li>
                  <li>ไม่ใช้บริการในทางที่อาจเกิดความเสียหายต่อบุคคลอื่น</li>
                  <li>เคารพทรัพย์สินทางปัญญาของเราและบุคคลที่สาม</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">4. ทรัพย์สินทางปัญญา</h4>
                <p className="text-gray-300">
                  เนื้อหา เทคโนโลยี และโซลูชันที่พัฒนาโดย Enabridge เป็นทรัพย์สินทางปัญญาของเรา 
                  ลูกค้าจะได้รับสิทธิ์การใช้งานตามข้อตกลงในสัญญาบริการเท่านั้น
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">5. ข้อจำกัดความรับผิดชอบ</h4>
                <p className="text-gray-300">
                  Enabridge จะไม่รับผิดชอบต่อความเสียหายทางอ้อม ความเสียหายพิเศษ หรือความเสียหายที่เกิดขึ้นตามมา 
                  รวมถึงการสูญเสียข้อมูลหรือผลกำไรทางธุรกิจ เว้นแต่จะเป็นไปตามกฎหมายที่บังคับใช้
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">6. การยกเลิกและสิ้นสุดบริการ</h4>
                <p className="text-gray-300">
                  เราขอสงวนสิทธิ์ในการระงับหรือยกเลิกบริการในกรณีที่มีการใช้งานที่ผิดเงื่อนไข 
                  หรือเมื่อจำเป็นเพื่อปกป้องผลประโยชน์ของเราและลูกค้ารายอื่น
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">7. กฎหมายที่ใช้บังคับ</h4>
                <p className="text-gray-300">
                  เงื่อนไขการใช้งานนี้อยู่ภายใต้กฎหมายไทย และข้อพิพาทใดๆ จะอยู่ในเขตอำนาจศาลไทย
                </p>
              </div>
            </section>

            {/* English Content */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">English</h3>
              
              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">1. Acceptance of Terms</h4>
                <p className="text-gray-300">
                  By using Enabridge's website and services, you agree to accept and comply with all these Terms of Service.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">2. Our Services</h4>
                <p className="text-gray-300 mb-3">
                  Enabridge provides AI Integration Solutions including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>AI consulting and needs analysis</li>
                  <li>Installation and integration of AI tools with existing systems</li>
                  <li>Training and ongoing support</li>
                  <li>Custom AI solution development</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">3. User Obligations</h4>
                <p className="text-gray-300 mb-3">You agree to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Provide accurate and truthful information</li>
                  <li>Use services only for legitimate business purposes</li>
                  <li>Not use services in ways that may harm others</li>
                  <li>Respect intellectual property rights of us and third parties</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">4. Intellectual Property</h4>
                <p className="text-gray-300">
                  Content, technology, and solutions developed by Enabridge are our intellectual property. 
                  Clients receive usage rights only as specified in service agreements.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">5. Limitation of Liability</h4>
                <p className="text-gray-300">
                  Enabridge shall not be liable for indirect, special, or consequential damages, 
                  including loss of data or business profits, except as required by applicable law.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">6. Service Termination</h4>
                <p className="text-gray-300">
                  We reserve the right to suspend or terminate services in case of terms violation 
                  or when necessary to protect our interests and those of other clients.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-emerald-300 mb-3">7. Governing Law</h4>
                <p className="text-gray-300">
                  These Terms of Service are governed by Thai law, and any disputes shall be under the jurisdiction of Thai courts.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-emerald-900/20 rounded-lg p-6 border border-emerald-500/20">
              <h3 className="text-xl font-bold text-emerald-300 mb-4">
                ติดต่อเรา / Contact Us
              </h3>
              <p className="text-gray-300 mb-2">
                หากคุณมีคำถามเกี่ยวกับเงื่อนไขการใช้งาน กรุณาติดต่อ:
              </p>
              <p className="text-gray-300 mb-4">
                If you have questions about these Terms of Service, please contact:
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

export default TermsOfService;