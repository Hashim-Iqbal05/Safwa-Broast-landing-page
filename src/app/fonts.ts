import { Rubik } from "next/font/google";

// One family for both scripts: Rubik's heavy, rounded letterforms echo the logo lettering
// and it ships Arabic glyphs, so /en and /ar share one typographic voice.
export const rubik = Rubik({
  subsets: ["latin", "arabic"],
  variable: "--font-rubik",
  display: "swap",
});

export const fontVariables = rubik.variable;
