"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  MotionConfig,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  animate,
  type Variants,
} from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Applies `prefers-reduced-motion` globally to every `motion.*` component
 * below it. Deliberately the ONLY place that reacts to reduced motion for
 * transform-based animation: branching individual components' `initial` /
 * `whileHover` props on `useReducedMotion()` directly causes a real SSR vs.
 * client markup mismatch (the server can't know the OS setting, so it always
 * renders the animated state, while a reduced-motion client renders the
 * final state on first paint) — React then reports a hydration error.
 * `MotionConfig` avoids that: it neutralizes transforms after mount instead
 * of changing what gets server-rendered.
 */
export function MotionRoot({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/**
 * Fades + lifts content into place once, as it enters the viewport.
 *
 * Pass `immediate` for content that's guaranteed visible on load (e.g. the
 * hero) instead of relying on `whileInView`: the trigger for `whileInView`
 * is the browser's IntersectionObserver, and its very first check on mount
 * doesn't reliably fire before an actual scroll event happens (reproduced
 * in testing — content already in the initial viewport stayed stuck at
 * `initial` until the page was scrolled). Content the user must scroll to
 * reach doesn't hit this, since reaching it requires a real scroll event.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  immediate = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;
}) {
  const trigger = immediate
    ? { animate: { opacity: 1, y: 0 } }
    : {
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
      };
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      {...trigger}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/**
 * Wraps a group of `StaggerItem`s and cascades their entrance. Pass
 * `immediate` for content guaranteed visible on load — see `Reveal` above
 * for why `whileInView` alone isn't reliable for that case.
 */
export function StaggerGroup({
  children,
  className,
  immediate = false,
}: {
  children: React.ReactNode;
  className?: string;
  immediate?: boolean;
}) {
  const trigger = immediate
    ? { animate: "show" }
    : { whileInView: "show", viewport: { once: true, amount: 0.2 } };
  return (
    <motion.div
      className={className}
      initial="hidden"
      {...trigger}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/** Spring lift + press feedback for clickable cards and buttons. */
export function HoverLift({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Counts up from 0 to `value` once it scrolls into view. Drives the number
 * via imperative `textContent` writes inside an effect (never in the render
 * return), so the server-rendered and first-client-rendered markup are
 * always identical — the count-up only starts after hydration is done.
 */
export function AnimatedStat({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (reduce) {
      ref.current.textContent = `${value}${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration: 1.1,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

/** Subtle scroll parallax for the hero background image. */
export function HeroParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        {children}
      </motion.div>
    </div>
  );
}
