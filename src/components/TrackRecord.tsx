import { useRef } from "react";
import { FadeIn, motion, useScroll } from "./motion";

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
              <FadeIn
                key={r.title + r.period}
                direction="left"
                className="group relative grid grid-cols-12 gap-x-6 gap-y-3 pb-10 pl-7 md:pl-8"
              >
                {/* Timeline node (mobile) */}
                <span className="absolute top-2 -left-[5px] z-10 size-[9px] rounded-full bg-ink/25 transition-all duration-500 group-hover:bg-signal md:hidden" />

                {/* Timeline node (desktop) */}
                <span className="absolute left-[-5px] top-2 z-10 hidden size-[11px] rounded-full border-2 border-ink/20 bg-paper transition-all duration-500 group-hover:border-signal group-hover:bg-signal md:block" />

                <div className="col-span-12 md:col-span-3 md:pl-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 font-mono text-sm text-ink/70">{r.period}</p>
                </div>

                <div className="col-span-12 md:col-span-5">
                  <h3 className="font-sans text-xl leading-tight font-semibold tracking-[-0.01em] md:text-2xl">
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
      </div>
    </section>
  );
}
