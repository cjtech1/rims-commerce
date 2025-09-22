import { NextResponse } from "next/server";
import { getAuthTokenFromCookies, verifyJwt } from "@/lib/auth";
import { findUserById } from "@/lib/user";

export async function GET() {
  const token = await getAuthTokenFromCookies();
  if (!token) return NextResponse.json({ user: null }, { status: 200 });

  const payload = await verifyJwt<{ sub: string }>(token);
  if (!payload) return NextResponse.json({ user: null }, { status: 200 });

  const user = await findUserById(Number(payload.sub));
  if (!user) return NextResponse.json({ user: null }, { status: 200 });

  return NextResponse.json({
    user: { id: user.id, email: user.email, role: user.role },
  });
}
