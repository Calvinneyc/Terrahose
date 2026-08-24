import type { SVGProps } from "react";

/**
 * 工业风线性图标库（stroke-based，统一 24x24）
 * 正式页面不用 emoji，保持 Engineering 专业感
 */
export type IconName =
  | "wrench"
  | "crimp"
  | "replace"
  | "repair"
  | "custom"
  | "truck"
  | "phone"
  | "whatsapp"
  | "quote"
  | "construction"
  | "agriculture"
  | "manufacturing"
  | "machinery"
  | "industrial"
  | "check"
  | "arrow";

const paths: Record<IconName, React.ReactNode> = {
  wrench: (
    <path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.7L3 17.7V21h3.3l5.7-5.7a4.5 4.5 0 0 0 5.7-6L14.6 12l-2.6 2.6-2.6-2.6 2.6-2.6L14.7 6.3Z" />
  ),
  crimp: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
    </>
  ),
  replace: (
    <>
      <path d="M4 7h16M4 7l3-3M4 7l3 3" />
      <path d="M20 17H4M20 17l-3-3M20 17l-3 3" />
    </>
  ),
  repair: (
    <>
      <path d="M12 3v6M12 15v6M5 12H3M21 12h-2" />
      <circle cx="12" cy="12" r="3" />
      <path d="m17.5 6.5 1.5-1.5M6.5 17.5 5 19M17.5 17.5 19 19M6.5 6.5 5 5" />
    </>
  ),
  custom: (
    <>
      <path d="M12 2v8M12 14v8" />
      <path d="M4 10h8M4 10a2 2 0 1 0 2-2M4 14h8M4 14a2 2 0 1 1 2 2" />
      <path d="M20 6v4M18 8h4M20 14v4M18 16h4" />
    </>
  ),
  truck: (
    <>
      <path d="M1 6h13v10H1zM14 10h4l3 3v3h-7" />
      <circle cx="5.5" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </>
  ),
  phone: (
    <path d="M5 3h4l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
      <path d="M8.5 9.5c0 3 2.5 5.5 5.5 5.5l1.5-1.5-2-1.5-1 .5a4 4 0 0 1-2-2l.5-1-1.5-2L8.5 9.5Z" />
    </>
  ),
  quote: (
    <>
      <path d="M4 5h16v14H4zM4 9h16" />
      <path d="M8 13h3M13 13h3M8 16h3" />
    </>
  ),
  construction: (
    <>
      <path d="M3 21h18M5 21V9l7-6 7 6v12" />
      <path d="M9 21v-6h6v6M9 11h6" />
    </>
  ),
  agriculture: (
    <>
      <path d="M12 22V9M12 9c0-3 2-5 5-5M12 9c0-3-2-5-5-5" />
      <path d="M3 22h18M6 22v-6M12 22v-4M18 22v-6" />
    </>
  ),
  manufacturing: (
    <>
      <path d="M2 20h20M4 20V8l6-3v15M10 20V5l5 2v13M15 20V7l5 3v10" />
      <circle cx="18" cy="12" r="1" />
    </>
  ),
  machinery: (
    <>
      <path d="M3 20h18M4 20V10h6v10M10 14h5v6M15 16h3v4" />
      <path d="M8 10V7h6v3M11 7V4h3v3" />
      <circle cx="18.5" cy="18.5" r="1.5" />
    </>
  ),
  industrial: (
    <>
      <path d="M3 21h18M5 21V6l5 3V6l5 3V6l5 3v12" />
      <path d="M7 12h2M12 12h2M17 12h2" />
    </>
  ),
  check: <path d="m4 12 5 5L20 6" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export function Icon({
  name,
  className = "w-6 h-6",
  strokeWidth = 1.8,
  ...props
}: { name: IconName; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
