import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest): NextResponse {
  const ip = req.headers.get("x-forwarded-for") || req.ip || "Unknown IP";

  console.log("IP address:", ip);

  return NextResponse.json({ message: "IP logged", ip });
}
