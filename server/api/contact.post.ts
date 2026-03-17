import { defineEventHandler, readBody, createError } from "h3";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  challenge?: string;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactPayload>(event);

  const { name, email, message, phone, challenge } = body ?? {};

  // Server-side validation
  if (!name?.trim()) {
    throw createError({ statusCode: 400, statusMessage: "Name is required." });
  }
  if (!email?.trim() || !EMAIL_RE.test(email.trim())) {
    throw createError({
      statusCode: 400,
      statusMessage: "A valid email address is required.",
    });
  }
  if (!message?.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: "Message is required.",
    });
  }

  // Sanitise inputs before any downstream use
  const payload = {
    name: name.trim().slice(0, 200),
    email: email.trim().toLowerCase().slice(0, 254),
    phone: phone?.trim().slice(0, 30) ?? "",
    challenge: challenge?.trim().slice(0, 200) ?? "",
    message: message.trim().slice(0, 5000),
    receivedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error(
      "[contact form] DISCORD_WEBHOOK_URL environment variable is not set",
    );
    throw createError({
      statusCode: 503,
      statusMessage:
        "Contact form temporarily unavailable. Please email us directly.",
    });
  }

  const discordBody = {
    embeds: [
      {
        title: "New Contact Form Submission",
        color: 0x5865f2,
        fields: [
          { name: "Name", value: payload.name, inline: true },
          { name: "Email", value: payload.email, inline: true },
          ...(payload.phone
            ? [{ name: "Phone", value: payload.phone, inline: true }]
            : []),
          ...(payload.challenge
            ? [
                {
                  name: "Primary Challenge",
                  value: payload.challenge,
                  inline: false,
                },
              ]
            : []),
          { name: "Message", value: payload.message },
        ],
        footer: { text: `Received at ${payload.receivedAt}` },
      },
    ],
  };

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(discordBody),
  });

  if (!res.ok) {
    console.error(
      "[contact form] Discord webhook failed",
      res.status,
      await res.text(),
    );
    throw createError({
      statusCode: 502,
      statusMessage: "Failed to deliver message.",
    });
  }

  console.info("[contact form] delivered via Discord webhook", payload.email);

  return { ok: true };
});
