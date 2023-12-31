/* eslint-disable react/jsx-key */
import React from "react";
import styles from "@/template/HomePage.module.css";
import { FiCircle } from "react-icons/fi";
import CategoryCard from "@/module/CategoryCard";
import { FaCity } from "react-icons/fa";
import { categories, cities, services } from "@/constants/strings";
import Categories from "@/interfaces/Categories";

function HomePage() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و فروش ملک</h1>
          <ul>
            {services.map((item) => (
              <li key={item}>
                <FiCircle />
                <span>{item} </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
        {Object.keys(categories).map((i) => (
          <CategoryCard title={categories[i as keyof Categories]} name={i} />
        ))}
      </div>
      <div className={styles.city}>
        <h3>شهر های پر بازدید</h3>
        <ul>
          {cities.map((item) => (
            <li key={item}>
              <FaCity />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HomePage;
