import { NextResponse, type NextRequest } from "next/server";

// Only "/" needs a decision: send Arabic-preferring browsers to /ar, everyone else to /en.
export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept-language") ?? "";
  const first = accept.split(",")[0]?.trim().toLowerCase() ?? "";
  const locale = first.startsWith("ar") ? "ar" : "en";
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: ["/"],
};
