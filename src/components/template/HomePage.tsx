import React from 'react'
import styles from "@/template/HomePage.module.css"
import { FiCircle } from "react-icons/fi"
import CategoryCard from '@/module/CategoryCard'
import { FaCity } from "react-icons/fa"

function HomePage() {

    const services = ["خرید", "فروش", "رهن", "اجاره"]
    const cities = ["اصفهان", "تهران", "سنندج", "دزفول", "کرج", "شیراز", "خرم آباد", "مشهد"]

    return (
        <>
            <div className={styles.banner}>
                <div className={styles.desc}>
                    <h1>سامانه خرید و فروش ملک</h1>
                    <ul>
                        {
                            services.map((item) => <li key={item}>
                                <FiCircle />
                                <span>{item} </span>
                            </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className={styles.categories}>
                <CategoryCard title="خانه ویلایی" name="villa" />
                <CategoryCard title='آپارتمان' name='apartment' />
                <CategoryCard title='مغازه' name='store' />
                <CategoryCard title='دفتر' name='office' />
            </div>
            <div className={styles.city}>
                <h3>شهر های پر بازدید</h3>
                <ul>
                    {cities.map(item => <li key={item}><FaCity /><span >{item}</span></li>)}
                </ul>
            </div>
        </>
    )
}

export default HomePage