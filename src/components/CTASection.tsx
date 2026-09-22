import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site } from '@/data/site';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: 'dark' | 'gradient';
}

export default function CTASection({
  title = 'Speak With an Electrician Today',
  subtitle = 'Call us now for fast, reliable electrical service in Denver, CO. We\'re ready to help with any electrical need your home has.',
  variant = 'gradient',
}: CTASectionProps) {
  return (
    <section
      className={`relative overflow-hidden ${
        variant === 'gradient'
          ? 'bg-gradient-to-br from-[#0a0e1a] via-[#111827] to-[#0a0e1a]'
          : 'bg-[#0a0e1a]'
      }`}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffd700] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff9500] rounded-full blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ffd700] to-[#ff9500] px-8 py-4 text-base font-bold text-[#0a0e1a] hover:shadow-xl hover:shadow-[#ffd700]/40 transition-all hover:scale-105"
          >
            <Phone className="h-5 w-5" fill="currentColor" />
            Call {site.phone}
          </a>
          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-xl border-2 border-gray-600 px-8 py-4 text-base font-bold text-white hover:border-[#ffd700] hover:text-[#ffd700] transition-colors"
          >
            Request Electrical Service
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
