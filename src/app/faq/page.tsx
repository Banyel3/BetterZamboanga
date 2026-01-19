import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Zamboanga City government services.',
};

const faqs = [
  {
    q: 'How do I request a birth certificate?',
    a: 'Visit the City Civil Registrar Office at City Hall with a valid ID. You can also request online through the PSA Serbilis portal for copies issued before 1988.',
  },
  {
    q: 'What are the requirements for a business permit?',
    a: 'Basic requirements include: DTI/SEC registration, barangay clearance, lease contract or proof of ownership, valid ID, and completed application form.',
  },
  {
    q: 'How can I pay my real property tax?',
    a: 'You can pay at the City Treasurer\'s Office or through authorized banks. Payment is due on January 31 for the annual payment with 20% discount, or quarterly on Mar 31, Jun 30, Sep 30, and Dec 31.',
  },
  {
    q: 'What are the office hours of City Hall?',
    a: 'City Hall offices are open Monday to Friday, 8:00 AM to 5:00 PM. Some offices may have extended hours during peak seasons.',
  },
  {
    q: 'How do I file a complaint or concern?',
    a: 'You can file through the Contact Us page on this website, call the City Hall hotline at (062) 993-0000, or visit the Public Affairs Office at City Hall.',
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="page-header-v3 py-12">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-3 py-1 bg-bz-accent text-bz-primary-dark text-sm font-semibold rounded-full mb-4">
            <i className="bi bi-question-circle mr-1"></i>
            FAQ
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Find answers to common questions about city services.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 group"
              >
                <summary className="p-4 cursor-pointer font-medium text-gray-800 flex items-center justify-between hover:bg-gray-50 rounded-xl">
                  <span>{faq.q}</span>
                  <i className="bi bi-chevron-down text-gray-400 group-open:rotate-180 transition-transform"></i>
                </summary>
                <div className="px-4 pb-4 text-gray-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
