import Image, { type StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes: string;
  /** Slowly scroll the (tall) screenshot up and down, as if someone is browsing. */
  scroll?: boolean;
  /** Extra layers drawn on top of the screen (annotations, markers). */
  children?: React.ReactNode;
};

/** Flat phone frame: thick ink bezel, screenshot cropped to a phone aspect from the top. */
export function PhoneFrame({ src, alt, className = "", sizes, scroll = false, children }: Props) {
  return (
    <div className={`rounded-[2.2rem] border-[3px] border-ink bg-ink p-2 ${className}`}>
      <div className="relative aspect-[9/19] overflow-hidden rounded-[1.7rem] bg-white">
        <Image src={src} alt={alt} fill sizes={sizes} className={`object-cover object-top ${scroll ? "screen-scroll" : ""}`} />
        {children}
      </div>
    </div>
  );
}
