import { Link } from "react-router";

interface LearningOutcomeRow {
  id: string;
  category: string;
  outcome: string;
}

const learningOutcomeRows: LearningOutcomeRow[] = [
  {
    id: "1",
    category: "Awareness",
    outcome:
      "SPANCO (Suspect, Prospecting, Awareness, Need, Closing, Order) Cycle",
  },
  { id: "", category: "", outcome: "Lead Magnets - Why? How?" },
  {
    id: "",
    category: "",
    outcome: "Value Bombs - Why? What? When? Where? How?",
  },
  { id: "", category: "", outcome: "Sales Kit - Why? How?" },
  { id: "", category: "", outcome: "Sales Funnel - Why? What? How?" },
  { id: "", category: "", outcome: "Sales Negotiation - What? Why? How?" },
  { id: "", category: "", outcome: "Sales Metrics - What? Why? How?" },
  { id: "", category: "", outcome: "Sales Process - Why? What? How?" },
  { id: "", category: "", outcome: "" },
  {
    id: "2",
    category: "Practice",
    outcome: "How to hunt for Sales Leads?",
  },
  { id: "", category: "", outcome: "How to build rapport with a prospect?" },
  { id: "", category: "", outcome: "How to qualify a Sales Lead?" },
  { id: "", category: "", outcome: "How to conduct the 5W1H Need Analysis?" },
  {
    id: "",
    category: "",
    outcome: "How to answer a question / handle an objection?",
  },
  {
    id: "",
    category: "",
    outcome: "How to do Part - Closing that leads to Sales Closings?",
  },
  {
    id: "",
    category: "",
    outcome: "How does one prepare for a Sales Negotiation?",
  },
  { id: "", category: "", outcome: "How does one do Sales Planning?" },
  {
    id: "",
    category: "",
    outcome: "How to do Demand Forecasting and Sales Target Setting?",
  },
  {
    id: "",
    category: "",
    outcome: "How does one do Market Sensing to gather Market Intelligence?",
  },
  {
    id: "",
    category: "",
    outcome: "How to make use of a CRM software solution?",
  },
  {
    id: "",
    category: "",
    outcome:
      "How to leverage CRM to monetise LTV (LifeTime Value) of customers?",
  },
  {
    id: "",
    category: "",
    outcome: "How to prepare a winning Customer Loyalty Program?",
  },
  {
    id: "",
    category: "",
    outcome: "How to leverage the usage of Internet platform for Sales?",
  },
  { id: "", category: "", outcome: "" },
  { id: "3", category: "Process", outcome: "Lead Generation" },
  { id: "", category: "", outcome: "Sales Funnel Management" },
  { id: "", category: "", outcome: "Qualifying a Prospect to send a Proposal" },
  { id: "", category: "", outcome: "Customer Relationship Management" },
  { id: "", category: "", outcome: "Life Time Value of a Customer" },
  { id: "", category: "", outcome: "" },
  { id: "4", category: "Soft Skills", outcome: "Communication" },
  { id: "", category: "", outcome: "Leadership" },
  { id: "", category: "", outcome: "Team Building" },
  { id: "", category: "", outcome: "Conflict Management" },
  { id: "", category: "", outcome: "Interpersonal Relationship Mgt" },
  { id: "", category: "", outcome: "" },
  { id: "5", category: "Strategy", outcome: "The Go To Market Plan" },
  { id: "", category: "", outcome: "Blue Ocean Strategy" },
  { id: "", category: "", outcome: "Turn weakness into strength" },
  { id: "", category: "", outcome: "New Market Launch Strategy" },
  { id: "", category: "", outcome: "Work from home in troubled times" },
];

export default function LearningOutcomePage() {
  return (
    <>
    <section className="relative bg-brand-navy-950 pt-32 pb-14 text-white md:pt-36">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-3 text-4xl font-bold">Learning Outcomes</h1>

          <div className="flex justify-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-brand-gold hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Learning Outcomes</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-navy">
              Learning Outcomes
            </h2>

            <p className="text-gray-600">
              The following learning outcomes are expected out of our L&amp;D
              Programs on Sales Management.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="min-w-full border-collapse">
              <thead className="bg-brand-navy text-white">
                <tr>
                  <th className="border px-4 py-3 text-left">S.No.</th>
                  <th className="border px-4 py-3 text-left">
                    Learning Outcome
                  </th>
                  <th className="border px-4 py-3 text-left">Remarks</th>
                </tr>
              </thead>

              <tbody>
                {learningOutcomeRows.map((row, index) => {
                  const isSectionRow = row.id !== "";
                  const rowClassName = isSectionRow
                    ? "bg-brand-gold/5 font-semibold"
                    : "transition hover:bg-brand-navy/5";

                  return (
                    <tr key={`${row.id}-${index}`} className={rowClassName}>
                      <td className="border px-4 py-3">{row.id}</td>
                      <td className="border px-4 py-3">{row.category}</td>
                      <td className="border px-4 py-3">{row.outcome}</td>
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
