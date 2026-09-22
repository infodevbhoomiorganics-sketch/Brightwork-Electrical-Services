import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className={`rounded-xl border transition-all ${
            open === i
              ? 'border-[#ff9500]/40 bg-orange-50/50 shadow-sm'
              : 'border-gray-200 bg-white hover:border-gray-300'
          }`}
        >
          <button
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className={`font-semibold text-base ${open === i ? 'text-[#ff9500]' : 'text-gray-900'}`}>
              {faq.q}
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 transition-transform ${
                open === i ? 'rotate-180 text-[#ff9500]' : 'text-gray-400'
              }`}
            />
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-gray-600 leading-relaxed">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
