import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  profileId: string;
}

export async function PATCH(req: NextRequest, context: ParsedUrlQuery) {
  try {
    await connectDB();

    const { profileId } = context?.params as unknown as IParams;
    const session = await getServerSession(req);

    if (!session) {
      return NextResponse.json(
        { error: "لطفا ابتدا به حساب کاربری خود وارد شوید" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user?.email });

    if (!user) {
      return NextResponse.json({ error: "کاربر یافت نشد" }, { status: 404 });
    }

    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "دسترسی شما به محدود شده است" },
        { status: 403 }
      );
    }
    const profile = await Profile.findOne({ _id: profileId });

    profile.published = true;

    profile.save();

    return NextResponse.json({ message: "آگهی منتشر شد" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکل در سمت سرور رخ داده است" },
      { status: 500 }
    );
  }
}
