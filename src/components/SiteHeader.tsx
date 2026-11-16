import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/brand/logo.png";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";

type Props = { dict: Dictionary; locale: Locale };

export function SiteHeader({ dict, locale }: Props) {
  const other = locale === "en" ? "ar" : "en";
  return (
    <header id="top" className="bg-cream">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href={`/${locale}`} className="flex items-center gap-2.5" aria-label={dict.nav.home}>
          <Image src={logo} alt="" width={56} height={56} className="size-14" priority />
          <span className="hidden text-xl font-extrabold tracking-tight sm:block">{dict.brand}</span>
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href={`/${other}`}
            hrefLang={other}
            lang={other}
            aria-label={dict.nav.switchLangLabel}
            className="rounded-full px-3.5 py-2.5 text-sm font-semibold underline-offset-4 hover:underline"
          >
            {dict.nav.switchLang}
          </Link>
          <a href="#download" className="btn btn-primary min-h-11 px-5 text-sm">
            {dict.nav.getApp}
          </a>
        </div>
      </nav>
    </header>
  );
}
