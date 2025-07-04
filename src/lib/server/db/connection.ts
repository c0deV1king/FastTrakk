import mysql from "mysql2/promise";
import dbConfig from "./config.js";

export async function createConnection() {
  try {
    console.log("Attempting to connect with config:", {
      host: dbConfig.host,
      user: dbConfig.username,
      database: dbConfig.database,
      port: dbConfig.port,
      // Don't log password for security
    });

    const connection = (await mysql.createConnection({
      host: dbConfig.host,
      user: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.database,
      port: dbConfig.port,
    })) as any;

    console.log("✅ Connection created successfully");
    return connection;
  } catch (error) {
    console.error("Database connection failed:", error);
    console.error("Error code:", (error as any).code);
    console.error("Error errno:", (error as any).errno);
    console.error("Error sqlMessage:", (error as any).sqlMessage);
    throw error;
  }
}

export async function testConnection(): Promise<boolean> {
  let connection;
  try {
    console.log("Starting database connection test...");
    connection = await createConnection();
    console.log("Executing test query...");
    const [rows] = await connection.execute("SELECT 1 as test");
    console.log("Test query result:", rows);
    console.log("✅ Database connection successful!");
    return true;
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    return false;
  } finally {
    if (connection) {
      try {
        await connection.end();
        console.log("Connection closed");
      } catch (closeError) {
        console.error("Error closing connection:", closeError);
      }
    }
  }
}
