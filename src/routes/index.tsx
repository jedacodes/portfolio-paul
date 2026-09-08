import { createFileRoute } from "@tanstack/react-router";
import HeroScene from "../components/HeroScene";
import { FadeIn, StaggerList, StaggerItem, AnimatedCounter, MagneticLink, motion } from "../components/motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paul Femi-Adejobi — Tech Consultant (Data & AI), Lagos" },
      {
        name: "description",
        content:
          "Data, AI and technology consulting portfolio: Power BI, SQL, Python and Excel projects by Paul Femi-Adejobi, Lagos, Nigeria.",
      },
      { property: "og:title", content: "Paul Femi-Adejobi — Tech Consultant (Data & AI)" },
      {
        property: "og:description",
        content:
          "Selected analytics, AI-readiness and strategy work, experience, certifications and awards. Lagos-based, working worldwide.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  {
    no: "01",
    sector: "Retail / Fashion",
    title: "Sales Intelligence Dashboard",
    org: "Vintage Couture",
    intro:
      "Executive overview and analysis dashboard, showcasing revenue trends, regional performance, and product profitability.",
    bullets: [
      "Revenue & profitability trend analysis",
      "Regional and state-level performance tracking",
      "Product and customer segment profit distribution",
    ],
    tags: ["Power BI", "Excel"],
    lead: "Power BI",
    link: "/Sales_Intelligence_Dashboard.pdf",
  },
  {
    no: "02",
    sector: "Public Health",
    title: "COVID-19 Data Exploration",
    org: "Public Health",
    intro:
      "Used SQL to explore global COVID-19 data and identify meaningful trends across infections and vaccination.",
    bullets: [
      "CTEs, joins, window functions and aggregations",
      "Infection-rate analysis across regions",
      "Vaccination trend exploration",
    ],
    tags: ["SQL"],
    lead: "SQL",
  },
  {
    no: "03",
    sector: "Health & Fitness",
    title: "Fitness Dataset Analysis",
    org: "Health & Fitness",
    intro:
      "Cleaned and transformed raw fitness data into meaningful health and activity indicators, then built an interactive reporting dashboard.",
    bullets: [
      "Data cleaning and transformation",
      "BMI and activity performance indicators",
      "Interactive visualization and reporting",
    ],
    tags: ["Power BI", "Excel"],
    lead: "Power BI",
  },
  {
    no: "04",
    sector: "Python Analytics",
    title: "Health Metrics Classification System",
    org: "Python Analytics",
    intro:
      "Built a modular Python system that processes health-related inputs and translates them into structured classifications and visual insights.",
    bullets: [
      "Modular Python functions and Pandas pipelines",
      "Structured data classification",
      "Distribution analysis with Matplotlib",
    ],
    tags: ["Python", "Pandas", "Matplotlib"],
    lead: "Python",
  },
];

const reports = [
  {
    no: "01",
    sector: "Media & Entertainment",
    title: "Skit Makers Report Q1 & Q2 '26",
    org: "Dataleum",
    intro:
      "Managed the project and acted as lead analyst to design the report and create interactive dashboards.",
    bullets: [
      "Project Management and team coordination",
      "Data analysis and dashboard creation",
      "Report design and industry insights",
    ],
    tags: ["Project Management", "Data Analysis", "Dashboarding"],
    lead: "Project Management",
    link: "https://dataleum.com/wp-content/uploads/2026/07/Dataleum-Q2-2026-Skit-Makers-Report.pdf"
  },
  {
    no: "02",
    sector: "Human Resources",
    title: "Tech Attrition Report",
    org: "Dataleum",
    intro:
      "Analyzed human resource data to uncover intelligence regarding tech talent attrition and retention.",
    bullets: [
      "HR intelligence analysis",
      "Data visualization and reporting",
      "Strategic talent insights",
    ],
    tags: ["HR Analytics", "Data Analysis", "Reporting"],
    lead: "Data Analysis",
    link: "https://dataleum.com/wp-content/uploads/2026/05/HR-Intelligence-Report-May-2026.pdf"
  },
  {
    no: "03",
    sector: "Technology Policy",
    title: "AI Governance in Africa",
    org: "Dataleum",
    intro:
      "Research report on responsible AI innovation, assessing the trillion-dollar growth potential and governance landscape across Africa.",
    bullets: [
      "AI policy research and analysis",
      "Economic impact assessment",
      "Responsible innovation frameworks",
    ],
    tags: ["Research", "AI Governance", "Strategy"],
    lead: "Research",
    link: "https://dataleum.com/ai-governance-in-africa-responsible-innovation-and-trillion-dollar-growth/"
  },
  {
    no: "04",
    sector: "Data Privacy",
    title: "Data Protection in Africa",
    org: "Dataleum",
    intro:
      "Explored how Africa is redefining data protection in 2026, analyzing regulatory changes and compliance strategies.",
    bullets: [
      "Regulatory and compliance research",
      "Data privacy frameworks",
      "Strategic industry insights",
    ],
    tags: ["Research", "Data Privacy", "Strategy"],
    lead: "Research",
    link: "https://dataleum.com/how-africa-is-redefining-data-protection-in-2026/"
  },
  {
    no: "05",
    sector: "Business Strategy",
    title: "AI Value Abyss",
    org: "Dataleum",
    intro:
      "Investigated what West African SMEs get wrong about AI adoption and how to bridge the value gap.",
    bullets: [
      "SME market analysis",
      "AI adoption barriers and solutions",
      "Strategic business recommendations",
    ],
    tags: ["Research", "Business Strategy", "AI"],
    lead: "Business Strategy",
    link: "https://dataleum.com/ai-value-abyss-what-west-african-smes-get-wrong/"
  },
];

const roles = [
  {
    period: "Feb 2026 — Present",
    title: "Research, Strategy & Intelligence Analyst",
    org: "Dataleum · Lagos",
    note: "Research and analysis behind strategic decisions — market and industry research, opportunity assessment, assumption testing, and capability-building across data, AI and technology.",
  },
  {
    period: "Mar 2025 — Feb 2026",
    title: "Business Strategy Analyst",
    org: "NoemDek · Lagos",
    note: "Energy, healthcare and consumer-facing initiatives — financial modelling, market research, due diligence, product requirements and grant proposals.",
  },
  {
    period: "Sep 2025 — Dec 2025",
    title: "Business Analyst",
    org: "YouBloom · Remote",
    note: "Connected product, design and engineering — turning user feedback and business requirements into prioritized product decisions and roadmap support.",
  },
  {
    period: "Dec 2024",
    title: "BI Analyst — Simulation",
    org: "PwC · Forage",
    note: "Built executive Power BI dashboards to investigate workforce and leadership trends, identify key drivers and develop recommendations.",
  },
  {
    period: "Jul 2024 — Oct 2024",
    title: "Data Analytics & Visualization Intern — Simulation",
    org: "Accenture · Forage",
    note: "Cleaned and joined seven datasets to identify the content categories driving engagement, and translated findings into recommendations.",
  },
  {
    period: "Aug 2022 — Oct 2022",
    title: "Data & IT Intern",
    org: "Fibernet · Ogun",
    note: "Supported database operations and documentation for a live student-management system, making processes usable for non-technical staff.",
  },
];

const certs = [
  "Microsoft Power BI Data Analyst",
  "Microsoft AI Business Professional",
  "Microsoft Fabric Analytics Engineer",
  "Google Cloud Generative AI Leader",
  "Microsoft AI Fluency",
  "Google Cloud Google Sheets",
  "AWS / Udacity AI Practitioner",
  "DataCamp Data Analyst Associate",
  "DataCamp Data Literacy",
  "DSN Python for Data Science & ML",
  "HackerRank Software Engineering",
  "Dataleum Project Management",
  "Treford Technical Project Manager",
  "Ethical Researcher — University of the People",
];

const awards = [
  { name: "Innovator of the Quarter — Dataleum", year: "2026" },
  { name: "Best Graduating Student — Dataleum", year: "2026" },
  { name: "Tech Savvy of the Year, Nominee — Bowen Awards", year: "2024" },
  { name: "Winner — National IT Competition", year: "2023" },
  { name: "First Runner-Up — BCMQ Competition", year: "2022" },
];

const affiliations = [
  { name: "ComputeX", role: "Program Coordinator / PM" },
  { name: "FSI (Financial Services Innovators)", role: "Ambassador" },
  { name: "Polygon Guild", role: "Contributor · Campus Tour" },
  { name: "HOGGOS", role: "Part-Time Tutor" },
  { name: "Dataleum", role: "Data Analytics Facilitator" },
  { name: "Association of Responsible AI (ARAI)", role: "Subject Matter Expert" },
];

function Index() {
  return (
    <main className="bg-paper text-ink">
      {/* top strip */}
      <div className="bg-ink text-paper font-mono text-[11px] uppercase tracking-[0.2em]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between border-b border-line px-6 py-3">
          <span className="text-paper">Paul Femi-Adejobi</span>
          <span className="hidden items-center gap-6 text-mute sm:flex">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-signal pulse-signal" />
              Open to opportunities
            </span>
            <span>Lagos, NG · Remote</span>
            <span className="text-signal">GMT+1</span>
          </span>
        </div>
      </div>

      {/* hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(246,242,234,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(246,242,234,0.05) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 left-1/4 w-px bg-line" />
        <div className="pointer-events-none absolute inset-y-0 left-2/4 w-px bg-line" />
        <div className="pointer-events-none absolute inset-y-0 left-3/4 w-px bg-line" />
        
        <HeroScene />

        <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-20 lg:py-28">
          <StaggerList className="col-span-12 lg:col-span-8 relative z-10">
            <StaggerItem>
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-signal">
                Analyst | Tech Consultant (Data &amp; AI)
              </p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-balance font-display text-[clamp(3.25rem,11vw,9rem)] font-medium leading-[0.92] tracking-[-0.02em]">
                Paul Femi-Adejobi
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-8 font-sans text-[clamp(1.15rem,1.8vw,1.5rem)] font-light leading-relaxed text-paper/90">
                I help businesses drive growth through Data-Driven Insights & AI
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-5 max-w-[56ch] text-pretty font-sans text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed text-paper/70">
                I work at the intersection of data, technology, strategy and AI — helping
                organizations turn complex information into clearer insights, better products
                and smarter decisions.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.15em] text-mute">
                <span className="flex items-center gap-2">
                  <span className="size-1 rounded-full bg-signal pulse-signal" />
                  Data &amp; Analytics
                </span>
                <span>AI</span>
                <span>Strategy</span>
                <span>Product</span>
              </div>
            </StaggerItem>
          </StaggerList>
          <div className="col-span-12 flex flex-col justify-between gap-8 lg:col-span-4 lg:border-l lg:border-line lg:pt-2 lg:pl-8 hero-sidebar">
            <div className="relative overflow-hidden border border-line photo-hover">
              <img
                src="/paul-photo.jpg"
                alt="Paul Femi-Adejobi portrait"
                className="aspect-[4/5] w-full object-cover object-[50%_25%]"
              />
              <div className="absolute inset-x-0 bottom-0 border-t border-line bg-ink/80 p-3 backdrop-blur-sm">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-mute">
                  Paul Femi-Adejobi
                </p>
                <p className="mt-0.5 font-sans text-xs text-paper/70">
                  Lagos, Nigeria
                </p>
              </div>
            </div>
            <div className="space-y-4 border-t border-line pt-6">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-mute">
                  Experience
                </span>
                <span className="font-display text-3xl font-semibold tracking-[-0.02em]">
                  <AnimatedCounter target={3} suffix="+" duration={1.5} /> yrs
                </span>
              </div>
              <div className="border-t border-line pt-4">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-mute">
                  Education
                </span>
                <p className="mt-2 font-sans text-sm leading-snug text-paper/80">
                  BSc Computer Science — Bowen University
                </p>
                <p className="font-sans text-xs text-paper/60">
                  2020–2024 · First Class Honours (4.8/5.0)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* projects */}
      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <FadeIn>
              <h2 className="text-balance font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-none tracking-[-0.02em]">
                Selected work
              </h2>
              <p className="mt-4 max-w-[46ch] text-pretty font-sans text-base text-ink/60">
                Turning data into something people can act on.
              </p>
            </FadeIn>
          </div>

          {[
            { title: "Projects", items: projects },
            { title: "Reports & Publications", items: reports }
          ].map((section, idx) => (
            <div key={section.title} className={idx > 0 ? "mt-24" : "mt-12"}>
              <div className="mb-8 border-b border-ink/10 pb-4">
                <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-signal">
                  {section.title}
                </h3>
              </div>
              <div className="divide-y divide-ink/10 border-y border-ink/10">
                {section.items.map((p) => (
                  <FadeIn key={p.no} direction="up" amount={0.1}>
                    <motion.div 
                      whileHover={{ 
                        scale: 1.01,
                        backgroundColor: "color-mix(in oklch, var(--color-signal) 4%, transparent)", 
                        boxShadow: "inset 4px 0 0 0 var(--color-signal), 0 15px 35px -10px rgba(0,0,0,0.05)" 
                      }} 
                      transition={{ type: "spring", stiffness: 300, damping: 20 }} 
                      className="group grid cursor-default grid-cols-12 gap-6 py-8 rounded-xl px-6 -mx-6 transition-colors"
                    >
                      <div className="col-span-12 md:col-span-4">
                        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-mute transition-colors group-hover:text-signal">
                          {p.no} — {p.sector}
                        </p>
                        {p.link ? (
                          <a href={p.link} target="_blank" rel="noopener noreferrer">
                            <h3 className="font-sans text-2xl font-semibold leading-tight group-hover:text-signal transition-colors">
                              {p.title}
                            </h3>
                          </a>
                        ) : (
                          <h3 className="font-sans text-2xl font-semibold leading-tight group-hover:text-signal transition-colors">
                            {p.title}
                          </h3>
                        )}
                        <p className="mt-3 max-w-[40ch] text-pretty font-sans text-sm leading-relaxed text-ink/60 group-hover:text-ink/80 transition-colors">
                          {p.intro}
                        </p>
                      </div>
                      <div className="col-span-12 md:col-span-4 md:border-l md:border-ink/10 md:pl-4 group-hover:border-signal/30 transition-colors">
                        <ul className="space-y-2 font-sans text-sm text-ink/70 group-hover:text-ink/90 transition-colors">
                          {p.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-span-12 flex flex-wrap gap-2 md:col-span-4 md:justify-end self-start">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className={`rounded-[min(1vw,8px)] px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider ring-1 transition-colors ${
                              t === p.lead ? "text-signal ring-signal/40 bg-signal/10 group-hover:bg-signal group-hover:text-paper" : "ring-ink/20 text-ink bg-ink/5 group-hover:bg-ink/10"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* capabilities */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-6 py-20">
          <FadeIn className="col-span-12 self-start lg:sticky lg:top-10 lg:col-span-5">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-signal">
              Capabilities
            </p>
            <h2 className="text-balance font-display text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[0.95] tracking-[-0.02em]">
              How I create value.
            </h2>
            <p className="mt-6 max-w-[46ch] text-pretty font-sans text-paper/65">
              Four disciplines, one goal: decisions people can stand behind.
            </p>
          </FadeIn>
          
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 mt-8 lg:mt-0">
            <StaggerList className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
              <StaggerItem className="border-l border-line pl-5 border-breathe">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                  Data &amp; business intelligence
                </p>
                <p className="mb-2 font-sans text-sm leading-relaxed text-paper/60">
                  Transforming raw data into reliable analysis, dashboards and decision-ready
                  insights.
                </p>
                <p className="font-sans text-sm text-paper/80">
                  Power BI · SQL · Python · Excel · Data Visualization
                </p>
              </StaggerItem>
              <StaggerItem className="border-l border-line pl-5 border-breathe">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                  Strategy &amp; research
                </p>
                <p className="mb-2 font-sans text-sm leading-relaxed text-paper/60">
                  Breaking down complex questions, researching markets and turning evidence
                  into strategic recommendations.
                </p>
                <p className="font-sans text-sm text-paper/80">
                  Business Analysis · Market Research · Financial Modelling · Competitive Analysis
                </p>
              </StaggerItem>
              <StaggerItem className="border-l border-line pl-5 border-breathe">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                  Product &amp; delivery
                </p>
                <p className="mb-2 font-sans text-sm leading-relaxed text-paper/60">
                  Connecting business objectives with user needs and technical execution.
                </p>
                <p className="font-sans text-sm text-paper/80">
                  Requirements Gathering · PRDs · User Research · Roadmapping · Agile
                </p>
              </StaggerItem>
              <StaggerItem className="border-l border-line pl-5 border-breathe">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
                  AI &amp; automation
                </p>
                <p className="mb-2 font-sans text-sm leading-relaxed text-paper/60">
                  Practical ways to use AI and automation to improve workflows, decision-making
                  and productivity.
                </p>
                <p className="font-sans text-sm text-paper/80">
                  Generative AI · AI Agents · AI Governance · n8n · Make · Zapier
                </p>
              </StaggerItem>
            </StaggerList>
          </div>
        </div>
      </section>

      {/* track record */}
      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-ink/10 pb-6">
            <FadeIn direction="left">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-signal">
                Track record
              </p>
              <h2 className="text-balance font-display text-[clamp(2.5rem,6vw,5rem)] font-medium leading-none tracking-[-0.02em]">
                A career built around better decisions.
              </h2>
            </FadeIn>
            <span className="pb-2 font-mono text-xs uppercase tracking-[0.2em] text-mute">
              2022 → present · 06 roles
            </span>
          </div>

          <ol className="relative ml-[7px] border-l border-ink/15 md:ml-0 md:border-l-0">
            {roles.map((r, i) => (
              <FadeIn
                key={r.title + r.period}
                direction="left"
                className="group relative grid grid-cols-12 gap-x-6 gap-y-3 pb-10 pl-7 md:pl-0"
              >
                {/* rail marker (mobile) */}
                <span className="absolute top-2 -left-[5px] size-[9px] rounded-full bg-ink/25 transition-colors group-hover:bg-signal md:hidden" />

                <div className="col-span-12 md:col-span-3 md:border-l md:border-ink/15 md:pl-6 md:transition-colors md:group-hover:border-signal">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 font-mono text-sm text-ink/70">{r.period}</p>
                </div>

                <div className="col-span-12 md:col-span-5">
                  <h3 className="font-sans text-xl leading-tight font-semibold tracking-[-0.01em] decoration-signal decoration-2 underline-offset-4 group-hover:underline md:text-2xl">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.15em] text-ink/50">
                    {r.org}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-4">
                  <p className="max-w-[46ch] text-pretty font-sans text-sm leading-relaxed text-ink/70">
                    {r.note}
                  </p>
                </div>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>


      {/* certs + awards */}
      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-6 py-20">
          <FadeIn className="col-span-12 lg:col-span-7">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-signal">
              Certification wall
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-medium leading-none tracking-[-0.02em]">
              12+ industry-recognized certifications.
            </h2>
            <StaggerList className="mt-8 flex flex-wrap gap-2.5">
              {certs.map((c) => (
                <StaggerItem
                  key={c}
                  className="rounded-[min(1vw,8px)] px-3 py-2 font-mono text-xs ring-1 ring-paper/15 cert-shimmer"
                >
                  {c}
                </StaggerItem>
              ))}
            </StaggerList>
          </FadeIn>
          <div className="col-span-12 lg:col-span-5 lg:border-l lg:border-line lg:pl-8">
            <FadeIn direction="right">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-signal">
                Recognition
              </p>
              <h3 className="mb-2 font-display text-2xl font-medium tracking-[-0.01em]">
                Milestones that shaped the journey.
              </h3>
            </FadeIn>
            <ul className="divide-y divide-line">
              {awards.map((a) => (
                <FadeIn key={a.name} direction="right" amount={0.5} className="flex items-center justify-between gap-4 py-4">
                  <span className="font-sans text-base">{a.name}</span>
                  <span className="font-mono text-xs text-mute">{a.year}</span>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* affiliations */}
      <section className="bg-paper text-ink">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <FadeIn direction="up">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-signal">
              Beyond the job title
            </p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-medium leading-none tracking-[-0.02em]">
              Building, leading, teaching, contributing.
            </h2>
            <p className="mt-4 max-w-[52ch] text-pretty font-sans text-base text-ink/60">
              Some of my most meaningful work happens outside formal job descriptions.
            </p>
          </FadeIn>
          <StaggerList className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {affiliations.map((a) => (
              <StaggerItem
                key={a.name}
              >
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)", borderColor: "var(--color-signal)" }}
                  className="flex flex-col justify-between border border-ink/10 p-5 h-full bg-paper"
                >
                  <span className="font-sans text-lg font-semibold tracking-[-0.01em]">{a.name}</span>
                  <span className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-mute">
                    {a.role}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* contact */}
      <section className="bg-signal text-ink">
        <div className="mx-auto max-w-[1400px] px-6 py-20">
          <FadeIn>
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em]">Contact</p>
            <h2 className="text-balance font-display text-[clamp(3rem,9vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.02em]">
              Let's turn data into decisions.
            </h2>
            <p className="mt-6 max-w-[52ch] text-pretty font-sans text-lg text-ink/75">
              Have a business problem, data challenge, AI opportunity or technology idea?
              Let's talk.
            </p>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <MagneticLink
              href="mailto:femiadejobipaulolorunjedalo@gmail.com"
              className="whitespace-nowrap font-sans text-[clamp(0.85rem,1.8vw,1.75rem)] font-semibold tracking-[-0.01em] hover:text-paper/80"
            >
              femiadejobipaulolorunjedalo@gmail.com
            </MagneticLink>
            <div className="flex flex-col gap-2 items-start">
              <MagneticLink
                href="https://wa.me/2349017748447"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[clamp(1.5rem,3vw,2.5rem)] font-semibold tracking-[-0.01em] hover:text-paper/80"
              >
                0901 774 8447
              </MagneticLink>
            </div>
            <MagneticLink
              href="https://www.linkedin.com/in/paul-femi-adejobi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[clamp(1.25rem,2.4vw,2rem)] font-semibold tracking-[-0.01em] hover:text-paper/80"
            >
              LinkedIn
            </MagneticLink>
          </div>
          <div className="mt-16 flex items-center justify-between border-t border-ink/20 pt-6 font-mono text-[11px] uppercase tracking-[0.2em]">
            <span>© 2026 Paul Femi-Adejobi</span>
            <span>Lagos, NG</span>
          </div>
        </div>
      </section>
    </main>
  );
}
