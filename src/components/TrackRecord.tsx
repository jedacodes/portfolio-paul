import { useRef } from "react";
import { FadeIn, motion, useScroll, useTransform } from "./motion";

interface Role {
  period: string;
  title: string;
  org: string;
  note: string;
}

export function TrackRecord({ roles }: { roles: Role[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  return (
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

        <div ref={containerRef} className="relative">
          {/* Scroll-driven progress line (desktop) */}
          <div className="absolute left-0 top-0 bottom-0 hidden w-px bg-ink/10 md:block">
            <motion.div
              className="absolute left-0 top-0 w-full origin-top bg-signal"
              style={{ scaleY: scrollYProgress, height: "100%" }}
            />
            {/* Glow effect on the progress line */}
            <motion.div
              className="absolute left-[-2px] top-0 w-[5px] origin-top bg-signal/30 blur-[3px]"
              style={{ scaleY: scrollYProgress, height: "100%" }}
            />
          </div>

          {/* Scroll-driven progress line (mobile) */}
          <div className="absolute -left-[0.5px] top-0 bottom-0 w-px bg-ink/10 md:hidden">
            <motion.div
              className="absolute left-0 top-0 w-full origin-top bg-signal"
              style={{ scaleY: scrollYProgress, height: "100%" }}
            />
          </div>

          <ol className="relative ml-[7px] md:ml-0">
            {roles.map((r, i) => (
              <RoleEntry key={r.title + r.period} role={r} index={i} total={roles.length} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function RoleEntry({ role, index, total }: { role: Role; index: number; total: number }) {
  return (
    <FadeIn
      direction="left"
      className="group relative grid grid-cols-12 gap-x-6 gap-y-3 pb-10 pl-7 md:pl-8"
    >
      {/* Timeline node (mobile) — pulses when hovered */}
      <span className="absolute top-2 -left-[5px] z-10 md:hidden">
        <span className="block size-[9px] rounded-full bg-ink/25 transition-all duration-500 group-hover:bg-signal group-hover:scale-[1.6]" />
        <span className="absolute inset-0 rounded-full bg-signal/0 transition-all duration-700 group-hover:bg-signal/40 group-hover:scale-[3] group-hover:animate-ping" />
      </span>

      {/* Timeline node (desktop) */}
      <span className="absolute left-[-5px] top-2 z-10 hidden md:block">
        <span className="block size-[11px] rounded-full border-2 border-ink/20 bg-paper transition-all duration-500 group-hover:border-signal group-hover:bg-signal group-hover:scale-125" />
        <span className="absolute inset-[-4px] rounded-full bg-signal/0 transition-all duration-700 group-hover:bg-signal/20 group-hover:scale-[2.5]" />
      </span>

      {/* Light sweep effect on hover */}
      <div
        className="pointer-events-none absolute -left-2 -right-4 -top-3 -bottom-3 overflow-hidden rounded-2xl md:-left-4 md:-right-6"
      >
        <div className="absolute inset-0 bg-ink/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div 
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-signal/[0.04] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
      </div>

      <div className="relative z-10 col-span-12 md:col-span-3 md:pl-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/30 transition-colors duration-300 group-hover:text-signal">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="mt-1 font-mono text-sm text-ink/50 transition-colors duration-300 group-hover:text-ink/80">
          {role.period}
        </p>
      </div>

      <div className="relative z-10 col-span-12 md:col-span-5">
        <h3 className="font-sans text-xl leading-tight font-semibold tracking-[-0.01em] transition-colors duration-300 group-hover:text-signal md:text-2xl">
          {role.title}
        </h3>
        <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.15em] text-ink/40 transition-colors duration-300 group-hover:text-ink/60">
          {role.org}
        </p>
      </div>

      <div className="relative z-10 col-span-12 md:col-span-4">
        <p className="max-w-[46ch] text-pretty font-sans text-sm leading-relaxed text-ink/55 transition-all duration-300 group-hover:text-ink/85 group-hover:translate-x-1">
          {role.note}
        </p>
      </div>

      {/* Bottom accent gradient */}
      <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-signal/0 to-transparent transition-all duration-500 group-hover:via-signal/50" />
    </FadeIn>
  );
}
