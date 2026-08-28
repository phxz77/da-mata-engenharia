import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  city?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Payload;
  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const message = body.message?.trim();

  if (!name || !phone || !message) {
    return NextResponse.json(
      { ok: false, error: "Campos obrigatórios ausentes." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    received: {
      name,
      phone,
      email: body.email?.trim() || null,
      service: body.service?.trim() || null,
      city: body.city?.trim() || null,
    },
  });
}
