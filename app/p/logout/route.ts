import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL("/p/login", req.url);

  const res = NextResponse.redirect(url);

  // Clear the auth cookie
  res.cookies.set("motus_portfolio_auth", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0, // immediately expire
  });

  return res;
}