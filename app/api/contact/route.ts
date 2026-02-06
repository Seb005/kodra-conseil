import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Adresse courriel invalide." },
        { status: 400 }
      );
    }

    // Send via Loops transactional email (or fallback to logging)
    const apiKey = process.env.LOOPS_API_KEY;

    if (apiKey) {
      // Option 1: Create a contact in Loops with the message as a custom field
      const body: Record<string, unknown> = {
        email,
        firstName: name,
        source: "kodra.ca - formulaire contact",
        userGroup: "contact",
      };

      const mailingListId = process.env.LOOPS_MAILING_LIST_ID;
      if (mailingListId) {
        body.mailingLists = { [mailingListId]: true };
      }

      const res = await fetch("https://app.loops.so/api/v1/contacts/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!res.ok && res.status !== 409) {
        const data = await res.json().catch(() => null);
        console.error("Loops API error:", res.status, data);
      }
    }

    // Log the message server-side (always, as backup)
    console.log("=== Nouveau message de contact ===");
    console.log(`Nom: ${name}`);
    console.log(`Courriel: ${email}`);
    console.log(`Message: ${message}`);
    console.log("================================");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}
