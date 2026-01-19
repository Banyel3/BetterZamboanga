import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'News & Announcements',
  description: 'Latest news and announcements from the City Government of Zamboanga.',
};

const newsItems = [
  {
    id: 1,
    title: 'Annual Budget 2026 Approved by Sangguniang Panlungsod',
    date: 'December 27, 2025',
    category: 'Budget',
    excerpt: 'The Zamboanga City council has approved a ₱7.07 billion annual budget for fiscal year 2026, marking a 10% increase from the previous year.',
  },
  {
    id: 2,
    title: 'DPWH Completes 72 Infrastructure Projects in Zamboanga City',
    date: 'December 15, 2025',
    category: 'Infrastructure',
    excerpt: 'The Department of Public Works and Highways has completed 72 of the 84 planned infrastructure projects, with total investment reaching ₱3.19 billion.',
  },
  {
    id: 3,
    title: 'Flood Control Projects Reduce Flood Risk in Urban Areas',
    date: 'November 30, 2025',
    category: 'Disaster Management',
    excerpt: 'Completed flood control structures along Tumaga River and Ayala River have significantly reduced flooding incidents in affected barangays.',
  },
  {
    id: 4,
    title: 'City Health Office Expands Vaccination Programs',
    date: 'November 15, 2025',
    category: 'Health',
    excerpt: 'Free vaccination programs have been expanded to cover more barangays, with mobile vaccination units now serving remote areas.',
  },
  {
    id: 5,
    title: 'New Digital Healthcare Services Ordinance Enacted',
    date: 'November 1, 2025',
    category: 'Legislative',
    excerpt: 'The city council has enacted Ordinance 924 implementing digital healthcare services to improve access to medical care.',
  },
];

export default function NewsPage() {
  return (
    <>
      <section className="page-header-v3 py-12">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-3 py-1 bg-bz-accent-yellow text-bz-primary-dark text-sm font-semibold rounded-full mb-4">
            <i className="bi bi-newspaper mr-1"></i>
            News
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            News & Announcements
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Stay updated with the latest news and announcements from the City Government of Zamboanga.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="hidden md:flex w-16 h-16 bg-bz-primary/10 rounded-lg items-center justify-center text-bz-primary shrink-0">
                    <i className="bi bi-newspaper text-2xl"></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2 hover:text-bz-primary transition-colors">
                      <Link href="#">{item.title}</Link>
                    </h2>
                    <p className="text-sm text-gray-600">{item.excerpt}</p>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1 text-sm text-bz-primary font-medium mt-3 hover:underline"
                    >
                      Read more
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
