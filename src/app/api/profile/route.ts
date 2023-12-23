import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const profiles = await Profile.find().select("-userId");

    return NextResponse.json({ data: profiles }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکل در سمت سرور رخ داده است" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
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
    } = await req.json();

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
      price: +price,
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

export async function PATCH(req: NextRequest) {
  try {
    await connectDB();
    const {
      _id,
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
    } = await req.json();

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

    if (
      !_id ||
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

    const profile = await Profile.findOne({ _id });

    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است" },
        { status: 403 }
      );
    }

    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.price = price;
    profile.realState = realState;
    profile.phone = phone;
    profile.rules = rules;
    profile.amenities = amenities;
    profile.constractionDate = constractionDate;
    profile.category = category;

    profile.save();

    return NextResponse.json(
      { message: "آکهی با موفقیت به روزرسانی شد" },
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
