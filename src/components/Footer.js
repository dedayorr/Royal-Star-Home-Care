import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/royal_logo2.png";

export default function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4 ">
              <img
                src={logo}
                alt="Royal Star Home Care Services Inc."
                className="h-24 w-auto object-contain"
              />
            </div>
            <p className="text-2xl text-white leading-relaxed max-w-xs">
              Professional home care built around the dignity, comfort, and
              individual needs of every client we serve.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif mb-4 text-white font-bold text-2xl">Quick Links</h4>
            {[
              ["/", "Home"],
              ["/about", "About Us"],
              ["/services", "Services"],
              ["/referrals", "Referrals"],
              ["/blog", "Blog"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className="block text-xl text-white mb-2 hover:text-blush transition-colors"
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif mb-4 text-white font-bold text-2xl">
              Our Services
            </h4>
            {[
              "Pediatric Nursing",
              "Skilled Nursing",
              "Companion Services",
              "Respite Care",
              "Transportation to Doctor's Appointment"
          
            ].map((s) => (
              <div key={s} className="text-xl text-white mb-2">
                {s}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif mb-4 text-white font-bold text-2xl">Contact Us</h4>
            <div className="text-xl text-white space-y-2 leading-relaxed">
              <div>
                📍 1730 Powder Horn Drive
                <br />
                Algonquin, IL
              </div>
              <div>
                <a
                  href="tel:+12244544186"
                  className="hover:text-blush transition-colors"
                >
                  📞 +1 (224) 454-4186
                </a>
              </div>
              <div className="break-words font-bold">
                <a
                  href="mailto:royalstarhomecareservicesinc@gmail.com"
                  className="hover:text-blush transition-colors"
                >
                  ✉ royalstarhomecareservices@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-blush/40">
            © {new Date().getFullYear()} Royal Star Home Care Services Inc. All
            rights reserved.
          </p>
          <p className="text-xs text-blush/40">
            Caring with Dignity · Comfort · Compassion
          </p>
        </div>
      </div>
    </footer>
  );
}
