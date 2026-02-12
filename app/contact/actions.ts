"use server";

import { Resend } from "resend";

function getEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

export async function sendContactEmail(_: any, formData: FormData) {
  try {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const company = String(formData.get("company") ?? "").trim();
    if (company) return { ok: true as const }; // bot trap

    if (!name || !email || !message) {
      return { ok: false as const, error: "Please fill out all fields." };
    }

    const resend = new Resend(getEnv("RESEND_API_KEY"));
    const to = getEnv("CONTACT_TO_EMAIL");
    const from = getEnv("CONTACT_FROM_EMAIL");

    console.log("[contact] sending", { to, from, name, email });

    const result = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Motus Inquiry — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
    });

    console.log("[contact] resend result", result);

    return { ok: true as const };
  } catch (err: any) {
    console.error("[contact] ERROR", err);
    return { ok: false as const, error: err?.message ?? "Email failed to send." };
  }
}
