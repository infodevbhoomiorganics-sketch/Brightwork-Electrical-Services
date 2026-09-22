import { Phone } from 'lucide-react';
import { site } from '@/data/site';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
  breadcrumb?: string;
}

export default function PageHero({ title, subtitle, image, alt, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a0e1a]">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/80 to-[#0a0e1a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {breadcrumb && (
          <p className="text-sm text-[#ffd700] font-medium mb-3 tracking-wide">{breadcrumb}</p>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ffd700] to-[#ff9500] px-6 py-3.5 text-base font-bold text-[#0a0e1a] hover:shadow-xl hover:shadow-[#ffd700]/40 transition-all hover:scale-105"
          >
            <Phone className="h-5 w-5" fill="currentColor" />
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
