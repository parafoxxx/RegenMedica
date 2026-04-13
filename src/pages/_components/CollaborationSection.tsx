"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { hasConvexConfig } from "@/lib/env.ts";
import { toast } from "sonner";
import {
  BookOpen,
  Building2,
  CheckCircle,
  Mail,
  Microscope,
  Phone,
  Users,
} from "lucide-react";

const COLLAB_TYPES = [
  { value: "research", label: "Research Collaboration" },
  { value: "clinical", label: "Clinical Trial Partnership" },
  { value: "licensing", label: "Technology Licensing" },
  { value: "investment", label: "Investment & Funding" },
  { value: "supply", label: "Supply Chain & Manufacturing" },
  { value: "other", label: "Other" },
];

const REASONS = [
  { icon: Microscope, text: "Academic and translational biomaterial collaboration" },
  { icon: BookOpen, text: "Research publication and scientific partnership opportunities" },
  { icon: Building2, text: "Licensing, manufacturing, and clinical development conversations" },
  { icon: Users, text: "Partnerships across hospitals, institutes, startups, and industry" },
];

const CONTACT_CHANNELS = [
  { icon: Mail, label: "Email", value: "hello@regenmedica.com" },
  { icon: Phone, label: "Phone", value: "+91 contact number" },
  { icon: Building2, label: "Institution ties", value: "Add institute, hospital, or incubator names here" },
];

type FormState = {
  name: string;
  organization: string;
  email: string;
  type: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  organization: "",
  email: "",
  type: "",
  message: "",
};

export default function CollaborationSection() {
  if (!hasConvexConfig) {
    return <CollaborationSectionFallback />;
  }

  return <CollaborationSectionWithBackend />;
}

function CollaborationSectionWithBackend() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const submitCollab = useMutation(api.collaborations.submit);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.organization || !form.email || !form.type || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await submitCollab(form);
      setSubmitted(true);
      setForm(EMPTY_FORM);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "var(--regen-input-bg)",
    border: "1px solid var(--regen-input-border)",
    color: "var(--regen-input-color)",
    borderRadius: "12px",
    padding: "12px 16px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "rgba(34,211,200,0.5)";
    e.target.style.boxShadow = "0 0 0 3px rgba(34,211,200,0.08)";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "var(--regen-input-border)";
    e.target.style.boxShadow = "none";
  };

  return (
    <section
      id="collaborate"
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--regen-section-e)" }}
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34,211,200,0.08) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

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
              Collaborate
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
            Contact and
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #22d3c8, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              partnership opportunities
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
            Beyond the inquiry form, this section now surfaces direct contact pathways,
            collaboration categories, and placeholders for institutional credibility.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--regen-text-h)" }}>
                Why collaborate?
              </h3>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--regen-text-body)" }}>
                Regenmedica is positioned at the intersection of materials science, regenerative
                medicine, and translational application. The company is open to research, clinical,
                industrial, and funding conversations.
              </p>
              <div className="space-y-5">
                {REASONS.map((r, i) => {
                  const Icon = r.icon;
                  return (
                    <motion.div
                      key={r.text}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(34,211,200,0.1)", border: "1px solid rgba(34,211,200,0.2)" }}
                      >
                        <Icon size={18} style={{ color: "#22d3c8" }} />
                      </div>
                      <p className="text-sm leading-relaxed pt-2" style={{ color: "var(--regen-text-body)" }}>
                        {r.text}
                      </p>
                    </motion.div>
                  );
                })}
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
              <h3 className="text-2xl font-bold mb-5" style={{ color: "var(--regen-text-h)" }}>
                Direct contact details
              </h3>
              <div className="space-y-4">
                {CONTACT_CHANNELS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(34,211,200,0.1)", border: "1px solid rgba(34,211,200,0.2)" }}
                      >
                        <Icon size={18} style={{ color: "#22d3c8" }} />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.18em] mb-1" style={{ color: "var(--regen-text-subtle)" }}>
                          {item.label}
                        </div>
                        <div className="text-sm" style={{ color: "var(--regen-text-body)" }}>
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl p-8"
            style={{
              background: "var(--regen-panel-bg)",
              border: "1px solid var(--regen-panel-border)",
              boxShadow: "var(--regen-card-shadow)",
            }}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center text-center py-12 gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(34,211,200,0.15)", border: "1px solid rgba(34,211,200,0.3)" }}
                >
                  <CheckCircle size={32} style={{ color: "#22d3c8" }} />
                </div>
                <h4 className="text-xl font-bold" style={{ color: "var(--regen-text-h)" }}>
                  Message received
                </h4>
                <p className="text-sm max-w-xs leading-relaxed" style={{ color: "var(--regen-text-body)" }}>
                  Thank you for your interest in collaborating with Regenmedica.
                  Our team will be in touch within 48 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs transition-colors mt-2"
                  style={{ color: "var(--regen-text-subtle)" }}
                >
                  Submit another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs mb-1.5 font-medium tracking-wide" style={{ color: "var(--regen-text-muted)" }}>
                      Full Name
                    </label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Dr. Jane Smith" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                  <div>
                    <label className="block text-xs mb-1.5 font-medium tracking-wide" style={{ color: "var(--regen-text-muted)" }}>
                      Organization
                    </label>
                    <input name="organization" value={form.organization} onChange={handleChange} placeholder="AIIMS / IIT / Pharma Co." style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs mb-1.5 font-medium tracking-wide" style={{ color: "var(--regen-text-muted)" }}>
                    Email Address
                  </label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@institution.org" style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                </div>
                <div>
                  <label className="block text-xs mb-1.5 font-medium tracking-wide" style={{ color: "var(--regen-text-muted)" }}>
                    Type of Collaboration
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  >
                    <option value="" disabled style={{ background: "var(--regen-input-option-bg)" }}>
                      Select collaboration type...
                    </option>
                    {COLLAB_TYPES.map((t) => (
                      <option key={t.value} value={t.value} style={{ background: "var(--regen-input-option-bg)" }}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs mb-1.5 font-medium tracking-wide" style={{ color: "var(--regen-text-muted)" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your collaboration idea or research interest..."
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: loading ? "rgba(34,211,200,0.3)" : "linear-gradient(135deg, #0891b2 0%, #22d3c8 100%)",
                    boxShadow: loading ? "none" : "0 0 30px rgba(34,211,200,0.25)",
                  }}
                >
                  {loading ? "Sending..." : "Send Collaboration Inquiry"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CollaborationSectionFallback() {
  return (
    <section
      id="collaborate"
      className="relative py-28 overflow-hidden"
      style={{ background: "var(--regen-section-e)" }}
    >
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div
          className="rounded-[28px] p-8 md:p-10"
          style={{
            background: "var(--regen-panel-bg)",
            border: "1px solid var(--regen-panel-border)",
            boxShadow: "var(--regen-card-shadow)",
          }}
        >
          <h2
            className="mb-4 text-3xl font-bold md:text-4xl"
            style={{ color: "var(--regen-text-h)" }}
          >
            Collaboration inquiries
          </h2>
          <p
            className="mx-auto max-w-2xl text-sm leading-relaxed md:text-base"
            style={{ color: "var(--regen-text-body)" }}
          >
            The inquiry form is temporarily unavailable because the production backend has not
            been configured yet. Add `VITE_CONVEX_URL` in Netlify and redeploy to enable form
            submissions.
          </p>
          <p className="mt-4 text-sm" style={{ color: "var(--regen-text-subtle)" }}>
            You can still publish the landing page safely while backend setup is being completed.
          </p>
        </div>
      </div>
    </section>
  );
}
