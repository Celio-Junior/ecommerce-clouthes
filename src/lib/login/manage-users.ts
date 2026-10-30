// "use server";

import { cookies } from "next/headers";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import envVar from "env-var";
type RoleType = "admin" | "user";

export default class LoginSessionUser {
  private static expiresIn = 1000 * 60 * 60 * 2;

  private static COOKIES_NAME = [
    envVar.get("COOKIE_USER").required().asString(),
    envVar.get("COOKIE_ADMIN").required().asString(),
  ];

  private static TOKEN_SECRETE_ROLE = [
    new TextEncoder().encode(
      envVar.get("TOKEN_SECRET_USER").required().asString(),
    ),
    new TextEncoder().encode(
      envVar.get("TOKEN_SECRET_ADMIN").required().asString(),
    ),
  ];

  static async createLogin(token: string, role: RoleType) {
    const expires = new Date(Date.now() + this.expiresIn);
    const cookiesStore = await cookies();

    cookiesStore.set(
      role === "user" ? this.COOKIES_NAME[0] : this.COOKIES_NAME[1],
      token,
      {
        httpOnly: true,
        secure: true,
        expires,
      },
    );
  }

  static async createToken<T extends object & JWTPayload>(
    payload: T,
    role: RoleType,
  ) {
    return await new SignJWT(payload)
      .setExpirationTime(Date.now() + this.expiresIn)
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .sign(
        role === "user"
          ? this.TOKEN_SECRETE_ROLE[0]
          : this.TOKEN_SECRETE_ROLE[1],
      );
  }

  static async verifyToken(token: string, role: RoleType) {
    try {
      const { payload } = await jwtVerify(
        token,

        role === "user"
          ? this.TOKEN_SECRETE_ROLE[0]
          : this.TOKEN_SECRETE_ROLE[1],

        { algorithms: ["HS256"] },
      );

      return payload;
    } catch {
      return false;
    }
  }

  static async verifyLogin(role: RoleType) {
    const cookiesStore = await cookies();
    const token = cookiesStore.get(
      role === "user" ? this.COOKIES_NAME[0] : this.COOKIES_NAME[1],
    );

    if (!token) return false;

    return this.verifyToken(token.value, role);
  }
}
