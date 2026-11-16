import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/brand/logo.png";
import { site } from "@/lib/site";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";
import { StoreBadges } from "./StoreBadges";
import { PinIcon, SocialIcon, ArrowIcon } from "./icons";

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

type Props = { dict: Dictionary; locale: Locale };

export async function SiteFooter({ dict, locale }: Props) {
  const t = dict.footer;
  const other = locale === "en" ? "ar" : "en";
  const year = await currentYear();

  const heading = "font-bold text-cream/50";
  const link = "underline-offset-4 transition hover:text-yolk hover:underline";

  return (
    <footer className="bg-ink text-cream">
      {/* Sign-off */}
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6 lg:pt-28">
        <h2 className="text-5xl leading-[0.92] font-black tracking-[-0.04em] sm:text-7xl lg:text-8xl rtl:leading-[1.25] rtl:tracking-normal">
          {t.ctaTitle}
        </h2>
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-md text-lg leading-relaxed text-cream/75">{t.ctaBody}</p>
          <StoreBadges dict={dict.stores} />
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-cream/15 px-4 pt-12 pb-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.3fr_1fr_1.4fr_1fr] lg:gap-8">
        <div>
          <Link href={`/${locale}`} className="inline-flex items-center gap-3" aria-label={dict.nav.home}>
            <Image src={logo} alt="" width={64} height={64} className="size-16" />
            <span className="text-xl font-extrabold tracking-tight">{dict.brand}</span>
          </Link>
          <p className="mt-4 max-w-xs leading-relaxed text-cream/70">{t.tagline}</p>
        </div>

        <nav aria-labelledby="footer-explore">
          <h3 id="footer-explore" className={heading}>{t.explore}</h3>
          <ul className="mt-4 space-y-3 font-semibold">
            <li><a href="#features" className={link}>{t.links.features}</a></li>
            <li><a href="#download" className={link}>{t.links.download}</a></li>
            <li><a href="#visit" className={link}>{t.links.visit}</a></li>
            <li>
              <Link href={`/${other}`} hrefLang={other} lang={other} className={link}>
                {dict.nav.switchLang}
              </Link>
            </li>
          </ul>
        </nav>

        <div id="visit" className="scroll-mt-6">
          <h3 className={heading}>{t.visit}</h3>
          <address className="mt-4 space-y-3 not-italic">
            <p className="flex gap-2.5 leading-relaxed">
              <PinIcon className="mt-1 size-4 shrink-0 text-brand" />
              <span>{t.address}</span>
            </p>
            <p>
              <a href={site.branch.mapsUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 font-semibold ${link}`}>
                {t.directions}
                <ArrowIcon className="size-4" />
              </a>
            </p>
            <p className="text-cream/70">
              {site.branch.phone ? (
                <a href={`tel:${site.branch.phone.replace(/\s/g, "")}`} className={link} dir="ltr">
                  {site.branch.phone}
                </a>
              ) : (
                t.phonePlaceholder
              )}
            </p>
            <p className="text-cream/70">{t.hours}</p>
          </address>
        </div>

        <div>
          <h3 className={heading}>{t.follow}</h3>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {site.social.map((s) => (
              <li key={s.id}>
                <a
                  href={s.url}
                  aria-label={s.label}
                  target={s.url === "#" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="grid size-11 place-items-center rounded-full border-2 border-cream/25 transition hover:border-yolk hover:bg-yolk hover:text-ink"
                >
                  <SocialIcon name={s.id} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Legal */}
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-cream/15 px-4 py-6 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {year} {dict.brand}. {t.rights}</p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <li><a href={site.legal.privacy} className={link}>{t.privacy}</a></li>
          <li><a href={site.legal.terms} className={link}>{t.terms}</a></li>
          <li>
            <a href="#top" className={`inline-flex items-center gap-1.5 font-semibold text-cream ${link}`}>
              {t.backToTop}
              <ArrowIcon className="size-4 -rotate-90 rtl:rotate-90" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
