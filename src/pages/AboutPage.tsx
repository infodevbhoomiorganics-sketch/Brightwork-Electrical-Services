import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Zap, Shield, Clock, Award, Users, ThumbsUp, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { site } from '@/data/site';
import { localBusinessSchema } from '@/data/schema';

const aboutImage = 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const teamImage = 'https://images.pexels.com/photos/5667685/pexels-photo-5667685.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const values = [
  { icon: Shield, title: 'Safety First', description: 'Every project we take on is completed to current NEC and local code. We never cut corners on safety.' },
  { icon: Clock, title: 'Reliability', description: 'We show up on time, communicate clearly, and stand behind our work. Your time matters to us.' },
  { icon: ThumbsUp, title: 'Honesty', description: 'We give you honest assessments and upfront pricing. No upselling, no hidden fees, no pressure.' },
  { icon: Award, title: 'Quality Workmanship', description: 'We take pride in every job, from the smallest repair to the largest installation. Quality shows.' },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | Brightwork Electrical Services | Denver, CO"
        description="Learn about Brightwork Electrical Services — a residential electrical contractor serving Denver, CO. Licensed, insured, and committed to quality work."
        canonical={`${site.domain}/about`}
        schema={[localBusinessSchema]}
      />

      <section className="relative overflow-hidden bg-[#0a0e1a]">
        <div className="absolute inset-0">
          <img src={aboutImage} alt="Electrician working on electrical panel" className="h-full w-full object-cover opacity-35" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a] via-[#0a0e1a]/85 to-[#0a0e1a]/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <p className="text-sm text-[#ffd700] font-medium mb-3 tracking-wide">About Us</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-3xl">About Brightwork Electrical Services</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed">A residential electrical contractor serving Denver, Colorado and the surrounding metro area.</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <img src={teamImage} alt="Brightwork Electrical Services team installing electrical panel" className="rounded-2xl shadow-2xl w-full" loading="lazy" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Brightwork Electrical Services was founded with a simple goal: to provide Denver homeowners with electrical service they can trust. We saw too many homeowners dealing with electricians who showed up late, couldn't explain the problem, or left work that didn't meet code.
                </p>
                <p>
                  We do things differently. When you call Brightwork, you get a licensed electrician who shows up on time, diagnoses the problem accurately, explains your options in plain language, and delivers work that meets the highest safety and quality standards.
                </p>
                <p>
                  Based in Denver, we serve homeowners throughout the metro area — from Aurora to Boulder, Littleton to Thornton. We know Denver homes, from historic bungalows with original wiring to new builds with modern electrical systems. Whatever your home needs, we have the experience to deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-[#ff9500] uppercase tracking-wider mb-3">Our Values</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What We Stand For</h2>
            <p className="text-gray-600 text-lg">These principles guide every project we take on and every interaction with our customers.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white border border-gray-200 p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#ffd700] to-[#ff9500] mx-auto mb-4">
                  <v.icon className="h-7 w-7 text-[#0a0e1a]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work With Us?"
        subtitle="Call us today for professional electrical service in Denver, CO. We're ready to help with any residential electrical need."
      />
    </>
  );
}
