import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/royal_logo2.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/referrals", label: "Referrals" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg shadow-primary/20"
          : "bg-transparent"
      }`}
    >
      <div
        className="max-w-6xl mx-auto px-6 flex items-center justify-between h-18"
        style={{ height: 72 }}
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Royal Star Home Care Services Inc."
            className="h-14 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-whe text-sm font-medium transition-all duration-200 border-b-2 ${
                  isActive
                    ? "text-black border-blush bg-white/10 "
                    : " border-transparent hover:text-white hover:bg-white/10"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact">
            <button className="ml-3 px-5 py-2 bg-blush text-primary rounded-lg text-sm font-semibold transition-all duration-200 hover:bg-soft hover:text">
              Get Care
            </button>
          </NavLink>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-blush text-2xl p-2"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary border-t border-white/10 overflow-hidden "
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `block px-6 py-4 text-[20px] text-base border-b border-white/10 transition-colors  ${
                    isActive
                      ? "text-blush bg-white/10 "
                      : "text-blush/80 hover:text-blush hover:bg-white/10"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="p-4">
              <NavLink to="/contact">
                <button className="w-full py-3 bg-blush text-primary rounded-lg font-semibold">
                  Get Care
                </button>
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
