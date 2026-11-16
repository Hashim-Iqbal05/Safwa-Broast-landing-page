import Image from "next/image";
import pile from "@/assets/food/broast-pile.png";
import sticker from "@/assets/brand/logo-sticker.png";
import { site } from "@/lib/site";
import type { Dictionary, Locale } from "@/app/[lang]/dictionaries";
import { StoreBadges } from "./StoreBadges";
import { PinIcon } from "./icons";

export function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const t = dict.hero;
  const other = locale === "en" ? { lang: "ar", dir: "rtl", align: "text-left" } : { lang: "en", dir: "ltr", align: "text-right" };

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden border-b-[3px] border-ink bg-brand text-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative z-10 pt-9 sm:pt-14 lg:pt-16 lg:pb-28">
          <a
            href={site.branch.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white underline-offset-4 hover:underline"
          >
            <PinIcon className="size-4" />
            {t.location}
          </a>

          <h1
            id="hero-title"
            className="mt-4 text-[3.3rem] leading-[0.9] font-black tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem] rtl:text-[3.1rem] rtl:leading-[1.2] rtl:tracking-normal sm:rtl:text-7xl lg:rtl:text-[6rem]"
          >
            <span className="block">{t.titleLead}</span>
            <span className="block">{t.titleAccent}</span>
          </h1>

          {/* The same line in the other language, like bilingual shop signage (decorative duplicate, hidden from screen readers) */}
          <p aria-hidden="true" lang={other.lang} dir={other.dir} className={`mt-4 text-xl font-bold text-yolk sm:text-2xl ${other.align}`}>
            {t.altLine}
          </p>

          <p className="mt-6 max-w-sm leading-relaxed text-white sm:text-lg lg:max-w-md">{t.subtitle}</p>

          <div id="download" className="mt-8 scroll-mt-6">
            <p className="text-sm font-semibold text-white">{t.badgesLabel}</p>
            <StoreBadges dict={dict.stores} className="mt-3" />
          </div>
        </div>
      </div>

      {/* The pile rises from the bottom edge. Its lower half (plate, fries, frame edges) stays hidden below. */}
      <div className="relative mt-8 h-[15rem] sm:h-[19rem] lg:absolute lg:end-[-5rem] lg:bottom-0 lg:mt-0 lg:h-[22rem] lg:w-[46rem]">
        {/* Phones: 135% wide and centred, so both cut sides fall off-screen.
            ≥640px: natural size (736px), bleeding off the end edge; the rooster covers the start-side cut. */}
        <div className="absolute inset-y-0 start-[-17.5%] w-[135%] sm:start-auto sm:end-[-6rem] sm:w-[46rem] lg:start-0 lg:end-0 lg:w-auto">
          <Image
            src={pile}
            alt={t.photoAlt}
            fill
            priority
            sizes="(min-width: 640px) 736px, 135vw"
            className="object-cover object-top"
          />
        </div>

        {/* The rooster, leaning on the pile (and hiding its cut edge from 640px up) */}
        <div className="absolute start-[5%] bottom-[34%] w-28 sm:start-auto sm:end-[35.5rem] sm:-bottom-6 sm:w-36 lg:end-auto lg:start-[-6rem] lg:-bottom-10 lg:w-56">
          <Image src={sticker} alt="" sizes="(min-width: 1024px) 224px, 144px" className="float h-auto w-full -rotate-6" />
          <p className="absolute -top-9 start-[72%] w-max max-w-[11rem] rotate-2 rounded-2xl border-[3px] border-ink bg-white px-3.5 py-2 text-sm leading-snug font-bold text-ink sm:text-base lg:-top-4 lg:start-[80%]">
            {t.bubble}
            <span
              aria-hidden="true"
              className="absolute -bottom-[9px] start-4 size-4 rotate-45 border-e-[3px] border-b-[3px] border-ink bg-white"
            />
          </p>
        </div>
      </div>
    </section>
  );
}
