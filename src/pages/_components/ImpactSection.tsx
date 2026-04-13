import { motion } from "motion/react";
import { Factory, HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react";

const WHO_WE_SERVE = [
  "Trauma care and emergency bleeding control",
  "Orthopedics and bone defect management",
  "Inflammatory bowel disease and GI therapy",
  "Chronic wounds, diabetic ulcers, and burns",
  "Chronic liver disease repair concepts",
  "Nerve injury regeneration",
  "Cardiac tissue regeneration",
];

const WHY_IT_MATTERS = [
  {
    icon: Stethoscope,
    title: "Clinical usability",
    color: "#22d3c8",
    points: [
      "Designed around practical use in real treatment settings",
      "Focused on serious tissue damage and regenerative need",
      "Aims to support simpler handling and faster adoption",
    ],
  },
  {
    icon: Factory,
    title: "Industrial relevance",
    color: "#f59e0b",
    points: [
      "Intended for scalable product development",
      "Supports local manufacturing and supply resilience",
      "Built around biomaterial platforms with translational intent",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Societal impact",
    color: "#34d399",
    points: [
      "Affordable product ambition is central to the company mission",
      "Indigenous development can reduce dependency on imports",
      "Relevant for Indian and global healthcare systems",
    ],
  },
];

const PROOF_POINTS = [
  { value: "8", label: "Innovation programs" },
  { value: "2022", label: "Year established" },
  { value: "Polymeric + Ceramic", label: "Core biomaterial platforms" },
  { value: "7", label: "Clinical focus areas represented" },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--regen-section-d)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-3 mb-5"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, #22d3c8)" }} />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "#22d3c8" }}>
              Why Regenmedica Matters
            </span>
            <div className="h-px w-10" style={{ background: "linear-gradient(270deg, transparent, #22d3c8)" }} />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
            style={{ color: "var(--regen-text-h)" }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Affordable, easy-to-operate,
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #22d3c8, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              indigenous regenerative products
            </span>
          </motion.h2>

          <motion.p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: "var(--regen-text-body)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Regenmedica’s stated vision is to create products that can benefit industrial,
            clinical, and societal stakeholders while improving accessibility for Indian and
            global healthcare systems.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 py-10 rounded-3xl"
          style={{
            background: "var(--regen-stat-bg)",
            border: "1px solid var(--regen-stat-border)",
          }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {PROOF_POINTS.map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <div
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{
                  background: "var(--regen-hero-stat-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-sm leading-snug" style={{ color: "var(--regen-text-muted)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 mb-16">
          <div
            className="rounded-[28px] p-8"
            style={{
              background: "var(--regen-panel-strong)",
              border: "1px solid var(--regen-panel-border)",
              boxShadow: "var(--regen-card-shadow)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <ShieldCheck size={20} style={{ color: "#22d3c8" }} />
              <h3 className="text-2xl font-semibold" style={{ color: "var(--regen-text-h)" }}>
                Who we serve
              </h3>
            </div>
            <div className="space-y-3">
              {WHO_WE_SERVE.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ background: "#22d3c8" }} />
                  <p className="text-sm leading-relaxed" style={{ color: "var(--regen-text-body)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {WHY_IT_MATTERS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  className="rounded-2xl p-7"
                  style={{
                    background: "var(--regen-card-bg)",
                    border: `1px solid ${pillar.color}18`,
                    boxShadow: "var(--regen-card-shadow)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.14 }}
                  whileHover={{ borderColor: `${pillar.color}40`, y: -4, transition: { duration: 0.25 } }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${pillar.color}15`, border: `1px solid ${pillar.color}30` }}
                  >
                    <Icon size={22} style={{ color: pillar.color }} />
                  </div>
                  <h3 className="text-xl font-bold mb-5" style={{ color: "var(--regen-text-h)" }}>
                    {pillar.title}
                  </h3>
                  <div className="space-y-3">
                    {pillar.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: pillar.color }} />
                        <span className="text-sm leading-relaxed" style={{ color: "var(--regen-text-muted)" }}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
