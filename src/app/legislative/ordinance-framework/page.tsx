import { Metadata } from 'next';
import Link from 'next/link';
import ordinancesData from '@/data/ordinances.json';
import OrdinanceTable from '@/components/legislative/OrdinanceTable';

export const metadata: Metadata = {
  title: 'Ordinance Framework',
  description: 'City ordinances passed by the Sangguniang Panlungsod of Zamboanga City.',
};

// Combine all ordinance categories into a single array
const ordinances = [
  ...ordinancesData.appropriation.map(o => ({ ...o, ordinanceNo: `Ord. ${o.number}`, category: 'appropriation' as const })),
  ...ordinancesData.revenue.map(o => ({ ...o, ordinanceNo: o.number, category: 'revenue' as const })),
  ...ordinancesData.regulatory.map(o => ({ ...o, ordinanceNo: `Ord. ${o.number}`, category: 'regulatory' as const })),
].sort((a, b) => {
  // Sort by year descending, then by number
  const yearA = a.year === 'Prior' ? 0 : parseInt(a.year);
  const yearB = b.year === 'Prior' ? 0 : parseInt(b.year);
  return yearB - yearA;
});

export default function OrdinanceFrameworkPage() {
  return (
    <>
      <section className="page-header-v3 py-12">
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/legislative" className="hover:text-white">Legislative</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Ordinance Framework</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-bz-accent-yellow text-bz-primary-dark text-sm font-semibold rounded-full mb-4">
            <i className="bi bi-file-earmark-ruled mr-1"></i>
            Ordinances
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            City Ordinances
          </h1>
          <p className="text-gray-200 max-w-2xl">
            Complete list of ordinances enacted by the Sangguniang Panlungsod ng Zamboanga City.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <i className="bi bi-file-earmark-ruled text-bz-primary"></i>
            All Ordinances
          </h2>

          <OrdinanceTable ordinances={ordinances} />

          <div className="mt-8 text-center">
            <Link
              href="/legislative"
              className="inline-flex items-center gap-2 px-6 py-3 bg-bz-primary text-white rounded-lg hover:bg-bz-primary-dark transition-colors"
            >
              <i className="bi bi-arrow-left"></i>
              Back to Legislative
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
