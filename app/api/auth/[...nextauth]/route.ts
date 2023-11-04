import { usersCollection } from "@/lib/mongoClient";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          type: "email",
          label: "Enter your email",
          placeholder: "Ex. mdshahidulridoy@gmail.com",
        },
        password: {
          type: "password",
          label: "Enter your password",
        },
      },
      async authorize(credentials, req) {
        if (credentials) {
          const { email, password } = credentials;
          const found = await usersCollection.findOne({ email: email });
          if (found) {
            const matched = await bcrypt.compare(password, found.password);
            if (matched) {
              const user = {
                ...found,
                id: "1",
              };
              return user;
            } else {
              throw new Error("Password doesn't matched!");
            }
          } else {
            throw new Error("No user found!");
          }
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
