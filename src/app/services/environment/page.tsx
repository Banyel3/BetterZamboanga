import { Metadata } from 'next';
import Link from 'next/link';
import servicesData from '@/data/services.json';
import { Service } from '@/types';

export const metadata: Metadata = {
  title: 'Environment & Natural Resources',
  description: 'Environmental permits, waste management, and natural resource services in Zamboanga City.',
};

const services = (servicesData.services as Service[]).filter(
  (s) => s.categoryId === 'environment'
);

export default function EnvironmentPage() {
  return (
    <>
      <section className="page-header-v3 py-12">
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Environment</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-bz-accent-yellow text-bz-primary-dark text-sm font-semibold rounded-full mb-4">
            <i className="bi bi-globe-americas mr-1"></i>
            Environment
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Environment & Natural Resources
          </h1>
          <p className="text-gray-200 max-w-2xl">
            Environmental clearances, tree cutting permits, and waste management services.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/service-details/${service.id}`}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 group"
              >
                <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-bz-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center gap-1 text-gray-600">
                    <i className="bi bi-cash text-bz-accent-green"></i>
                    {service.fee}
                  </span>
                  <span className="flex items-center gap-1 text-gray-600">
                    <i className="bi bi-clock text-bz-accent-blue"></i>
                    {service.processingTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
