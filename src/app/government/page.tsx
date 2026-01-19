import { Metadata } from 'next';
import officialsData from '@/data/officials.json';
import { OfficialsData } from '@/types';

export const metadata: Metadata = {
  title: 'Government Directory',
  description: 'Directory of Zamboanga City government officials, departments, and offices.',
};

const officials = officialsData as OfficialsData;

export default function GovernmentPage() {
  return (
    <>
      <section className="page-header-v3 py-12">
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm text-gray-300 mb-4">
            <span className="opacity-75">Home</span>
            <span className="mx-2">/</span>
            <span className="text-white">Government</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-bz-accent-yellow text-bz-primary-dark text-sm font-semibold rounded-full mb-4">
            <i className="bi bi-building mr-1"></i>
            Government
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Government Structure & Officials
          </h1>
          <p className="text-gray-200 max-w-2xl">
            Meet the leadership and offices serving Zamboanga City
          </p>
        </div>
      </section>

      {/* Executive Branch - V1 Style Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-bz-primary text-white text-sm font-medium rounded-full mb-4">
              Executive Branch
            </span>
            <p className="text-gray-600">The executive officials leading Zamboanga City&apos;s governance</p>
          </div>
          
          {/* Mayor & Vice Mayor - V1 Style with Blue Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {/* Mayor Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-bz-primary text-white p-4">
                <h3 className="font-bold text-lg">{officials.mayor.name}</h3>
                <p className="text-sm opacity-90">{officials.mayor.title}</p>
              </div>
              <div className="p-4 space-y-2 text-sm text-gray-600">
                {officials.mayor.email && (
                  <p className="flex items-center gap-2">
                    <i className="bi bi-envelope text-bz-primary"></i>
                    {officials.mayor.email}
                  </p>
                )}
                {officials.mayor.phone && (
                  <p className="flex items-center gap-2">
                    <i className="bi bi-telephone text-bz-primary"></i>
                    {officials.mayor.phone}
                  </p>
                )}
                <p className="flex items-center gap-2">
                  <i className="bi bi-clock text-bz-primary"></i>
                  Mon-Fri 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>

            {/* Vice Mayor Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-bz-primary text-white p-4">
                <h3 className="font-bold text-lg">{officials.vice_mayor.name}</h3>
                <p className="text-sm opacity-90">{officials.vice_mayor.title}</p>
                {officials.vice_mayor.subtitle && (
                  <p className="text-xs opacity-75 mt-1">{officials.vice_mayor.subtitle}</p>
                )}
              </div>
              <div className="p-4 space-y-2 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <i className="bi bi-dash text-gray-300"></i>
                  —
                </p>
              </div>
            </div>
          </div>

          {/* City Councilors */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Sangguniang Panlungsod</h3>
            <p className="text-gray-500 text-center text-sm mb-6">City Councilors by District</p>
            
            {/* District 1 */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-bz-primary text-white rounded-full flex items-center justify-center text-sm">1</span>
                1st District
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {officials.councilors_district_1.map((councilor, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
                    <div className="w-14 h-14 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <i className="bi bi-person text-xl text-gray-500"></i>
                    </div>
                    <p className="text-sm font-medium text-gray-800 line-clamp-2">{councilor.name}</p>
                    <p className="text-xs text-bz-primary">{councilor.district || '1st District'}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* District 2 */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-bz-primary text-white rounded-full flex items-center justify-center text-sm">2</span>
                2nd District
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {officials.councilors_district_2.map((councilor, i) => (
                  <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
                    <div className="w-14 h-14 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <i className="bi bi-person text-xl text-gray-500"></i>
                    </div>
                    <p className="text-sm font-medium text-gray-800 line-clamp-2">{councilor.name}</p>
                    <p className="text-xs text-bz-primary">{councilor.district || '2nd District'}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            <i className="bi bi-diagram-3 mr-2 text-bz-primary"></i>
            Department Heads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {officials.department_heads.map((dept, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-bz-primary/10 rounded-lg flex items-center justify-center text-bz-primary shrink-0">
                  <i className="bi bi-person-badge text-xl"></i>
                </div>
                <div className="min-w-0">
                  <h3 className="font-medium text-gray-800 text-sm">{dept.name}</h3>
                  <p className="text-xs text-bz-primary font-medium">{dept.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{dept.office}</p>
                  {dept.phone && (
                    <p className="text-xs text-gray-500 mt-1">
                      <i className="bi bi-telephone mr-1"></i>{dept.phone}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
