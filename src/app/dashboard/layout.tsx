import DashboardSidebar from "@/layout/DashboardSidebar";
import React from "react";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

async function DashboardLayout({ children }: Props) {
    const session = await getServerSession(authOptions);

    if (!session) redirect("/signin");
  return <DashboardSidebar>{children}</DashboardSidebar>;
}

export default DashboardLayout;
