import React from "react";
import styles from "@/module/SideBar.module.css";
import { FaFilter } from "react-icons/fa6";
import Link from "next/link";

function SideBar() {
  const queries = [
    { villa: "ویلا" },
    { apartment: "آپارتمان" },
    { store: "مغازه" },
    { office: "دفتر" },
  ];

  return (
    <div className={styles.container}>
      <p>
        <FaFilter /> دسته بندی
      </p>
        <Link href="/buy-residentials">همه</Link>
        {queries.map((query, index) => (
          <Link
            href={{
              pathname: "/buy-residentials",
              query: { category: Object.keys(query) },
            }}
            key={index}
          >
            {Object.values(query)}
          </Link>
        ))}
   
    </div>
  );
}

export default SideBar;
