import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { TrackingShowcase } from "@/components/TrackingShowcase";
import { ReceiptSection } from "@/components/ReceiptSection";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";
import { getDictionary, getLocale } from "./dictionaries";

export default async function Home() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);

  // Local SEO: Restaurant structured data.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: dict.brand,
    servesCuisine: ["Broast", "Fried chicken", "Burgers", "Pizza"],
    url: `${site.url}/${locale}`,
    telephone: site.branch.phone?.replace(/\s/g, ""),
    openingHours: site.branch.openingHours,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opp. Husam Medical Clinic, Nasr Addin Al Tusi Street, Al Qafilah",
      addressLocality: "Khamis Mushait",
      addressRegion: "Asir",
      addressCountry: "SA",
    },
  };

  return (
    <>
      <SiteHeader dict={dict} locale={locale} />
      <main>
        <Hero dict={dict} locale={locale} />
        <TrackingShowcase dict={dict} />
        <ReceiptSection dict={dict} />
      </main>
      <SiteFooter dict={dict} locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
