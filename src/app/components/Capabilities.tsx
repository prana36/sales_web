const capabilities = [
  {
    label: "Corporate Sales Training",
    percentage: 92,
    desc: "Customized sales modules for enterprise teams",
  },
  {
    label: "SME Business Performance Coaching",
    percentage: 85,
    desc: "Actionable coaching to scale small & medium enterprises",
  },
  {
    label: "Customer Relationship Management",
    percentage: 75,
    desc: "Strategic tools to maximize client retention and CLTV",
  },
  {
    label: "Business Strategy Realignment",
    percentage: 91,
    desc: "Restructuring business models for rapid sales growth",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-gray-150 pt-20">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                Our Capabilities
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                Proven methodologies and execution metrics across critical sales
                and coaching operations.
              </p>
            </div>

            <div className="lg:col-span-8 divide-y divide-gray-100 border-y border-gray-100">
              {capabilities.map((cap, index) => (
                <div
                  key={index}
                  className="py-8 first:pt-4 last:pb-4 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 group"
                >
                  <div className="flex-shrink-0 text-4xl font-black tracking-tighter text-blue-950 transition-colors duration-300 group-hover:text-yellow-500 sm:w-28 sm:text-5xl md:text-6xl">
                    {cap.percentage}%
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg md:text-xl mb-1.5 group-hover:text-blue-900 transition-colors duration-300">
                      {cap.label}
                    </h4>
                    <p className="text-sm text-gray-500 max-w-xl leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
