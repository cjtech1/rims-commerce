import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "dev-secret");
const jwtExpirein = process.env.JWT_EXPIRES_IN || "7d";
const jwtCookieName = process.env.JWT_COOKIE_NAME || "auth_token";

const cookieSecure = (process.env.COOKIE_SECURE || "true") === "true";
const cookieSameSite = (process.env.COOKIE_SAME_SITE || "lax") as
  | "lax"
  | "strict"
  | "none";
const cookieMaxAge = parseInt(process.env.COOKIE_MAX_AGE || "604800");

export type jwtPayload = {
  sub: string;
  email: string;
  role?: string;
};

export async function signJwt(payload: jwtPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(jwtExpirein)
    .sign(secret);
}

export async function verifyJwt<T = jwtPayload>(
  token: string
): Promise<T | null> {
  try {
    const { payload } = await jwtVerify<T>(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}

export async function setAuthCookie(token: string) {
  (await cookies()).set(jwtCookieName, token, {
    httpOnly: true,
    secure: cookieSecure,
    sameSite: cookieSameSite,
    path: "/",
    maxAge: cookieMaxAge,
  });
}

export async function clearAuthCookie() {
  (await cookies()).delete(jwtCookieName);
}

export async function getAuthTokenFromCookies(): Promise<string | null> {
  return (await cookies()).get(jwtCookieName)?.value || null;
}
