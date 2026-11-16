// A realistic phone (titanium rim, black bezel, Dynamic Island, side buttons) with an iOS status bar.
// The screen is 300×650 px; pass the app UI as children (positioned below the 44 px status bar).

export const SCREEN = { width: 300, height: 650, statusBar: 44 } as const;

export function Device({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div role="img" aria-label={label} className={`relative w-[322px] shrink-0 max-[359px]:scale-90 ${className}`}>
      <span aria-hidden="true" className="absolute top-[112px] -start-[2px] h-7 w-[3px] rounded-full bg-[#4a3f3a]" />
      <span aria-hidden="true" className="absolute top-[156px] -start-[2px] h-12 w-[3px] rounded-full bg-[#4a3f3a]" />
      <span aria-hidden="true" className="absolute top-[216px] -start-[2px] h-12 w-[3px] rounded-full bg-[#4a3f3a]" />
      <span aria-hidden="true" className="absolute top-[178px] -end-[2px] h-16 w-[3px] rounded-full bg-[#4a3f3a]" />

      <div aria-hidden="true" className="rounded-[3.4rem] bg-[#3d3330] p-[3px] ring-1 ring-white/10">
        <div className="rounded-[3.2rem] bg-black p-2">
          <div className="relative h-[650px] overflow-hidden rounded-[2.6rem] bg-[#F9F9F9]">
            {/* App UI */}
            <div className="absolute inset-x-0 top-11 bottom-0 overflow-hidden">{children}</div>

            {/* Status bar (always LTR, like iOS) */}
            <div dir="ltr" className="absolute inset-x-0 top-0 flex h-11 items-center justify-between bg-white px-7 pt-0.5 text-[13px] font-semibold text-ink">
              <span>9:33</span>
              <span className="flex items-center gap-1.5">
                <svg viewBox="0 0 18 12" className="h-[11px] w-[17px]" fill="currentColor">
                  <rect x="0" y="8" width="3" height="4" rx="1" />
                  <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
                  <rect x="10" y="3" width="3" height="9" rx="1" />
                  <rect x="15" y="0" width="3" height="12" rx="1" />
                </svg>
                <svg viewBox="0 0 16 12" className="h-[11px] w-[15px]" fill="currentColor">
                  <path d="M8 2.6c2.3 0 4.4.9 6 2.4l1.3-1.4A10.4 10.4 0 0 0 8 .6 10.4 10.4 0 0 0 .7 3.6L2 5a8.4 8.4 0 0 1 6-2.4zm0 3.5c1.3 0 2.5.5 3.4 1.3l1.3-1.4A6.8 6.8 0 0 0 8 4.1 6.8 6.8 0 0 0 3.3 6l1.3 1.4A4.8 4.8 0 0 1 8 6.1zm0 3.4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                </svg>
                <svg viewBox="0 0 27 12" className="h-3 w-[26px]">
                  <rect x="0.5" y="0.5" width="22" height="11" rx="3.5" fill="none" stroke="currentColor" strokeOpacity=".35" />
                  <rect x="2" y="2" width="17" height="8" rx="2" fill="currentColor" />
                  <rect x="24" y="4" width="2" height="4" rx="1" fill="currentColor" fillOpacity=".35" />
                </svg>
              </span>
            </div>

            {/* Dynamic Island */}
            <span className="absolute top-[10px] left-1/2 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
}
