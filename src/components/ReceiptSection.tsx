import Image from "next/image";
import home from "@/assets/app/home-screen.png";
import logo from "@/assets/brand/logo.png";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { PhoneFrame } from "./PhoneFrame";

// Barcode bar widths (px), fixed so the server render is deterministic.
const bars = [3, 1, 2, 1, 1, 3, 2, 1, 3, 1, 1, 2, 1, 3, 1, 2, 2, 1, 1, 3, 1, 2, 1, 1, 3, 2, 1, 2, 1, 3, 1, 1, 2, 3, 1, 2];

export function ReceiptSection({ dict }: { dict: Dictionary }) {
  const t = dict.extras;
  const r = t.receipt;
  return (
    <section aria-labelledby="extras-title" className="overflow-hidden border-y-[3px] border-ink bg-brand text-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="max-w-md">
          <h2
            id="extras-title"
            className="text-5xl leading-[0.92] font-black tracking-[-0.04em] sm:text-6xl rtl:leading-[1.25] rtl:tracking-normal"
          >
            {t.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/90">{t.body}</p>
        </div>

        {/* Phone with the receipt "printing" out of it */}
        {/* home-screen.png is cropped above the first priced card (the app mock-ups still show AED there). */}
        <div className="relative mx-auto flex w-full max-w-md items-start justify-center pb-6 sm:max-w-lg">
          <PhoneFrame src={home} alt={t.screenAlt} sizes="224px" className="hidden w-56 shrink-0 -rotate-6 sm:block" />

          <div className="print w-full max-w-[20rem] shrink-0 rotate-2 sm:-ms-16 sm:mt-16 sm:w-[19rem] sm:rotate-3">
            <div className="receipt bg-white px-5 pt-6 pb-9 font-mono text-[0.8rem] leading-relaxed text-ink">
              <div className="text-center">
                <Image src={logo} alt="" width={56} height={56} className="mx-auto size-14 grayscale" />
                <p className="mt-2 text-sm font-bold uppercase">{r.store}</p>
                <p className="text-ink/70 uppercase">{r.branch}</p>
              </div>

              <div className="my-3 border-t-2 border-dashed border-ink/40" />
              <p className="flex justify-between uppercase">
                <span>{r.order}</span>
                <span dir="ltr">{r.orderNo}</span>
              </p>
              <p className="flex justify-between uppercase">
                <span>{r.date}</span>
                <span>{r.dateValue}</span>
              </p>
              <div className="my-3 border-t-2 border-dashed border-ink/40" />

              <ul className="space-y-1.5">
                {r.lines.map((line) => (
                  <li key={line.label} className="flex items-end gap-2">
                    <span>{line.label}</span>
                    <span aria-hidden="true" className="mb-1.5 min-w-4 flex-1 border-b-2 border-dotted border-ink/35" />
                    <span className="shrink-0 font-bold">{line.value}</span>
                  </li>
                ))}
              </ul>

              <div className="my-3 border-t-2 border-dashed border-ink/40" />
              <p className="flex items-start justify-between gap-3 text-sm font-bold uppercase">
                <span>{r.total}</span>
                <span className="text-end">{r.totalValue}</span>
              </p>
              <div className="my-3 border-t-2 border-dashed border-ink/40" />

              <p className="text-center uppercase">{r.thanks}</p>
              <div aria-hidden="true" className="mt-3 flex h-10 justify-center gap-[2px]" dir="ltr">
                {bars.map((w, i) => (
                  <span key={i} className="h-full bg-ink" style={{ width: w }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
