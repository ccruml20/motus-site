import { NextResponse } from "next/server";
import crypto from "crypto";

function env(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

function timingSafeEqual(a: string, b: string) {
  const aa = Buffer.from(a);
  const bb = Buffer.from(b);
  if (aa.length !== bb.length) return false;
  return crypto.timingSafeEqual(aa, bb);
}

export async function POST(req: Request) {
  const form = await req.formData();
  const password = String(form.get("password") ?? "");
  const nextPath = String(form.get("next") ?? "/p");

  const expected = env("PORTFOLIO_PASSWORD");

  if (!timingSafeEqual(password, expected)) {
    const url = new URL("/p/login", req.url);
    url.searchParams.set("next", nextPath);
    url.searchParams.set("error", "1");
    return NextResponse.redirect(url);
  }

  const res = NextResponse.redirect(new URL(nextPath, req.url));

  res.cookies.set("motus_portfolio_auth", "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });

  return res;
}