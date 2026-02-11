import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const isOfficialDomain =
    host === "motusdesigns.com" || host.endsWith(".motusdesigns.com");

  const res = NextResponse.next();

  // Block indexing unless it's the official domain
  if (!isOfficialDomain) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  return res;
}

// Apply to all routes (pages + assets don't need it, but harmless)
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
