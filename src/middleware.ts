import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country") || "US";
  const locale = country === "TR" ? "tr" : "en";

  const response = NextResponse.next();
  response.cookies.set("locale", locale, { path: "/" });
  response.cookies.delete("locale_manual");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.svg).*)"],
};