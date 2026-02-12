"use server";

import { Resend } from "resend";
import { redirect } from "next/navigation";

function env(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

export async function sendContactEmail(formData: FormData) {
  console.log("[contact] ACTION HIT");

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) redirect("/contact?sent=0");

  const resend = new Resend(env("RESEND_API_KEY"));

  const result = await resend.emails.send({
    from: env("CONTACT_FROM_EMAIL"),
    to: env("CONTACT_TO_EMAIL"),
    replyTo: email,
    subject: `Motus Inquiry — ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}\n`,
  });

  console.log("[contact] RESEND RESULT", result);

  redirect("/contact?sent=1");
}

