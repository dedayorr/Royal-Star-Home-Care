import React from 'react';
import { NavLink } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const values = [
  { icon: '💛', title: 'Dignity',         desc: 'We treat every client as a whole person worthy of respect, not just a patient with needs.' },
  { icon: '🤲', title: 'Compassion',      desc: 'Our caregivers lead with empathy, patience, and genuine warmth in every interaction.' },
  { icon: '✅', title: 'Excellence',      desc: 'We hold ourselves to the highest clinical and service standards — always improving.' },
  { icon: '🔒', title: 'Trust',           desc: 'Families trust us with the people they love most. We never take that responsibility lightly.' },
  { icon: '🌱', title: 'Personalization', desc: 'Every care plan is built from scratch around the client — their preferences, goals, and lifestyle.' },
  { icon: '🤝', title: 'Partnership',     desc: 'We work alongside families and healthcare providers to deliver seamless, coordinated care.' },
];

const team = [
  { name: 'Director of Nursing',  role: 'Clinical Leadership', desc: 'Oversees all care plans and ensures clinical quality across every client engagement.' },
  { name: 'Care Coordinators',    role: 'Client Relations',    desc: 'Your first point of contact — matching you with the right caregiver and coordinating ongoing support.' },
  { name: 'Licensed Caregivers',  role: 'In-Home Care',       desc: 'Fully vetted, trained, and compassionate professionals who deliver care daily with heart.' },
];

export default function About() {
  return (
    <main className="pt-[72px]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-20 px-6 text-center">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest uppercase text-soft mb-3">Our Story</p>
          <h1 className="font-serif text-white mb-5 text-[30px] font-bold" >About Us</h1>
          <p className="text-white max-w-xl mx-auto leading-relaxed text-[20px]">
            A family of caregivers committed to making life at home safer, fuller, and more dignified — every single day.
          </p>
        </AnimatedSection>
      </section>

      {/* Mission */}
      <section className="section-pad bg-white">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <AnimatedSection direction="left">
            <p className="label">Our Mission</p>
            <h2 className="font-serif text-primary mb-5 leading-tight text-2xl font-bold" >
              Caring for People the Way We'd Care for Our Own
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4 text-[20px]">
              Royal Star Home Care was founded on a simple belief: every person deserves professional care delivered with genuine compassion — not just services rendered, but lives enriched.
            </p>
            <p className="text-gray-500 leading-relaxed text-[20px]">
              From our first day, we have built every care plan around the individual — their medical needs, their personal preferences, their family dynamics, and their vision of a good life at home.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="bg-gradient-to-br from-blush/30 to-white rounded-2xl p-8 border border-soft/30">
              <h3 className="font-serif text-2xl text-primary mb-4 font-bold">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed mb-6 text-xl">
                To be the most trusted name in home care in Illinois — known not just for clinical excellence, but for the relationships we build with every family we serve.
              </p>

              {/* Inline image */}
              <div className="rounded-xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop"
                  alt="Caregiver with patient"
                  className="w-full object-cover"
                  style={{ height: 200 }}
                />
              </div>

              <div className="border-t border-soft/40 pt-5">
                <h3 className="font-serif text-2xl text-primary mb-3 font-bold">Licensed & Insured</h3>
                <p className="text-gray-500 leading-relaxed text-xl">
                  Royal Star Home Care Services Inc. is fully licensed, bonded, and insured — giving families complete peace of mind.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-blush/10">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <p className="label">What Guides Us</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">Our Core Values</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1} direction="up">
                <div className="card h-full">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="font-serif text-2xl text-primary mb-3 font-semibold">{v.title}</h3>
                  <p className=" text-gray-500 leading-relaxed text-xl">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad bg-primary">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-soft mb-3">The People Behind the Care</p>
            <h2 className="font-serif text-3xl font-bold md:text-4xl text-white">Our Team</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {team.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.15} direction="up">
                <div className="bg-white/10 rounded-2xl p-8 border border-white/10">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-5 text-2xl">⭐</div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-soft mb-2">{t.role}</p>
                  <h3 className="font-serif text-2xl text-white font-bold mb-3">{t.name}</h3>
                  <p className="text-xl text-blush/65 leading-relaxed">{t.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-blush text-center">
        <AnimatedSection>
          <h2 className="font-serif text-primary mb-4" style={{ fontSize: 'clamp(22px,4vw,42px)' }}>Let's Talk About Your Care Needs</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">We'd love to learn about you or your loved one and explore how Royal Star can help.</p>
          <NavLink to="/contact"><button className="btn-primary">Reach Out →</button></NavLink>
        </AnimatedSection>
      </section>
    </main>
  );
}
