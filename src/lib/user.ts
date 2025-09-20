import { query } from "./db";

type userData = {
  id: number;
  email: string;
  password_hash: string;
  role: string;
  is_active: boolean;
  first_name: string;
  last_name: string;
  email_verified: boolean;
};

export async function findUserByEmail(email: string): Promise<userData | null> {
  const res = await query("SELECT * FROM users WHERE email = $1 LIMIT 1", [
    email,
  ]);
  return res.rows[0] || null;
}

export async function createUser(
  email: string,
  passwordHash: string,
  firstName: string,
  lastName: string
): Promise<userData> {
  const res = await query(
    `INSERT INTO users (email, password_hash, first_name,last_name)
       VALUES ($1, $2, $3,$4)
       RETURNING id, email, password_hash, role, is_active`,
    [email, passwordHash, firstName, lastName]
  );
  return res.rows[0];
}

export async function findUserById(id: number): Promise<userData | null> {
  const res = await query("SELECT * FROM users WHERE id = $1 LIMIT 1", [id]);
  return res.rows[0] || null;
}
