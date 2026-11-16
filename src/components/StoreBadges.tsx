import { site } from "@/lib/site";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { AppleIcon, PlayIcon } from "./icons";

type Props = { dict: Dictionary["stores"]; className?: string };

/**
 * App Store / Google Play badges. While a store isn't live (site.stores.*.live = false)
 * the badge renders as a non-interactive element (labelled "coming soon" for screen readers)
 * instead of a dead link. The surrounding copy says "Coming soon on".
 */
export function StoreBadges({ dict, className = "" }: Props) {
  const badges = [
    { key: "appStore", top: dict.appStoreTop, name: dict.appStore, icon: <AppleIcon className="size-7" />, ...site.stores.appStore },
    { key: "playStore", top: dict.playStoreTop, name: dict.playStore, icon: <PlayIcon className="size-6" />, ...site.stores.playStore },
  ];

  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {badges.map((b) => {
        const inner = (
          <>
            {b.icon}
            <span className="flex flex-col items-start leading-none" dir="ltr">
              <span className="text-[0.68rem] font-medium tracking-wide text-white/70">{b.top}</span>
              <span className="mt-1 text-[1.05rem] font-bold tracking-tight">{b.name}</span>
            </span>
          </>
        );
        const cls =
          "relative flex h-14 min-w-[10rem] items-center gap-3 rounded-2xl border border-white/15 bg-black px-3.5 text-white";
        return (
          <li key={b.key}>
            {b.live ? (
              <a href={b.url} className={`${cls} transition hover:border-white/40`} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <div className={cls} aria-label={`${b.name}, ${dict.comingSoon}`}>
                {inner}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
