import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🏛️</span>
              <span className="font-bold text-lg text-white">Better Zamboanga</span>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Empowering the people of Zamboanga City with transparent access to services, programs, and public funds of the City Government.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/BetterZamboanga"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-lg"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/betterzamboanga/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-lg"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://discord.com/invite/qeSu7RJkjQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-lg"
                aria-label="Discord"
              >
                <i className="bi bi-discord"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-gray-300 uppercase mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/sitemap" className="text-gray-300 hover:text-white transition-colors">Sitemap</Link></li>
              <li>
                <a href="https://zamboanga.gov.ph/citizens-charter/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Citizen&apos;s Charter
                </a>
              </li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/accessibility" className="text-gray-300 hover:text-white transition-colors">Accessibility</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold tracking-wider text-gray-300 uppercase mb-6">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://data.gov.ph" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Open Data Philippines
                </a>
              </li>
              <li>
                <a href="https://www.foi.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Freedom of Information
                </a>
              </li>
              <li>
                <a href="https://zamboanga.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Official City Government Portal
                </a>
              </li>
              <li>
                <a href="https://zamboanga.gov.ph/sangguniang-panlungsod/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Sangguniang Panlungsod
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/cityofzamboanga/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  City Government Facebook
                </a>
              </li>
              <li>
                <a href="https://blgf.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  BLGF Portal
                </a>
              </li>
              <li>
                <a href="https://cmci.dti.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  CMCI DTI Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Contribute */}
          <div>
            <div className="mb-6">
              <p className="text-sm text-gray-300 mb-2">Cost to the People of Zamboanga City =</p>
              <p className="text-green-400 font-bold text-2xl">₱0</p>
            </div>
            <div className="space-y-3">
              <a
                href="mailto:volunteer@betterzamboanga.org"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <i className="bi bi-envelope-heart text-lg"></i>
                <span className="font-medium">Volunteer with us</span>
              </a>
              <a
                href="https://github.com/Banyel3/BetterZamboanga"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <i className="bi bi-github text-lg"></i>
                <span className="font-medium">Contribute code with us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © 2026 Better Zamboanga (forked from Better Solano). MIT | CC BY 4.0 All public information sourced from official government portals.
            </p>
            <p className="flex items-center gap-2">
              <i className="bi bi-boxes"></i>
              Ver. 1.1.8
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
