import { Metadata } from 'next';
import Link from 'next/link';
import resolutionsData from '@/data/resolutions.json';

export const metadata: Metadata = {
  title: 'Resolution Framework',
  description: 'City resolutions passed by the Sangguniang Panlungsod of Zamboanga City.',
};

const resolutions = resolutionsData.resolutions;

export default function ResolutionFrameworkPage() {
  return (
    <>
      <section className="page-header-v3 py-12">
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/legislative" className="hover:text-white">Legislative</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Resolution Framework</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-bz-accent-yellow text-bz-primary-dark text-sm font-semibold rounded-full mb-4">
            <i className="bi bi-file-earmark-check mr-1"></i>
            Resolutions
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            City Resolutions
          </h1>
          <p className="text-gray-200 max-w-2xl">
            Complete list of resolutions passed by the Sangguniang Panlungsod ng Zamboanga City.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <i className="bi bi-file-earmark-check text-bz-primary"></i>
            All Resolutions
            <span className="ml-2 text-sm font-normal text-gray-500">
              ({resolutions.length} total)
            </span>
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold w-32">Resolution No.</th>
                    <th className="px-4 py-3 text-left font-semibold">Title</th>
                    <th className="px-4 py-3 text-left font-semibold w-32">Adopted</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {resolutions.map((res, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-bz-primary whitespace-nowrap">
                        {res.resolutionNo}
                      </td>
                      <td className="px-4 py-3 text-gray-700">{res.title}</td>
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                        {res.adopted || res.sessionDate || 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

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
