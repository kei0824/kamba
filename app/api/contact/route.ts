import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, message } = body;

    if (!name || !company) {
      return NextResponse.json({ error: "Name and company are required" }, { status: 400 });
    }

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // For now, log the contact submission
    console.log("Contact form submission:", { name, company, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
