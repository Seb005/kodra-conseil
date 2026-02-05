import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    const apiKey = process.env.LOOPS_API_KEY;
    if (!apiKey) {
      console.error("LOOPS_API_KEY is not set");
      return NextResponse.json(
        { error: "Configuration serveur manquante." },
        { status: 500 }
      );
    }

    const body: Record<string, unknown> = {
      email,
      source: "kodraconseil.com",
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

    // 409 = contact already exists, treat as success
    if (res.ok || res.status === 409) {
      return NextResponse.json({ success: true });
    }

    const data = await res.json().catch(() => null);
    console.error("Loops API error:", res.status, data);
    return NextResponse.json(
      { error: "Impossible de s'inscrire pour le moment." },
      { status: 502 }
    );
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json(
      { error: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}
