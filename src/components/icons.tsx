// Inline SVG icons (no icon font / library → zero extra requests).

type IconProps = { className?: string };

export function AppleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.77-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.97.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.37-3.69zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.52 2.69-1.28z" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path fill="#00d7fe" d="M3.6 2.2 13.4 12l-9.8 9.8c-.36-.2-.6-.6-.6-1.07V3.27c0-.47.24-.87.6-1.07z" />
      <path fill="#00f076" d="M16.8 8.6 13.4 12 3.6 2.2c.36-.2.82-.2 1.21.05L16.8 8.6z" />
      <path fill="#ff3a44" d="m16.8 15.4-12 6.35c-.39.25-.85.25-1.2.05L13.4 12l3.4 3.4z" />
      <path fill="#ffd400" d="M20.4 10.6c.5.28.8.8.8 1.4s-.3 1.12-.8 1.4l-3.6 2-3.4-3.4 3.4-3.4 3.6 2z" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Feature icons, keyed by feature id in the dictionaries. */
export function FeatureIcon({ name, className }: IconProps & { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    tracking: (
      <>
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="6" r="2" />
        <path d="M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7" />
      </>
    ),
    pickup: (
      <>
        <path d="M5 8h14l-1.2 12H6.2z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </>
    ),
    payment: (
      <>
        <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
        <path d="M3 10h18M7 15h4" />
      </>
    ),
    rewards: (
      <>
        <rect x="4" y="9" width="16" height="11" rx="1.5" />
        <path d="M2.5 9h19M12 9v11M12 9S10.5 4 8 4.5 7 9 12 9zm0 0s1.5-5 4-4.5S17 9 12 9z" />
      </>
    ),
    reorder: (
      <>
        <path d="M4 12a8 8 0 0 1 14-5.3L20 9" />
        <path d="M20 4v5h-5" />
        <path d="M20 12a8 8 0 0 1-14 5.3L4 15" />
        <path d="M4 20v-5h5" />
      </>
    ),
    addresses: (
      <>
        <path d="M3.5 11 12 4l8.5 7" />
        <path d="M6 9.5V20h12V9.5" />
        <path d="M10 20v-5h4v5" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      {paths[name]}
    </svg>
  );
}

export function SocialIcon({ name, className }: IconProps & { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    instagram: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    ),
    tiktok: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
        <path d="M16.6 2h-3.3v13.2a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9a6.3 6.3 0 1 0 5.3 6.2V8.6a7.6 7.6 0 0 0 4.4 1.4V6.7a4.4 4.4 0 0 1-4.4-4.4z" />
      </svg>
    ),
    snapchat: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...stroke} strokeWidth={2}>
        <path d="M12 2.8c-3 0-5 2.3-5 5.2v2.3l-1.7-.5c-.6-.1-1 .6-.5 1l1.8 1.3c-.6 1.6-1.8 3-3.6 3.6.2.7 1 1 2.2 1.1.2.6.2 1.2.8 1.2.8 0 1.6-.3 2.6.3 1 .6 2 1.6 3.4 1.6s2.4-1 3.4-1.6c1-.6 1.8-.3 2.6-.3.6 0 .6-.6.8-1.2 1.2-.1 2-.4 2.2-1.1-1.8-.6-3-2-3.6-3.6l1.8-1.3c.5-.4.1-1.1-.5-1l-1.7.5V8c0-2.9-2-5.2-5-5.2z" />
      </svg>
    ),
    x: (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
        <path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.2 21H2.1l7.3-8.3L1.8 3h6.4l4.4 5.9L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" />
      </svg>
    ),
  };
  return icons[name] ?? null;
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`rtl:-scale-x-100 ${className ?? ""}`} fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
