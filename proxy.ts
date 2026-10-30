import { NextResponse, type NextRequest } from "next/server";
import LoginSessionUser from "./src/lib/login/manage-users";

export async function proxy(request: NextRequest) {
  const urlPath = request.nextUrl.pathname.split("/");

  if (urlPath[1] === "z_admin") {
    const isLogin = await LoginSessionUser.verifyLogin("admin");

    if (!isLogin && urlPath[2] !== "auth")
      return NextResponse.redirect(
        new URL("z_admin/auth", request.nextUrl.origin),
      );

    if (isLogin && urlPath[2] === "auth")
      return NextResponse.redirect(new URL("/z_admin", request.nextUrl.origin));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Exclude API routes, static files, image optimizations, and .png files
    // "/((?!api|_next/static|_next/image|.*\\.(png|svg)$).*)",
    "/((?!api|_next/static|_next/image|.*\\.(?:png|svg)$).*)",
  ],
};
