import { Link } from "react-router";

interface OutcomeTrackingRow {
  id: string;
  outcome: string;
  remarks: string;
}

const outcomeTrackingRows: OutcomeTrackingRow[] = [
  {
    id: "1",
    outcome: "Awareness",
    remarks: "SPANCO Dashboard Exists",
  },
  { id: "", outcome: "", remarks: "Lead Magnet Effectiveness Index" },
  { id: "", outcome: "", remarks: "Value Bombs Effectiveness Index" },
  {
    id: "",
    outcome: "",
    remarks:
      "No of Sales encounters not supported on field by sales kit per month",
  },
  { id: "", outcome: "", remarks: "Sales Funnel Ratios" },
  {
    id: "",
    outcome: "",
    remarks: "Sales Negotiation Kit Exists ( 7 Laws Kit , Give n Take Kit)",
  },
  { id: "", outcome: "", remarks: "Sales Metrics - TOFU, MOFU and BOFU" },
  {
    id: "",
    outcome: "",
    remarks: "Sales Process Understanding Quotient in sales team",
  },
  { id: "", outcome: "", remarks: "" },
  {
    id: "2",
    outcome: "Practice",
    remarks: "Lead Generation Index",
  },
  { id: "", outcome: "", remarks: "Rapport Generation Index" },
  { id: "", outcome: "", remarks: "The Need Analysis Template" },
  { id: "", outcome: "", remarks: "Need Analysis Quotient" },
  { id: "", outcome: "", remarks: "Objection Handling Quotient" },
  { id: "", outcome: "", remarks: "No of part closes attempt made per close" },
  { id: "", outcome: "", remarks: "Sales Negotiation Preparation Template" },
  { id: "", outcome: "", remarks: "Sales Planning Template" },
  { id: "", outcome: "", remarks: "Target Setting Methodology" },
  { id: "", outcome: "", remarks: "Market Sensing and MI MIS" },
  {
    id: "",
    outcome: "",
    remarks: "CRM software implemented in the organisation",
  },
  { id: "", outcome: "", remarks: "LTV Monetisation index" },
  { id: "", outcome: "", remarks: "Customer Loyalty Program Success Index" },
  { id: "", outcome: "", remarks: "Digital Media Usage Performance Index" },
  { id: "", outcome: "", remarks: "" },
  {
    id: "3",
    outcome: "Process",
    remarks: "Lead Scoring Model",
  },
  { id: "", outcome: "", remarks: "Sales Funnel Hygiene Index" },
  {
    id: "",
    outcome: "",
    remarks: "Lead pre qualification documented and known to everyone",
  },
  {
    id: "",
    outcome: "",
    remarks: "Customer Relationship Management concept exists",
  },
  {
    id: "",
    outcome: "",
    remarks: "Life Time Value of a Customer is known to everyone",
  },
  { id: "", outcome: "", remarks: "" },
  {
    id: "4",
    outcome: "Soft Skills",
    remarks: "Communication Skills Index",
  },
  { id: "", outcome: "", remarks: "Leadership Quotient" },
  { id: "", outcome: "", remarks: "Team Building Quotient" },
  { id: "", outcome: "", remarks: "Conflict Management Mean" },
  {
    id: "",
    outcome: "",
    remarks: "Interpersonal Relationship Mgt - Happiness Index",
  },
  { id: "", outcome: "", remarks: "" },
  {
    id: "5",
    outcome: "Strategy",
    remarks: "GTM Template is known to all salesperson in the company",
  },
  {
    id: "",
    outcome: "",
    remarks: "Blue Ocean Strategy is known to all salesperson in the company",
  },
  {
    id: "",
    outcome: "",
    remarks: "Turn weakness into strength - SWOT Analysis done",
  },
  {
    id: "",
    outcome: "",
    remarks: "New Market Launch Strategy - Ansoff Matrix documented",
  },
  {
    id: "",
    outcome: "",
    remarks: "Work from home in troubled times - Guidelines, if required",
  },
];

export default function OutcomeTrackingPage() {
  return (
    <>
      <section className="relative bg-[#0A5B9F] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-3 text-4xl font-bold">Outcome Tracking</h1>

          <div className="flex justify-center gap-2 text-sm">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Outcome Tracking</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-[#0A5B9F]">
              Outcome Tracking
            </h2>

            <p className="text-gray-600">
              The following learning outcomes tracking are expected out of our
              L&amp;D Programs on Sales Management.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border shadow">
            <table className="min-w-full border-collapse">
              <thead className="bg-[#0A5B9F] text-white">
                <tr>
                  <th className="border px-4 py-3 text-left">S.No.</th>
                  <th className="border px-4 py-3 text-left">
                    Learning Outcome
                  </th>
                  <th className="border px-4 py-3 text-left">Remarks</th>
                </tr>
              </thead>

              <tbody>
                {outcomeTrackingRows.map((row, index) => {
                  const isSectionRow = row.id !== "";
                  const rowClassName = isSectionRow
                    ? "bg-gray-50 font-semibold"
                    : "transition hover:bg-gray-100";

                  return (
                    <tr key={`${row.id}-${index}`} className={rowClassName}>
                      <td className="border px-4 py-3">{row.id}</td>
                      <td className="border px-4 py-3">{row.outcome}</td>
                      <td className="border px-4 py-3">{row.remarks}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
