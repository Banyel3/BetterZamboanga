import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact LGU Zamboanga City. Emergency hotlines for ZCDRRMO, ZCPO, BFP, and medical facilities. Office hours, email, and City Hall location.',
};

const emergencyHotlines = [
  { label: 'ZCDRRMO', number: '995-9601', tel: '9959601', icon: 'bi-exclamation-triangle-fill' },
  { label: 'ZCDRRMO Alt', number: '990-1171', tel: '9901171', icon: 'bi-exclamation-triangle-fill' },
  { label: 'Emergency Ops Center', number: '0966-731-6242', tel: '09667316242', icon: 'bi-headset' },
  { label: 'EOC Alt 1', number: '0955-004-3682', tel: '09550043682', icon: 'bi-headset' },
  { label: 'EOC Alt 2', number: '0928-896-6279', tel: '09288966279', icon: 'bi-headset' },
  { label: 'Technical Rescue/Fire Aux', number: '0926-091-2492', tel: '09260912492', icon: 'bi-tools' },
  { label: "Mayor's Office", number: '993-0000', tel: '9930000', icon: 'bi-building-fill' },
];

const policeStations = [
  { label: 'ZCPO HQS', number: '0977-855-8138', tel: '09778558138' },
  { label: 'ZCPS1 VITALI', number: '0935-604-4139', tel: '09356044139' },
  { label: 'ZCPS2 CURUAN', number: '0935-457-2483', tel: '09354572483' },
  { label: 'ZCPS3 SANGALI', number: '0917-146-2240', tel: '09171462240' },
  { label: 'ZCPS4 CULIANAN', number: '0975-333-8826', tel: '09753338826' },
  { label: 'ZCPS5 DIVISORIA', number: '0917-677-8907', tel: '09176778907' },
  { label: 'ZCPS6 TETUAN', number: '0997-746-5666', tel: '09977465666' },
  { label: 'ZCPS7 STA. MARIA', number: '0917-307-8098', tel: '09173078098' },
  { label: 'ZCPS8 SINUNUC', number: '0906-853-9806', tel: '09068539806' },
  { label: 'ZCPS9 AYALA', number: '0917-864-8553', tel: '09178648553' },
  { label: 'ZCPS10 LABUAN', number: '0917-309-3887', tel: '09173093887' },
  { label: 'ZCPS11 CENTRAL', number: '0917-701-6340', tel: '09177016340' },
  { label: 'ZCPS12 TALON-TALON', number: '0977-855-8138', tel: '09778558138' },
];

const fireStations = [
  { label: 'Fire District (Main)', number: '0955-781-6063', tel: '09557816063' },
  { label: 'Lunzuran Sub-Station', number: '0936-154-5366', tel: '09361545366' },
  { label: 'Guiwan Sub-Station', number: '0916-133-2436', tel: '09161332436' },
  { label: 'Tetuan Sub-Station', number: '0906-444-7816', tel: '09064447816' },
  { label: 'Sta Catalina Sub-Station', number: '0956-185-7746', tel: '09561857746' },
  { label: 'Mampang Sub-Station', number: '0975-074-1376', tel: '09750741376' },
  { label: 'Boalan Sub-Station', number: '0997-703-1365', tel: '09977031365' },
  { label: 'Manicahan Sub-Station', number: '0975-031-3372', tel: '09750313372' },
  { label: 'Quiniput Sub-Station', number: '0975-197-3009', tel: '09751973009' },
  { label: 'Culianan Sub-Station', number: '0975-295-3599', tel: '09752953599' },
  { label: 'Vitali Sub-Station', number: '0956-185-7746', tel: '09561857746' },
  { label: 'Calarian Sub-Station', number: '0917-106-2795', tel: '09171062795' },
  { label: 'Recodo Sub-Station', number: '0936-256-7071', tel: '09362567071' },
  { label: 'Talisayan Sub-Station', number: '0936-462-2070', tel: '09364622070' },
  { label: 'Ayala Sub-Station', number: '0953-149-9756', tel: '09531499756' },
  { label: 'Labuan Sub-Station', number: '0927-493-5473', tel: '09274935473' },
];

const medicalHotlines = [
  { label: 'ZCMC (Emergency)', number: '0917-713-2323', tel: '09177132323' },
  { label: 'ZCMC (Direct)', number: '(062) 991-2934', tel: '0629912934' },
  { label: 'West Metro Medical', number: '0998-978-3820', tel: '09989783820' },
  { label: 'Ciudad Medical', number: '(062) 992-7330', tel: '06299927330' },
  { label: "Zamboanga Doctor's", number: '(062) 991-0321', tel: '0629910321' },
  { label: 'Chung Hua Hospital', number: '(062) 991-7171', tel: '0629917171' },
];

export default function ContactPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-3">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-bz-primary">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Contact</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="page-header-v3 py-12">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-3 py-1 bg-bz-accent-yellow text-bz-primary-dark text-sm font-semibold rounded-full mb-4">
            <i className="bi bi-envelope-fill mr-1"></i>
            Contact
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Contact Us
          </h1>
          <p className="text-gray-200">
            We&apos;re here to help. Reach out to us through any of these channels.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="mailto:pio.zamboangacity@superadmin" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                <i className="bi bi-envelope-fill text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-bz-primary font-medium">pio.zamboangacity@superadmin</p>
                <span className="text-xs text-gray-500">We&apos;ll respond within 24 hours</span>
              </div>
            </a>
            <a href="tel:0629920420" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                <i className="bi bi-telephone-fill text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-bz-primary font-medium">(062) 992-0420</p>
                <span className="text-xs text-gray-500">Mon-Fri: 8:00 AM - 5:00 PM</span>
              </div>
            </a>
            <a href="tel:0629914525" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                <i className="bi bi-telephone-fill text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Alternate Phone</h3>
                <p className="text-bz-primary font-medium">(062) 991-4525</p>
                <span className="text-xs text-gray-500">Zamboanga City Hall</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="bg-bz-primary rounded-xl p-6 text-white">
            <div className="flex items-center gap-2 mb-4">
              <i className="bi bi-clock-fill text-xl"></i>
              <h2 className="text-lg font-bold">Office Hours</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-sm opacity-75">Monday - Friday</p>
                <p className="font-bold">8:00 AM - 5:00 PM</p>
                <span className="inline-flex items-center gap-1 text-xs mt-2 px-2 py-1 bg-green-500 rounded-full">
                  <i className="bi bi-check-circle-fill"></i> Open
                </span>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-sm opacity-75">Lunch Break</p>
                <p className="font-bold">12:00 PM - 1:00 PM</p>
                <span className="inline-flex items-center gap-1 text-xs mt-2 px-2 py-1 bg-yellow-500 text-gray-900 rounded-full">
                  <i className="bi bi-pause-circle-fill"></i> Break
                </span>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-sm opacity-75">Saturday & Sunday</p>
                <p className="font-bold">Closed</p>
                <span className="inline-flex items-center gap-1 text-xs mt-2 px-2 py-1 bg-red-500 rounded-full">
                  <i className="bi bi-x-circle-fill"></i> Closed
                </span>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-sm opacity-75">National & Local Holidays</p>
                <p className="font-bold">Closed</p>
                <span className="inline-flex items-center gap-1 text-xs mt-2 px-2 py-1 bg-red-500 rounded-full">
                  <i className="bi bi-x-circle-fill"></i> Closed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-2">
              <i className="bi bi-exclamation-triangle-fill mr-1"></i>
              Emergency Services
            </span>
            <h2 className="text-xl font-bold text-gray-800">Disaster Risk Reduction & Emergency</h2>
            <p className="text-gray-600 text-sm">For disasters, emergencies, and urgent assistance, contact ZCDRRMO anytime.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {emergencyHotlines.map((h, i) => (
              <a key={i} href={`tel:${h.tel}`} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                <i className={`bi ${h.icon} text-orange-500 text-xl mb-2`}></i>
                <p className="text-xs text-gray-500 mb-1">{h.label}</p>
                <p className="font-bold text-gray-800 text-sm">{h.number}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Police */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-2">
              <i className="bi bi-shield-fill mr-1"></i>
              Police
            </span>
            <h2 className="text-xl font-bold text-gray-800">Zamboanga City Police Office (ZCPO)</h2>
            <p className="text-gray-600 text-sm">For police assistance and public safety concerns, contact ZCPO headquarters or your local police station.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {policeStations.map((h, i) => (
              <a key={i} href={`tel:${h.tel}`} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-3">
                <i className="bi bi-shield-fill text-blue-600"></i>
                <div>
                  <p className="text-xs text-gray-500">{h.label}</p>
                  <p className="font-bold text-gray-800 text-sm">{h.number}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Fire */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full mb-2">
              <i className="bi bi-fire mr-1"></i>
              Fire
            </span>
            <h2 className="text-xl font-bold text-gray-800">Zamboanga City Fire District</h2>
            <p className="text-gray-600 text-sm">For fire emergencies and fire prevention inquiries, contact the main fire station or your nearest sub-station.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {fireStations.map((h, i) => (
              <a key={i} href={`tel:${h.tel}`} className="bg-white rounded-lg p-4 shadow-sm border border-red-100 hover:shadow-md transition-shadow flex items-center gap-3">
                <i className="bi bi-fire text-red-500"></i>
                <div>
                  <p className="text-xs text-gray-500">{h.label}</p>
                  <p className="font-bold text-gray-800 text-sm">{h.number}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Medical */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-2">
              <i className="bi bi-hospital-fill mr-1"></i>
              Medical
            </span>
            <h2 className="text-xl font-bold text-gray-800">Medical Emergency Hotlines</h2>
            <p className="text-gray-600 text-sm">For medical emergencies and hospital inquiries.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {medicalHotlines.map((h, i) => (
              <a key={i} href={`tel:${h.tel}`} className="bg-white rounded-lg p-4 shadow-sm border border-green-100 hover:shadow-md transition-shadow flex items-center gap-3">
                <i className="bi bi-hospital text-green-600"></i>
                <div>
                  <p className="text-xs text-gray-500">{h.label}</p>
                  <p className="font-bold text-gray-800 text-sm">{h.number}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
