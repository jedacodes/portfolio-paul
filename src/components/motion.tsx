import { useRef, useEffect, type ReactNode } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  type Variants,
} from "framer-motion";

/* ── Shared easing ──────────────────────────────────────── */

const ease = [0.22, 1, 0.36, 1] as const;

/* ── FadeIn ──────────────────────────────────────────────── */

type Direction = "up" | "down" | "left" | "right";

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
};

interface FadeInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  once = true,
  amount = 0.2,
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const offset = offsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ duration, delay, ease: [...ease] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── StaggerList ─────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [...ease] },
  },
};

interface StaggerListProps {
  children: ReactNode;
  className?: string;
  once?: boolean;
}

export function StaggerList({
  children,
  className,
  once = true,
}: StaggerListProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

/* ── AnimatedCounter ─────────────────────────────────────── */

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration, ease: "easeOut" });
    }
  }, [isInView, target, duration, count]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

/* ── MagneticLink ────────────────────────────────────────── */

interface MagneticLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
}

export function MagneticLink({
  children,
  href,
  className,
  target,
  rel,
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.15);
    y.set((e.clientY - cy) * 0.15);
  }

  function reset() {
    animate(x, 0, { type: "spring", stiffness: 300, damping: 20 });
    animate(y, 0, { type: "spring", stiffness: 300, damping: 20 });
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={className}
      style={{ x, y, display: "inline-block" }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.a>
  );
}

/* ── Re-export motion for convenience ────────────────────── */

export { motion, useInView };
