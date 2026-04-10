import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "kane@kamba.io";

// --- Rate limiter (in-memory, per IP, resets on restart) ---
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // max submissions
const RATE_WINDOW = 60 * 60 * 1000; // per hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: Request) {
  try {
    // Rate limit by IP
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, company, message, website } = body;

    // Honeypot: if the hidden "website" field is filled, it's a bot
    if (website) {
      // Silently succeed so bots think it worked
      return NextResponse.json({ success: true });
    }

    // Validation
    if (!name || !company) {
      return NextResponse.json({ error: "Name and company are required" }, { status: 400 });
    }
    if (name.length < 2 || company.length < 2) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: "Kamba Contact <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: `[Kamba] New inquiry from ${name} (${company})`,
      text: [
        `Name: ${name}`,
        `Company: ${company}`,
        `Message:`,
        message || "(no message)",
        ``,
        `---`,
        `Sent from kamba.io contact form`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
