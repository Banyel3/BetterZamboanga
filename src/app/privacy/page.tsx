import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for the Better Zamboanga civic portal.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-header-v3 py-12">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-200">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 prose prose-gray max-w-none">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-6">
              The City Government of Zamboanga (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting the personal information you share with us through the Better Zamboanga civic portal.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Personal identification information (name, email, phone number, address)</li>
              <li>Service-related information when you apply for permits, certificates, or other services</li>
              <li>Usage data and analytics to improve our services</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use collected information to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Process your service requests and applications</li>
              <li>Communicate updates about your transactions</li>
              <li>Improve our services and user experience</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Data Protection</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information in accordance with the Data Privacy Act of 2012 (RA 10173) and its implementing rules and regulations.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              For questions about this privacy policy, please contact:
            </p>
            <p className="text-gray-600">
              Data Protection Officer<br />
              City Hall, Valderrosa Street<br />
              Zamboanga City 7000<br />
              Email: dpo@zamboangacity.gov.ph
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
