import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
        },
        password: { label: "Password" },
      },
      async authorize(credentials): Promise<any> {
        try {
          await connectDB();
        } catch (error) {
          console.log(error);
          throw new Error("مشکلی در سمت سرور رخ داده است");
        }

        if (!credentials?.email || !credentials.password) {
          throw new Error("لطفا اطلاعات معتبر را وارد کنید");
        }

        const user = await User.findOne({ email: credentials.email });

        if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");

        return { email: credentials.email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
