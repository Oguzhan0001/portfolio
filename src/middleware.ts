import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country");
  const locale = country === "TR" ? "tr" : "en";

  const response = NextResponse.next();
  response.headers.set("x-locale", locale);
  response.cookies.set("locale", locale);
  return response;
}