import React, { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";

const inputCls =
  "w-full px-4 py-5 rounded-lg border border-soft/40 text- text-gray-700 outline-none focus:border-secondary transition-colors bg-white font-sans";

const selectCls = (val) =>
  `${inputCls} ${!val ? "text-gray-400" : "text-gray-700"}`;

const info = [
  {
    icon: "📞",
    label: "Phone",
    value: "+1 (224) 454-4186",
    href: "tel:+12244544186",
  },
  {
    icon: "📞",
    label: "Fax",
    value: "+1 (312) 795-4540",
    href: "tel:+13127954540",
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
    phone: "",
    email: "",
    subject: "",
    careFor: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    cityZip: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main className="pt-[72px]">
      <section className="bg-gradient-to-br from-primary to-secondary py-20 px-6 text-center">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest text-soft mb-3">
            Reach Out
          </p>
          <h1
            className="font-serif text-white mb-5 font-bold"
            style={{ fontSize: "clamp(32px,6vw,64px)" }}
          >
            Book An Appointment
          </h1>
          <p className="text-white max-w-xl mx-auto leading-relaxed text-[18px]">
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
            <p className="leading-relaxed mb-8 text-black text-2xl font-bold">
              Let's talk about the care you need
            </p>
            <div className="flex flex-col gap-6 mb-10">
              {info.map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-l tracking-widest text-secondary mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-gray-600 leading-relaxed hover:text-primary transition-colors break-words whitespace-pre-line "
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-semibold text-gray-600 leading-relaxed whitespace-pre-line ">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Reassurance card */}
            {/* <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-7 text-blush">
              <div className="text-3xl mb-3">💜</div>
              <h4 className="font-serif text-lg mb-2">We're Here for You</h4>
              <p className="text-sm leading-relaxed text-blush/85">
                Whether you're just exploring options or ready to start, our
                care coordinators are available to guide you every step of the
                way — with no pressure and no obligation.
              </p>
            </div> */}
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            {submitted ? (
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-16 text-center text-blush">
                <div className="text-6xl mb-5">💛</div>
                <h3 className="font-serif text-3xl mb-3">Request Received!</h3>
                <p className="text-blush/80 leading-relaxed mb-6">
                  Thank you for reaching out to Royal Star Home Care. A member
                  of our team will contact you within 24 hours to confirm your
                  appointment.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-blush transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-xl shadow-soft/10"
              >
                <h3 className="font-serif text-2xl text-primary mb-2">
                  Request an Appointment
                </h3>
                <p className="text-gray-400 text-sm mb-7">
                  Fields marked <span className="text-secondary">*</span> are required
                </p>

                {/* Row 1 — Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className=" font-semibold text-gray-500 tracking-wide mb-1 block">
                      Full Name <span className="text-secondary">*</span>
                    </label>
                    <input
                      name="name"
                      placeholder="e.g. John Smith"
                      required
                      value={form.name}
                      onChange={onChange}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className=" font-semibold text-gray-500 tracking-wide mb-1 block">
                      Phone Number <span className="text-secondary">*</span>
                    </label>
                    <input
                      name="phone"
                      placeholder="e.g. (224) 000-0000"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={onChange}
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Row 2 — Email & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className=" font-semibold text-gray-500 tracking-wide mb-1 block">
                      Email Address <span className="text-secondary">*</span>
                    </label>
                    <input
                      name="email"
                      placeholder="you@example.com"
                      type="email"
                      required
                      value={form.email}
                      onChange={onChange}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className=" font-semibold text-gray-500 tracking-wide mb-1 block">
                      Subject <span className="text-secondary">*</span>
                    </label>
                    <input
                      name="subject"
                      placeholder="e.g. Inquiry about nursing care"
                      required
                      value={form.subject}
                      onChange={onChange}
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Row 3 — Care For & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className=" font-semibold text-gray-500 tracking-wide mb-1 block">
                      Care is for <span className="text-secondary">*</span>
                    </label>
                    <select
                      name="careFor"
                      required
                      value={form.careFor}
                      onChange={onChange}
                      className={selectCls(form.careFor)}
                    >
                      <option value="">Select one...</option>
                      <option>Myself</option>
                      <option>A Loved One</option>
                      <option>A Patient / Client</option>
                    </select>
                  </div>
                  <div>
                    <label className=" font-semibold text-gray-500 tracking-wide mb-1 block">
                      Service Interested In <span className="text-secondary">*</span>
                    </label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={onChange}
                      className={selectCls(form.service)}
                    >
                      <option value="">Select a service...</option>
                      <option>Pediatric Nursing</option>
                      <option>Skilled Nursing</option>
                      <option>Companion Services</option>
                      <option>Respite Care</option>
                      <option>Transportation to Doctor's Appointment</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>
                </div>

                {/* Row 4 — Preferred Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className=" font-semibold text-gray-500 tracking-wide mb-1 block">
                      Preferred Date
                    </label>
                    <input
                      name="preferredDate"
                      type="date"
                      value={form.preferredDate}
                      onChange={onChange}
                      min={new Date().toISOString().split("T")[0]}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className=" font-semibold text-gray-500 tracking-wide mb-1 block">
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={form.preferredTime}
                      onChange={onChange}
                      className={selectCls(form.preferredTime)}
                    >
                      <option value="">Select a time...</option>
                      <option>Morning (8am – 12pm)</option>
                      <option>Afternoon (12pm – 4pm)</option>
                      <option>Evening (4pm – 6pm)</option>
                      <option>Any Time</option>
                    </select>
                  </div>
                </div>

                {/* Row 5 — City/Zip */}
                <div className="mb-4">
                  <label className="font-semibold text-gray-500 tracking-wide mb-1 block">
                    City / ZIP Code <span className="text-secondary">*</span>
                  </label>
                  <input
                    name="cityZip"
                    placeholder=""
                    required
                    value={form.cityZip}
                    onChange={onChange}
                    className={inputCls}
                  />
                </div>

                {/* Row 6 — Message */}
                <div className="mb-6">
                  <label className=" font-semibold text-gray-500 tracking-wide mb-1 block">
                    Anything else? Tell us about the care you need
                  </label>
                  <textarea
                    name="message"
                    placeholder="Share any details about the care needed, medical conditions, schedule preferences, or questions you have..."
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    className={`${inputCls} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 text-base"
                >
                  Submit
                </button>
                <p className=" text-gray-400 text-center mt-4">
                  We respond within 24 hours, Monday through Friday. For urgent
                  care needs, please call us directly.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Map */}
      {/* <section className="bg-primary py-16 px-6 text-center">
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
      </section> */}
    </main>
  );
}