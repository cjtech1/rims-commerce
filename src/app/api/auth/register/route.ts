import { createUser, findUserByEmail } from "@/lib/user";
import { z } from "zod";
import { NextResponse } from "next/server";
import { hashPassword } from "@/lib/password";

const RegisterSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  firstName: z.string(),
  lastName: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, firstName, lastName } = RegisterSchema.parse(body);

    const existing = await findUserByEmail(email);

    if (existing) {
      return NextResponse.json({
        error: "User already registered",
        status: 409,
      });
    }

    const passwordHash = await hashPassword(password);
    const user = await createUser(email, passwordHash, firstName, lastName);

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
      },
      status: 201,
    });
  } catch (error: any) {
    const message = error?.message || "Invalid request";
    return NextResponse.json({
      error: message,
      status: 400,
    });
  }
}
