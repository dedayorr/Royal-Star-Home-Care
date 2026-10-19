import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import herobg from "../assets/homecare.png";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Care Available" },
  { value: "100%", label: "Satisfaction Goal" },
];

const serviceAreas = [
  "Huntley",
  "Barrington",
  "Algonquin",
  "Elgin",
  "Schaumburg",
  "Saint Charles",
  "Bartlett",
  "McHenry",
  "Lake county",
  "Kane",
];

const services = [
  {
    icon: "👶",
    title: "Pediatric Nursing",
    desc: "Professional nursing care for children, providing compassionate support and monitoring to meet their healthcare needs at home.",
  },
  {
    icon: "🩺",
    title: "Skilled Nursing",
    desc: "Specialized nursing care at home, including wound care, medication management, and health monitoring.",
  },
  {
    icon: "💛",
    title: "Companion Services",
    desc: "Friendly companionship and personalized support to promote emotional wellbeing, social engagement, and a better quality of life.",
  },
  {
    icon: "🤝",
    title: "Respite Care",
    desc: "Temporary care and support for loved ones, giving family caregivers time to rest while ensuring their loved ones receive attentive care.",
  },
  {
    icon: "🚗",
    title: "Transportation to Doctor's Appointment",
    desc: "Reliable transportation assistance to help clients attend medical appointments safely and on time.",
  },
];

const whyUs = [
  {
    title: "Dignity First",
    desc: "Every care plan is built around respect for the individual — their preferences, culture, and lifestyle.",
  },
  {
    title: "Licensed & Trusted",
    desc: "Our caregivers are fully licensed, background-checked, and trained to the highest standards.",
  },
  {
    title: "Personalized Plans",
    desc: "No two clients are alike. We design care around your unique needs, not a generic template.",
  },
  {
    title: "Family Partnership",
    desc: "We work closely with families to ensure everyone is informed, involved, and at peace.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO — clean overlay, no gradient tint */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden"
        style={{
          backgroundImage: `url(${herobg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Subtle dark overlay only */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Decorative rings */}
        <div className="absolute w-[600px] h-[600px] rounded-full border border-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-blush/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-3xl text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-primary/30 border border-blush/40 rounded-full px-5 py-1.5 mb-7"
          >
            <span className="text-l text-blush tracking-widest ">
              Trust Home Care
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif font-bold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 7vw, 76px)" }}
          >
            Care That Honors
            <br />
            <span className="text-blush">Your Dignity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/80 leading-relaxed max-w-xl mx-auto mb-10"
            style={{ fontSize: "clamp(20px, 2.5vw, 18px)" }}
          >
            Royal Star Home Care delivers professional, compassionate care built
            around the comfort and individual needs of every client — in the
            place they love most: home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <NavLink to="/contact">
              <button className="btn-primary">Book an Appointment</button>
            </NavLink>
            <NavLink to="/services">
              <button className="btn-outline-white">View Our Services</button>
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-secondary py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <AnimatedSection key={s.value} delay={i * 0.1} direction="up">
              <div
                className="font-serif font-bold text-white"
                style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
              >
                {s.value}
              </div>
              <div className="text-sm text-white/75 mt-1">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="section-pad bg-white">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <AnimatedSection direction="left">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-10 text-blush">
              <div className="text-5xl mb-5">🌟</div>
              <h2 className="font-serif text-2xl font-bold md:text-3xl mb-4">
                Professional Care, Personal Touch
              </h2>
              <p className="text-[20px] leading-relaxed text-blush/80 mb-8">
                We believe that every person deserves to age or recover with
                grace, independence, and love — surrounded by familiar spaces
                and trusted faces.
              </p>
              <div className="border-t border-white/20 pt-6">
                <div className="text-xl text-white tracking-widest uppercase mb-2">
                  📞 Call Us Anytime
                </div>
                <a
                  href="tel:+12244544186"
                  className="font-serif text-2xl text-white font-bold hover:text-white transition-colors"
                >
                  +1 (224) 454-4186
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <p className="label">Who We Are</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-5 leading-tight">
              More Than Home Care — We're Family
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4 text-[20px]">
              Royal Star Home Care is a professional home care agency committed
              to delivering trusted, personalized care that puts clients first.
              We combine clinical excellence with genuine human compassion.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8 text-[20px]">
              Whether you need skilled nursing, daily personal care, or simply a
              caring companion, our team is here — at the right time, in the
              right way, every time.
            </p>
            <NavLink to="/about">
              <button className="btn-primary">Learn About Us →</button>
            </NavLink>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-pad bg-blush/10">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <p className="label">What We Offer</p>
            <h2 className="font-serif text-3xl font-bold md:text-4xl text-primary">
              Care Services Designed Around You
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1} direction="up">
                <div className="card h-full">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                    {s.title}
                  </h3>
                  <p className="text-xl text-gray-500 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <NavLink to="/services">
              <button className="btn-primary">See All Services →</button>
            </NavLink>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <AnimatedSection className="text-center mb-12">
            <p className="label">Where We Serve</p>
            <h2 className="font-serif text-3xl font-bold md:text-4xl text-primary mb-4">
              Proudly Serving Communities Near You
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Royal Star Home Care provides compassionate in-home care to
              families across these areas — so quality care is close to home.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
            {serviceAreas.map((area, i) => (
              <AnimatedSection key={area} delay={i * 0.08} direction="up">
                <div className="flex items-center justify-center text-center rounded-full border border-primary/10 bg-blush/20 px-6 py-5 text-lg font-semibold text-primary md:text-xl">
                  {area}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-pad bg-primary">
        <div className="container-max">
          <AnimatedSection className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-soft mb-3">
              Why Royal Star
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              Care You Can Count On
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((w, i) => (
              <AnimatedSection key={w.title} delay={i * 0.1} direction="up">
                <div className="border-l-4 border-soft pl-5 ">
                  <h3 className="font-serif text-xl font-semibold text-blush mb-3">
                    {w.title}
                  </h3>
                  <p className="text-l text-blush/65 leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-blush text-center">
        <AnimatedSection>
          <h2
            className="font-serif text-primary mb-4"
            style={{ fontSize: "clamp(24px, 4vw, 48px)" }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 max-w-md mx-auto mb-10 leading-relaxed">
            Reach out today and let us build a care plan tailored to your loved
            one's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/contact">
              <button className="btn-primary">Contact Us Today</button>
            </NavLink>
            <a href="tel:+12244544186">
              <button className="btn-outline font-bold">📞 Call Now</button>
            </a>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
