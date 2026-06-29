"use client";

import { useEffect, useRef, useState } from "react";

type SkillRingProps = {
  label: string;
  initials: string;
  percent: number;
};

const CIRCUMFERENCE = 176; // 2 * π * 28

export default function SkillRing({
  label,
  initials,
  percent,
}: SkillRingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const offset = CIRCUMFERENCE - (CIRCUMFERENCE * percent) / 100;

  return (
    <div ref={ref} className="text-center">
      <div className="relative mx-auto mb-3 h-16 w-16">
        <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            strokeWidth="1.6"
            className="stroke-line"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={isVisible ? offset : CIRCUMFERENCE}
            className="stroke-stamp transition-[stroke-dashoffset] duration-[1100ms] ease-out motion-reduce:transition-none"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-mono text-xs text-ink-muted">
          {initials}
        </span>
      </div>
      <p className="font-mono text-xs text-ink-muted">{label}</p>
    </div>
  );
}
