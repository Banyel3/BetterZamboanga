import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for the Better Zamboanga civic portal.',
};

export default function TermsPage() {
  return (
    <>
      <section className="page-header-v3 py-12">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-gray-200">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 prose prose-gray max-w-none">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using the Better Zamboanga civic portal, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Use of Services</h2>
            <p className="text-gray-600 mb-4">
              This portal provides information about city government services. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Provide accurate and truthful information when using our services</li>
              <li>Use the portal for lawful purposes only</li>
              <li>Not attempt to gain unauthorized access to any systems</li>
              <li>Respect the intellectual property rights of content owners</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Service Availability</h2>
            <p className="text-gray-600 mb-6">
              While we strive to maintain continuous availability, we do not guarantee uninterrupted access to the portal. Scheduled maintenance and unforeseen circumstances may affect availability.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              The City Government of Zamboanga shall not be liable for any damages arising from the use or inability to use this portal, except where such liability cannot be excluded by law.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these terms at any time. Continued use of the portal after changes constitutes acceptance of the new terms.
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/" className="text-bz-primary hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
