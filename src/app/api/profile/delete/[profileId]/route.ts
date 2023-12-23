import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  profileId: string;
}

export async function DELETE(req: NextRequest, context: ParsedUrlQuery) {
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

    const profile = await Profile.findOne({ _id: profileId });

    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است" },
        { status: 403 }
      );
    }

    await Profile.deleteOne({ _id: profileId });

    return NextResponse.json(
      { message: "آگهی مورد نظر با موفقیت  حذف شد" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکل در سمت سرور رخ داده است" },
      { status: 500 }
    );
  }
}
