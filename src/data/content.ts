export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Michael R.',
    location: 'Denver, CO',
    text:
      'Brightwork Electrical Services upgraded our electrical panel and the whole process was smooth from start to finish. The electrician showed up on time, explained everything clearly, and the work was clean and professional. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Sarah K.',
    location: 'Aurora, CO',
    text:
      'We had several dead outlets in our kitchen and a breaker that kept tripping. Brightwork came out the same day, found the problem quickly, and fixed it at a fair price. I felt comfortable having them in our home.',
    rating: 5,
  },
  {
    name: 'David L.',
    location: 'Lakewood, CO',
    text:
      'Installed an EV charger in our garage. They assessed our panel, gave us a clear quote, and completed the installation in a few hours. The work was neat and the charger works perfectly. Great experience overall.',
    rating: 5,
  },
  {
    name: 'Jennifer M.',
    location: 'Littleton, CO',
    text:
      'We bought a 1950s home in Littleton and needed a full electrical inspection. Brightwork did a thorough job, found some issues with the old wiring, and gave us honest recommendations. No upselling, just straightforward advice.',
    rating: 5,
  },
  {
    name: 'Robert T.',
    location: 'Highlands Ranch, CO',
    text:
      'Had recessed lighting installed throughout our living room and kitchen. The result looks fantastic and the electricians were careful to keep everything clean. They even helped us choose the right fixture type for our ceiling.',
    rating: 5,
  },
  {
    name: 'Amanda P.',
    location: 'Englewood, CO',
    text:
      'Our ceiling fan started wobbling and making noise. Brightwork came out, found the box wasn\'t fan-rated, and installed a proper support. The fan is rock solid now. Professional and knowledgeable from start to finish.',
    rating: 5,
  },
  {
    name: 'James W.',
    location: 'Centennial, CO',
    text:
      'Called them for a whole-house surge protector installation. Quick, affordable, and the electrician took the time to explain how it works. Peace of mind for our electronics and appliances during storm season.',
    rating: 5,
  },
  {
    name: 'Lisa H.',
    location: 'Thornton, CO',
    text:
      'We had flickering lights in two rooms and couldn\'t figure out why. The electrician from Brightwork traced it to a loose neutral wire in the panel and fixed it. Problem solved in under an hour. Very impressed with the troubleshooting skills.',
    rating: 5,
  },
  {
    name: 'Kevin B.',
    location: 'Arvada, CO',
    text:
      'Installed a backup generator transfer switch for our home. The work was clean, passed inspection with no issues, and the electrician walked us through how to use it. Exactly the professional service we needed.',
    rating: 5,
  },
];

export interface HomeFAQ {
  q: string;
  a: string;
}

export const homeFAQs: HomeFAQ[] = [
  {
    q: 'What electrical services do you offer in Denver, CO?',
    a: 'Brightwork Electrical Services offers a complete range of residential electrical services in Denver, including electrical repair, panel upgrades, residential wiring, outlet and switch repair, lighting installation, ceiling fan installation, EV charger installation, electrical inspections, surge protection, generator electrical service, and troubleshooting.',
  },
  {
    q: 'How quickly can you come to my home in Denver?',
    a: 'We offer same-day and next-day appointments for most service calls. For electrical emergencies — burning smells, sparking, power outages — we prioritize getting an electrician to your home as quickly as possible. Call 303-621-5710 to schedule.',
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Yes, we provide free, upfront quotes for all electrical work. You\'ll know the cost before we start any project. There are no hidden fees or surprise charges.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Brightwork Electrical Services is a licensed and insured electrical contractor serving Denver, CO and the surrounding metro area. We carry the insurance and bonding necessary to protect your home and our team.',
  },
  {
    q: 'Do you pull permits for electrical work?',
    a: 'Yes. For projects that require permits under Denver building code, we handle the permit application and coordinate all required inspections. This ensures all work is verified by the local jurisdiction and meets code.',
  },
  {
    q: 'What areas do you serve around Denver?',
    a: 'We serve Denver and the entire metro area, including Aurora, Lakewood, Littleton, Englewood, Centennial, Thornton, Westminster, Arvada, Highlands Ranch, Parker, Castle Rock, Broomfield, Golden, and Boulder.',
  },
  {
    q: 'Do you install EV chargers?',
    a: 'Yes. We install Level 2 home EV charging stations for all electric vehicle brands, including Tesla, Chevrolet, Ford, Rivian, Hyundai, Kia, and BMW. We handle the electrical assessment, dedicated circuit installation, and charger mounting.',
  },
  {
    q: 'How do I know if I need an electrical panel upgrade?',
    a: 'Common signs include breakers that trip frequently, a panel that feels warm, scorch marks, or if you\'re adding major electrical loads like an EV charger or addition. Many Denver homes with 100-amp service benefit from upgrading to 200 amps. We can assess your panel and recommend the right approach.',
  },
];
