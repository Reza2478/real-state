import React from "react";
import styles from "@/template/DashboardPage.module.css";

interface Props {
  createdAt: string;
}

function DashboardPage(props: Props) {
  const { createdAt } = props;
  return (
    <div className={styles.container}>
      <h3>سلام :)</h3>
      <p>آگهی های خود را ثبت کنید تاهزاران نفر آن ها را مشاهده کنند</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت</p>
        <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
      </div>
    </div>
  );
}

export default DashboardPage;
