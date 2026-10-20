import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";

const categories = [
  {
    id: "pediatric",
    label: "Pediatric Nursing",
    icon: "👶",
    headline: "Specialized Care for Children",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop",
    desc: "Our pediatric nurses provide expert, compassionate care for infants, children, and adolescents with medical needs — in the safety and comfort of home.",
    features: [
      "Medication administration",
      "Developmental monitoring",
      "Family support",
    ],
  },
  {
    id: "skilled",
    label: "Skilled Nursing",
    icon: "🩺",
    headline: "Advanced Clinical Nursing at Home",
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&auto=format&fit=crop",
    desc: "Our licensed skilled nurses deliver high-quality medical care at home — from complex wound management to chronic disease monitoring and IV therapy.",
    features: [
      "Catheter & ostomy care",
      "Medication management",
      "Vital signs monitoring",
    ],
  },
  {
    id: "companion",
    label: "Companion Services",
    icon: "💛",
    headline: "Meaningful Companionship & Support",
    image:
      "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&auto=format&fit=crop",
    desc: "Our compassionate companions provide consistent social engagement, emotional support, and friendly presence — reducing isolation and improving quality of life.",
    features: [
      "Friendly conversation & engagement",
      "Meal preparation & company",
      "Family peace of mind",
    ],
  },
  {
    id: "transport",
    label: "Transportation",
    icon: "🚗",
    headline: "Getting to Appointments Safely",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop",
    desc: "Missing doctor's appointments shouldn't happen because of transportation. We provide safe, reliable rides to medical visits, ensuring clients never miss critical care.",
    features: [
      "Doctor's appointment transport",
      "Specialist visits",
      "Pharmacy runs",
      "Safe door-to-door assistance",
      "Punctual & reliable scheduling",
    ],
  },
  {
    id: "postnatal",
    label: "Postnatal Care",
    icon: "🤱",
    headline: "Support for New Mothers & Newborns",
    image:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&auto=format&fit=crop",
    desc: "Our postnatal care team provides dedicated support to new mothers and newborns during the critical postpartum period — helping families transition smoothly and confidently.",
    features: [
      "Newborn care & monitoring",
      "Breastfeeding support & guidance",
      "Postpartum recovery assistance",
      "Maternal health monitoring",
      "Infant bathing & hygiene",
      "Emotional support for new mothers",
    ],
  },
  {
    id: "staffing",
    label: "Staffing Nurse",
    icon: "🏥",
    headline: "Professional Nurse Staffing Solutions",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&auto=format&fit=crop",
    desc: "We provide qualified, experienced nurses for placement in healthcare facilities, private homes, and institutions — flexible staffing solutions tailored to your needs.",
    features: [
      "Temporary & permanent placements",
      "Skilled RN & LPN staffing",
      "Home & facility-based staffing",
      "Short notice availability",
      "Background-checked professionals",
      "Flexible shift scheduling",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState("pediatric");
  const current = categories.find((c) => c.id === active);

  return (
    <main className="pt-[72px]">
      <section className="bg-gradient-to-br from-primary to-secondary py-20 px-6 text-center">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest uppercase text-soft mb-3">
            What We Provide
          </p>
          <h1
            className="font-serif text-white mb-5 font-bold"
            style={{ fontSize: "clamp(35px,6vw,64px)" }}
          >
            Our Services
          </h1>
          <p
            className="text-white max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: "clamp(20px,2vw,17px)" }}
          >
            Comprehensive home care built around what each person truly needs —
            medically, personally, and emotionally.
          </p>
        </AnimatedSection>
      </section>

      {/* Tab Nav */}
      <div className="bg-white border-b border-soft/20 sticky top-[72px] z-40 px-6">
        <div
          className="max-w-6xl mx-auto flex overflow-x-auto gap-1 py-1"
          style={{ scrollbarWidth: "thin" }}
        >
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
                active === c.id
                  ? "border-secondary text-primary"
                  : "border-transparent text-gray-400 hover:text-primary"
              }`}
            >
              {c.icon} {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Detail */}
      <section className="section-pad bg-blush/10">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <AnimatedSection direction="left" key={active}>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl overflow-hidden">
              {/* Service image */}
              <img
                src={current.image}
                alt={current.headline}
                className="w-full object-cover"
                style={{ height: 220 }}
              />
              <div className="p-8 text-white">
                <div className="text-4xl mb-4">{current.icon}</div>
                <h2 className="font-serif text-2xl md:text-3xl mb-3">
                  {current.headline}
                </h2>
                <p className="text-blush/85 leading-relaxed text-xl">
                  {current.desc}
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" key={active + "-f"}>
            <h3 className="font-serif text-2xl text-primary mb-6">
              What's Included
            </h3>
            <div className="flex flex-col gap-3">
              {current.features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-soft/20"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                  <span className="text-gray-600 text-l">{f}</span>
                </div>
              ))}
            </div>
            <NavLink to="/contact" className="inline-block mt-8">
              <button className="btn-primary">
                Inquire About This Service →
              </button>
            </NavLink>
          </AnimatedSection>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold md:text-4xl text-primary">
              All Care Services at a Glance
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c, i) => (
              <AnimatedSection key={c.id} delay={i * 0.08} direction="up">
                <div
                  onClick={() => {
                    setActive(c.id);
                    window.scrollTo({ top: 200, behavior: "smooth" });
                  }}
                  className="group rounded-xl overflow-hidden cursor-pointer border border-soft/20 hover:shadow-xl transition-all duration-300"
                >
                  {/* Card image */}
                  <div className="overflow-hidden" style={{ height: 160 }}>
                    <img
                      src={c.image}
                      alt={c.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-blush/10 group-hover:bg-primary p-6 transition-colors duration-300">
                    <div className="text-2xl mb-2">{c.icon}</div>
                    <h3 className="font-serif text-xl text-primary group-hover:text-blush mb-1 transition-colors">
                      {c.label}
                    </h3>
                    <p className="text-l text-gray-500 group-hover:text-blush/70 leading-relaxed transition-colors">
                      {c.desc.slice(0, 75)}...
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-blush text-center">
        <AnimatedSection>
          <h2
            className="font-serif text-primary mb-4"
            style={{ fontSize: "clamp(22px,4vw,40px)" }}
          >
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
            Our care coordinators will assess your situation and recommend the
            right services — no pressure.
          </p>
          <NavLink to="/contact">
            <button className="btn-primary">Book an appointment</button>
          </NavLink>
        </AnimatedSection>
      </section>
    </main>
  );
}
