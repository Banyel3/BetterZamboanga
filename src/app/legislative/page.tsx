import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legislative Documents | Better Zamboanga',
  description: 'Access legislative documents, ordinances, and resolutions of the Sangguniang Panlungsod of Zamboanga City.',
};

// Ordinance process steps
const ordinanceSteps = [
  { num: '01', title: 'File Proposed Ordinance', desc: 'Submit the proposed ordinance to the Sangguniang Panlungsod for consideration', icon: 'bi-file-earmark-plus' },
  { num: '02', title: 'First Reading / Referral to Committee', desc: 'Initial reading and assignment to the relevant committee for review', icon: 'bi-book' },
  { num: '03', title: 'Public Hearing / Committee Action', desc: 'Committee conducts public hearing and deliberates on the proposed ordinance', icon: 'bi-people' },
  { num: '04', title: 'Committee Report', desc: 'Committee submits findings and recommendations to the Sangguniang Panlungsod', icon: 'bi-file-text' },
  { num: '05', title: 'Second Reading', desc: 'Detailed discussion and debate on the proposed ordinance', icon: 'bi-journal-text' },
  { num: '06', title: 'Third and Final Reading', desc: 'Final voting on the proposed ordinance by the Sangguniang Panlungsod', icon: 'bi-check2-square' },
  { num: '07', title: "10-Day Mayor's Approval", desc: 'Mayor reviews and approves the enacted ordinance within 10 days', icon: 'bi-calendar-check' },
  { num: '08', title: '3-Day Submission to SP', desc: 'Submit approved ordinance to Sangguniang Panlalawigan for review within 3 days', icon: 'bi-send' },
  { num: '09', title: 'SP Review Period', desc: '60-day review for appropriation ordinances; 30-day review for others', icon: 'bi-hourglass-split' },
  { num: '10', title: 'Posting / Publication', desc: 'Public posting and publication of the approved ordinance', icon: 'bi-megaphone' },
  { num: '11', title: 'Implementation', desc: 'Ordinance takes effect and is enforced within the municipality', icon: 'bi-rocket-takeoff', final: true },
];

// Resolution process steps
const resolutionSteps = [
  { num: '01', title: 'File Proposed Resolution', desc: 'Submit the proposed resolution to the Sangguniang Panlungsod', icon: 'bi-file-earmark-plus' },
  { num: '02', title: 'Inclusion in Session Agenda', desc: 'Resolution is scheduled for inclusion in the Sangguniang Panlungsod session', icon: 'bi-calendar-event' },
  { num: '03', title: 'Committee Meeting / Approval', desc: 'Committee reviews and approves the proposed resolution', icon: 'bi-people-fill' },
  { num: '04', title: 'Final Draft Printing', desc: 'Legislative staff prepares and prints the final draft of the resolution', icon: 'bi-printer' },
  { num: '05', title: 'Official Signing', desc: 'Secretary to the Sanggunian and Presiding Officer sign the resolution', icon: 'bi-pen' },
  { num: '06', title: 'Posting / Transmittal', desc: 'Resolution is posted publicly and transmitted to concerned parties', icon: 'bi-send-check', final: true },
];

// Info cards
const infoCards = [
  { title: 'Ordinances', desc: 'Local laws with permanent and general application that require compliance from residents and businesses within the municipality.', icon: 'bi-journal-bookmark' },
  { title: 'Resolutions', desc: "Expressions of the legislative body's will or opinion on specific matters, often used for commendations, requests, or policy positions.", icon: 'bi-file-earmark-text' },
  { title: 'Public Participation', desc: 'Citizens can attend Sangguniang Panlungsod sessions and participate in public hearings for proposed ordinances.', icon: 'bi-people' },
  { title: 'Transparency', desc: 'All enacted ordinances and resolutions are made available to the public as part of our commitment to open governance.', icon: 'bi-shield-check' },
];

export default function LegislativePage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header-v3 py-12">
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>Legislative</span>
          </nav>
          <span className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1 rounded-full text-sm mb-4">
            <i className="bi bi-bank2"></i> Sangguniang Panlungsod
          </span>
          <h1 className="text-3xl font-bold text-white mb-2">Legislative Documents</h1>
          <p className="text-gray-200">
            Ordinances and resolutions of the Sangguniang Panlungsod ng Zamboanga City
          </p>
        </div>
      </section>

      {/* Document Categories */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/legislative/ordinance-framework" className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-bz-primary hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-bz-primary/10 rounded-xl flex items-center justify-center group-hover:bg-bz-primary/20 transition-colors">
                  <i className="bi bi-journal-bookmark-fill text-2xl text-bz-primary"></i>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">Ordinance Framework</h2>
                  <p className="text-gray-700 text-sm mb-3">
                    Municipal ordinances enacted by the Sangguniang Panlungsod — local laws that govern the municipality and its residents.
                  </p>
                  <span className="text-bz-primary font-medium text-sm group-hover:underline">
                    Browse Ordinances <i className="bi bi-arrow-right"></i>
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/legislative/resolution-framework" className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-bz-primary hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-bz-primary/10 rounded-xl flex items-center justify-center group-hover:bg-bz-primary/20 transition-colors">
                  <i className="bi bi-file-earmark-ruled-fill text-2xl text-bz-primary"></i>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">Resolution Framework</h2>
                  <p className="text-gray-700 text-sm mb-3">
                    Resolutions passed by the Sangguniang Panlungsod expressing the will or opinion of the legislative body on various matters.
                  </p>
                  <span className="text-bz-primary font-medium text-sm group-hover:underline">
                    Browse Resolutions <i className="bi bi-arrow-right"></i>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Legislative Process Flowchart */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 bg-bz-primary/10 text-bz-primary px-3 py-1 rounded-full text-sm mb-2">
              <i className="bi bi-diagram-3-fill"></i> Process Flow
            </span>
            <h2 className="text-2xl font-bold text-gray-800">Flowchart for Legislative Proposal</h2>
            <p className="text-gray-500">Step-by-step process for enacting ordinances and resolutions</p>
          </div>

          {/* Process Tabs - For Ordinances */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <i className="bi bi-journal-bookmark-fill text-bz-primary"></i>
              For Ordinances
              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">11 Steps</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {ordinanceSteps.map((step) => (
                <div key={step.num} className={`bg-white rounded-xl p-4 border ${step.final ? 'border-green-400 bg-green-50' : 'border-gray-100'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-bold ${step.final ? 'text-green-600' : 'text-bz-primary'}`}>{step.num}</span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${step.final ? 'bg-green-100' : 'bg-bz-primary/10'}`}>
                      <i className={`bi ${step.icon} ${step.final ? 'text-green-600' : 'text-bz-primary'}`}></i>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Resolutions */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <i className="bi bi-file-earmark-ruled-fill text-bz-primary"></i>
              For Resolutions
              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">6 Steps</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {resolutionSteps.map((step) => (
                <div key={step.num} className={`bg-white rounded-xl p-4 border ${step.final ? 'border-green-400 bg-green-50' : 'border-gray-100'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-bold ${step.final ? 'text-green-600' : 'text-bz-primary'}`}>{step.num}</span>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${step.final ? 'bg-green-100' : 'bg-bz-primary/10'}`}>
                      <i className={`bi ${step.icon} ${step.final ? 'text-green-600' : 'text-bz-primary'}`}></i>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Local Legislation */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 bg-bz-primary/10 text-bz-primary px-3 py-1 rounded-full text-sm mb-2">
              <i className="bi bi-info-circle-fill"></i> About
            </span>
            <h2 className="text-2xl font-bold text-gray-800">Understanding Local Legislation</h2>
            <p className="text-gray-500">Learn about the legislative process of the Sangguniang Panlungsod</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {infoCards.map((card, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="w-12 h-12 bg-bz-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <i className={`bi ${card.icon} text-xl text-bz-primary`}></i>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-sm text-gray-700">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
