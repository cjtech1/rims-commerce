import { Pool, PoolClient } from "pg";

// Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  database: process.env.DB_NAME || "shopperdb",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "",
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection cannot be established
};

// Create a connection pool
const pool = new Pool(dbConfig);

// Handle pool errors
pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

/**
 * Execute a query with automatic connection management
 * @param text - SQL query string
 * @param params - Query parameters
 * @returns Query result
 */
export async function query(text: string, params?: any[]) {
  const start = Date.now();

  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;

    console.log("Executed query", {
      text,
      duration,
      rows: res.rowCount,
    });

    return res;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
}

/**
 * Get a client from the pool for transactions
 * @returns Database client
 */
export async function getClient(): Promise<PoolClient> {
  return await pool.connect();
}

/**
 * Test database connection
 * @returns Connection status
 */
export async function testConnection(): Promise<boolean> {
  try {
    const res = await query("SELECT NOW()");
    console.log("Database connection successful:", res.rows[0]);
    return true;
  } catch (error) {
    console.error("Database connection failed:", error);
    return false;
  }
}

/**
 * Close all connections in the pool
 */
export async function closePool(): Promise<void> {
  await pool.end();
}

export default pool;
