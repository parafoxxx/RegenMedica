const NAV_GROUPS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Innovations", href: "#innovations" },
      { label: "Technology", href: "#technology" },
      { label: "Impact", href: "#impact" },
    ],
  },
  {
    title: "Research Areas",
    links: [
      { label: "Wound Care", href: "#innovations" },
      { label: "Bone & Orthopedics", href: "#innovations" },
      { label: "Neurology", href: "#innovations" },
      { label: "Cardiology", href: "#innovations" },
      { label: "Gastroenterology", href: "#innovations" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Collaborate With Us", href: "#collaborate" },
      { label: "Research Partnerships", href: "#collaborate" },
      { label: "Clinical Collaborations", href: "#collaborate" },
      { label: "Investment Inquiries", href: "#collaborate" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--regen-footer-bg)", borderTop: "1px solid var(--regen-divider)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
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
              <div>
                <div className="font-bold" style={{ color: "var(--regen-text-h)" }}>
                  Regen<span style={{ color: "#22d3c8" }}>medica</span>
                </div>
                <div className="text-[10px] tracking-widest uppercase" style={{ color: "var(--regen-text-subtle)" }}>
                  Pvt. Ltd.
                </div>
              </div>
            </div>
            <p className="text-xs leading-relaxed mb-5" style={{ color: "var(--regen-text-muted)" }}>
              Engineering the future of regenerative medicine through advanced polymeric and ceramic biomaterials.
            </p>
            <div
              className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
              style={{ background: "rgba(34,211,200,0.1)", border: "1px solid rgba(34,211,200,0.2)", color: "#22d3c8" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Actively seeking collaborations
            </div>
          </div>

          {NAV_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--regen-text-muted)" }}>
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--regen-text-subtle)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#22d3c8")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--regen-text-subtle)")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="h-px mb-8" style={{ background: "var(--regen-divider)" }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "var(--regen-text-subtle)" }}>
            &copy; {year} Regenmedica Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs" style={{ color: "var(--regen-text-subtle)" }}>
              Founded 2022 · India
            </span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22d3c8" }} />
              <span className="text-xs" style={{ color: "#22d3c8" }}>
                Tissue Engineering · Regenerative Medicine
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
