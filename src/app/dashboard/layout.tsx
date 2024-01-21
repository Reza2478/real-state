import DashboardSidebar from "@/layout/DashboardSidebar";
import React from "react";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Metadata } from "next";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "پنل کاربری املاک",
};

async function DashboardLayout({ children }: Props) {
    const session = await getServerSession(authOptions);

    if (!session) redirect("/signin");

    await connectDB()
    const user= await User.findOne({email:session.user?.email})
    
  return <DashboardSidebar email={user.email} role={user.role}>{children}</DashboardSidebar>;
}

export default DashboardLayout;
