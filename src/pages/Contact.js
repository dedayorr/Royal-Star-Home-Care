import React, { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";

const inputCls =
  "w-full px-4 py-3 rounded-lg border border-soft/40 text-sm text-gray-700 outline-none focus:border-secondary transition-colors bg-white font-sans";

const info = [
  {
    icon: "📍",
    label: "Address",
    value: "1730 Powder Horn Drive\nAlgonquin, IL",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+1 (224) 454-4186",
    href: "tel:+12244544186",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "royalstarhomecareservices@gmail.com",
    href: "mailto:royalstarhomecareservicesinc@gmail.com",
  },
  {
    icon: "🕐",
    label: "Hours",
    value: "Mon – Fri: 8am – 6pm\nOn-call: 24/7 for existing clients",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main className="pt-[72px]">
      <section className="bg-gradient-to-br from-primary to-secondary py-20 px-6 text-center">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest uppercase text-soft mb-3">
            Reach Out
          </p>
          <h1
            className="font-serif text-white mb-5 font-bold"
            style={{ fontSize: "clamp(32px,6vw,64px)" }}
          >
            Book An Appointment
          </h1>
          <p className="text-white max-w-xl mx-auto leading-relaxed text-[20px]">
            Request care or a free consultation. Share a few details and our
            team will reach out — no obligation, and help is available 24/7.
          </p>
        </AnimatedSection>
      </section>

      <section className="section-pad bg-blush/10">
        <div className="container-max grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Info */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <h2 className="font-serif text-3xl text-primary mb-3">
              Get in Touch
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether you're ready to start or just exploring options, our team
              is available to help — no pressure, just honest conversation.
            </p>
            <div className="flex flex-col gap-6 mb-10">
              {info.map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-widest uppercase text-secondary mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-gray-600 leading-relaxed hover:text-primary transition-colors break-words whitespace-pre-line"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-7 text-blush">
              <div className="text-2xl mb-3">⭐</div>
              <p className="text-sm leading-relaxed text-blush/85 italic">
                "Royal Star gave us peace of mind we didn't think was possible.
                Their team treated our mother with the dignity and love she
                deserved."
              </p>
              <p className="text-xs text-soft font-semibold mt-4">
                — Family Client, Algonquin IL
              </p>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            {submitted ? (
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-16 text-center text-blush">
                <div className="text-6xl mb-5">💛</div>
                <h3 className="font-serif text-3xl mb-3">Message Sent!</h3>
                <p className="text-blush/80 leading-relaxed">
                  Thank you for reaching out. A member of our team will contact
                  you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-xl shadow-soft/10"
              >
                <h3 className="font-serif text-2xl text-primary mb-7">
                  Send Us a Message
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <input
                    name="name"
                    placeholder="Full Name *"
                    required
                    value={form.name}
                    onChange={onChange}
                    className={inputCls}
                  />
                  <input
                    name="email"
                    placeholder="Email Address *"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    className={inputCls}
                  />
                </div>
                <input
                  name="phone"
                  placeholder="Phone Number"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  className={`${inputCls} mb-4`}
                />
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className={`${inputCls} mb-4 ${
                    !form.service ? "text-gray-400" : ""
                  }`}
                >
                  <option value="">Service of Interest (optional)</option>
                  {[
                    "Home Health",
                    "Home Nursing",
                    "Caregiver Services",
                    "Skilled Nursing",
                    "Private Duty Nursing",
                    "Personal Care",
                    "Companion Care",
                    "Physical Therapy",
                    "Not Sure Yet",
                  ].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us about your situation or any questions you have... *"
                  required
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  className={`${inputCls} resize-y mb-6`}
                />
                <button
                  type="submit"
                  className="btn-primary w-full py-4 text-base"
                >
                  Send Message →
                </button>
                <p className="text-xs text-gray-400 text-center mt-4">
                  We respond within 24 hours, Monday through Friday.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Map */}
      <section className="bg-primary py-16 px-6 text-center">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest uppercase text-soft mb-3">
            Find Us
          </p>
          <h2
            className="font-serif text-blush mb-2"
            style={{ fontSize: "clamp(18px,3vw,28px)" }}
          >
            1730 Powder Horn Drive, Algonquin, IL
          </h2>
          <p className="text-blush/60 mb-8 text-sm">
            Proudly serving the greater Algonquin area and surrounding
            communities.
          </p>
          <a
            href="https://maps.google.com/?q=1730+Powder+Horn+Drive+Algonquin+IL"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-soft text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blush transition-colors">
              Open in Google Maps →
            </button>
          </a>
        </AnimatedSection>
      </section>
    </main>
  );
}
