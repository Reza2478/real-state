import React from "react";
import styles from "@/module/SideBar.module.css";
import { FaFilter } from "react-icons/fa6";
import Link from "next/link";
import { categories } from "@/constants/strings";
import Icons from "@/interfaces/Icons";


function SideBar() {
  return (
    <div className={styles.container}>
      <p>
        <FaFilter /> دسته بندی
      </p>
      <Link href="/buy-residentials">همه</Link>
      {Object.keys(categories).map((query, index) => (
        <Link
          href={{
            pathname: "/buy-residentials",
            query: { category: query },
          }}
          key={index}
        >
          {categories[query as keyof Icons]}
        </Link>
      ))}
    </div>
  );
}

export default SideBar;
