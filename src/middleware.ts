import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const existingLocale = request.cookies.get("locale")?.value;
  if (existingLocale) {
    return NextResponse.next();
  }

  const country = request.headers.get("x-vercel-ip-country") || "TR";
  const locale = country === "TR" ? "tr" : "en";

  const response = NextResponse.next();
  response.cookies.set("locale", locale, { path: "/", maxAge: 60 * 60 * 24 * 30 });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.svg).*)"],
};