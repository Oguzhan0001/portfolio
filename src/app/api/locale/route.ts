import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country") || "";
  const locale = country === "TR" ? "tr" : "en";
  return NextResponse.json({ locale });
}