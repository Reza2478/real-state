import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body:any=await req.json();

    const {
      title,
      category,
      location,
      price,
      rules,
      amenities,
      phone,
      realState,
      constractionDate,
      description,
    } = body;

    const session = await getServerSession(req);
    console.log({ session });

    if (!session) {
      return NextResponse.json(
        { error: "لطفا ابتدا ثبت نام کنید" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user?.email });
    console.log({ user });

    if (!user) {
      return NextResponse.json({ error: "کاربر یافت نشد" }, { status: 404 });
    }

    if (
      !title ||
      !category ||
      !location ||
      !price ||
      !phone ||
      !realState ||
      !constractionDate ||
      !description
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر را وارد کنید" },
        { status: 400 }
      );
    }

    const newProfile = Profile.create({
      title,
      category,
      location,
      price:+price,
      rules,
      amenities,
      phone,
      realState,
      constractionDate,
      description,
      userId: new Types.ObjectId(user._id),
    });

    return NextResponse.json(
      { message: "آکهی شما با موفقیت ایجاد شد" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکل در سمت سرور رخ داده است" },
      { status: 500 }
    );
  }
}
