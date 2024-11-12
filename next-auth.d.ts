import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    id: string;
  }

  interface JWT {
    id: string;
  }

  interface Profile {
    id?: string | null;
    login?: string | null;
    bio?: string | null;
  }
}
