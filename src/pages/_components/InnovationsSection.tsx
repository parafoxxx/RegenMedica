import { useState } from "react";
import { motion } from "motion/react";
import {
  Activity,
  Atom,
  Bone,
  Droplets,
  HeartPulse,
  Shield,
  Thermometer,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Product = {
  id: string;
  name: string;
  tagline: string;
  category: string;
  stage: string;
  description: string;
  details: string;
  color: string;
  icon: LucideIcon;
};

const PRODUCTS: Product[] = [
  {
    id: "cryo-haemoclot",
    name: "Cryo-HaemoClot",
    tagline: "Hemostatic dressing for instant and advanced blood clotting",
    category: "Wound Care",
    stage: "Concept",
    description: "Designed as a hemostatic dressing for rapid clot initiation in traumatic and acute bleeding scenarios.",
    details: "Positioned within Regenmedica's wound care portfolio as a polymeric regenerative material for fast hemostatic response.",
    color: "#f43f5e",
    icon: Droplets,
  },
  {
    id: "osteocarrier",
    name: "Osteocarrier",
    tagline: "nHA-based ceramic carrier for fractures and infective defects",
    category: "Orthopedics",
    stage: "Prototype",
    description: "Nanohydroxyapatite-based ceramic platform intended to carry antibiotics and osteogenic agents in bone fractures and infective defects.",
    details: "Presented as a ceramic regenerative therapy that combines structural support with therapeutic delivery potential.",
    color: "#f59e0b",
    icon: Bone,
  },
  {
    id: "tofamucoheal",
    name: "TofaMucoHeal",
    tagline: "Targeted thermoresponsive rectal therapy for IBD",
    category: "Gastroenterology",
    stage: "Concept",
    description: "Tofacitinib-based targeted thermoresponsive rectal therapy intended for inflammatory bowel disease management.",
    details: "A site-directed delivery concept within the GI portfolio, built around controlled local administration and biomaterial responsiveness.",
    color: "#a855f7",
    icon: Thermometer,
  },
  {
    id: "bionanospray",
    name: "BioNanoSpray",
    tagline: "Photocrosslinkable polymeric spray for chronic liver disease",
    category: "Hepatology",
    stage: "Concept",
    description: "Photocrosslinkable polymeric spray being developed as a regenerative therapy for chronic liver diseases.",
    details: "This program extends Regenmedica's polymeric platform into liver repair through an application-friendly spray format.",
    color: "#06b6d4",
    icon: Atom,
  },
  {
    id: "electrogel",
    name: "ElectroGel",
    tagline: "Electrically conducting aligned cryogel for nerve regeneration",
    category: "Neurology",
    stage: "Prototype",
    description: "Electrically conducting aligned cryogel platform designed to support regeneration in nerve injuries.",
    details: "Placed within the nerve repair pipeline as a biomaterial scaffold with electrical and structural guidance properties.",
    color: "#6366f1",
    icon: Zap,
  },
  {
    id: "cardioheal",
    name: "CardioHeal",
    tagline: "Oxygen-generating bioactive patch for cardiac regeneration",
    category: "Cardiology",
    stage: "Under validation",
    description: "Bioactive patch intended to support cardiac regeneration with localized oxygen-generating functionality.",
    details: "A cardiac repair program focused on biomaterial-assisted recovery in tissues where oxygen support is critical.",
    color: "#ef4444",
    icon: HeartPulse,
  },
  {
    id: "dermaheal",
    name: "DermaHeal",
    tagline: "Antiseptic wound dressing for chronic infectious wounds",
    category: "Dermatology",
    stage: "Prototype",
    description: "Antiseptic wound dressing developed for chronic and infectious wound environments.",
    details: "Part of the wound management portfolio, with emphasis on practical use in persistent and high-risk wound settings.",
    color: "#22c55e",
    icon: Shield,
  },
  {
    id: "oxoband",
    name: "OxOBand",
    tagline: "Antioxidant and oxygen-releasing dressing for ulcers and burns",
    category: "Wound Care",
    stage: "Under validation",
    description: "Regenerative dressing designed for diabetic ulcers and burn injuries with antioxidant and oxygen-releasing functionality.",
    details: "A chronic wound care program intended to address demanding healing environments through combined protective and regenerative support.",
    color: "#f97316",
    icon: Activity,
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = product.icon;

  return (
    <motion.div
      className="relative rounded-[26px] p-6 cursor-default overflow-hidden min-h-[340px] flex flex-col"
      style={{
        background: "var(--regen-card-bg)",
        border: hovered ? `1px solid ${product.color}55` : "1px solid var(--regen-card-border)",
        boxShadow: hovered
          ? `0 10px 30px ${product.color}12, 0 18px 40px rgba(0,0,0,0.14)`
          : "var(--regen-card-shadow)",
        transition: "border 0.3s, box-shadow 0.3s",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
    >
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: `linear-gradient(90deg, ${product.color}, transparent)` }}
      />

      <motion.div
        className="absolute -top-16 -right-16 w-40 h-40 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${product.color}12 0%, transparent 70%)` }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1.2 : 0.8 }}
        transition={{ duration: 0.4 }}
      />

      <div className="flex items-center justify-between mb-5">
        <div className="flex flex-wrap gap-2">
          <span
            className="text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
            style={{
              color: product.color,
              background: `${product.color}15`,
              border: `1px solid ${product.color}25`,
            }}
          >
            {product.category}
          </span>
          <span
            className="text-[10px] font-bold tracking-[0.14em] uppercase px-2.5 py-1 rounded-full"
            style={{
              color: "var(--regen-text-subtle)",
              background: "var(--regen-tag-bg)",
              border: "1px solid var(--regen-tag-border)",
            }}
          >
            {product.stage}
          </span>
        </div>
        <motion.div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${product.color}18`, border: `1px solid ${product.color}30` }}
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={18} style={{ color: product.color }} />
        </motion.div>
      </div>

      <h3 className="text-xl font-bold mb-1 tracking-tight" style={{ color: "var(--regen-text-h)" }}>
        {product.name}
      </h3>
      <p className="text-xs font-medium tracking-wide mb-4" style={{ color: product.color }}>
        {product.tagline}
      </p>

      <div className="relative flex-1 min-h-[138px] mb-4">
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 0 : 1, y: hovered ? -8 : 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "var(--regen-text-muted)" }}>
            {product.description}
          </p>
        </motion.div>

        <motion.div
          className="absolute inset-0 pt-4 border-t"
          style={{ borderColor: `${product.color}20` }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <p className="text-xs leading-relaxed" style={{ color: "var(--regen-text-muted)" }}>
            {product.details}
          </p>
        </motion.div>
      </div>

      <motion.div
        className="flex items-center gap-1 text-xs font-semibold mt-3"
        style={{ color: product.color }}
        animate={{ opacity: hovered ? 1 : 0.55, x: hovered ? 0 : -2 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <span>{hovered ? "View details" : "Hover for details"}</span>
        <motion.span animate={{ x: hovered ? 2 : 0 }} transition={{ duration: 0.22, ease: "easeOut" }}>
          →
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default function InnovationsSection() {
  return (
    <section
      id="innovations"
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--regen-section-b)" }}
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
              Our Innovations
            </span>
            <div className="h-px w-10" style={{ background: "linear-gradient(270deg, transparent, #22d3c8)" }} />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold leading-tight mb-5"
            style={{ color: "var(--regen-text-h)" }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Eight innovation programs.
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #22d3c8, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Multiple regenerative targets.
            </span>
          </motion.h2>

          <motion.p
            className="text-lg max-w-3xl mx-auto"
            style={{ color: "var(--regen-text-body)" }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The current portfolio spans wound care, orthopedics, gastroenterology,
            hepatology, neurology, cardiology, and chronic wound management, with
            stage labels shown for clearer program status.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
