import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = { name?: string; email?: string; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const message = (data.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and a note." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "That email doesn't look right." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO || "hello@neosmartlabs.com";
  const from = process.env.CONTACT_FROM || "Neosmart <onboarding@resend.dev>";

  if (!apiKey) {
    // Delivery isn't configured yet — the form falls back to a mailto link.
    return NextResponse.json(
      { error: "Email delivery isn't set up yet." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `A conversation, started — ${name}`,
      text: `${message}\n\n— ${name} <${email}>`,
    });
    if (error) {
      return NextResponse.json(
        { error: "Couldn't send just now. Please try the email link." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Couldn't send just now. Please try the email link." },
      { status: 502 }
    );
  }
}
