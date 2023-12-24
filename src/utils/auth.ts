import { hash, compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { AuthOptions } from "next-auth";

async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

async function verifyPassword(password: string, hashedPassword: string) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}


export const authOptions: AuthOptions = {
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

export { hashPassword, verifyPassword };
