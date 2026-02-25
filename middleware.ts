import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const host = req.headers.get("host") || "";

  const isOfficialDomain =
    host === "motusdesigns.com" || host.endsWith(".motusdesigns.com");

  // 🔐 Protect private portfolio routes FIRST
  if (pathname.startsWith("/p")) {
    const authed =
      req.cookies.get("motus_portfolio_auth")?.value === "1";

    const isPublicPrivateEntry = pathname === "/p";

    if (!authed && !pathname.startsWith("/p/login") && !isPublicPrivateEntry) {
      const url = req.nextUrl.clone();
      url.pathname = "/p/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }

    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    return res;
}
  // For all other routes, proceed normally
  const res = NextResponse.next();

  // Block indexing unless it's the official domain
  if (!isOfficialDomain) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  return res;
}

// Apply to all routes (excluding Next static/image + favicon)
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
