// Source content for seeding public.services in Supabase.
// image: path relative to src/app/assets/images/services/ (existing bundled assets, reused for storage upload)
// faqs: normalized [{ group, items: [{question, answer}] }]
// related_case_study_slugs: must match slugs in case-studies-data.mjs

const SERVICES_IMG_DIR =
  "/Users/kundan/Library/CloudStorage/GoogleDrive-iamkundan0206@gmail.com/My Drive/sales_web/src/app/assets/images/services";

export { SERVICES_IMG_DIR };

const contractCard = (challengeCaptureLine) => ({
  group: "How can I start my association with Sanjay Singh, The Sales Coach?",
  items: [
    {
      question: "Do I have to Commit to a Contract?",
      answer:
        "No contracts. We need to agree on points of consensus and disagree on points of disapproval. This leads to a co-created MOU which is mutually acceptable.",
    },
    {
      question: "What payment methods are available?",
      answer:
        "All payments are to be made 100% advance, digitally vide the following instamojo link.",
    },
    {
      question: "Is there any form in which I can explain my challenge to the Sales Coach?",
      answer: challengeCaptureLine,
    },
  ],
});

export const services = [
  {
    slug: "sales-ki-jaat",
    name: "Sales Ki Jaat",
    hindi_title: "सेल्स की जात",
    summary:
      "Focuses on the DNA of Sales in salesperson's skills, enriching salesmanship with consultant skills to build a repository of sales expertise.",
    image: "sales-ki-jaat.png",
    description_paragraphs: [
      "The DNA of Sales must be installed in each and every member of your sales team for them to become long term sustainable assets. These are traits which are not available at birth. One has to acquire them to baptize themselves into Sales Ki Jaat! Managing a Sales Team without the DNA of Sales is the most expensive mistake that one can make in business. The opportunity loss is much greater than the real loss.",
      "Let me share some DNA secrets of salespersons. If your sales team is baptized with the \"Sales Ki Jaat\" program they will not suffer from Fear of Failure, Fear of Unknown, Fear of Rejections, Fear of asking Questions and Fear of Challenging Self. In addition, they will understand the power of a positive Sales Pitch and will have a burning desire to conduct the act of Sales Closings.",
    ],
    faqs: [
      contractCard("Please click on the link below to capture your Training and Need Analysis for Sales Ki Jaat"),
      {
        group: "Once we start, how do we monitor the work in progress?",
        items: [
          {
            question: "How can we measure Performance of this relationship with the Sales Coach?",
            answer:
              "At the end of Training and Need Analysis, all Performance Metrics will be postulated in the MOU and mutually agreed upon. The work in Progress is always shared on Trello or Google Drive with SPOC (Single Point of Contact) at the client's end.",
          },
          {
            question: "Is there any guarantee for Sales Growth?",
            answer: "This will be mentioned in black and white in the MOU which is signed mutually.",
          },
          {
            question: "Do you serve any penalty clause for non fulfillment of Promises made?",
            answer:
              "If all points of agreement, as mentioned in the MOU are complied to from both sides, any non performance on Promises made in writing will be served with a penalty of 100% refund of fees taken for the said Promise.",
          },
        ],
      },
      {
        group: "At the end of the agreement period, how will you seamlessly transfer knowledge?",
        items: [
          {
            question: "What do you do to ensure that change is organic in nature?",
            answer:
              "There is nothing confidential in all the toolkits, technology and experience shared during the consulting service. While serving the agreement, everything is shared with the client on a real time basis.",
          },
          {
            question: "Will you appoint a Change Manager while handing over to us?",
            answer:
              "We have a provision for appointing a Change Manager after handing over. This service is redeemed separately by the client.",
          },
        ],
      },
    ],
    related_case_study_slugs: ["osborne-lippert", "plastisurge-industries"],
  },
  {
    slug: "sales-ki-vidhi",
    name: "Sales Ki Vidhi",
    hindi_title: "सेल्स की विधि",
    summary:
      "Answers 'how to sell?' by focusing on sales life cycle, methods, techniques and processes of effective selling.",
    image: "sales-ki-vidhi.png",
    description_paragraphs: [
      "Once the answer to \"Why to sell?\" is clear to the salesperson, the question of \"how to sell?\" needs to be answered on priority. This is done through our program titled \"Sales ki Vidhi\" or Sales Process. This focuses on Sales life cycle, sales methods and techniques and the process of effective selling by making use of the right kind of sales techniques.",
      "Once you undertake the \"Sales Ki Vidhi\" program you will understand the journey of sales inside the Sales Funnel starting from TOFU (Top of Funnel) to MOFU (Middle of Funnel) and BOFU (Bottom of Funnel). The Sales Funnel Ratios which guides the salesperson to build their respective sales funnel for each customer silo or market segment is an important learning outcome of this program. Based on the sales lifecycle of the product or service that one is dealing with, the corresponding Sales Process is prepared. Action Selling System, PEAK Selling System, SPANCO sales System and SPACER Sales system are some examples of sales process used by various leading sales organizations across the globe.",
    ],
    faqs: [
      contractCard("Please click on the link below to capture your self audit of the status of Sales Process in your company"),
      {
        group: "What is the methodology adopted by you to revamp my Sales Process?",
        items: [
          {
            question: "What is the methodology adopted by you to revamp my Sales Process?",
            answer:
              "We conduct a \"Gap Analysis\" between \"What sales process is there?\" and \"What sales process should be there?\" On consensus, we prepare an implementation plan which phases out the existing Sales Process and introduces the new Sales Process without suffering business loss, then implement the plan with authenticity and transparency.",
          },
        ],
      },
      {
        group: "What are the questions which you try to solve through a Sales Process?",
        items: [
          {
            question: "What are the questions which you try to solve through a Sales Process?",
            answer:
              "Does the team understand the mathematics of Sales Funnel? Is there a defined system of Lead Generation? How does one engage with a warm lead to make it hot lead? What is the sales pitch to be made? When and what do we propose? How do we handle objections from customer? How do we conduct sales closings? What is the matrix to be followed in sales negotiation? How does one monetise LTV of the customer?",
          },
        ],
      },
    ],
    related_case_study_slugs: ["palav-fabrics", "harrier-information-systems"],
  },
  {
    slug: "sales-ki-niti",
    name: "Sales Ki Niti",
    hindi_title: "सेल्स की निति",
    summary:
      "Sales strategy program focusing on sales planning, techniques and strategic selling to improve sales.",
    image: "sales-ki-niti.png",
    description_paragraphs: [
      "The Sales Strategy (Sales Ki Niti) is an outcome of internalizing Sales Planning and Sales Techniques. Once this is done with the sales planning process and best sales strategies, we arrive at a successful sales strategy for our clients by optimizing the best sales strategies to improve sales and finalizing a strategic selling process with winning sales techniques. Needless to say, before finalizing a sales strategy plan, we do look at all possible options of selling strategy and strategies to improve sales.",
    ],
    faqs: [
      contractCard("Please click on the link below to capture your self audit of the status of Sales Process in your company"),
      {
        group: "What is the methodology adopted by you to work on Sales Ki Niti?",
        items: [
          {
            question: "What is the methodology adopted by you to work on Sales Ki Niti?",
            answer:
              "We conduct a Market Intelligence study to know the competition, a Market Sensing study to know your business better, and a thorough Catchment Analysis of your existing markets. The strategic inputs from these exercises give us the gaps in market. A test marketing exercise establishes Proof of Concept for new ideas, and a Go-To-Market plan is prepared with budgets, timeframes and a responsibility matrix.",
          },
        ],
      },
      {
        group: "What will the client miss if they do not take your Sales Ki Niti advisory services?",
        items: [
          {
            question: "What will the client miss if they do not take your Sales Ki Niti advisory services?",
            answer:
              "The Sales Strategy prepared by us is based on data analytics and business intelligence studies. The Proof of Concept done ensures the slip between cup and the lip. The GTM has budgets and timeframes, two important elements of any strategy.",
          },
        ],
      },
    ],
    related_case_study_slugs: ["takshila-educational-society", "godrej-and-boyce"],
  },
  {
    slug: "sales-mein-molbhav",
    name: "Sales Mein Molbhav",
    hindi_title: "सेल्स में मोलभाव",
    summary:
      "Focuses on sales negotiation process, sales negotiation skills, tactics, selling and bargaining skills, forming part of the 'Sales Me Molbhav' framework.",
    image: "sales-mein-molbhav.png",
    description_paragraphs: [
      "In Sales Management, the Sales Negotiation process holds a special place. The outcome of any Sales Negotiation as a result of sales negotiation skills, negotiation tactics in sales, selling and bargaining skills or anything else that leads to selling and negotiation skills form a part of the framework of \"Sales Me Molbhav\" program. Selling and Sales Management is fruitless if it does not yield into sales closures which is sustainable and profitable to the seller. The Sales management process, powered by selling and negotiation skills adds luster to the selling process in sales management.",
      "\"The Sales Closing Ratio has improved and they are able to close higher ticket sales!\" — common feedback from participants of this program.",
    ],
    faqs: [
      contractCard("Please click on the link below to capture your self audit of the status of Sales Process in your company"),
      {
        group: "How can Mr Sanjay Singh help us in our Sales Negotiation?",
        items: [
          {
            question: "How can Mr Sanjay Singh help us in our Sales Negotiation?",
            answer:
              "We empower your sales team on the science of sales negotiations and the 7 laws governing the same. We help you set up a Sales Negotiation Kit so decision making can be decentralized, and we can represent you for big ticket sales negotiations in the market.",
          },
        ],
      },
      {
        group: "What is it in Sales Negotiation that we need to learn?",
        items: [
          {
            question: "What is it in Sales Negotiation that we need to learn?",
            answer:
              "You lose to win in sales negotiations. Planning before the sales negotiation helps you negotiate better. The theory of BATNA has to be mastered by all team members, along with the 7 Laws of Sales Negotiation and their implications. The walk away point is not only about price.",
          },
        ],
      },
    ],
    related_case_study_slugs: ["kohler", "calderys-refractories"],
  },
  {
    slug: "sales-katha",
    name: "Sales Katha",
    hindi_title: "सेल्स की कथा",
    summary:
      "Storytelling-based approach to explain sales to customers; emphasizes communicating via stories in addition to FAB and FAQ.",
    image: "sales-katha.png",
    description_paragraphs: [
      "Storytelling is the art which allows the science of Sales to be understood by the customer. If you are trying to answer the question \"How to get customers to buy your product?\", you must understand that apart from making use of FAB (Features, Advantages and Benefits) and FAQ (Frequently Asked Questions) one has to learn to communicate in the form of stories of Sales ki Katha.",
      "Stories help the seller connect emotionally with the buyer. The latter in anticipation exudes adrenaline and oxytocin, two vital secretions required to get the buyer into the buying mood. Sales Ki Katha revolves around 7 types of stories that a salesperson needs to master.",
    ],
    faqs: [
      contractCard("Please click on the link below to capture your self audit of the status of Sales Process in your company"),
      {
        group: "How can Mr Sanjay Singh help us with the Sales Katha program?",
        items: [
          {
            question: "How can Mr Sanjay Singh help us with the Sales Katha program?",
            answer:
              "We brainstorm with your sales and marketing team to build 7 types of sales story for each product line. The story is curated in a way that the customer connects with the same and relates to them.",
          },
        ],
      },
      {
        group: "What will we lose if we do not undertake the Sales Katha program?",
        items: [
          {
            question: "What will we lose if we do not undertake the Sales Katha program?",
            answer:
              "The percentage of Ideal Customers in your customer portfolio will not increase, the conversion ratio from a good lead to an order will stay flat, and the sales motivation and morale of your sales team will not reach its highest standard.",
          },
        ],
      },
    ],
    related_case_study_slugs: ["karan-kothari-jewelers", "icici-bank-sme-ceo-circle"],
  },
  {
    slug: "sales-ke-rishte",
    name: "Sales Ke Rishte",
    hindi_title: "सेल्स के रिश्ते",
    summary:
      "Proprietary customer relationship management system focusing on tools and features to leverage Customer LifeTime Value (CLTV).",
    image: "sales-ke-rishte.png",
    description_paragraphs: [
      "Sales Ke Rishte, customer relationship management system, is a proprietary system developed by us which focuses on customer relationship management tools and features of customer relationship management in a way that it helps the client leverage the Customer LifeTime Value (CLTV).",
      "The \"Sales Ke Rishte\" program begins with the definition of the customer journey, after buying, from Welcome to Repeat Customer to Loyal Customer to Customer Advocate. The Standard Operating Procedures (SOP) required to be defined for Welcome Kit, Repeat Customer Buying, Customer Loyalty Program and a structured method to calculate the Customer LifeTime Value (CLTV). The CRM software required to run all these programs on an auto mode is also taken up by our team for Hubspot, Zoho or Sell.do.",
    ],
    faqs: [
      contractCard("Please click on the link below to capture your self audit of the status of Sales Process in your company"),
      {
        group: "How can you help us with the Sales Ke Rishte program?",
        items: [
          {
            question: "How can you help us with the Sales Ke Rishte program?",
            answer:
              "We help you and your sales team onboard to Hubspot CRM systems (freeware), set up the customer relationship management value chain, calculate the CLTV (Customer LifeTime Value), and help the customer monetise the CLTV.",
          },
        ],
      },
      {
        group: "What will we lose if we do not undertake the Sales Ke Rishte program?",
        items: [
          {
            question: "What will we lose if we do not undertake the Sales Ke Rishte program?",
            answer: "Monetisation of the CLTV.",
          },
        ],
      },
    ],
    related_case_study_slugs: ["maximess", "fable-fintech-solutions"],
  },
];
