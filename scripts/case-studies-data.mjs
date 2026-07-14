// Source content for seeding public.case_studies in Supabase.
// thumbnail: path relative to the old site's img/case-study/ folder (for the thumbnail)
// banners: array of paths relative to the same folder (for detail-page gallery); falls back to [thumbnail] if empty.

const OLD_SITE_IMG_DIR =
  "/Users/kundan/Downloads/Consult4sales-Website_24062026/html/img/case-study";

export { OLD_SITE_IMG_DIR };

export const caseStudies = [
  {
    slug: "icici-bank-sme-ceo-circle",
    case_id: "Case 01",
    client: "ICICI Bank Limited, SME CEO Circle",
    industry: "Emerging Markets, BFSI Industry Vertical",
    challenge:
      "Acquire new liability customers across India's emerging markets, while easing succession-planning anxieties inside family-run SMEs.",
    outcome:
      "The 'Kissa Kursi Ka' business-theatre roadshow toured emerging markets nationwide, opening fresh customer footprints for ICICI Bank in every city.",
    metric_value: "38",
    metric_label: "Emerging-market cities activated",
    thumbnail: "cases/icici.png",
    banners: ["cases/icici.png", "cases/icici-1.png", "cases/icici-2.png", "cases/icici-3.png", "cases/icici-4.png"],
    description:
      "The SME CEO Circle of ICICI Bank Ltd was created by the SME Emerging Markets team of ICICI Bank Ltd, Mumbai. The challenge at hand was to meaningfully engage the SME and MSME segments of selected emerging markets of India who were hitherto not clients of ICICI Bank but post said program become more aware and meaningfully inclined towards the bank. ICICI Bank was very clear that they did not want to promote the products and services of the bank in the said program. Strategic Concept was appointed the knowledge partner of this event.",
    client_name: "Azmat Habibullah, GM, Marketing, ICICI Bank Ltd",
    location:
      "Varanasi, Goa, Indore, Kashipur, Nagpur, Pune, Noida, Guwahati, Raipur, Hyderabad, Faridabad, Jalandhar, Udaipur, Dehradun, Kanpur, Vadodara, Chandigarh, Sonipat, Jodhpur, Ludhiana, Kolhapur, Jaipur, Bengaluru, Mumbai, Ahmedabad",
    duration: "Since 2013, Ongoing",
    csi: "Excellent",
    category: "Management Theater",
    detailed_content: [
      "Nukkad Natak format was used to tell a story titled 'Kissa Kursi Ka' which revolved around the challenges faced by Family managed businesses in their Succession planning. Two Consultants, Mr. Sanjay Singh and Mr Arvind Mittal took to the stage in the roles of Father and Son in the said Nukkad Natak. Supporting actors and actresses with voice over and music support in the background added grandeur to the program.",
      "The other stories told through this format to different audiences of ICICI Bank across the country included 'Sabse Bada Rupiya' and 'Mungerilal Ke Haseen Sapne'",
    ],
  },
  {
    slug: "lg-electronics-india",
    case_id: "Case 02",
    client: "LG Electronics, India",
    industry: "Retail Trade",
    challenge:
      "Lift frontline performance across five sales functions at once — General & Modern Trade, Key Accounts, Large Format Retail and Water Purifier Service.",
    outcome:
      "Co-curated training rolled out branch by branch nationwide, with Modern Trade and Sell-Out teams posting measurable incremental sales.",
    metric_value: "17+",
    metric_label: "Cities covered in the rollout",
    thumbnail: "cases/lg-case-new.png",
    banners: ["cases/lg-case-new.png", "cases/lg-case.png", "cases/lg-slide-2.png", "cases/lg-slide-3.png", "cases/lg-slide-4.png", "cases/lg-slide-5.png"],
    description:
      "We have worked closely with various verticals of L G Electronics on Corporate Sales Training programs with a result orientation. The verticals dealt with in LG Electronics are Retail General Trade sales team, Modern Retail Trade Sales Team, Large Format Retail Sales Team, Key Account Management Sales Team, Water Purifier Division Sales Team and Customer Service Team. These corporate sales training programs were conducted across branches of LG in India, namely, Chennai, Pune, Bhubaneshwar, Chandigarh, Greater Noida, Indore, Kolkata, Lucknow, Ludhiana, Pune, Hyderabad, Mumbai, Bhopal, Delhi, Jaipur, Ahmedabad and Ghaziabad.",
    client_name: "LG Electronics India",
    location:
      "Chennai, Pune, Bhubaneshwar, Chandigarh, Greater Noida, Indore, Kolkata, Lucknow, Ludhiana, Hyderabad, Mumbai, Bhopal, Delhi, Jaipur, Ahmedabad, Ghaziabad",
    duration: "Ongoing",
    csi: "Very Good",
    category: "Corporate Sales Training",
    detailed_content: [
      "Customized training programs were designed for each vertical addressing their unique sales challenges. The Retail General Trade team focused on traditional retail selling skills, while the Modern Retail Trade team was trained on key account management and negotiation.",
      "The Large Format Retail team received specialized coaching on sell-out management and visual merchandising. The Water Purifier Division team was trained on consultative selling and AMC closure techniques.",
      "All programs included pre-work assessments, interactive workshops, role-plays, and post-training evaluations to measure effectiveness and ROI.",
    ],
  },
  {
    slug: "amway-mlm-distributors",
    case_id: "Case 03",
    client: "Amway (www.amway.in)",
    industry: "Multi Level Marketing",
    challenge:
      "Diamond Distributors needed a sharper grip on ethical, sustainable MLM practice — beyond simply growing the downline.",
    outcome:
      "An MDP at IIM Kolkata, followed by a Gurgaon HO series, shifted distributor mindset toward genuine product and service selling.",
    metric_value: "Top 25",
    metric_label: "Diamond Distributors coached",
    thumbnail: "cases/amway-case.png",
    banners: ["cases/amway-case.png", "amway.png"],
    description:
      "A Management Development Program was curated and delivered at Indian Institute of Management, Kolkata for Top 25 Distributors in India. The program focused on empowering the Diamond Distributors on MLM Best Practices, helping them understand that MLM is not only about adding to the chain but also selling goods and services which are promised to the chain.",
    client_name: "Amway India",
    location: "Kolkata (IIM Kolkata), Gurgaon HO",
    duration: "Ongoing",
    csi: "Very Good",
    category: "Multi Level Marketing",
    detailed_content: [
      "The MDP program covered advanced MLM strategies, ethical selling practices, and leadership development for top-tier distributors.",
      "A follow-up series was undertaken in Gurgaon HO to reinforce learning and track implementation of best practices.",
      "Distributors started appreciating that MLM is not only about adding to the chain but also selling goods and services which are promised to the chain.",
    ],
  },
  {
    slug: "hindustan-unilever-limited",
    case_id: "Case 04",
    client: "Hindustan Unilever Limited",
    industry: "FMCG",
    challenge:
      "Sales trainers of HUL's Consumer Division needed a Train-the-Trainer upgrade to standardize field coaching quality.",
    outcome:
      "Sales trainers of the HUL Consumer Division completed a structured Corporate Sales Training program led by Sanjay Singh at Hotel Novotel.",
    metric_value: "TTT",
    metric_label: "Train-the-Trainer program delivered",
    thumbnail: "HUL-TTT-for-sales-Trainers.jpeg",
    banners: ["HUL-TTT-for-sales-Trainers.jpeg", "hul-logo.jpg"],
    description:
      "Sales trainers of HUL Consumer Division were trained by Sanjay Singh in a dedicated Train-the-Trainer engagement held at Hotel Novotel, aimed at strengthening the in-house training capability of the division.",
    client_name: "Hindustan Unilever Limited",
    location: "Mumbai",
    duration: "Completed",
    csi: "Very Good",
    category: "Corporate Sales Training",
    detailed_content: [
      "The program equipped HUL's internal sales trainers with structured facilitation techniques, sales coaching frameworks, and field-ready content to cascade training consistently across the Consumer Division.",
    ],
  },
  {
    slug: "godrej-and-boyce",
    case_id: "Case 05",
    client: "Godrej & Boyce",
    industry: "Consumer Electronics",
    challenge:
      "The Consumer Electronics Division needed a sharper sales strategy to lift new-customer acquisition and consumable sales.",
    outcome:
      "Registered 23% growth in new acquisitions and 41% growth in consumable sales; the Mumbai proof-of-concept was scaled pan-India.",
    metric_value: "23%",
    metric_label: "Growth in new acquisitions",
    thumbnail: "godrej.png",
    banners: ["godrej.png", "cases/godrej-1.png", "cases/godrej-2.png", "cases/godrej-3.png", "cases/godrej-4.png"],
    description:
      "We worked with the Consumer Electronics Division of Godrej & Boyce on a Corporate Sales Training and Sales Ki Niti (Sales Strategy) engagement, built on Market Intelligence, Market Sensing, and Catchment Analysis of Mumbai's market before scaling nationally.",
    client_name: "Godrej & Boyce",
    location: "Mumbai (pilot), Pan India (scale-up)",
    duration: "Completed",
    csi: "Excellent",
    category: "Corporate Sales Training",
    detailed_content: [
      "Registered 23% growth in new acquisitions and 41% growth in consumable sales in the Mumbai proof-of-concept market.",
      "The Go-To-Market plan validated in Mumbai was then scaled pan India with budgets, timeframes, and a responsibility matrix.",
    ],
  },
  {
    slug: "airtel-corporate-sales-training",
    case_id: "Case 06",
    client: "Airtel (Bharti Airtel)",
    industry: "Telecommunications",
    challenge:
      "Mobility and Enterprise sales divisions across Mumbai, ROM and Orissa circles needed a unified sales capability-building program.",
    outcome:
      "Corporate Sales Training was delivered across multiple circles, strengthening frontline and enterprise sales capability.",
    metric_value: "3",
    metric_label: "Telecom circles covered",
    thumbnail: "airtel.png",
    banners: ["airtel.png", "cases/airtel-case.png"],
    description:
      "Corporate Sales Training programs were delivered for Airtel's Mobility and Enterprise divisions across the Mumbai, Rest of Maharashtra (ROM), and Orissa circles.",
    client_name: "Bharti Airtel Ltd",
    location: "Mumbai, ROM, Orissa",
    duration: "Completed",
    csi: "Very Good",
    category: "Corporate Sales Training",
    detailed_content: [
      "Circle-specific training addressed both the Mobility division's retail/channel sales motion and the Enterprise division's B2B consultative selling needs.",
    ],
  },
  {
    slug: "tata-teleservices",
    case_id: "Case 07",
    client: "Tata Teleservices",
    industry: "Telecommunications",
    challenge:
      "Multiple circles — Mumbai, ROM, Kolkata, ROWB and New Delhi — needed consistent Learning & Development interventions for their sales teams.",
    outcome:
      "Corporate Sales Training was rolled out across five circles, standardizing sales capability nationally.",
    metric_value: "5",
    metric_label: "Circles trained",
    thumbnail: "tata-teleservices.png",
    banners: ["tata-teleservices.png", "cases/tata-case.png"],
    description:
      "Corporate Sales Training programs were delivered across multiple Tata Teleservices circles — Mumbai, Rest of Maharashtra, Kolkata, Rest of West Bengal, and New Delhi.",
    client_name: "Tata Teleservices Ltd",
    location: "Mumbai, ROM, Kolkata, ROWB, New Delhi",
    duration: "Completed",
    csi: "Very Good",
    category: "Corporate Sales Training",
    detailed_content: [
      "L&D interventions were tailored per circle while maintaining a consistent sales methodology across all five regions.",
    ],
  },
  {
    slug: "state-bank-of-mauritius",
    case_id: "Case 08",
    client: "State Bank of Mauritius",
    industry: "BFSI",
    challenge:
      "Business development teams nationwide needed structured Corporate Sales Training to lift acquisition performance.",
    outcome:
      "A nationwide Corporate Sales Training rollout strengthened business development capability across teams.",
    metric_value: "BD",
    metric_label: "Nationwide business development teams trained",
    thumbnail: "sbm.png",
    banners: ["sbm.png", "cases/sbm-case.png", "cases/sbm-case1.png"],
    description:
      "Corporate Sales Training was delivered to the business development teams of State Bank of Mauritius nationwide, focused on structured acquisition and relationship-building skills.",
    client_name: "State Bank of Mauritius",
    location: "Nationwide",
    duration: "Completed",
    csi: "Very Good",
    category: "Corporate Sales Training",
    detailed_content: [
      "The program strengthened consultative selling and relationship management skills across the bank's business development function.",
    ],
  },
  {
    slug: "larsen-and-toubro",
    case_id: "Case 09",
    client: "L&T (Larsen & Toubro)",
    industry: "Construction / Infrastructure",
    challenge:
      "The Construction Division in Nagpur needed targeted Learning & Development to sharpen its sales approach.",
    outcome:
      "Corporate Sales Training and L&D interventions were delivered to the Construction Division team in Nagpur.",
    metric_value: "L&D",
    metric_label: "Construction Division intervention",
    thumbnail: "larsen-turbo.png",
    banners: ["larsen-turbo.png", "cases/larsen-case.png", "cases/larsen-case1.png"],
    description:
      "Corporate Sales Training was delivered to L&T's Construction Division in Nagpur, with L&D interventions tailored to the division's project-based sales cycle.",
    client_name: "Larsen & Toubro Ltd",
    location: "Nagpur",
    duration: "Completed",
    csi: "Very Good",
    category: "Corporate Sales Training",
    detailed_content: [
      "The engagement focused on strengthening the Construction Division's consultative and technical sales capability.",
    ],
  },
  {
    slug: "ultratech-cement",
    case_id: "Case 10",
    client: "Ultratech Cement",
    industry: "Cement / Building Materials",
    challenge:
      "As part of the Aditya Birla Group, Ultratech's sales team needed a structured Corporate Sales Training program.",
    outcome:
      "Corporate Sales Training strengthened field sales capability for this leading cement manufacturer.",
    metric_value: "AB Group",
    metric_label: "Aditya Birla Group company",
    thumbnail: "ultratech.png",
    banners: ["ultratech.png"],
    description:
      "Corporate Sales Training was delivered to Ultratech Cement, a leading cement company of the Aditya Birla Group, to strengthen field sales capability.",
    client_name: "Ultratech Cement",
    location: "India",
    duration: "Completed",
    csi: "Very Good",
    category: "Corporate Sales Training",
    detailed_content: [
      "The program addressed channel-partner selling, dealer engagement, and territory sales planning for the cement business.",
    ],
  },
  {
    slug: "osborne-lippert",
    case_id: "Case 11",
    client: "Osborne Lippert",
    industry: "Industrial Manufacturing",
    challenge:
      "A sales team was in place, but questioning skills and need-analysis skills had scope for improvement.",
    outcome:
      "Sales Ki Jaat installed stronger questioning and need-analysis capability across the sales team.",
    metric_value: "Sales Ki Jaat",
    metric_label: "Program installed",
    thumbnail: "osborn.png",
    banners: ["osborn.png"],
    description:
      "Osborne Lippert, a surface-finishing and industrial brushes/abrasives manufacturer based in Aurangabad, engaged us for a Corporate Sales Training program after identifying that their existing sales team's questioning and need-analysis skills had room to grow.",
    client_name: "Osborne Lippert",
    location: "Aurangabad",
    duration: "Completed",
    csi: "Good",
    category: "Corporate Sales Training",
    detailed_content: [
      "The Sales Ki Jaat program was used to install sharper questioning skills and need-analysis discipline across the existing sales team.",
    ],
  },
  {
    slug: "lemken-agricultural-implements",
    case_id: "Case 12",
    client: "Lemken",
    industry: "Agricultural Implements",
    challenge:
      "An agricultural implements manufacturer needed structured Corporate Sales Training for its dealer-facing sales team.",
    outcome:
      "Corporate Sales Training built stronger dealer engagement and field selling capability.",
    metric_value: "CST",
    metric_label: "Corporate Sales Training delivered",
    thumbnail: "lemken.png",
    banners: ["lemken.png"],
    description:
      "Lemken, an agricultural implements manufacturer, engaged us for Corporate Sales Training to strengthen its dealer network engagement and field sales capability.",
    client_name: "Lemken",
    location: "India",
    duration: "Completed",
    csi: "Good",
    category: "Corporate Sales Training",
    detailed_content: [
      "The program focused on dealer relationship management and consultative selling of agricultural implements.",
    ],
  },
  {
    slug: "calderys-refractories",
    case_id: "Case 13",
    client: "Calderys",
    industry: "Heat-Resistant Refractory Products",
    challenge:
      "The commercial team at this Imerys subsidiary in Nagpur needed sales negotiation training to close bigger deals.",
    outcome:
      "A Sales Conclave-style negotiation program trained the commercial team on the science of sales negotiation.",
    metric_value: "CRM+MT",
    metric_label: "Corporate Training + Management Theater",
    thumbnail: "calderys.png",
    banners: ["calderys.png", "cases/calderys-2.png", "cases/calderys-3.png"],
    description:
      "Calderys, a manufacturer of heat-resistant refractory products and an Imerys subsidiary, engaged us for Corporate Sales Training and Management Theater interventions, including training of the commercial team in Nagpur on sales negotiation.",
    client_name: "Calderys",
    location: "Nagpur",
    duration: "Completed",
    csi: "Very Good",
    category: "CRM",
    detailed_content: [
      "The commercial team was trained on the science of sales negotiation as part of the Sales Mein Molbhav framework, alongside broader Management Theater sessions.",
    ],
  },
  {
    slug: "winmagic-toys",
    case_id: "Case 14",
    client: "Winmagic Toys",
    industry: "Toys / Consumer Brands",
    challenge:
      "A toy brand manufacturer and custodian needed structured Corporate Sales Training for its sales team.",
    outcome:
      "Corporate Sales Training strengthened brand-building and retail sales execution.",
    metric_value: "CST",
    metric_label: "Corporate Sales Training delivered",
    thumbnail: "winmagic.png",
    banners: ["winmagic.png", "cases/winmagic-case.png", "cases/winmagic-2.png", "cases/winmagic-3.png"],
    description:
      "Winmagic Toys, a toy brand manufacturer and custodian, engaged us for Corporate Sales Training to strengthen brand-building and retail sales execution across its sales team.",
    client_name: "Winmagic Toys",
    location: "India",
    duration: "Completed",
    csi: "Good",
    category: "Corporate Sales Training",
    detailed_content: [
      "The program addressed retail sales execution and brand storytelling for the toy portfolio.",
    ],
  },
  {
    slug: "fable-fintech-solutions",
    case_id: "Case 15",
    client: "Fable Fintech Solutions",
    industry: "Fintech / Payments",
    challenge:
      "A payments and remittance fintech founded in 2015 needed a CRM system to leverage Customer Lifetime Value.",
    outcome:
      "The Sales Ke Rishte CRM framework was implemented to structure the customer journey and CLTV tracking.",
    metric_value: "CRM",
    metric_label: "CRM framework implemented",
    thumbnail: "fable.png",
    banners: ["fable.png", "cases/fable-case.png", "cases/fable-case1.png"],
    description:
      "Fable Fintech Solutions, a payments/remittance fintech founded in 2015, engaged us for a Sales Ke Rishte (CRM) implementation to structure their customer journey and monetize Customer Lifetime Value.",
    client_name: "Fable Fintech Solutions",
    location: "India",
    duration: "Completed",
    csi: "Good",
    category: "CRM",
    detailed_content: [
      "The engagement defined the customer journey stages — Welcome, Repeat Customer, Loyal Customer, Customer Advocate — and set up CRM tooling to track and monetize CLTV.",
    ],
  },
  {
    slug: "evos-buildcon",
    case_id: "Case 16",
    client: "Evos Buildcon",
    industry: "Real Estate",
    challenge:
      "An Odisha-based property developer needed a CRM system to manage its customer relationships and repeat business.",
    outcome:
      "Sales Ke Rishte CRM implementation structured the customer lifecycle for the developer's sales team.",
    metric_value: "CRM",
    metric_label: "CRM framework implemented",
    thumbnail: "evos.png",
    banners: ["evos.png", "cases/evos-case.png"],
    description:
      "Evos Buildcon, an Odisha property developer, engaged us for a CRM (Sales Ke Rishte) implementation to structure customer relationship management across the buyer lifecycle.",
    client_name: "Evos Buildcon",
    location: "Odisha",
    duration: "Completed",
    csi: "Good",
    category: "CRM",
    detailed_content: [
      "The CRM engagement covered welcome-kit SOPs, repeat-buyer engagement, and referral generation for the real estate sales cycle.",
    ],
  },
  {
    slug: "palav-fabrics",
    case_id: "Case 17",
    client: "Palav Fabrics",
    industry: "Textiles",
    challenge:
      "A Surat textile manufacturer needed a Sales Ki Vidhi (sales process) overhaul, including MQL to SQL to BANT lead management.",
    outcome:
      "Introduced a P.E.A.K. Sales Process and expanded market penetration across the distribution network.",
    metric_value: "P.E.A.K.",
    metric_label: "Sales process introduced",
    thumbnail: "palav-fabrics.png",
    banners: ["palav-fabrics.png", "cases/palav-case.png"],
    description:
      "Palav Fabrics, a Surat-based textile manufacturer, engaged us for SME Growth consulting focused on Sales Ki Vidhi — introducing MQL to SQL to BANT lead management and expanding market penetration across its distribution network.",
    client_name: "Palav Fabrics",
    location: "Surat",
    duration: "Completed",
    csi: "Very Good",
    category: "SME Growth",
    detailed_content: [
      "MQL to SQL to BANT lead management was introduced to qualify and prioritize the distribution funnel.",
      "The P.E.A.K. Sales Process was implemented, alongside a structured plan to expand market penetration in the existing distribution network.",
    ],
  },
  {
    slug: "biocare",
    case_id: "Case 18",
    client: "Biocare",
    industry: "Organic Fertilizers",
    challenge:
      "An organic fertilizer and growth-promoter manufacturer needed SME Growth, CRM, and LMS interventions together.",
    outcome:
      "A combined SME Growth, CRM and LMS program strengthened the sales function end-to-end.",
    metric_value: "3-in-1",
    metric_label: "SME Growth + CRM + LMS delivered",
    thumbnail: "biocare.png",
    banners: ["biocare.png", "cases/biocare.png"],
    description:
      "Biocare, an organic fertilizer and growth-promoter manufacturer, engaged us across three fronts: SME Growth consulting, CRM implementation, and a Learning Management System rollout for its sales team.",
    client_name: "Biocare",
    location: "India",
    duration: "Completed",
    csi: "Very Good",
    category: "SME Growth",
    detailed_content: [
      "SME Growth consulting addressed market penetration and sales process; CRM implementation structured the customer lifecycle; the LMS rollout enabled ongoing sales team capability building.",
    ],
  },
  {
    slug: "kems-engineering",
    case_id: "Case 19",
    client: "KEMS Engineering",
    industry: "Automotive Forging",
    challenge:
      "A Bengaluru forging company serving the automotive sector needed SME Growth and CRM support.",
    outcome:
      "SME Growth and CRM consulting strengthened B2B sales structure and customer retention.",
    metric_value: "B2B",
    metric_label: "Automotive forging sales strengthened",
    thumbnail: "kems.png",
    banners: ["kems.png", "cases/kems-case.png", "cases/kems-1.png"],
    description:
      "KEMS Engineering, a Bengaluru-based forging company serving the automotive industry, engaged us for SME Growth and CRM consulting to strengthen its B2B sales structure and customer retention.",
    client_name: "KEMS Engineering",
    location: "Bengaluru",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "The engagement combined sales process design for the B2B automotive forging business with a CRM implementation to improve repeat-order retention.",
    ],
  },
  {
    slug: "hindustan-impex",
    case_id: "Case 20",
    client: "Hindustan Impex",
    industry: "Trading",
    challenge:
      "A Raipur-based company needed SME Growth consulting to structure its sales approach.",
    outcome:
      "SME Growth consulting strengthened the company's sales structure and market approach.",
    metric_value: "SME",
    metric_label: "Growth consulting delivered",
    thumbnail: "hindustan.png",
    banners: ["hindustan.png"],
    description:
      "Hindustan Impex, a Raipur-based company, engaged us for SME Growth consulting to structure its sales approach and strengthen market execution.",
    client_name: "Hindustan Impex",
    location: "Raipur",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "The engagement focused on sales structuring and market execution planning for the Raipur-based business.",
    ],
  },
  {
    slug: "kapitrode-electrodes",
    case_id: "Case 21",
    client: "Kapitrode Electrodes (Kapilansh Dhatu)",
    industry: "Cast Iron Earthing Electrodes",
    challenge:
      "A Nagpur-based cast-iron earthing electrode manufacturer needed SME Growth consulting to expand its market.",
    outcome:
      "SME Growth consulting strengthened distribution and sales planning for the earthing electrodes business.",
    metric_value: "SME",
    metric_label: "Growth consulting delivered",
    thumbnail: "kapilansh-dhatu.png",
    banners: ["kapilansh-dhatu.png", "cases/kapilansh-case.png", "cases/kapilansh-1.png"],
    description:
      "Kapitrode Electrodes (Kapilansh Dhatu), a Nagpur-based manufacturer of cast-iron earthing electrodes, engaged us for SME Growth consulting to expand its market reach and strengthen sales planning.",
    client_name: "Kapitrode Electrodes",
    location: "Nagpur",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "The engagement focused on distribution expansion and structured sales planning for the earthing electrodes product line.",
    ],
  },
  {
    slug: "saboo-plastics",
    case_id: "Case 22",
    client: "Saboo Plastics",
    industry: "Plastics Manufacturing",
    challenge:
      "A plastics manufacturer operating since 1990 needed SME Growth consulting to modernize its sales approach.",
    outcome:
      "SME Growth consulting modernized the sales process for this long-standing manufacturer.",
    metric_value: "Since 1990",
    metric_label: "Legacy manufacturer modernized",
    thumbnail: "saboo-plastic.png",
    banners: ["saboo-plastic.png", "cases/saboo-case.png"],
    description:
      "Saboo Plastics, a plastics manufacturer operating since 1990, engaged us for SME Growth consulting to modernize its sales process and market approach.",
    client_name: "Saboo Plastics",
    location: "India",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "The engagement introduced a modern, structured sales process to a legacy manufacturing business.",
    ],
  },
  {
    slug: "shree-shivam",
    case_id: "Case 23",
    client: "Shree Shivam",
    industry: "Retail - Clothing",
    challenge:
      "A multi-brand clothing and wedding-wear retailer needed SME Growth consulting to lift in-store sales performance.",
    outcome:
      "SME Growth consulting strengthened in-store selling and customer engagement.",
    metric_value: "SME",
    metric_label: "Growth consulting delivered",
    thumbnail: "shree-shivam.png",
    banners: ["shree-shivam.png", "shree-shivam.jpg"],
    description:
      "Shree Shivam, a multi-brand clothing and wedding-wear retailer, engaged us for SME Growth consulting to strengthen in-store selling and customer engagement.",
    client_name: "Shree Shivam",
    location: "India",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "The engagement focused on in-store selling skills and customer engagement for the wedding-wear retail format.",
    ],
  },
  {
    slug: "harrier-information-systems",
    case_id: "Case 24",
    client: "Harrier Information Systems",
    industry: "Digital Solutions - Financial Services & Healthcare",
    challenge:
      "A digital solutions provider needed lead magnets, value-based selling content, and a curated sales kit.",
    outcome:
      "Lead magnets for lead generation, value bombs for value selling, and a curated sales kit were introduced.",
    metric_value: "Sales Kit",
    metric_label: "Curated sales kit delivered",
    thumbnail: "harrier.png",
    banners: ["harrier.png"],
    description:
      "Harrier Information Systems, a Nagpur-based digital solutions provider to financial services and healthcare clients, engaged us for Sales Ki Vidhi consulting focused on lead generation and value selling.",
    client_name: "Harrier Information Systems",
    location: "Nagpur",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "Lead Magnets were designed for lead generation, 'Value Bombs' were created for value-based selling conversations, and a curated Sales Kit was built for the sales team.",
    ],
  },
  {
    slug: "neoteric-properties",
    case_id: "Case 25",
    client: "Neoteric Properties",
    industry: "Real Estate",
    challenge:
      "A Gwalior real estate developer faced high sales-team attrition and needed a training system to stabilize performance.",
    outcome:
      "SME Growth and LMS interventions addressed the attrition and training challenge.",
    metric_value: "LMS",
    metric_label: "Learning system deployed",
    thumbnail: "neoteric.png",
    banners: ["neoteric.png", "cases/neoteric-case.png"],
    description:
      "Neoteric Properties, a Gwalior-based real estate developer, engaged us for SME Growth and LMS consulting to address sales-team attrition through structured, repeatable training.",
    client_name: "Neoteric Properties",
    location: "Gwalior",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "A Learning Management System was deployed to standardize onboarding and reduce the impact of sales-team attrition on performance.",
    ],
  },
  {
    slug: "takshila-educational-society",
    case_id: "Case 26",
    client: "Takshila Educational Society",
    industry: "Education",
    challenge:
      "The society wanted to improve counter share and ensure a majority of new admissions came from Ideal Customer Profile (ICP) parents.",
    outcome:
      "Improved counter share was registered, with the first 300 admissions in the school coming from ICP parents.",
    metric_value: "300",
    metric_label: "First ICP-parent admissions secured",
    thumbnail: "takshila.png",
    banners: ["takshila.png", "cases/takshila-case.png", "cases/takshila-1.png"],
    description:
      "Takshila Educational Society (TES), New Delhi, engaged us for Sales Ki Niti (sales strategy) consulting to improve counter share and target Ideal Customer Profile parents for school admissions.",
    client_name: "Takshila Educational Society",
    location: "New Delhi",
    duration: "Completed",
    csi: "Very Good",
    category: "SME Growth",
    detailed_content: [
      "Improved counter share was registered, and the strategy ensured the first 300 admissions in the school came from Ideal Customer Profile (ICP) parents.",
    ],
  },
  {
    slug: "maximess",
    case_id: "Case 27",
    client: "Maximess",
    industry: "Digital Transformation",
    challenge:
      "A digital product transformation partner in Nagpur needed a CRM system to calculate and monetize Customer Lifetime Value.",
    outcome:
      "CLTV was calculated on Hubspot and monetized, registering 38% growth in market share.",
    metric_value: "38%",
    metric_label: "Growth in market share",
    thumbnail: "maximess.png",
    banners: ["maximess.png", "TeamMaximess-1024x819.png"],
    description:
      "Maximess, a Nagpur-based digital product transformation partner, engaged us for Sales Ke Rishte (CRM) consulting to calculate and monetize Customer Lifetime Value using Hubspot.",
    client_name: "Maximess",
    location: "Nagpur",
    duration: "Completed",
    csi: "Excellent",
    category: "SME Growth",
    detailed_content: [
      "CLTV was calculated on Hubspot CRM, and a plan to monetise the CLTV was implemented, registering a 38% growth in market share.",
    ],
  },
  {
    slug: "plastisurge-industries",
    case_id: "Case 28",
    client: "PlastiSurge",
    industry: "Surgical Disposables / Real Estate / Gas Distribution",
    challenge:
      "No field sales team was in place, and the backend sales team was not driven by any targets.",
    outcome:
      "SME Growth and CRM consulting installed a field sales structure and a target-driven backend sales culture.",
    metric_value: "Field Team",
    metric_label: "New field sales structure installed",
    thumbnail: "plastisurge.png",
    banners: ["plastisurge.png", "cases/plastisurge-cases.png"],
    description:
      "PlastiSurge Industries, an Amravati-based business spanning surgical disposables, real estate, and BPCL gas distribution, engaged us for SME Growth and CRM consulting after identifying it had no field sales team and an untargeted backend sales team.",
    client_name: "PlastiSurge Industries",
    location: "Amravati",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "A field sales team was structured and deployed, and Sales Ki Jaat was installed to build core sales discipline in the backend team, which was then given clear targets.",
    ],
  },
  {
    slug: "gimatex-industries",
    case_id: "Case 29",
    client: "Gimatex Industries",
    industry: "Textiles",
    challenge:
      "A premium textile products manufacturer needed SME Growth consulting to strengthen its sales approach.",
    outcome:
      "SME Growth consulting strengthened market positioning for the premium textile portfolio.",
    metric_value: "SME",
    metric_label: "Growth consulting delivered",
    thumbnail: "gimatex.png",
    banners: ["gimatex.png"],
    description:
      "Gimatex Industries, a manufacturer of premium textile products, engaged us for SME Growth consulting to strengthen market positioning and sales approach.",
    client_name: "Gimatex Industries",
    location: "India",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "The engagement focused on premium positioning and structured sales planning for the textile product line.",
    ],
  },
  {
    slug: "blue-ladder-epc-solutions",
    case_id: "Case 30",
    client: "Blue Ladder EPC Solutions",
    industry: "Pre-Engineered Buildings",
    challenge:
      "A Pre-Engineered Buildings (PEB) provider needed combined SME Growth, CRM and LMS support.",
    outcome:
      "SME Growth, CRM and LMS interventions strengthened the PEB sales function end-to-end.",
    metric_value: "3-in-1",
    metric_label: "SME Growth + CRM + LMS delivered",
    thumbnail: "blue-ladder.png",
    banners: ["blue-ladder.png", "cases/blue-ladder-case.png"],
    description:
      "Blue Ladder EPC Solutions, a Pre-Engineered Buildings (PEB) provider, engaged us across SME Growth consulting, CRM implementation, and a Learning Management System rollout for its sales team.",
    client_name: "Blue Ladder EPC Solutions",
    location: "India",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "The three-part engagement combined sales process design, CRM-driven customer lifecycle management, and an LMS for ongoing sales capability building in the PEB business.",
    ],
  },
  {
    slug: "avanti-institute-of-cardiology",
    case_id: "Case 31",
    client: "Avanti Institute of Cardiology",
    industry: "Healthcare",
    challenge:
      "A cardiology healthcare institute needed SME Growth consulting to strengthen patient acquisition and engagement.",
    outcome:
      "SME Growth consulting strengthened patient acquisition approach for the cardiology institute.",
    metric_value: "SME",
    metric_label: "Growth consulting delivered",
    thumbnail: "avanti.png",
    banners: ["avanti.png", "cases/avanti-case.png"],
    description:
      "Avanti Institute of Cardiology engaged us for SME Growth consulting to strengthen its patient acquisition and engagement approach.",
    client_name: "Avanti Institute of Cardiology",
    location: "India",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "The engagement focused on structured patient acquisition and engagement strategy for the healthcare institute.",
    ],
  },
  {
    slug: "karan-kothari-jewelers",
    case_id: "Case 32",
    client: "Karan Kothari Jewelers",
    industry: "Jewelry Retail",
    challenge:
      "A Nagpur jewelry retailer operating since 1965 needed a storytelling-based sales approach to differentiate its collections.",
    outcome:
      "A theme-based story for each product line was built, empowering the sales team to use storytelling during demonstrations.",
    metric_value: "Since 1965",
    metric_label: "Legacy jeweler modernized",
    thumbnail: "karan-kothari.png",
    banners: ["karan-kothari.png", "cases/karan-case.png"],
    description:
      "Karan Kothari Jewelers, a Nagpur jewelry retailer operating since 1965, engaged us for Sales Katha (storytelling in sales) consulting to differentiate its product lines through narrative-driven selling.",
    client_name: "Karan Kothari Jewelers",
    location: "Nagpur",
    duration: "Completed",
    csi: "Very Good",
    category: "SME Growth",
    detailed_content: [
      "A theme-based story was built for each product line, empowering the sales team to use storytelling while demonstrating jewelry, including 'The Vedanta Collections' narrative.",
    ],
  },
  {
    slug: "metlock",
    case_id: "Case 33",
    client: "Metlock",
    industry: "Adhesives & Sealants",
    challenge:
      "An adhesives and sealants manufacturer needed SME Growth consulting to strengthen its distribution sales.",
    outcome:
      "SME Growth consulting strengthened distribution sales for the adhesives and sealants business.",
    metric_value: "SME",
    metric_label: "Growth consulting delivered",
    thumbnail: "metlock.png",
    banners: ["metlock.png", "cases/metlock-case.png", "cases/metlock-case1.png"],
    description:
      "Metlock, a manufacturer of adhesives and sealants, engaged us for SME Growth consulting to strengthen its distribution sales approach.",
    client_name: "Metlock",
    location: "India",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "The engagement focused on distribution sales strengthening for the adhesives and sealants product range.",
    ],
  },
  {
    slug: "army-postal-service",
    case_id: "Case 34",
    client: "Army Postal Service",
    industry: "Government / Defence Services",
    challenge:
      "Sales Management Learning & Development was required at Kamptee Cantonment for the Army Postal Service team.",
    outcome:
      "SME Growth-style Sales Management L&D was delivered at Kamptee Cantonment.",
    metric_value: "L&D",
    metric_label: "Sales management training delivered",
    thumbnail: "APS.png",
    banners: ["APS.png", "cases/aps-case.png", "cases/aps-case1.png"],
    description:
      "Army Postal Service engaged us for a Sales Management Learning & Development intervention at Kamptee Cantonment.",
    client_name: "Army Postal Service",
    location: "Kamptee Cantonment",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "The program addressed sales management fundamentals and service-delivery orientation for the postal service team.",
    ],
  },
  {
    slug: "cadence-school-of-fashion-designing",
    case_id: "Case 35",
    client: "Cadence School of Fashion Designing",
    industry: "Education - Fashion & Interior Design",
    challenge:
      "A fashion and interior design academy needed SME Growth consulting to strengthen student enrolment sales.",
    outcome:
      "SME Growth consulting strengthened enrolment sales for the fashion and design academy.",
    metric_value: "SME",
    metric_label: "Growth consulting delivered",
    thumbnail: "cadence.png",
    banners: ["cadence.png", "cases/cadence.png"],
    description:
      "Cadence School of Fashion Designing, a fashion and interior design academy, engaged us for SME Growth consulting to strengthen its student enrolment sales process.",
    client_name: "Cadence School of Fashion Designing",
    location: "India",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "The engagement focused on structured counselling-to-enrolment sales process for the design academy.",
    ],
  },
  {
    slug: "eros-furnitures",
    case_id: "Case 36",
    client: "Eros Furnitures",
    industry: "Metal Furniture Manufacturing",
    challenge:
      "A metal furniture manufacturer needed SME Growth consulting to strengthen its dealer and institutional sales.",
    outcome:
      "SME Growth consulting strengthened dealer and institutional sales channels.",
    metric_value: "SME",
    metric_label: "Growth consulting delivered",
    thumbnail: "eros.png",
    banners: ["eros.png", "cases/eros-case.png", "cases/eros-case1.png"],
    description:
      "Eros Furnitures, a metal furniture manufacturer, engaged us for SME Growth consulting to strengthen its dealer and institutional sales channels.",
    client_name: "Eros Furnitures",
    location: "India",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "The engagement addressed dealer engagement and institutional/B2B sales structuring for the metal furniture business.",
    ],
  },
  {
    slug: "sage-bhopal",
    case_id: "Case 37",
    client: "SAGE Bhopal",
    industry: "Diversified Enterprises",
    challenge:
      "Sanjiv Agarwal Group of Enterprises needed SME Growth consulting across its business verticals.",
    outcome:
      "SME Growth consulting strengthened sales structure across the group's business verticals.",
    metric_value: "SME",
    metric_label: "Growth consulting delivered",
    thumbnail: "SAGE-group.png",
    banners: ["SAGE-group.png", "cases/sage-bhopal-case.png", "cases/sage-bhopal-case1.png"],
    description:
      "SAGE Bhopal (Sanjiv Agarwal Group of Enterprises) engaged us for SME Growth consulting to strengthen sales structure across its business verticals.",
    client_name: "SAGE Bhopal",
    location: "Bhopal",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "The engagement addressed sales structuring and planning across multiple business verticals under the group.",
    ],
  },
  {
    slug: "genetech",
    case_id: "Case 38",
    client: "Genetech",
    industry: "Genetics Laboratory Services",
    challenge:
      "A genetics laboratory services provider needed SME Growth consulting to strengthen its B2B sales approach.",
    outcome:
      "SME Growth consulting strengthened B2B sales approach for the laboratory services business.",
    metric_value: "SME",
    metric_label: "Growth consulting delivered",
    thumbnail: "genetech.png",
    banners: ["genetech.png", "cases/genetech-case.png"],
    description:
      "Genetech, a genetics laboratory services provider, engaged us for SME Growth consulting to strengthen its B2B sales approach with diagnostic centers and hospitals.",
    client_name: "Genetech",
    location: "India",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "The engagement focused on B2B relationship selling with diagnostic centers, hospitals, and referring physicians.",
    ],
  },
  {
    slug: "panino-foods",
    case_id: "Case 39",
    client: "Panino Foods Pvt Ltd",
    industry: "Food & Beverage",
    challenge:
      "A sandwich food chain needed SME Growth consulting to strengthen its outlet and franchise sales approach.",
    outcome:
      "SME Growth consulting strengthened franchise and outlet-level sales performance.",
    metric_value: "SME",
    metric_label: "Growth consulting delivered",
    thumbnail: "panino.png",
    banners: ["panino.png", "cases/panino-case.png"],
    description:
      "Panino Foods Pvt Ltd, a sandwich food chain, engaged us for SME Growth consulting to strengthen its franchise and outlet-level sales performance.",
    client_name: "Panino Foods Pvt Ltd",
    location: "India",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "The engagement addressed outlet-level upselling, franchise sales support, and customer experience consistency.",
    ],
  },
  {
    slug: "splashjet-inks",
    case_id: "Case 40",
    client: "Splashjet Inks Pvt Ltd",
    industry: "Inkjet Ink Manufacturing",
    challenge:
      "A water-based inkjet ink manufacturer operating since 2006 needed SME Growth consulting to expand its B2B sales.",
    outcome:
      "SME Growth consulting strengthened B2B distribution sales for the ink manufacturer.",
    metric_value: "Since 2006",
    metric_label: "Manufacturer strengthened",
    thumbnail: "splashjet.png",
    banners: ["splashjet.png", "cases/splashjet-case.png"],
    description:
      "Splashjet Inks Pvt Ltd, a water-based inkjet ink manufacturer operating since 2006, engaged us for SME Growth consulting to strengthen its B2B distribution sales.",
    client_name: "Splashjet Inks Pvt Ltd",
    location: "India",
    duration: "Completed",
    csi: "Good",
    category: "SME Growth",
    detailed_content: [
      "The engagement focused on B2B distribution sales structuring for the specialty ink manufacturing business.",
    ],
  },
  {
    slug: "sis-group-enterprises",
    case_id: "Case 41",
    client: "SIS Group Enterprises",
    industry: "Security Solutions",
    challenge:
      "India's No.1 and the 7th largest security solutions company globally needed Corporate Training for its sales teams.",
    outcome:
      "Corporate Training strengthened sales capability for this large, national security solutions provider.",
    metric_value: "#1 in India",
    metric_label: "Security solutions provider",
    thumbnail: "sis.png",
    banners: ["sis.png", "cases/SIS-2.png", "cases/SIS-3.png", "cases/SIS-4.png"],
    description:
      "SIS Group Enterprises, India's No.1 security solutions company and the 7th largest globally, engaged us for Corporate Training to strengthen its sales team capability.",
    client_name: "SIS Group Enterprises",
    location: "India",
    duration: "Completed",
    csi: "Very Good",
    category: "Corporate Training",
    detailed_content: [
      "The Corporate Training program built consultative selling capability across SIS's large, distributed sales organization.",
    ],
  },
  {
    slug: "swad-tea",
    case_id: "Case 42",
    client: "Swad Tea",
    industry: "FMCG - Tea",
    challenge:
      "A family-run tea brand business needed a Management Theater format to engage its sales team.",
    outcome:
      "Management Theater strengthened engagement and buy-in from the family business's sales team.",
    metric_value: "MT",
    metric_label: "Management Theater delivered",
    thumbnail: "swad-tea.png",
    banners: ["swad-tea.png", "cases/swad-case.png"],
    description:
      "Swad Tea, a family-run tea brand business, engaged us for a Management Theater intervention to engage and align its sales team.",
    client_name: "Swad Tea",
    location: "India",
    duration: "Completed",
    csi: "Good",
    category: "Management Theater",
    detailed_content: [
      "The Management Theater format was used to communicate sales priorities and family-business succession themes to the sales team in an engaging, story-driven format.",
    ],
  },
  {
    slug: "kohler",
    case_id: "Case 43",
    client: "Kohler",
    industry: "Bathroom Fittings",
    challenge:
      "This bathroom fittings MNC needed a national Sales Conclave on the science of sales negotiation.",
    outcome:
      "A Sales Conclave for the national sales team built negotiation science capability.",
    metric_value: "National",
    metric_label: "Sales Conclave delivered",
    thumbnail: "Kohler.png",
    banners: ["Kohler.png", "cases/kohler-slide-1.png", "cases/kohler-slide-2.png", "cases/kohler-slide-3.png"],
    description:
      "Kohler, a bathroom fittings MNC, engaged us for a Sales Mein Molbhav (sales negotiation) Conclave for its national sales team.",
    client_name: "Kohler",
    location: "India (National)",
    duration: "Completed",
    csi: "Very Good",
    category: "Corporate Training",
    detailed_content: [
      "The national Sales Conclave covered the science of sales negotiation, equipping the team with structured negotiation frameworks for high-value deals.",
    ],
  },
  {
    slug: "peb360-solutions",
    case_id: "Case 44",
    client: "PEB360 Solutions India LLP",
    industry: "Pre-Engineered Buildings",
    challenge:
      "A Pre-Engineered Buildings design and fabrication company needed a Learning Management System for its sales team.",
    outcome:
      "An LMS rollout enabled ongoing, structured sales capability building for the PEB business.",
    metric_value: "LMS",
    metric_label: "Learning system deployed",
    thumbnail: "cases/peb360-solutions-case.png",
    banners: ["cases/peb360-solutions-case.png", "peb360.png", "peb360_banner.png"],
    description:
      "PEB360 Solutions India LLP, a Pre-Engineered Buildings design and fabrication company, engaged us for a Learning Management System (LMS) rollout to build ongoing sales capability.",
    client_name: "PEB360 Solutions India LLP",
    location: "India",
    duration: "Completed",
    csi: "Good",
    category: "LMS",
    detailed_content: [
      "The LMS rollout enabled structured, self-paced and cohort-based sales training for the PEB sales team on an ongoing basis.",
    ],
  },
];
