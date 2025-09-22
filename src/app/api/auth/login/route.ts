import { setAuthCookie, signJwt } from "@/lib/auth";
import { verifyPassword } from "@/lib/password";
import { findUserByEmail } from "@/lib/user";
import { NextResponse } from "next/server";
import z from "zod";

const loginSchema = z.object({
  email: z.email({ message: "Enter a valid email" }),
  password: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = loginSchema.parse(body);

    const user = await findUserByEmail(email);

    if (!user || !user.is_active) {
      return NextResponse.json(
        {
          error: "Invalid Credentials",
        },
        { status: 401 }
      );
    }

    const ok = await verifyPassword(password, user.password_hash);

    if (!ok) {
      return NextResponse.json(
        {
          error: "Invalid Password",
        },
        { status: 401 }
      );
    }

    const token = await signJwt({
      sub: String(user.id),
      email: user.email,
      role: user.role,
    });

    await setAuthCookie(token);

    return NextResponse.json({
      success: true,
      message: "Login Successful",
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Invalid input data",
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
