import { Phone } from 'lucide-react';
import { site } from '@/data/site';

export default function MobileCallButton() {
  return (
    <a
      href={site.phoneHref}
      className="fixed bottom-4 right-4 z-50 sm:hidden flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffd700] to-[#ff9500] px-5 py-3.5 font-bold text-[#0a0e1a] shadow-2xl shadow-[#ffd700]/40 active:scale-95 transition-transform"
      aria-label="Call now"
    >
      <Phone className="h-5 w-5" fill="currentColor" />
      Call Now
    </a>
  );
}
