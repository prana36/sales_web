import { useParams } from "react-router";
import SalesAdvisoryPage from "./SalesAdvisoryPage";
import FractionalSalesManagementPage from "./FractionalSalesManagementPage";
import SalesAutomationPage from "./SalesAutomationPage";
import LearningDevelopmentPage from "./LearningDevelopmentPage";
import TalentSearchPage from "./TalentSearchPage";
import SalesAuditPage from "./SalesAuditPage";
import MarketingCommunicationsPage from "./MarketingCommunicationsPage";
import SalesTrainingPage from "./SalesTrainingPage";
import StaticServicePage, { type StaticServicePageContent } from "./StaticServicePage";

const builtServicePages = {
  "sales-audit": SalesAuditPage,
  "sales-advisory": SalesAdvisoryPage,
  "fractional-sales-management": FractionalSalesManagementPage,
  "sales-automation": SalesAutomationPage,
  "learning-and-development": LearningDevelopmentPage,
  "talent-search": TalentSearchPage,
  "marketing-communications": MarketingCommunicationsPage,
  "sales-training": SalesTrainingPage,
  "sales-baptism": SalesTrainingPage,
} as const;

const legacyServicePages: Record<string, StaticServicePageContent> = {
  "sales-ki-jaat": {
    id: "sales-ki-jaat",
    kicker: "Sales Ki Jaat",
    title: "Sales Ki Jaat (सेल्स की जात)",
    summary:
      "The DNA of Sales must be installed in each and every member of your sales team for them to become long term sustainable assets.",
    introParagraphs: [
      "These are traits which are not available at birth. One has to acquire them to baptize themselves into Sales Ki Jaat.",
      "Managing a Sales Team without the DNA of Sales is the most expensive mistake that one can make in business. The opportunity loss is much greater than the real loss.",
    ],
    highlights: [
      {
        title: "Install the DNA",
        description:
          "Baptize your sales team into a sales mindset that removes fear of failure, fear of rejection, and fear of asking questions.",
      },
      {
        title: "Positive Sales Pitch",
        description:
          "Build confidence, curiosity, and the burning desire to conduct the act of sales closing.",
      },
      {
        title: "Sustainable Assets",
        description:
          "Turn salespeople into long-term assets instead of expensive liabilities.",
      },
    ],
    faqGroups: [
      {
        title: "Sales Team Readiness",
        faqs: [
          {
            question: "Why is the DNA of Sales important?",
            answer:
              "It installs the traits needed for sustainable selling and reduces the risk of expensive people mistakes.",
          },
          {
            question: "What changes after the program?",
            answer:
              "The team becomes stronger on pitching, questioning, and closing with less fear and more consistency.",
          },
        ],
      },
    ],
    caseStudyTitle: "Related Case Studies",
    caseStudyItems: [
      {
        title: "Bajaj Superpack Ltd, Nagpur",
        bullets: ["30 Telecallers and 18 Field Sales Managers in place", "Each one working in their own style"],
      },
      {
        title: "Plastisurge Industries, Amravati",
        bullets: ["No field sales team in place", "Backend sales team not driven by any targets"],
      },
      {
        title: "Osborne Lippert, Aurangabad",
        bullets: ["Sales team in place", "Questioning skills and Need Analysis skills had scope for improvement"],
      },
    ],
  },
  "sales-ki-vidhi": {
    id: "sales-ki-vidhi",
    kicker: "Sales ki Vidhi",
    title: "Sales ki Vidhi (सेल्स की विधि)",
    summary:
      "The program focuses on sales life cycle, sales methods, techniques, and the process of effective selling.",
    introParagraphs: [
      "Once the answer to Why to sell? is clear to the salesperson, the question of how to sell? needs to be answered on priority.",
      "This program explains TOFU, MOFU and BOFU, helps build sales funnel ratios, and aligns the sales process to the lifecycle of the product or service.",
    ],
    highlights: [
      { title: "Sales Funnel", description: "Understand TOFU, MOFU and BOFU in a practical sales system." },
      { title: "Sales Process", description: "Build a process matched to your product lifecycle and market segment." },
      { title: "Closing Ratio", description: "Improve conversion through structured sales methods and techniques." },
    ],
    faqGroups: [
      {
        title: "Methodology",
        faqs: [
          {
            question: "How do you revamp a sales process?",
            answer:
              "We conduct a Gap Analysis, phase out the existing process without business loss, and implement a new process transparently.",
          },
          {
            question: "What questions does the program solve?",
            answer:
              "It covers the mathematics of the funnel, lead generation, objections, closings, negotiation, and customer lifetime value.",
          },
        ],
      },
    ],
    caseStudyTitle: "Related Case Studies",
    caseStudyItems: [
      {
        title: "J J Plast Alloys Ltd, Varanasi",
        bullets: ["Setting up Lead Magnets", "Introducing Sales Funnel as per customer silo", "Sales Funnel Management & Sales Funnel Ratios"],
      },
      {
        title: "Palav Fabrics, Surat",
        bullets: ["MQL to SQL to BANT Lead Management", "Market Penetration in Distribution network", "Introduced P.E.A.K. Sales Process"],
      },
      {
        title: "Harrier, Nagpur",
        bullets: ["Lead Magnets for lead generation", "Value Bombs for value selling", "Curated Sales Kit"],
      },
    ],
  },
  "sales-ki-niti": {
    id: "sales-ki-niti",
    kicker: "Sales ki Niti",
    title: "Sales ki Niti (सेल्स की निति)",
    summary:
      "The Sales Strategy (Sales Ki Niti) is an outcome of internalizing Sales Planning and Sales Techniques.",
    introParagraphs: [
      "Once the sales planning process and best sales strategies are clear, we arrive at a successful sales strategy for our clients by optimizing the best sales strategies to improve sales.",
      "The work is grounded in market intelligence, market sensing, catchment analysis, and proof-of-concept testing before the Go-To Market plan is finalized.",
    ],
    highlights: [
      { title: "Market Intelligence", description: "Study competition and market signals before making strategic decisions." },
      { title: "Go-To-Market Plan", description: "Prepare budgets, timeframes, and responsibility matrix planning." },
      { title: "Proof of Concept", description: "Test ideas before scaling them across the business." },
    ],
    faqGroups: [
      {
        title: "Strategic Questions",
        faqs: [
          {
            question: "What is the methodology adopted?",
            answer:
              "We study market intelligence, market sensing, catchment analysis, strategic inputs, and test marketing before finalizing the plan.",
          },
          {
            question: "What is missed if the advisory is not taken?",
            answer:
              "The client misses a strategy grounded in analytics, proof of concept, and a GTM with budgets and timeframes.",
          },
        ],
      },
    ],
    caseStudyTitle: "Related Case Studies",
    caseStudyItems: [
      {
        title: "Takshila Educational Society, New Delhi",
        bullets: ["Improved counter share registered", "Ensure the first 300 admissions in the school is from ICP parents"],
      },
      {
        title: "Godrej & Boyce, Mumbai",
        bullets: ["23% growth in new acquisitions", "41% growth in consumable sales"],
      },
      {
        title: "Cahors Transformers, Pune",
        bullets: ["Positioning strategy was introduced", "Growth of 19% registered with the new Sales Ki Niti"],
      },
    ],
  },
  "sales-mein-molbhav": {
    id: "sales-mein-molbhav",
    kicker: "Sales Mein Molbhav",
    title: "Sales mein Molbhav (सेल्स में मोलभाव)",
    summary:
      "This program empowers your sales team on the science of sales negotiations and the 7 laws governing the same.",
    introParagraphs: [
      "Sales negotiation is central to sustainable and profitable sales closures.",
      "The framework helps teams sharpen negotiation tactics, bargaining skills, and the ability to close higher-ticket sales.",
    ],
    highlights: [
      { title: "7 Laws", description: "Understand the laws that govern successful sales negotiation." },
      { title: "Negotiation Kit", description: "Set up a negotiation kit that helps decentralize decision making." },
      { title: "Higher Closings", description: "Improve closing ratio with better planning and negotiation practice." },
    ],
    faqGroups: [
      {
        title: "Negotiation Questions",
        faqs: [
          {
            question: "How can the team be helped?",
            answer:
              "We empower the team on sales negotiation science, help set up a negotiation kit, and can represent you for big ticket negotiations.",
          },
          {
            question: "What should the team learn?",
            answer:
              "They should learn BATNA, planning before negotiation, the 7 laws of negotiation, and the walk-away point.",
          },
        ],
      },
    ],
    caseStudyTitle: "Related Case Studies",
    caseStudyItems: [
      {
        title: "My Life Assistant, London, UK",
        bullets: ["Win Win for Myla and Maximess attained"],
      },
      {
        title: "Kohler",
        bullets: ["Sales Conclave for National Sales team on science of Sales Negotiation"],
      },
      {
        title: "Calderys, Nagpur",
        bullets: ["Training of commercial team"],
      },
    ],
  },
  "sales-katha": {
    id: "sales-katha",
    kicker: "Sales Ki Katha",
    title: "Sales ki Katha (सेल्स की कथा)",
    summary:
      "Storytelling is the art which allows the science of Sales to be understood by the customer.",
    introParagraphs: [
      "Apart from FAB and FAQ, sales teams need to communicate through stories that help customers connect emotionally and feel ready to buy.",
      "Sales Ki Katha revolves around seven types of stories that a salesperson needs to master.",
    ],
    highlights: [
      { title: "7 Story Types", description: "Master the seven story forms used in selling conversations." },
      { title: "Emotional Connect", description: "Use storytelling to create trust and buying intent." },
      { title: "Better Conversion", description: "Turn good leads into orders through strong narratives." },
    ],
    faqGroups: [
      {
        title: "Storytelling Questions",
        faqs: [
          {
            question: "How can the team be helped?",
            answer:
              "We brainstorm with the sales and marketing team to build seven types of sales stories for each product line.",
          },
          {
            question: "What is lost without it?",
            answer:
              "The share of ideal customers, conversion ratio, motivation, and morale all suffer.",
          },
        ],
      },
    ],
    caseStudyTitle: "Related Case Studies",
    caseStudyItems: [
      {
        title: "Karan Kothari Jewelers, Nagpur",
        bullets: ["Built theme based story for each product line", "Empowered sales team to use storytelling"],
      },
      {
        title: "ICICI Bank Ltd",
        bullets: ["Management Theater for SME prospects", "Storytelling on succession planning"],
      },
      {
        title: "K&D Investments, Nagpur",
        bullets: ["Product story changed to Customer Story", "Mutual Fund story changed to TINA story"],
      },
    ],
  },
  "sales-ke-rishte": {
    id: "sales-ke-rishte",
    kicker: "Sales Ke Rishte",
    title: "Sales Ke Rishte (सेल्स के रिश्ते)",
    summary:
      "A proprietary customer relationship management system that helps the client leverage Customer LifeTime Value.",
    introParagraphs: [
      "The program begins with the definition of the customer journey after buying, from Welcome to Repeat Customer to Loyal Customer to Customer Advocate.",
      "The standard operating procedures required for onboarding, repeat buying, loyalty, and CLTV are defined, and the CRM software can be set up for Hubspot, Zoho or Sell.do.",
    ],
    highlights: [
      { title: "Customer Journey", description: "Map the journey from welcome to advocacy." },
      { title: "CLTV", description: "Define the method to calculate and monetize customer lifetime value." },
      { title: "CRM Automation", description: "Set up CRM workflows to run the value chain on auto mode." },
    ],
    faqGroups: [
      {
        title: "CRM Questions",
        faqs: [
          {
            question: "How can the program help?",
            answer:
              "It helps onboard teams to Hubspot CRM, set up the relationship value chain, calculate CLTV, and monetize it.",
          },
          {
            question: "What is lost without it?",
            answer:
              "The business misses the monetization of the CLTV.",
          },
        ],
      },
    ],
    caseStudyTitle: "Related Case Studies",
    caseStudyItems: [
      {
        title: "Topsy Turvy",
        bullets: ["Onboarded on to Hubspot", "Customer realized the missing value chain"],
      },
      {
        title: "Astral Informatics, Nagpur",
        bullets: ["Set up the CLTV value chain in the Autocad training market", "Customer registered a 45% growth in market share"],
      },
      {
        title: "Maximess, Nagpur",
        bullets: ["Calculate CLTV on Hubspot", "Monetise CLTV & registered growth on 38%"],
      },
    ],
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const BuiltServicePage = slug ? builtServicePages[slug as keyof typeof builtServicePages] : undefined;

  if (slug && legacyServicePages[slug]) {
    return <StaticServicePage content={legacyServicePages[slug]} />;
  }

  if (BuiltServicePage) {
    return <BuiltServicePage />;
  }

  return (
    <main className="min-h-screen bg-white pt-24 text-gray-900">
      <section className="border-b border-gray-200 bg-gray-50 px-4 py-10 sm:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold">Service Not Found</h1>
        </div>
      </section>
    </main>
  );
}
