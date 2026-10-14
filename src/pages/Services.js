import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const categories = [
  { id: 'health',    label: 'Home Health',        icon: '🏥', headline: 'Medical Care at Home',           desc: 'Our home health services bring professional medical care into your home, coordinated by our clinical team and tailored to your recovery or long-term health goals.', features: ['Post-surgery recovery care','Chronic disease management','Medication administration & education','Vital signs monitoring','Coordination with your physician','Health status reporting'] },
  { id: 'nursing',   label: 'Home Nursing',        icon: '💉', headline: 'Skilled Nursing Services',       desc: 'Our licensed nurses provide advanced clinical care in the comfort of your home — from complex wound care to IV therapy and disease management.', features: ['Wound care & dressing changes','IV therapy','Catheter care','Ostomy care','Medication management','Patient & family education'] },
  { id: 'caregiver', label: 'Caregiver Services',  icon: '🤝', headline: 'Compassionate Caregiver Support', desc: 'Our trained caregivers assist with daily living activities, providing the hands-on support that helps clients remain safely and comfortably at home.', features: ['Bathing & personal hygiene','Dressing & grooming','Meal preparation','Light housekeeping','Errand running & transportation','Medication reminders'] },
  { id: 'skilled',   label: 'Skilled Nursing',     icon: '🩺', headline: 'Private Duty Skilled Nursing',   desc: 'For clients with complex or high-acuity medical needs, our private duty skilled nurses provide one-on-one, around-the-clock nursing care at home.', features: ['1-on-1 private duty nursing','Ventilator management','Tracheostomy care','Enteral nutrition support','Pediatric & adult care','24/7 availability'] },
  { id: 'therapy',   label: 'Physical Therapy',    icon: '🏃', headline: 'In-Home Physical Therapy',       desc: 'Our licensed physical therapists design personalized programs to help clients regain strength, mobility, and independence — all without leaving home.', features: ['Mobility & balance training','Post-surgery rehabilitation','Fall prevention programs','Strength & conditioning','Pain management','Home safety assessment'] },
  { id: 'companion', label: 'Companion Care',      icon: '💛', headline: 'Meaningful Companionship',       desc: 'Social connection is essential to wellbeing. Our companions provide friendship, engagement, and emotional support that makes life at home richer.', features: ['Conversation & social engagement','Reading & cognitive activities','Accompanying to appointments','Hobbies & recreation','Oversight for safety','Family peace of mind'] },
];

export default function Services() {
  const [active, setActive] = useState('health');
  const current = categories.find(c => c.id === active);

  return (
    <main className="pt-[72px]">
      <section className="bg-gradient-to-br from-primary to-secondary py-20 px-6 text-center">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest uppercase text-soft mb-3">What We Provide</p>
          <h1 className="font-serif text-blush mb-5" style={{ fontSize: 'clamp(32px,6vw,64px)' }}>Our Services</h1>
          <p className="text-blush/80 max-w-xl mx-auto leading-relaxed" style={{ fontSize: 'clamp(15px,2vw,17px)' }}>
            Comprehensive home care built around what each person truly needs — medically, personally, and emotionally.
          </p>
        </AnimatedSection>
      </section>

      {/* Tab Nav */}
      <div className="bg-white border-b border-soft/20 sticky top-[72px] z-40 px-6">
        <div className="max-w-6xl mx-auto flex overflow-x-auto gap-1 py-1" style={{ scrollbarWidth: 'thin' }}>
          {categories.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
                active === c.id ? 'border-secondary text-primary' : 'border-transparent text-gray-400 hover:text-primary'
              }`}>
              {c.icon} {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Detail */}
      <section className="section-pad bg-blush/10">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <AnimatedSection direction="left" key={active}>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-10 text-blush">
              <div className="text-5xl mb-6">{current.icon}</div>
              <h2 className="font-serif text-2xl md:text-3xl mb-4">{current.headline}</h2>
              <p className="text-blush/85 leading-relaxed">{current.desc}</p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" key={active + '-f'}>
            <h3 className="font-serif text-2xl text-primary mb-6">What's Included</h3>
            <div className="flex flex-col gap-3">
              {current.features.map(f => (
                <div key={f} className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-soft/20">
                  <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{f}</span>
                </div>
              ))}
            </div>
            <NavLink to="/contact" className="inline-block mt-8">
              <button className="btn-primary">Inquire About This Service →</button>
            </NavLink>
          </AnimatedSection>
        </div>
      </section>

      {/* All Services */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-primary">All Care Services at a Glance</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c, i) => (
              <AnimatedSection key={c.id} delay={i * 0.08} direction="up">
                <div onClick={() => { setActive(c.id); window.scrollTo({ top: 200, behavior: 'smooth' }); }}
                  className="group bg-blush/10 rounded-xl p-7 cursor-pointer border border-soft/20 hover:bg-primary transition-all duration-300">
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h3 className="font-serif text-lg text-primary group-hover:text-blush mb-2 transition-colors">{c.label}</h3>
                  <p className="text-xs text-gray-500 group-hover:text-blush/70 leading-relaxed transition-colors">{c.desc.slice(0, 80)}...</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-blush text-center">
        <AnimatedSection>
          <h2 className="font-serif text-primary mb-4" style={{ fontSize: 'clamp(22px,4vw,40px)' }}>Not Sure Which Service You Need?</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">Our care coordinators will assess your situation and recommend the right services — no pressure.</p>
          <NavLink to="/contact"><button className="btn-primary">Talk to a Care Coordinator</button></NavLink>
        </AnimatedSection>
      </section>
    </main>
  );
}
