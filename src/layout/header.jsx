import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FiChevronRight, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT ME" },
  { to: "/projects", label: "PROJECTS" },
  { to: "/cv", label: "CV" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-white/10 bg-[#111111]/70 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-8 py-6"
        aria-label="Main navigation"
      >
        <Link to="/" className="text-xl font-bold tracking-tight">
          Sabin Thapa
        </Link>

        <div className="hidden items-center gap-6 text-sm font-semibold tracking-wider uppercase md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <FiX className="h-5 w-5" />
          ) : (
            <FiMenu className="h-5 w-5" />
          )}
        </button>
      </nav>

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`fixed left-0 right-0 top-22 z-50 mx-4 origin-top rounded-2xl border border-white/10 bg-[#111111]/95 p-3 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-4 scale-95 opacity-0"
        }`}
      >
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold tracking-wider uppercase transition-colors hover:bg-white/10"
            >
              <span>{link.label}</span>
              <FiChevronRight className="h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-1 group-hover:text-white" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
