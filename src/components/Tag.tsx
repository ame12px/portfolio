import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

export default function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-muted">
      {children}
    </span>
  );
}
