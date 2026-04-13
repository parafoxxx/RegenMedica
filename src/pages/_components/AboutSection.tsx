import { motion } from "motion/react";
import { FlaskConical, Globe, Microscope } from "lucide-react";

const PILLARS = [
  {
    icon: Microscope,
    title: "Tissue Engineering Expertise",
    desc: "A science-led team focused on regenerative biomaterials for clinically relevant tissue damage.",
    color: "#22d3c8",
  },
  {
    icon: FlaskConical,
    title: "Polymeric + Ceramic Platforms",
    desc: "Programs built across polymeric biomaterials, ceramic systems, and targeted regenerative delivery strategies.",
    color: "#34d399",
  },
  {
    icon: Globe,
    title: "Affordable Indigenous Products",
    desc: "Products designed to be practical, accessible, and suitable for Indian and global healthcare systems.",
    color: "#6ee7b7",
  },
];

const EVIDENCE_POINTS = [
  "Established in 2022 by experts in tissue engineering",
  "Focused on regenerative therapies for tissue damage",
  "Developing 8 innovation programs across multiple clinical areas",
  "Built around affordable, easy-to-operate, indigenous product development",
];

const TEAM_SIGNALS = [
  "Founding team rooted in tissue engineering and biomaterials research",
  "Programs spanning wound care, orthopedics, GI disease, liver, nerve, and cardiac repair",
  "Positioned for academic, clinical, and industrial collaboration",
];

function CellVisualization() {
  const orbits = [
    { r: 70, duration: 8, color: "#22d3c8", dotSize: 9 },
    { r: 110, duration: 13, color: "#34d399", dotSize: 7 },
    { r: 148, duration: 18, color: "#22d3c8", dotSize: 6 },
    { r: 185, duration: 24, color: "#6ee7b7", dotSize: 5 },
  ];

  return (
    <div
      className="relative w-full h-full flex items-center justify-center min-h-[420px] rounded-[30px] p-8"
      style={{
        background: "var(--regen-panel-strong)",
        border: "1px solid var(--regen-panel-border)",
        boxShadow: "var(--regen-card-shadow)",
      }}
    >
      {orbits.map((o, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{ width: o.r * 2, height: o.r * 2, border: `1px solid ${o.color}20` }}
        />
      ))}
      {orbits.map((o, i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute"
          style={{ width: o.r * 2, height: o.r * 2 }}
          animate={{ rotate: 360 }}
          transition={{ duration: o.duration, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: o.dotSize,
              height: o.dotSize,
              background: o.color,
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              boxShadow: `0 0 ${o.dotSize * 2}px ${o.color}`,
            }}
          />
        </motion.div>
      ))}
      <motion.div
        className="absolute rounded-full z-10"
        style={{
          width: 72,
          height: 72,
          background: "radial-gradient(circle at 35% 35%, #22d3c8, #0e7490)",
          boxShadow: "0 0 40px rgba(34,211,200,0.35)",
        }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {[
        { label: "Polymer", x: "78%", y: "18%" },
        { label: "Ceramic", x: "7%", y: "25%" },
        { label: "Scaffold", x: "72%", y: "74%" },
        { label: "Bio-nano", x: "10%", y: "72%" },
      ].map((tag) => (
        <div
          key={tag.label}
          className="absolute text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1.5 rounded-full"
          style={{
            left: tag.x,
            top: tag.y,
            color: "#22d3c8",
            background: "rgba(34,211,200,0.08)",
            border: "1px solid rgba(34,211,200,0.2)",
          }}
        >
          {tag.label}
        </div>
      ))}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--regen-section-a)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.04,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 40px, #22d3c8 40px, #22d3c8 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, #22d3c8 40px, #22d3c8 41px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="flex items-center gap-3 mb-5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, #22d3c8)" }} />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "#22d3c8" }}>
            About Regenmedica
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ color: "var(--regen-text-h)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.1 }}
            >
              Founded in 2022 to build
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, #22d3c8, #34d399)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                regenerative solutions from biomaterials science
              </span>
            </motion.h2>

            <motion.p
              className="text-lg leading-relaxed mb-6"
              style={{ color: "var(--regen-text-body)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Regenmedica was established by a team of experts in tissue engineering to develop
              polymeric and ceramic materials as regenerative therapies for tissue damage.
            </motion.p>

            <motion.p
              className="text-base leading-relaxed mb-10"
              style={{ color: "var(--regen-text-muted)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              The company’s stated goal is to create affordable, easy-to-operate, and indigenous
              products that can benefit industrial, clinical, and societal stakeholders.
            </motion.p>

            <div className="space-y-4">
              {EVIDENCE_POINTS.map((point, i) => (
                <motion.div
                  key={point}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full mt-2" style={{ background: "#22d3c8" }} />
                  <span className="text-sm leading-relaxed" style={{ color: "var(--regen-text-muted)" }}>
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <CellVisualization />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 mb-16">
          <div
            className="rounded-[28px] p-8"
            style={{
              background: "var(--regen-panel-strong)",
              border: "1px solid var(--regen-panel-border)",
              boxShadow: "var(--regen-card-shadow)",
            }}
          >
            <h3 className="text-2xl font-semibold mb-6" style={{ color: "var(--regen-text-h)" }}>
              Team and scientific credibility
            </h3>
            <div className="space-y-4">
              {TEAM_SIGNALS.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2" style={{ background: "#22d3c8" }} />
                  <p className="text-sm leading-relaxed" style={{ color: "var(--regen-text-body)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-[28px] p-8"
            style={{
              background: "var(--regen-panel-strong)",
              border: "1px solid var(--regen-panel-border)",
              boxShadow: "var(--regen-card-shadow)",
            }}
          >
            <div className="text-[11px] uppercase tracking-[0.22em] mb-3" style={{ color: "#22d3c8" }}>
              Note
            </div>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: "var(--regen-text-h)" }}>
              Add founder and advisory names here
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--regen-text-body)" }}>
              This section is ready for specific founder names, institutional affiliations,
              advisory board members, or scientific leadership once you want to publish them.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="rounded-2xl p-7"
                style={{
                  background: "var(--regen-card-bg)",
                  border: "1px solid var(--regen-card-border)",
                  boxShadow: "var(--regen-card-shadow)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${pillar.color}18`, border: `1px solid ${pillar.color}30` }}
                >
                  <Icon size={22} style={{ color: pillar.color }} />
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--regen-text-h)" }}>
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--regen-text-muted)" }}>
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
