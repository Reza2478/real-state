import React from "react";
import styles from "@/layout/DashboardSidebar.module.css";
import { CgProfile } from "react-icons/cg";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import Link from "next/link";
import LogoutBtn from "@/module/LogoutBtn";

interface Props {
  children: React.ReactNode;
  role: string,
  email: string
}

async function DashboardSidebar({ children, role, email }: Props) {

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        {role === "ADMIN" && 'ادمین'}
        <p>{email}</p>
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profiles">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت آگهی</Link>
        {role === "ADMIN" && <Link href="/admin">در انتظار تایید</Link>}

        <LogoutBtn />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSidebar;
