import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Accessibility statement for the Better Zamboanga civic portal.',
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="page-header-v3 py-12">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Accessibility Statement
          </h1>
          <p className="text-gray-200">
            Our commitment to digital accessibility
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 prose prose-gray max-w-none">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
            <p className="text-gray-600 mb-6">
              The City Government of Zamboanga is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone by applying relevant accessibility standards.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Accessibility Features</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li><strong>Keyboard Navigation:</strong> All functionality is accessible via keyboard</li>
              <li><strong>Skip Links:</strong> Skip to main content links are provided</li>
              <li><strong>Alt Text:</strong> Images include descriptive alternative text</li>
              <li><strong>Color Contrast:</strong> Text meets WCAG 2.1 contrast requirements</li>
              <li><strong>Responsive Design:</strong> Content adapts to different screen sizes</li>
              <li><strong>Semantic HTML:</strong> Proper heading structure and landmarks</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Standards</h2>
            <p className="text-gray-600 mb-6">
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, and the Philippines&apos; Accessibility Law (RA 7277) as amended.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Feedback</h2>
            <p className="text-gray-600 mb-4">
              We welcome your feedback on the accessibility of this portal. Please contact us if you encounter any barriers:
            </p>
            <ul className="list-none text-gray-600 mb-6 space-y-1">
              <li><strong>Email:</strong> accessibility@zamboangacity.gov.ph</li>
              <li><strong>Phone:</strong> (062) 991-2295</li>
              <li><strong>Address:</strong> City Hall, Valderrosa Street, Zamboanga City</li>
            </ul>
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
