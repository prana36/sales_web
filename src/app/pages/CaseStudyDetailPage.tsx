import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import { caseStudies, type CaseStudy } from "../components/CaseStudies";

import iciciImg from "../assets/images/case-study/icici.png";
import icici1Img from "../assets/images/case-study/icici-1.png";
import icici2Img from "../assets/images/case-study/icici-2.png";
import icici3Img from "../assets/images/case-study/icici-3.png";
import icici4Img from "../assets/images/case-study/icici-4.png";
import lgNewImg from "../assets/images/case-study/lg-case-new.png";
import lgImg from "../assets/images/case-study/lg-case.png";
import lgSlide2Img from "../assets/images/case-study/lg-slide-2.png";
import lgSlide3Img from "../assets/images/case-study/lg-slide-3.png";
import lgSlide4Img from "../assets/images/case-study/lg-slide-4.png";
import lgSlide5Img from "../assets/images/case-study/lg-slide-5.png";
import amwayImg from "../assets/images/case-study/amway-case.png";

const detailData: Record<string, {
  bannerImages: string[];
  description: string;
  clientName: string;
  location: string;
  duration: string;
  csi: string;
  category: string;
  detailedContent: string[];
}> = {
  "icici-bank-sme-ceo-circle": {
    bannerImages: [iciciImg, icici1Img, icici2Img, icici3Img, icici4Img],
    description: "The SME CEO Circle of ICICI Bank Ltd was created by the SME Emerging Markets team of ICICI Bank Ltd, Mumbai. The challenge at hand was to meaningfully engage the SME and MSME segments of selected emerging markets of India who were hitherto not clients of ICICI Bank but post said program become more aware and meaningfully inclined towards the bank. ICICI Bank was very clear that they did not want to promote the products and services of the bank in the said program. Strategic Concept was appointed the knowledge partner of this event.",
    clientName: "Azmat Habibullah, GM, Marketing, ICICI Bank Ltd",
    location: "Varanasi, Goa, Indore, Kashipur, Nagpur, Pune, Noida, Guwahati, Raipur, Hyderabad, Faridabad, Jalandhar, Udaipur, Dehradun, Kanpur, Vadodara, Chandigarh, Sonipat, Jodhpur, Ludhiana, Kolhapur, Jaipur, Bengaluru, Mumbai, Ahmedabad",
    duration: "Since 2013, Ongoing",
    csi: "Excellent",
    category: "SME Growth",
    detailedContent: [
      "Nukkad Natak format was used to tell a story titled 'Kissa Kursi Ka' which revolved around the challenges faced by Family managed businesses in their Succession planning. Two Consultants, Mr. Sanjay Singh and Mr Arvind Mittal took to the stage in the roles of Father and Son in the said Nukkad Natak. Supporting actors and actresses with voice over and music support in the background added grandeur to the program.",
      "The other stories told through this format to different audiences of ICICI Bank across the country included 'Sabse Bada Rupiya' and 'Mungerilal Ke Haseen Sapne'"
    ]
  },
  "lg-electronics-india": {
    bannerImages: [lgNewImg, lgImg, lgSlide2Img, lgSlide3Img, lgSlide4Img, lgSlide5Img],
    description: "We have worked closely with various verticals of L G Electronics on Corporate Sales Training programs with a result orientation. The verticals dealt with in LG Electronics are Retail General Trade sales team, Modern Retail Trade Sales Team, Large Format Retail Sales Team, Key Account Management Sales Team, Water Purifier Division Sales Team and Customer Service Team. These corporate sales training programs were conducted across branches of LG in India, namely, Chennai, Pune, Bhubaneshwar, Chandigarh, Greater Noida, Indore, Kolkata, Lucknow, Ludhiana, Pune, Hyderabad, Mumbai, Bhopal, Delhi, Jaipur, Ahmedabad and Ghaziabad.",
    clientName: "LG Electronics India",
    location: "Chennai, Pune, Bhubaneshwar, Chandigarh, Greater Noida, Indore, Kolkata, Lucknow, Ludhiana, Hyderabad, Mumbai, Bhopal, Delhi, Jaipur, Ahmedabad, Ghaziabad",
    duration: "Ongoing",
    csi: "Very Good",
    category: "Corporate Sales Training",
    detailedContent: [
      "Customized training programs were designed for each vertical addressing their unique sales challenges. The Retail General Trade team focused on traditional retail selling skills, while the Modern Retail Trade team was trained on key account management and negotiation.",
      "The Large Format Retail team received specialized coaching on sell-out management and visual merchandising. The Water Purifier Division team was trained on consultative selling and AMC closure techniques.",
      "All programs included pre-work assessments, interactive workshops, role-plays, and post-training evaluations to measure effectiveness and ROI."
    ]
  },
  "amway-mlm-distributors": {
    bannerImages: [amwayImg],
    description: "A Management Development Program was curated and delivered at Indian Institute of Management, Kolkata for Top 25 Distributors in India. The program focused on empowering the Diamond Distributors on MLM Best Practices, helping them understand that MLM is not only about adding to the chain but also selling goods and services which are promised to the chain.",
    clientName: "Amway India",
    location: "Kolkata (IIM Kolkata), Gurgaon HO",
    duration: "Ongoing",
    csi: "Very Good",
    category: "Multi Level Marketing",
    detailedContent: [
      "The MDP program covered advanced MLM strategies, ethical selling practices, and leadership development for top-tier distributors.",
      "A follow-up series was undertaken in Gurgaon HO to reinforce learning and track implementation of best practices.",
      "Distributors started appreciating that MLM is not only about adding to the chain but also selling goods and services which are promised to the chain."
    ]
  }
};

export default function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((c) => c.slug === slug);
  const detail = slug ? detailData[slug] : undefined;

  if (!study || !detail) {
    return (
      <main className="min-h-screen bg-white pt-24 text-gray-900">
        <section className="px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Case Study Not Found</h1>
          <Link to="/" className="mt-4 inline-flex items-center gap-2 text-blue-900 font-semibold">
            <ArrowLeft className="size-4" /> Back to Home
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-24 text-gray-900">
      <section className="border-b border-gray-200 bg-slate-50 px-4 py-10 sm:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 mb-4 hover:text-blue-700 transition-colors">
            <ArrowLeft className="size-4" /> Back to Home
          </Link>
          <p className="text-xs font-semibold uppercase tracking-widest text-yellow-600 mb-1">
            {study.industry}
          </p>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight text-blue-950 md:text-5xl">
            {study.client}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
            {detail.description}
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                {detail.bannerImages.map((img, i) => (
                  <div key={i} className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                    <img src={img} alt={`${study.client} - Image ${i + 1}`} className="w-full object-cover" />
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Case Details</h2>
                {detail.detailedContent.map((paragraph, i) => (
                  <p key={i} className="text-gray-600 text-sm leading-relaxed mb-4">{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 sticky top-28">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Brief Case Detail</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Client Name</p>
                    <p className="text-sm font-semibold text-gray-800">{detail.clientName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Location</p>
                    <p className="text-sm text-gray-700">{detail.location}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Duration</p>
                    <p className="text-sm font-semibold text-gray-800">{detail.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Customer Satisfaction Index</p>
                    <p className="text-sm font-semibold text-green-700">{detail.csi}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Category</p>
                    <p className="text-sm font-semibold text-blue-900">{detail.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
