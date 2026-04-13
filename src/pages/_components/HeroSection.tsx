import { motion } from "motion/react";
import { useTheme } from "next-themes";
import ParticleNetwork from "./ParticleNetwork.tsx";

const STATS = [
  { value: "8", label: "Innovation programs" },
  { value: "2022", label: "Founded" },
  { value: "Polymeric + Ceramic", label: "Biomaterial focus" },
  { value: "Translational", label: "Therapy approach" },
];

const FOCUS_AREAS = [
  "Trauma care and hemostasis",
  "Bone and infective defects",
  "Nerve and cardiac regeneration",
  "GI disease and liver repair",
];

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--regen-hero-bg)" }}
    >
      <ParticleNetwork isDark={isDark} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-4xl">
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="h-px w-10"
              style={{ background: "linear-gradient(90deg, transparent, #22d3c8)" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ color: isDark ? "#22d3c8" : "#0891b2" }}
            >
              Regenmedica Pvt. Ltd. · Tissue Engineering Startup · Est. 2022
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.04] tracking-tight mb-7"
            style={{ color: "var(--regen-text-h)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25 }}
          >
            Polymeric and ceramic
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #22d3c8 0%, #34d399 60%, #6ee7b7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              regenerative therapies
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-3xl mb-12 leading-relaxed font-light"
            style={{ color: "var(--regen-text-body)" }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.45 }}
          >
            Regenmedica is a tissue engineering startup founded in 2022 to develop
            polymeric and ceramic biomaterials as regenerative therapies for tissue
            damage with a focus on affordable, easy-to-operate, and indigenous products.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <a href="#innovations">
              <button
                className="px-8 py-4 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #0891b2 0%, #22d3c8 100%)",
                  boxShadow: isDark
                    ? "0 0 35px rgba(34,211,200,0.35)"
                    : "0 0 30px rgba(8,145,178,0.3)",
                  color: "#fff",
                }}
              >
                Explore Innovations
              </button>
            </a>
            <a href="#collaborate">
              <button
                className="px-8 py-4 rounded-full font-semibold text-sm tracking-wide border transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: isDark ? "rgba(34,211,200,0.3)" : "rgba(8,145,178,0.35)",
                  color: isDark ? "rgba(255,255,255,0.85)" : "#0c1a3a",
                  background: isDark ? "transparent" : "rgba(255,255,255,0.55)",
                }}
              >
                Partner With Us
              </button>
            </a>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
          >
            {FOCUS_AREAS.map((item) => (
              <div
                key={item}
                className="rounded-2xl px-4 py-4 text-sm"
                style={{
                  background: "var(--regen-panel-strong)",
                  border: "1px solid var(--regen-panel-border)",
                  boxShadow: "var(--regen-card-shadow)",
                  color: "var(--regen-text-h)",
                }}
              >
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-8 border-t"
            style={{ borderColor: "var(--regen-divider)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
              >
                <div
                  className="text-2xl md:text-3xl font-bold mb-1"
                  style={{
                    background: "var(--regen-hero-stat-gradient)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest" style={{ color: "var(--regen-text-muted)" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      >
        <span className="text-[10px] tracking-widest uppercase" style={{ color: "var(--regen-text-subtle)" }}>
          Scroll
        </span>
        <div
          className="w-5 h-8 border rounded-full flex items-start justify-center p-1"
          style={{ borderColor: "var(--regen-hero-scroll-border)" }}
        >
          <motion.div
            className="w-1 h-2 rounded-full"
            style={{ background: "var(--regen-hero-scroll-dot)" }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
