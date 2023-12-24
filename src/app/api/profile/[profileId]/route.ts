import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import { NextRequest, NextResponse } from "next/server";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  profileId: string;
}

export async function GET(req: NextRequest, context: ParsedUrlQuery) {
  try {
    await connectDB();
    const { profileId } = context?.params as unknown as IParams;

    const profile = await Profile.findOne({ _id: profileId });

    if (!profile)
      return NextResponse.json(
        { error: "خطایی پیش آمده است لطفا مجدد تلاش کنید" },
        { status: 404 }
      );

    return NextResponse.json({ data: profile }, { status: 200 });
  } catch (error) {
    console.log(error);
    NextResponse.json(
      { error: "خطایی در سمت سرور رخ داده است" },
      { status: 500 }
    );
  }
}
