import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layers, Hexagon, FlaskConical, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Tech = {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
  short: string;
  description: string;
  features: string[];
};

const TECHNOLOGIES: Tech[] = [
  {
    id: "polymeric",
    name: "Polymeric Biomaterials",
    icon: Layers,
    color: "#22d3c8",
    short: "Flexible, biocompatible polymer matrices",
    description:
      "We design synthetic and natural polymer matrices — hydrogels, cryogels, and electrospun fibers — that replicate the extracellular matrix. These materials serve as structural scaffolds, drug carriers, and cell-supportive environments across tissue types.",
    features: ["Hydrogels & Cryogels", "Electrospun Nanofibers", "Thermoresponsive Polymers", "Photocrosslinkable Systems"],
  },
  {
    id: "ceramic",
    name: "Ceramic Biomaterials",
    icon: Hexagon,
    color: "#f59e0b",
    short: "Inorganic, bone-mimicking scaffolds",
    description:
      "Our ceramic platforms leverage nanohydroxyapatite and bioactive glass to create scaffolds that closely mimic native bone mineral. These materials integrate seamlessly with host tissue, promoting osteogenesis and long-term structural support.",
    features: ["Nanohydroxyapatite (nHA)", "Biphasic Calcium Phosphate", "Bioactive Glass Composites", "Porous 3D Architectures"],
  },
  {
    id: "delivery",
    name: "Drug Delivery Systems",
    icon: FlaskConical,
    color: "#a855f7",
    short: "Smart, site-specific therapeutic release",
    description:
      "Our programmable delivery systems provide spatiotemporal control of drug release at target tissues. From thermoresponsive gels to oxygen-generating matrices, we engineer precise pharmacokinetics at the material level.",
    features: ["Thermoresponsive Release", "Oxygen-Generating Matrices", "pH-Responsive Carriers", "Sustained-Release Depots"],
  },
  {
    id: "scaffolds",
    name: "Regenerative Scaffolds",
    icon: Network,
    color: "#34d399",
    short: "3D frameworks for tissue restoration",
    description:
      "Combining polymeric and ceramic approaches, our regenerative scaffolds provide the three-dimensional framework cells need to proliferate and differentiate. We engineer porosity, mechanical properties, and biochemical cues matched to each target tissue.",
    features: ["Interconnected Pore Networks", "Tunable Mechanical Properties", "Bioactive Surface Chemistry", "Vascularization Support"],
  },
];

const FLOW_STEPS = [
  { label: "Tissue Damage", desc: "Injury, disease or surgical defect", color: "#f43f5e" },
  { label: "Biomaterial Applied", desc: "Regenmedica scaffold deployed", color: "#22d3c8" },
  { label: "Cellular Response", desc: "Cells migrate, proliferate, differentiate", color: "#a855f7" },
  { label: "Regeneration", desc: "Native tissue fully restored", color: "#34d399" },
];

function MoleculeVisual({ color }: { color: string }) {
  const nodes = [
    { cx: 160, cy: 100 },
    { cx: 80, cy: 50 },
    { cx: 240, cy: 50 },
    { cx: 70, cy: 155 },
    { cx: 250, cy: 155 },
    { cx: 160, cy: 190 },
  ];
  const edges = [[0,1],[0,2],[0,3],[0,4],[0,5],[1,2],[3,5],[2,4]];

  return (
    <svg viewBox="0 0 320 240" className="w-full h-52" style={{ overflow: "visible" }}>
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke={color}
          strokeWidth="1"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: i * 0.08 }}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <motion.circle
            cx={n.cx} cy={n.cy}
            r={i === 0 ? 22 : 14}
            fill={color}
            fillOpacity="0.08"
            animate={{ r: [i === 0 ? 22 : 14, i === 0 ? 28 : 18, i === 0 ? 22 : 14] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
          />
          <motion.circle
            cx={n.cx} cy={n.cy}
            r={i === 0 ? 12 : 7}
            fill={i === 0 ? color : "transparent"}
            stroke={color}
            strokeWidth={i === 0 ? 0 : 1.5}
            strokeOpacity={0.7}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
          />
          {i === 0 && (
            <motion.circle cx={n.cx} cy={n.cy} r={6} fill="#fff" fillOpacity="0.5" />
          )}
        </g>
      ))}
    </svg>
  );
}

export default function TechnologySection() {
  const [active, setActive] = useState(0);
  const tech = TECHNOLOGIES[active];

  return (
    <section
      id="technology"
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--regen-section-c)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
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
              Technology Platforms
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
            The Science{" "}
            <span style={{ background: "linear-gradient(135deg, #22d3c8, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Behind the Healing
            </span>
          </motion.h2>

          <motion.p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--regen-text-body)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Four distinct technology pillars powering every Regenmedica innovation.
          </motion.p>
        </div>

        {/* Main interactive panel */}
        <motion.div
          className="grid lg:grid-cols-5 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {/* Tab list */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {TECHNOLOGIES.map((t, i) => {
              const Icon = t.icon;
              const isActive = active === i;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className="text-left rounded-2xl p-5 transition-all duration-300"
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg, ${t.color}15, ${t.color}06)`
                      : "var(--regen-card-bg)",
                    border: isActive
                      ? `1px solid ${t.color}40`
                      : "1px solid var(--regen-card-border)",
                    boxShadow: isActive ? `0 0 24px ${t.color}12` : "var(--regen-card-shadow)",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        background: isActive ? `${t.color}22` : "var(--regen-tag-bg)",
                        border: `1px solid ${isActive ? t.color + "45" : "var(--regen-tag-border)"}`,
                      }}
                    >
                      <Icon size={18} style={{ color: isActive ? t.color : "var(--regen-text-muted)" }} />
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: isActive ? "var(--regen-text-h)" : "var(--regen-text-muted)" }}
                      >
                        {t.name}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: isActive ? t.color : "var(--regen-text-subtle)" }}
                      >
                        {t.short}
                      </p>
                    </div>
                    {isActive && (
                      <div className="ml-auto w-1 h-6 rounded-full" style={{ background: t.color }} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active tech content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={tech.id}
                className="rounded-2xl p-8 h-full"
                style={{
                  background: "var(--regen-panel-bg)",
                  border: `1px solid ${tech.color}22`,
                  boxShadow: "var(--regen-card-shadow)",
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div>
                    <span
                      className="text-xs font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full mb-4 inline-block"
                      style={{ color: tech.color, background: `${tech.color}15`, border: `1px solid ${tech.color}25` }}
                    >
                      {tech.name}
                    </span>
                    <p
                      className="text-sm leading-relaxed mb-6"
                      style={{ color: "var(--regen-text-body)" }}
                    >
                      {tech.description}
                    </p>
                    <div className="space-y-2.5">
                      {tech.features.map((f, i) => (
                        <motion.div
                          key={f}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: tech.color }} />
                          <span className="text-sm" style={{ color: "var(--regen-text-h)" }}>{f}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <MoleculeVisual color={tech.color} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Flow diagram */}
        <div>
          <motion.p
            className="text-center text-xs font-semibold tracking-[0.25em] uppercase mb-8"
            style={{ color: "var(--regen-text-subtle)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Regeneration Journey
          </motion.p>

          <div className="grid sm:grid-cols-4 gap-4">
            {FLOW_STEPS.map((step, i) => (
              <motion.div
                key={step.label}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
              >
                {i < FLOW_STEPS.length - 1 && (
                  <div
                    className="hidden sm:block absolute top-7 left-[60%] w-full h-px"
                    style={{ background: `linear-gradient(90deg, ${step.color}50, ${FLOW_STEPS[i + 1].color}30)` }}
                  />
                )}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 relative z-10 font-bold text-lg"
                  style={{
                    background: `${step.color}12`,
                    border: `1px solid ${step.color}40`,
                    color: step.color,
                    boxShadow: `0 0 20px ${step.color}12`,
                  }}
                >
                  {i + 1}
                </div>
                <p className="text-sm font-semibold mb-1" style={{ color: "var(--regen-text-h)" }}>
                  {step.label}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--regen-text-muted)" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
