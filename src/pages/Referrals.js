import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const partners = [
  { icon: '🏨', title: 'Hospitals & Discharge Planners', desc: 'We coordinate smooth transitions from hospital to home, ensuring continuity of care for your patients.' },
  { icon: '🩺', title: 'Physicians & Specialists',       desc: 'Partner with us to extend your care into the home environment — we report back and keep you in the loop.' },
  { icon: '🏘️', title: 'Social Workers',                desc: 'We work alongside social workers to match clients with the right level of care and community resources.' },
  { icon: '🏢', title: 'Assisted Living Facilities',    desc: 'For residents who need supplemental care or are transitioning home, we step in seamlessly.' },
];

const inputCls = 'w-full px-4 py-3 rounded-lg border border-soft/40 text-sm text-gray-700 outline-none focus:border-secondary transition-colors bg-white font-sans';

export default function Referrals() {
  const [form, setForm] = useState({ referrerName:'', referrerOrg:'', referrerEmail:'', referrerPhone:'', clientName:'', clientDOB:'', clientPhone:'', clientAddress:'', serviceNeeded:'', notes:'' });
  const [submitted, setSubmitted] = useState(false);
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main className="pt-[72px]">
      <section className="bg-gradient-to-br from-primary to-secondary py-20 px-6 text-center">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest uppercase text-soft mb-3">For Healthcare Professionals</p>
          <h1 className="font-serif text-blush mb-5" style={{ fontSize: 'clamp(32px,6vw,64px)' }}>Patient Referrals</h1>
          <p className="text-blush/80 max-w-xl mx-auto leading-relaxed">Refer a patient to Royal Star Home Care and trust that they'll receive the same standard of care you would want for your own family.</p>
        </AnimatedSection>
      </section>

      <section className="section-pad bg-blush/10">
        <div className="container-max">
          <AnimatedSection className="text-center mb-12">
            <p className="label">Who We Work With</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Our Referral Partners</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1} direction="up">
                <div className="card h-full">
                  <div className="text-3xl mb-4">{p.icon}</div>
                  <h3 className="font-serif text-lg text-primary mb-3">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <p className="label">Submit a Referral</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">Refer a Patient</h2>
            <p className="text-gray-500 mt-3 leading-relaxed">Fill out the form below and our team will follow up within 24 hours.</p>
          </AnimatedSection>

          {submitted ? (
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-16 text-center text-blush">
                <div className="text-6xl mb-5">✅</div>
                <h3 className="font-serif text-3xl mb-3">Referral Received!</h3>
                <p className="text-blush/80 leading-relaxed">Thank you for trusting us with your patient. Our care coordinator will be in touch within 24 hours.</p>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection>
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="bg-blush/10 rounded-2xl p-8 md:p-12">
                <h3 className="font-serif text-xl text-primary mb-6">Referring Professional</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input name="referrerName"  placeholder="Your Full Name *"       required  value={form.referrerName}  onChange={onChange} className={inputCls} />
                  <input name="referrerOrg"   placeholder="Organization / Hospital"          value={form.referrerOrg}   onChange={onChange} className={inputCls} />
                  <input name="referrerEmail" placeholder="Your Email *"     type="email" required value={form.referrerEmail} onChange={onChange} className={inputCls} />
                  <input name="referrerPhone" placeholder="Your Phone"       type="tel"           value={form.referrerPhone} onChange={onChange} className={inputCls} />
                </div>

                <h3 className="font-serif text-xl text-primary mt-8 mb-6">Patient Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input name="clientName"    placeholder="Patient Full Name *"    required value={form.clientName}    onChange={onChange} className={inputCls} />
                  <input name="clientDOB"     placeholder="Date of Birth" type="date"      value={form.clientDOB}     onChange={onChange} className={inputCls} />
                  <input name="clientPhone"   placeholder="Patient / Family Phone *" type="tel" required value={form.clientPhone} onChange={onChange} className={inputCls} />
                  <input name="clientAddress" placeholder="Patient Address"               value={form.clientAddress} onChange={onChange} className={inputCls} />
                </div>
                <select name="serviceNeeded" value={form.serviceNeeded} onChange={onChange} className={`${inputCls} mb-4 ${!form.serviceNeeded ? 'text-gray-400' : ''}`}>
                  <option value="">Select Service Needed</option>
                  {['Home Health','Home Nursing','Skilled Nursing','Private Duty Nursing','Personal Care','Companion Care','Physical Therapy'].map(s => <option key={s}>{s}</option>)}
                </select>
                <textarea name="notes" placeholder="Clinical notes or special instructions..." rows={4} value={form.notes} onChange={onChange} className={`${inputCls} resize-y mb-6`} />
                <button type="submit" className="btn-primary w-full py-4 text-base">Submit Referral →</button>
              </form>
            </AnimatedSection>
          )}
        </div>
      </section>
    </main>
  );
}
