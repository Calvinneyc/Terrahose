"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "terra_visitor_counted";
const START = 1898;

export function VisitorCounter({ label }: { label: string }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const alreadyCounted = sessionStorage.getItem(SESSION_KEY) === "1";

    const load = async () => {
      try {
        if (!alreadyCounted) {
          const res = await fetch("/api/visitors", { method: "POST" });
          const data = await res.json();
          if (!cancelled && typeof data.count === "number") setCount(data.count);
          sessionStorage.setItem(SESSION_KEY, "1");
        } else {
          const res = await fetch("/api/visitors");
          const data = await res.json();
          if (!cancelled && typeof data.count === "number") setCount(data.count);
        }
      } catch {
        if (!cancelled) setCount(START);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <span className="flex items-center gap-1.5 text-xs text-white/40">
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      {label}: {count.toLocaleString()}
    </span>
  );
}
