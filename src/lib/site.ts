// Site-wide facts shared by both languages.
// Anything marked PLACEHOLDER must be confirmed before launch.

// Production address, used for canonical URLs and social-share previews.
// Set NEXT_PUBLIC_SITE_URL (e.g. https://safwabroast.com) once you have your own domain.
// Until then Vercel's production address is used automatically.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  url: siteUrl,
  stores: {
    // Both stores are "coming soon". When the app is live, paste the real URL and set live: true —
    // the badges switch from "Coming soon" to real download links automatically.
    appStore: { live: false, url: "#" },
    playStore: { live: false, url: "#" },
  },
  // PLACEHOLDER: real profile URLs. Icons render for every entry; "#" links are placeholders.
  social: [
    { id: "instagram", label: "Instagram", url: "#" },
    { id: "tiktok", label: "TikTok", url: "#" },
    { id: "snapchat", label: "Snapchat", url: "#" },
    { id: "x", label: "X", url: "#" },
  ],
  // PLACEHOLDER: privacy policy and terms pages
  legal: { privacy: "#", terms: "#" },
  branch: {
    phone: "+966 55 868 2743" as string | null,
    // Schema.org opening hours (16:00–02:00, crossing midnight). Assumed daily.
    openingHours: "Mo-Su 16:00-02:00",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("Safwa Broast, Al Qafilah, Khamis Mushait"),
  },
} as const;
