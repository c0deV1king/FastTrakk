import { testConnection } from "$lib/server/db/connection.js";
import { json } from "@sveltejs/kit";

export async function GET() {
  try {
    const isConnected = await testConnection();

    return json({
      success: isConnected,
      message: isConnected
        ? "Database connected successfully!"
        : "Database connection failed",
    });
  } catch (error) {
    return json(
      {
        success: false,
        message: "Connection test failed",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
