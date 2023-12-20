import React from "react";
import styles from "@/layout/DashboardSidebar.module.css";
import { CgProfile } from "react-icons/cg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import LogoutBtn from "@/module/LogoutBtn";

interface Props {
  children: React.ReactNode;
}

async function DashboardSidebar({ children }: Props) {
  const session = await getServerSession(authOptions);

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        <p>{session?.user?.email}</p>
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت آگهی</Link>
        <LogoutBtn/>
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSidebar;
