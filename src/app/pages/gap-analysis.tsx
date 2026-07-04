import { Link } from "react-router";

interface GapAnalysisItem {
  id: number;
  act: string;
}

const gapAnalysisData: GapAnalysisItem[] = [
  { id: 1, act: "Suspecting data availability" },
  { id: 2, act: "Lead Magnets awareness" },
  { id: 3, act: "Prospecting methodology" },
  { id: 4, act: "Prospecting methodology" },
  { id: 5, act: "Prospecting methodology" },
  { id: 6, act: "Lead Classification Model" },
  { id: 7, act: "MQL - SQL Journey Defined" },
  { id: 8, act: "SQL - BANT Journey Defined" },
  {
    id: 9,
    act: "Need Analysis Template defined - The 5W1H Model?",
  },
  {
    id: 10,
    act: "FAQ documented to assist in Objection Handling",
  },
  { id: 11, act: "Sales Process Defined" },
  { id: 12, act: "Sales Funnel Concept established" },
  { id: 13, act: "Proposal Templates in place" },
  { id: 14, act: "Follow up Mechanism established" },
  { id: 15, act: "Sales Closings" },
  { id: 16, act: "Sales Negotiations" },
  { id: 17, act: "Sales Order Confirmation" },
  { id: 18, act: "Installation against confirmed orders" },
  { id: 19, act: "Post Sales Service" },
  { id: 20, act: "Referral Selling" },
  { id: 21, act: "Cross Selling" },
  { id: 22, act: "Up Selling" },
  { id: 23, act: "Evolution of Customer Demand" },
  { id: 24, act: "Customer Loyalty Program" },
  {
    id: 25,
    act: "Customer Relationship Management (CRM)",
  },
  {
    id: 26,
    act: "Sales Administration - Targets, Incentives, Promotion, Growth",
  },
  {
    id: 27,
    act: "Sales Enablement - Learning and Development",
  },
  {
    id: 28,
    act: "Sales Facilitation - Daily Reporting, Meeting etc",
  },
  { id: 29, act: "Sales Kit" },
  { id: 30, act: "Negotiation X-change kit" },
  { id: 31, act: "Value Bombs" },
  { id: 32, act: "Testimonials" },
  { id: 33, act: "Digital Marketing Index" },
  { id: 34, act: "Branding" },
  { id: 35, act: "Marketing Communication" },
  { id: 36, act: "Public Relations" },
  { id: 37, act: "Networking" },
  { id: 38, act: "Sales Planning" },
  { id: 39, act: "Sales Strategy" },
  { id: 40, act: "Go-To Market Plan" },
  { id: 41, act: "Sales MIS" },
  { id: 42, act: "Sales Recruitment" },
  { id: 43, act: "Market Sensing" },
  { id: 44, act: "Market Penetration" },
  { id: 45, act: "Market" },
  { id: 46, act: "Regression Analysis" },
  { id: 47, act: "People Audit" },
  { id: 48, act: "HR Work Culture and Attitude" },
  { id: 49, act: "Rewards & Recognitions" },
  { id: 50, act: "Superordinate Goals Clarity" },
];

export default function GapAnalysisPage() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="relative bg-[#0A5B9F] pt-30 pb-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-3 text-4xl font-bold">Gap Analysis</h1>

          <div className="flex justify-center gap-2 text-sm">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Gap Analysis</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#0A5B9F]">
              Gap Analysis
            </h2>

            <p className="mb-4 text-gray-700">
              Small and Medium Enterprises Self Assessment Sales Audit Sheet
              with <strong>50 points checklist</strong>
            </p>

            <p className="text-gray-600">
              This checklist gives a list of 50 points on which we conduct our
              Sales and Marketing Audit. The auditor will give remarks under
              each item, after due diligence. This will be followed by
              recommendations against each point.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border shadow">
            <table className="min-w-full border-collapse">
              <thead className="bg-[#0A5B9F] text-white">
                <tr>
                  <th className="border px-4 py-3 text-left">S.No.</th>
                  <th className="border px-4 py-3 text-left">Act of Sales</th>
                  <th className="border px-4 py-3 text-left">Remarks</th>
                  <th className="border px-4 py-3 text-left">Recommendation</th>
                </tr>
              </thead>

              <tbody>
                {gapAnalysisData.map((item) => (
                  <tr key={item.id} className="transition hover:bg-gray-100">
                    <td className="border px-4 py-3 font-semibold">
                      {item.id}
                    </td>

                    <td className="border px-4 py-3">{item.act}</td>

                    <td className="border px-4 py-3"></td>

                    <td className="border px-4 py-3"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
