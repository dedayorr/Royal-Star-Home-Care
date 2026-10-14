import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

const posts = [
  {
    id: 1,
    date: "October 2, 2026",
    category: "Caregiver Tips",
    title: "How to Talk to a Loved One About Home Care",
    excerpt:
      "Starting the conversation about home care can feel difficult. Here are five compassionate approaches that open the door without creating resistance.",
    readTime: "5 min read",
  },
  {
    id: 2,
    date: "September 18, 2026",
    category: "Health & Wellness",
    title: "Fall Prevention at Home: A Room-by-Room Guide",
    excerpt:
      "Falls are the leading cause of injury for older adults. Learn how to make each room of the home safer with practical, affordable modifications.",
    readTime: "7 min read",
  },
  {
    id: 3,
    date: "September 5, 2026",
    category: "Nursing Insights",
    title: "What Skilled Nursing at Home Actually Looks Like",
    excerpt:
      "Many families are surprised by how comprehensive in-home skilled nursing can be. We break down a typical care day and what to expect.",
    readTime: "6 min read",
  },
  {
    id: 4,
    date: "August 22, 2026",
    category: "Family Resources",
    title: "Supporting a Family Caregiver: Avoiding Burnout",
    excerpt:
      "Family caregivers give so much of themselves. This guide explores how to recognize burnout early and find the support you deserve.",
    readTime: "8 min read",
  },
  {
    id: 5,
    date: "August 8, 2026",
    category: "Health & Wellness",
    title: "Understanding Medication Management for Seniors",
    excerpt:
      "Polypharmacy — taking multiple medications — is common among older adults. Here is how professional oversight reduces risks and improves outcomes.",
    readTime: "5 min read",
  },
  {
    id: 6,
    date: "July 25, 2026",
    category: "Caregiver Tips",
    title: "The Role of Companion Care in Emotional Wellbeing",
    excerpt:
      "Loneliness affects health as seriously as smoking. Discover how regular companionship improves mood, cognition, and quality of life for seniors.",
    readTime: "4 min read",
  },
];

const catColor = {
  "Caregiver Tips": "bg-secondary",
  "Health & Wellness": "bg-primary",
  "Nursing Insights": "bg-soft text-primary",
  "Family Resources": "bg-blush text-primary",
};

export default function Blog() {
  const [featured, ...rest] = posts;
  return (
    <main className="pt-[72px]">
      <section className="bg-gradient-to-br from-primary to-secondary py-20 px-6 text-center">
        <AnimatedSection>
          <p className="text-xs font-semibold tracking-widest uppercase text-soft mb-3">
            Resources & Insights
          </p>
          <h1
            className="font-serif text-white mb-5 font-bold"
            style={{ fontSize: "clamp(32px,6vw,64px)" }}
          >
            The Royal Star Blog
          </h1>
          <p className="text-white max-w-xl mx-auto leading-relaxed text-xl">
            Practical guidance, care insights, and family resources — from the
            people who do this every day.
          </p>
        </AnimatedSection>
      </section>

      {/* Featured */}
      <section className="section-pad bg-blush/10">
        <div className="container-max">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-14">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <div className="flex gap-3 mb-5 flex-wrap">
                    <span className="bg-soft text-primary text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="bg-white/15 text-blush text-xs px-3 py-1 rounded-full">
                      {featured.category}
                    </span>
                  </div>
                  <h2
                    className="font-serif text-white mb-4 leading-tight font-bold"
                    style={{ fontSize: "clamp(20px,3.5vw,36px)" }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-blush/80 leading-relaxed mb-6 text-xl">
                    {featured.excerpt}
                  </p>
                  <div className="flex gap-5 text-blush/50 text-sm flex-wrap">
                    <span>{featured.date}</span>
                    <span>{featured.readTime}</span>
                  </div>
                </div>
                <div className="text-7xl hidden md:block flex-shrink-0">📖</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {rest.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl overflow-hidden border border-soft/20 h-full flex flex-col shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`px-7 pt-7 pb-5 border-b border-soft/10 bg-blush/10`}
                  >
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full text-white ${
                        catColor[post.category] || "bg-primary"
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-serif text-xl text-primary mb-3 leading-snug ">
                      {post.title}
                    </h3>
                    <p className="text-lg text-gray-500 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between mt-5 pt-4 border-t border-soft/15 text-xs text-gray-400 flex-wrap gap-2">
                      <span>{post.date}</span>
                      <span className="text-secondary font-semibold">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
