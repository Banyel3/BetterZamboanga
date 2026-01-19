import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import servicesData from '@/data/services.json';
import { Service } from '@/types';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicesData.services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.services.find((s) => s.id === slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.services.find((s) => s.id === slug) as Service | undefined;
  
  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="page-header-v3 py-12">
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <Link href={`/services/${service.categoryId}`} className="hover:text-white">{service.category}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {service.title}
          </h1>
          <p className="text-gray-200 max-w-2xl">{service.description}</p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <i className="bi bi-cash-stack text-2xl text-bz-accent-green"></i>
              <p className="text-xs text-gray-500 mt-1">Fee</p>
              <p className="font-semibold text-gray-800">{service.fee}</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <i className="bi bi-clock text-2xl text-bz-accent-blue"></i>
              <p className="text-xs text-gray-500 mt-1">Processing Time</p>
              <p className="font-semibold text-gray-800">{service.processingTime}</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <i className="bi bi-building text-2xl text-bz-primary"></i>
              <p className="text-xs text-gray-500 mt-1">Office</p>
              <p className="font-semibold text-gray-800">{service.office}</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <i className="bi bi-tag text-2xl text-bz-accent-yellow"></i>
              <p className="text-xs text-gray-500 mt-1">Category</p>
              <p className="font-semibold text-gray-800">{service.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i className="bi bi-list-check text-bz-primary"></i>
                  Requirements
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-circle text-bz-accent-green mt-0.5"></i>
                    <span className="text-gray-700">Valid government-issued ID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-circle text-bz-accent-green mt-0.5"></i>
                    <span className="text-gray-700">Completed application form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="bi bi-check-circle text-bz-accent-green mt-0.5"></i>
                    <span className="text-gray-700">Supporting documents as applicable</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <i className="bi bi-signpost-2 text-bz-primary"></i>
                  Steps to Follow
                </h2>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-bz-primary text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">Prepare Requirements</h3>
                      <p className="text-sm text-gray-600">Gather all necessary documents before visiting the office.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-bz-primary text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">Visit the Office</h3>
                      <p className="text-sm text-gray-600">Go to the {service.office} at City Hall.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-bz-primary text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">Submit Application</h3>
                      <p className="text-sm text-gray-600">Fill out the form and submit your documents to the receiving window.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-bz-primary text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">Pay the Fee</h3>
                      <p className="text-sm text-gray-600">Proceed to the cashier to pay {service.fee}.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-bz-accent-green text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">Claim Document</h3>
                      <p className="text-sm text-gray-600">Wait for processing and claim your document.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-bz-primary/5 rounded-xl p-6 border border-bz-primary/20">
                <h3 className="font-bold text-gray-800 mb-4">Contact Office</h3>
                <div className="space-y-3 text-sm">
                  <p className="flex items-start gap-2">
                    <i className="bi bi-building text-bz-primary mt-0.5"></i>
                    <span className="text-gray-700">{service.office}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <i className="bi bi-geo-alt text-bz-primary mt-0.5"></i>
                    <span className="text-gray-700">City Hall, Valderrosa Street, Zamboanga City</span>
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="mt-4 block w-full text-center px-4 py-2 bg-bz-primary text-white rounded-lg hover:bg-bz-primary-dark transition-colors"
                >
                  Get Directions
                </Link>
              </div>

              <div className="mt-6 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-3">Related Services</h3>
                <ul className="space-y-2 text-sm">
                  {servicesData.services
                    .filter((s) => s.categoryId === service.categoryId && s.id !== service.id)
                    .slice(0, 4)
                    .map((s) => (
                      <li key={s.id}>
                        <Link href={`/service-details/${s.id}`} className="text-bz-primary hover:underline">
                          {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
