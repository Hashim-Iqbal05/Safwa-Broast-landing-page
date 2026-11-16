import Image from "next/image";
import header from "@/assets/app/tracking-header.png";
import screen from "@/assets/app/tracking-screen.png";
import tabbar from "@/assets/app/tracking-tabbar.png";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { Device, SCREEN } from "./Device";

// The app's real tracking screen (390 px wide frame), split into a fixed header, scrolling content
// and a fixed tab bar, shown at the device's 300 px screen width.
const scale = SCREEN.width / screen.width;
const headerHeight = Math.round(header.height * scale);
const contentHeight = Math.round(screen.height * scale);
const tabbarHeight = Math.round(tabbar.height * scale);
// How far the content scrolls so its bottom clears the fixed tab bar
const tourEnd = -(contentHeight - (SCREEN.height - SCREEN.statusBar - headerHeight - tabbarHeight));
// Driver marker on the map: (195, 265) in the frame, minus the 82 px header slice
const driver = { x: 195 * scale, y: (265 - header.height) * scale };

// Timeline mirrors the screen: two steps done, "on the way" live, "arrived" still to come
const itemState = ["opacity-70", "opacity-70", "opacity-100", "opacity-50"];

export function TrackingShowcase({ dict }: { dict: Dictionary }) {
  const t = dict.tracking;
  return (
    <section id="features" aria-labelledby="tracking-title" className="scroll-mt-6 overflow-hidden bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[auto_1fr] lg:gap-x-24 lg:gap-y-12 lg:py-32">
        <div className="lg:col-start-2 lg:row-start-1 lg:self-end">
          <h2
            id="tracking-title"
            className="max-w-xl text-5xl leading-[0.92] font-black tracking-[-0.04em] sm:text-6xl lg:text-7xl rtl:leading-[1.25] rtl:tracking-normal"
          >
            {t.title}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-pretty text-cream/70">{t.body}</p>
        </div>

        <div className="flex justify-center lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:items-center">
          <Device label={t.screenAlt}>
            {/* Scrolling content: slowly scrolls down and back, like someone checking their order */}
            <div className="absolute inset-x-0 bottom-0 overflow-hidden" style={{ top: headerHeight }}>
              <div className="screen-tour relative" style={{ ["--tour-end" as string]: `${tourEnd}px` }}>
                <Image src={screen} alt="" sizes="300px" className="block h-auto w-full" />
                {/* Live pulse on the driver's marker */}
                <span
                  className="absolute size-9 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: driver.x, top: driver.y }}
                >
                  <span className="ping-ring absolute inset-0 rounded-full border-2 border-brand" />
                </span>
              </div>
            </div>
            {/* Fixed app header */}
            <Image src={header} alt="" sizes="300px" className="absolute inset-x-0 top-0 h-auto w-full" />
            {/* Fixed tab bar + home indicator */}
            <Image src={tabbar} alt="" sizes="300px" className="absolute inset-x-0 bottom-0 h-auto w-full" />
            <span className="absolute bottom-1.5 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-ink/85" />
          </Device>
        </div>

        <ol className="relative max-w-md lg:col-start-2 lg:row-start-2 lg:self-start">
          {/* Rail from the first dot to the last; red up to the live step */}
          <span aria-hidden="true" className="absolute start-[11px] top-[27px] bottom-[51px] w-0.5 bg-cream/15">
            <span className="absolute inset-x-0 top-0 h-2/3 bg-brand" />
          </span>
          {t.steps.map((step, i) => (
            <li key={step.title} aria-current={i === 2 ? "step" : undefined} className={`relative flex min-h-[78px] gap-5 py-3 ${itemState[i]}`}>
              <span aria-hidden="true" className="relative mt-[3px] grid size-6 shrink-0 place-items-center rounded-full border-2 border-cream/30 bg-ink">
                {i < 3 && <span className="absolute -inset-0.5 rounded-full bg-brand" />}
                {i === 2 && <span className="ping-ring absolute -inset-0.5 rounded-full border-2 border-brand" />}
              </span>
              <div>
                <p className="text-lg leading-snug font-bold">{step.title}</p>
                <p className="mt-0.5 text-cream/70">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
