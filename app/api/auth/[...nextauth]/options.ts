import { URL } from "../../../utils/constant";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { name: "email", type: "email" },
        password: { name: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const newurl = "http://localhost:3000/api/signin"
        const res = await fetch(newurl, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        if (user) {
          console.log(user);
          return {
            ...user,
            id: user.data._id,
            name: user.data?.staffName || user.data?.companyName,
            role: user.data?.role,
            email: user.data?.email,
          };
        }
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/signin",
  },

  callbacks: {
    async redirect() {
      return "/";
    },

    async jwt({ user, token }: any) {
      if (user) token.role = user.role;

      return token;
    },

    async session({ token, session }: any) {
      if (session) session.user.role = token.role;

      return session;
    },
  },
};