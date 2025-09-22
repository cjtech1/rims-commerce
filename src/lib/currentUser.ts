import { getAuthTokenFromCookies, verifyJwt } from "@/lib/auth";
import { findUserById } from "@/lib/user";

export async function getCurrentUser() {
  const token = await getAuthTokenFromCookies();
  if (!token) return null;

  const payload = await verifyJwt<{ sub: string }>(token);
  if (!payload) return null;

  const user = await findUserById(Number(payload.sub));
  if (!user) return null;

  return { id: user.id, email: user.email, role: user.role };
}
