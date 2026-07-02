export default function CTA() {
  return (
    <section className="py-20 px-6 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mb-4">
          Ready to fix your Sales Ecosystem?
        </h2>
        <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
          Download our complete Sales Ecosystem Starter Pack and start your transformation journey today
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded hover:bg-yellow-400 transition-all hover:shadow-lg hover:-translate-y-0.5 font-medium">
            Download Starter
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-blue-900 transition-all font-medium">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
