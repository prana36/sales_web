import { HelpCircle } from "lucide-react";

export default function FaqGroup({
  title,
  faqs,
}: {
  title: string;
  faqs: Array<{ question: string; answer: string }>;
}) {
  return (
    <div>
      <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-brand-navy">
        <HelpCircle className="size-5 text-brand-gold" />
        {title}
      </h3>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm" key={faq.question}>
            <summary className="cursor-pointer list-none font-bold text-gray-900">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
