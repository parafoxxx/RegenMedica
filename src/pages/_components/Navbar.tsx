import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Innovations", href: "#innovations" },
  { label: "Technology", href: "#technology" },
  { label: "Impact", href: "#impact" },
  { label: "Collaborate", href: "#collaborate" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-8" />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{
        background: "rgba(34,211,200,0.12)",
        border: "1px solid rgba(34,211,200,0.25)",
        color: "#22d3c8",
      }}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = !mounted || resolvedTheme === "dark";
  const linkColor = scrolled && !isDark ? "var(--regen-nav-link)" : "rgba(255,255,255,0.72)";
  const linkHoverColor = scrolled && !isDark ? "var(--regen-nav-link-hover)" : "#ffffff";

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          padding: scrolled ? "12px 0" : "24px 0",
          background: scrolled ? "var(--regen-nav-scrolled)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--regen-nav-border-scrolled)" : "none",
          boxShadow: scrolled && !isDark ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="flex items-center justify-between rounded-full px-4 md:px-5 py-3"
            style={{
              background: scrolled ? "transparent" : isDark ? "rgba(9,14,38,0.26)" : "rgba(255,255,255,0.28)",
              border: scrolled ? "none" : isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.42)",
              backdropFilter: "blur(16px)",
            }}
          >
            <a href="/" className="flex items-center gap-3 group">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg"
                style={{ background: "linear-gradient(135deg, #22d3c8 0%, #34d399 100%)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C9 2 7 5 7 8c0 2 1 3.5 2.5 4.5L8 20h8l-1.5-7.5C16 11.5 17 10 17 8c0-3-2-6-5-6z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 14c-1 .5-2 1.5-2 3M15 14c1 .5 2 1.5 2 3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="font-bold text-lg tracking-tight"
                  style={{ color: scrolled && !isDark ? "var(--regen-text-h)" : "#ffffff" }}
                >
                  Regen<span style={{ color: "#22d3c8" }}>medica</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase" style={{ color: linkColor }}>
                  Pvt. Ltd.
                </span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 relative group"
                  style={{ color: linkColor }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ background: "#22d3c8" }}
                  />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />

              <a href="#collaborate" className="hidden md:block">
                <button
                  className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #0ea5c8 0%, #22d3c8 100%)",
                    boxShadow: "0 0 20px rgba(34, 211, 200, 0.3)",
                  }}
                >
                  Partner With Us
                </button>
              </a>

              <button
                className="md:hidden p-1 transition-colors"
                style={{ color: scrolled && !isDark ? "var(--regen-text-h)" : "rgba(255,255,255,0.8)" }}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden flex flex-col pt-20"
            style={{
              background: isDark ? "rgba(10, 15, 35, 0.97)" : "rgba(240, 248, 255, 0.97)",
              backdropFilter: "blur(20px)",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col items-center gap-6 pt-12">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-xl font-medium transition-colors"
                  style={{ color: "var(--regen-text-body)" }}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#collaborate"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <button
                  className="mt-4 px-8 py-3 rounded-full font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #0ea5c8, #22d3c8)" }}
                >
                  Partner With Us
                </button>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
