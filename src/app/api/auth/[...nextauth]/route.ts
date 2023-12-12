import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers/credentials";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { AuthOptions } from "next-auth";

interface Credentials extends Record<"email" | "password", string> {}

const authOptions: AuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    // @ts-ignore
    CredentialsProvider({
      async authorize(credentials: Credentials) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          console.log(error);
          throw new Error("مشکلی در سمت سرور رخ داده است");
        }

        if (!email || !password) {
          throw new Error("لطفا اطلاعات معتبر را وارد کنید");
        }

        const user = await User.findOne({ email });

        if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
