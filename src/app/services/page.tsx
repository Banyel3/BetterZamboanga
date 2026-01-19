import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'City government services directory for Zamboanga City.',
};

const categories = [
  { 
    id: 'certificates', 
    name: 'Certificates & Vital Records', 
    icon: 'bi-file-earmark-text',
    description: 'Birth, marriage, death certificates, and other vital records',
    href: '/services/certificates',
    color: 'bg-green-600'
  },
  { 
    id: 'business', 
    name: 'Business, Trade & Investment', 
    icon: 'bi-shop',
    description: 'Business permits, licenses, and trade registration services',
    href: '/services/business',
    color: 'bg-green-600'
  },
  { 
    id: 'social-services', 
    name: 'Social Services & Assistance', 
    icon: 'bi-people',
    description: 'Welfare programs, senior citizen services, and financial aid',
    href: '/services/social-services',
    color: 'bg-green-600'
  },
  { 
    id: 'health', 
    name: 'Health & Wellness', 
    icon: 'bi-heart-pulse',
    description: 'Vaccination programs, health certificates, and medical assistance',
    href: '/services/health',
    color: 'bg-green-600'
  },
  { 
    id: 'tax-payments', 
    name: 'Taxation & Payments', 
    icon: 'bi-cash-stack',
    description: 'Property tax, business tax, payments, and tax clearances',
    href: '/services/tax-payments',
    color: 'bg-green-600'
  },
  { 
    id: 'agriculture', 
    name: 'Agriculture & Economic Development', 
    icon: 'bi-tree',
    description: 'Agricultural loans, crop insurance, and farming support',
    href: '/services/agriculture',
    color: 'bg-green-600'
  },
  { 
    id: 'infrastructure', 
    name: 'Infrastructure & Public Works', 
    icon: 'bi-tools',
    description: 'Building permits and construction services',
    href: '/services/infrastructure',
    color: 'bg-green-600'
  },
  { 
    id: 'education', 
    name: 'Education & Scholarship', 
    icon: 'bi-mortarboard',
    description: 'Scholarships and educational grants',
    href: '/services/education',
    color: 'bg-green-600'
  },
  { 
    id: 'public-safety', 
    name: 'Public Safety & Security', 
    icon: 'bi-shield-check',
    description: 'Security & emergency services',
    href: '/services/public-safety',
    color: 'bg-green-600'
  },
  { 
    id: 'environment', 
    name: 'Environment & Natural Resources', 
    icon: 'bi-globe-americas',
    description: 'Environmental permits and conservation',
    href: '/services/environment',
    color: 'bg-green-600'
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-header-v3 py-12">
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Services</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-bz-accent-yellow text-bz-primary-dark text-sm font-semibold rounded-full mb-4">
            <i className="bi bi-grid-3x3-gap mr-1"></i>
            Services
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            City Services Directory
          </h1>
          <p className="text-gray-200 max-w-2xl">
            Browse all services offered by the City of Zamboanga
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-6 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services (e.g., birth certificate, business permit)"
                className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bz-primary focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-bz-primary text-white px-4 py-2 rounded-full hover:bg-bz-primary-dark transition-colors">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid - V1 Style with Green Strip */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 group overflow-hidden"
              >
                <div className="flex">
                  {/* Green Strip with Icon - V1 Style */}
                  <div className={`${cat.color} w-16 flex items-center justify-center text-white`}>
                    <i className={`bi ${cat.icon} text-2xl`}></i>
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-5">
                    <h2 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-bz-primary transition-colors">
                      {cat.name}
                    </h2>
                    <p className="text-sm text-gray-500 mb-3">
                      {cat.description}
                    </p>
                    <span className="text-sm text-bz-primary font-medium inline-flex items-center gap-1">
                      View Services
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
