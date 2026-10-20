import React, { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_oo8pexq";
const EMAILJS_TEMPLATE_ID = "template_5ot0m66";
const EMAILJS_PUBLIC_KEY = "prU2mq4C_eMpPOd3_";

const inputCls =
  "w-full px-4 py-4 rounded-lg border border-soft/40 text-gray-700 outline-none focus:border-secondary transition-colors bg-white font-sans";

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
  const [showPopup, setShowPopup] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [status, setStatus] = useState("idle");
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

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          phone: form.phone,
          from_email: form.email,
          subject: form.subject,
          care_for: form.careFor,
          service: form.service || "Not specified",
          preferred_date: form.preferredDate || "Not specified",
          preferred_time: form.preferredTime || "Not specified",
          city_zip: form.cityZip,
          message: form.message || "No additional info",
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setSubmittedData({ ...form }); // save before clearing
      setShowPopup(true);
      setForm({
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
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <main className="pt-[72px]">

      {/* ── Animated Popup Overlay ── */}
      {showPopup && submittedData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowPopup(false); }}
        >
          <div
            className="bg-white rounded-3xl p-10 max-w-md w-full text-center relative overflow-hidden shadow-2xl"
            style={{ animation: "popIn 0.5s cubic-bezier(0.175,0.885,0.32,1.275) forwards" }}
          >
            {/* Background blobs */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #8E1EA2, transparent)" }} />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #C654C3, transparent)" }} />

            {/* Floating emojis */}
            <div className="absolute top-5 left-7 text-2xl select-none"
              style={{ animation: "floatUp 2.5s ease-in-out 0.4s infinite" }}>💜</div>
            <div className="absolute top-8 right-8 text-xl select-none"
              style={{ animation: "floatUp 2.5s ease-in-out 0.7s infinite" }}>✨</div>
            <div className="absolute bottom-20 left-5 text-lg select-none"
              style={{ animation: "floatUp 2.5s ease-in-out 1s infinite" }}>⭐</div>
            <div className="absolute bottom-24 right-6 text-xl select-none"
              style={{ animation: "floatUp 2.5s ease-in-out 0.5s infinite" }}>🌸</div>

            {/* Checkmark circle */}
            <div className="relative mx-auto mb-6 w-24 h-24">
              <div
                className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                style={{ animation: "glowPulse 2s ease-in-out infinite" }}
              >
                <svg
                  className="w-12 h-12 text-white"
                  fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth={2.5}
                  style={{ animation: "checkPop 0.5s cubic-bezier(0.175,0.885,0.32,1.275) 0.3s both" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {/* Ripple ring */}
              <div className="absolute inset-0 rounded-full border-4 border-secondary"
                style={{ animation: "ringRipple 1.6s ease-out 0.2s infinite", opacity: 0 }} />
            </div>

            <h3 className="font-serif text-3xl text-primary mb-2 font-bold">
              Request Received!
            </h3>
            <p className="text-secondary font-semibold text-lg mb-2">
              Thank you, {submittedData.name.split(" ")[0]}! 💛
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-7">
              We've received your request for{" "}
              <span className="text-primary font-semibold">{submittedData.service}</span>.
              Our care team will reach out within{" "}
              <span className="text-primary font-semibold">24 hours</span> to confirm.
            </p>

            {/* Summary card */}
            <div className="bg-gradient-to-br from-blush/30 to-soft/10 rounded-2xl p-4 mb-7 text-left space-y-2 border border-soft/30">
              {submittedData.preferredDate && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 font-medium">Preferred Date</span>
                  <span className="text-primary font-semibold">{submittedData.preferredDate}</span>
                </div>
              )}
              {submittedData.preferredTime && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 font-medium">Preferred Time</span>
                  <span className="text-primary font-semibold">{submittedData.preferredTime}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-gray-400 font-medium">Location</span>
                <span className="text-primary font-semibold">{submittedData.cityZip}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400 font-medium">Care For</span>
                <span className="text-primary font-semibold">{submittedData.careFor}</span>
              </div>
            </div>

            <button
              onClick={() => { setShowPopup(false); setStatus("idle"); }}
              className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold text-base hover:opacity-90 transition-opacity mb-3"
            >
              Done ✓
            </button>
            <p className="text-xs text-gray-400">
              Confirmation sent to{" "}
              <span className="text-secondary font-medium">{submittedData.email}</span>
            </p>
          </div>

          <style>{`
            @keyframes popIn {
              from { opacity: 0; transform: scale(0.6) translateY(60px); }
              to   { opacity: 1; transform: scale(1) translateY(0); }
            }
            @keyframes ringRipple {
              0%   { transform: scale(1);   opacity: 0.5; }
              100% { transform: scale(2);   opacity: 0; }
            }
            @keyframes floatUp {
              0%, 100% { transform: translateY(0)    rotate(0deg);  opacity: 0.7; }
              50%       { transform: translateY(-14px) rotate(12deg); opacity: 1;   }
            }
            @keyframes checkPop {
              from { opacity: 0; transform: scale(0) rotate(-20deg); }
              to   { opacity: 1; transform: scale(1) rotate(0deg);   }
            }
            @keyframes glowPulse {
              0%, 100% { box-shadow: 0 0 0 0   rgba(142,30,162,0.35); }
              50%       { box-shadow: 0 0 0 18px rgba(142,30,162,0);    }
            }
          `}</style>
        </div>
      )}

      {/* ── Hero ── */}
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

      {/* ── Main Section ── */}
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
                        className="font-semibold text-gray-600 leading-relaxed hover:text-primary transition-colors break-words whitespace-pre-line"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-semibold text-gray-600 leading-relaxed whitespace-pre-line">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
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
                  <label className="font-semibold text-gray-500 tracking-wide mb-1 block">
                    Full Name <span className="text-secondary">*</span>
                  </label>
                  <input name="name" placeholder="e.g. John Smith" required
                    value={form.name} onChange={onChange} className={inputCls} />
                </div>
                <div>
                  <label className="font-semibold text-gray-500 tracking-wide mb-1 block">
                    Phone Number <span className="text-secondary">*</span>
                  </label>
                  <input name="phone" placeholder="e.g. (224) 000-0000" type="tel" required
                    value={form.phone} onChange={onChange} className={inputCls} />
                </div>
              </div>

              {/* Row 2 — Email & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="font-semibold text-gray-500 tracking-wide mb-1 block">
                    Email Address <span className="text-secondary">*</span>
                  </label>
                  <input name="email" placeholder="you@example.com" type="email" required
                    value={form.email} onChange={onChange} className={inputCls} />
                </div>
                <div>
                  <label className="font-semibold text-gray-500 tracking-wide mb-1 block">
                    Subject <span className="text-secondary">*</span>
                  </label>
                  <input name="subject" placeholder="e.g. Inquiry about nursing care" required
                    value={form.subject} onChange={onChange} className={inputCls} />
                </div>
              </div>

              {/* Row 3 — Care For & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="font-semibold text-gray-500 tracking-wide mb-1 block">
                    Care is for <span className="text-secondary">*</span>
                  </label>
                  <select name="careFor" required value={form.careFor}
                    onChange={onChange} className={selectCls(form.careFor)}>
                    <option value="">Select one...</option>
                    <option>Myself</option>
                    <option>A Loved One</option>
                    <option>A Patient / Client</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-gray-500 tracking-wide mb-1 block">
                    Service Interested In <span className="text-secondary">*</span>
                  </label>
                  <select name="service" required value={form.service}
                    onChange={onChange} className={selectCls(form.service)}>
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
                  <label className="font-semibold text-gray-500 tracking-wide mb-1 block">
                    Preferred Date
                  </label>
                  <input name="preferredDate" type="date" value={form.preferredDate}
                    onChange={onChange} min={new Date().toISOString().split("T")[0]}
                    className={inputCls} />
                </div>
                <div>
                  <label className="font-semibold text-gray-500 tracking-wide mb-1 block">
                    Preferred Time
                  </label>
                  <select name="preferredTime" value={form.preferredTime}
                    onChange={onChange} className={selectCls(form.preferredTime)}>
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
                <input name="cityZip" placeholder="e.g. Algonquin, IL 60102" required
                  value={form.cityZip} onChange={onChange} className={inputCls} />
              </div>

              {/* Row 6 — Message */}
              <div className="mb-6">
                <label className="font-semibold text-gray-500 tracking-wide mb-1 block">
                  Anything else? Tell us about the care you need
                </label>
                <textarea name="message" rows={5} value={form.message} onChange={onChange}
                  placeholder="Share any details about the care needed, medical conditions, schedule preferences, or questions you have..."
                  className={`${inputCls} resize-y`} />
              </div>

              {status === "error" && (
                <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  Something went wrong. Please try again or call us at +1 (224) 454-4186.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className={`btn-primary w-full py-4 text-base ${
                  status === "sending" ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {status === "sending" ? "Sending..." : "Submit →"}
              </button>
              <p className="text-gray-400 text-sm text-center mt-4">
                We respond within 24 hours, Monday through Friday. For urgent
                care needs, please call us directly.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}