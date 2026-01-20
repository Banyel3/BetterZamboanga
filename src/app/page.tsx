import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Better Zamboanga | Civic Portal for Zamboanga City',
  description: 'Your digital gateway to Zamboanga City government services. Access permits, certificates, payments, and more.',
};

// Featured services (top 3)
const featuredServices = [
  {
    title: 'Certificates',
    description: 'Birth, marriage, death certificates',
    icon: 'bi-file-earmark-text-fill',
    href: '/services/certificates',
    color: 'text-bz-accent-green',
    bgColor: 'bg-green-50'
  },
  {
    title: 'Business Permits',
    description: 'New permits and renewals',
    icon: 'bi-shop',
    href: '/services/business',
    color: 'text-bz-accent-red',
    bgColor: 'bg-red-50'
  },
  {
    title: 'Tax Payments',
    description: 'Property and business taxes',
    icon: 'bi-cash-coin',
    href: '/services/tax-payments',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50'
  },
];

// Secondary services (compact)
const secondaryServices = [
  { title: 'Social Services', description: 'Senior citizen & PWD', icon: 'bi-people-fill', href: '/services/social-services', color: 'text-bz-accent-green' },
  { title: 'Health', description: 'Medical assistance', icon: 'bi-heart-pulse-fill', href: '/services/health', color: 'text-bz-accent-red' },
  { title: 'Education', description: 'Schools & scholarships', icon: 'bi-mortarboard-fill', href: '/services/education', color: 'text-bz-primary' },
  { title: 'Infrastructure', description: 'Building permits', icon: 'bi-buildings-fill', href: '/services/infrastructure', color: 'text-bz-accent-yellow' },
  { title: 'Public Safety', description: 'Security & emergency', icon: 'bi-shield-check', href: '/services/public-safety', color: 'text-bz-accent-red' },
  { title: 'Agriculture', description: 'Farming support', icon: 'bi-tree-fill', href: '/services/agriculture', color: 'text-bz-accent-green' },
];

// KPI Stats with city colors
const stats = [
  { value: '977,234', label: 'Population', source: '2020 Census', icon: 'bi-people-fill', href: '/statistics', color: 'text-bz-accent-green', bgColor: 'bg-green-50' },
  { value: '98', label: 'Barangays', source: 'Administrative Units', icon: 'bi-geo-alt-fill', href: '/government', color: 'text-bz-accent-red', bgColor: 'bg-red-50' },
  { value: 'HUC', label: 'City Classification', source: 'Highly Urbanized City', icon: 'bi-award-fill', href: '/budget', color: 'text-bz-accent-yellow', bgColor: 'bg-yellow-50' },
  { value: '1,414.7 km²', label: 'Land Area', source: 'Total City Area', icon: 'bi-rulers', href: '/statistics', color: 'text-bz-primary', bgColor: 'bg-blue-50' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section V3 */}
      <section className="page-header-v3 py-16 md:py-20">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What do you need to do today?
          </h1>
          <p className="text-gray-200 mb-8 max-w-xl mx-auto">
            Access government services, information, and resources for the people of Zamboanga City.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto mb-6">
            <form className="relative" action="/services" method="get">
              <input
                type="search"
                name="q"
                placeholder="Search for a service..."
                className="w-full px-6 py-4 pr-28 rounded-full text-gray-800 placeholder:text-gray-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-bz-accent-yellow"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-bz-primary text-white px-5 py-2 rounded-full hover:bg-bz-primary-dark transition-colors flex items-center gap-2">
                <i className="bi bi-search"></i>
                <span className="hidden sm:inline">Search</span>
              </button>
            </form>
          </div>

          {/* Popular Tags */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-white text-sm">Popular:</span>
            <Link href="/service-details/birth-certificate" className="px-3 py-1 bg-white text-bz-primary text-sm rounded-full hover:bg-gray-100 transition-colors flex items-center gap-1 font-medium">
              <i className="bi bi-file-earmark-text"></i>
              Birth Certificate
            </Link>
            <Link href="/service-details/business-permit-new" className="px-3 py-1 bg-white text-bz-primary text-sm rounded-full hover:bg-gray-100 transition-colors flex items-center gap-1 font-medium">
              <i className="bi bi-shop"></i>
              Business Permit
            </Link>
            <Link href="/service-details/real-property-tax" className="px-3 py-1 bg-white text-bz-primary text-sm rounded-full hover:bg-gray-100 transition-colors flex items-center gap-1 font-medium">
              <i className="bi bi-cash-coin"></i>
              Real Property Tax
            </Link>
            <Link href="/services/health" className="px-3 py-1 bg-white text-bz-primary text-sm rounded-full hover:bg-gray-100 transition-colors flex items-center gap-1 font-medium">
              <i className="bi bi-heart-pulse"></i>
              Health Services
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Services - Tiered Grid */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Popular Services</h2>
              <p className="text-gray-500 text-sm">Quick access to frequently requested municipal services</p>
            </div>
            <Link href="/services" className="text-bz-primary hover:underline text-sm font-medium flex items-center gap-1">
              View All Services <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          {/* Featured Services - Top 3 Larger */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {featuredServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 group text-center"
              >
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <i className={`bi ${service.icon} text-3xl ${service.color}`}></i>
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.description}</p>
              </Link>
            ))}
          </div>

          {/* Secondary Services - 6 Compact */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {secondaryServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all border border-gray-100 group text-center"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl mx-auto mb-2 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <i className={`bi ${service.icon} text-xl ${service.color}`}></i>
                </div>
                <h3 className="font-medium text-gray-800 text-sm">{service.title}</h3>
                <p className="text-xs text-gray-500">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - KPI Panels */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Zamboanga City at a Glance</h2>
              <p className="text-gray-500 text-sm">Key facts about the city</p>
            </div>
            <Link href="/statistics" className="text-bz-primary hover:underline text-sm font-medium flex items-center gap-1">
              View Statistics <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <Link key={i} href={stat.href} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-xl mx-auto mb-3 flex items-center justify-center`}>
                  <i className={`bi ${stat.icon} text-2xl ${stat.color}`}></i>
                </div>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm text-gray-800 font-medium">{stat.label}</p>
                <p className="text-xs text-gray-500">{stat.source}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Weather & Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Weather and Map of Zamboanga City</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Weather Widget */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                  <i className="bi bi-cloud-sun text-4xl text-blue-500"></i>
                </div>
                <div>
                  <p className="text-4xl font-bold text-gray-800">28°C</p>
                  <p className="text-gray-600">Overcast ~</p>
                  <p className="text-xs text-gray-600"><i className="bi bi-geo-alt"></i> Zamboanga City</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span><i className="bi bi-droplet"></i> 76%</span>
                <span><i className="bi bi-wind"></i> 9 km/h</span>
              </div>
              <div className="grid grid-cols-5 gap-2 border-t pt-4">
                {['8 AM', '11 AM', '2 PM', '5 PM', '8 PM'].map((time, i) => (
                  <div key={i} className="text-center">
                    <p className="text-xs text-gray-600">{time}</p>
                    <i className="bi bi-cloud-sun text-blue-400 my-1"></i>
                    <p className="text-sm font-medium">{28 + i}°</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <i className="bi bi-map text-4xl mb-2"></i>
                  <p className="text-sm">Interactive Map</p>
                  <p className="text-xs">Zamboanga City, Philippines</p>
                </div>
              </div>
              <div className="p-4 text-center text-sm text-gray-600">
                <i className="bi bi-geo-alt text-bz-primary"></i> Zamboanga City Hall, Zamboanga City 7000
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Leadership */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">City Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-bz-primary text-white p-4">
                <h3 className="font-bold">Hon. Khymer Adan T. Olaso</h3>
                <p className="text-sm opacity-90">City Mayor</p>
              </div>
              <div className="p-4 text-sm text-gray-600 space-y-2">
                <p><i className="bi bi-envelope text-bz-primary mr-2"></i>mayor@zamboangacity.gov.ph</p>
                <p><i className="bi bi-telephone text-bz-primary mr-2"></i>(062) 991-2295, 991-4525, 991-6403</p>
                <p><i className="bi bi-clock text-bz-primary mr-2"></i>Mon-Fri 8:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="bg-bz-primary text-white p-4">
                <h3 className="font-bold">Hon. Maria Isabelle G. Climaco</h3>
                <p className="text-sm opacity-90">City Vice Mayor</p>
                <p className="text-xs opacity-75">Presiding Officer, Sangguniang Panlungsod</p>
              </div>
              <div className="p-4 text-sm text-gray-600">
                <p><i className="bi bi-dash text-gray-300 mr-2"></i>—</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <i className="bi bi-geo-alt-fill text-2xl text-bz-primary"></i>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Address</h3>
              <p className="text-sm text-gray-600">Zamboanga City Hall<br />N.S. Valderosa Street<br />Zamboanga City 7000</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <i className="bi bi-telephone-fill text-2xl text-bz-primary"></i>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
              <p className="text-sm text-gray-600">(062) 992-0420<br />(062) 991-4525<br />City Hall: 993-0000</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <i className="bi bi-envelope-fill text-2xl text-bz-primary"></i>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-sm text-gray-600">pio.zamboangacity@superadmin</p>
              <p className="text-xs text-gray-600 mt-2">We respond within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-bz-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
          <p className="text-gray-200 mb-6 max-w-xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Contact us or visit City Hall for assistance.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-bz-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/faq"
              className="px-6 py-3 bg-bz-accent-yellow text-bz-primary-dark font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
