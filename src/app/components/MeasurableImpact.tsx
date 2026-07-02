import { TrendingUp, Users, Clock } from "lucide-react";

export default function MeasurableImpact() {
  const impacts = [
    {
      icon: TrendingUp,
      value: "73%",
      title: "Growth Registered",
      description: "Significant business growth achieved through our training programs"
    },
    {
      icon: Users,
      value: "8.7L+",
      title: "Salespeople Handled",
      description: "Professionals trained and transformed across industries"
    },
    {
      icon: Clock,
      value: "23K+",
      title: "Training Hours",
      description: "Hours of dedicated training and development delivered"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Measurable Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence is reflected in the tangible results we deliver to our clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-[10px] border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-50 p-4 rounded-[10px] group-hover:bg-blue-100 transition-colors">
                    <Icon className="size-8 text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-4xl font-bold text-center mb-2 text-blue-900">{impact.value}</h3>
                <p className="text-lg font-semibold text-center mb-3">{impact.title}</p>
                <p className="text-sm text-gray-600 text-center">{impact.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
