import React from "react";
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import styles from "@/template/DetailsPage.module.css";
import ProfileData from "@/interfaces/ProfileData";
import ItemList from "@/module/ItemList";
import Title from "@/module/title";
import { e2p, sp } from "@/utils/replaceNumber";
import ShareButton from "@/module/ShareButton";
import { categories } from "@/constants/strings";
import { icons } from "@/constants/icons";
import Icons from "@/interfaces/Icons";
import Categories from "@/interfaces/Categories";

interface Props {
  details: ProfileData;
}

function DetailsPage(props: Props) {
  const { details } = props;

  const {
    title,
    amenities,
    description,
    location,
    rules,
    realState,
    phone,
    price,
    category,
    constractionDate,
  } = details;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>
        <Title>توضیحات</Title>
        <p>{description}</p>
        <Title>امکانات</Title>
        <ItemList data={amenities} />
        <Title>قوانین</Title>
        <ItemList data={rules} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>املاک {realState}</p>
          <span>
            <AiOutlinePhone />
            {e2p(phone)}
          </span>
        </div>
        <ShareButton />
        <div className={styles.price}>
          <p>
            {icons[category as keyof Icons]}
            {categories[category as keyof Categories]}
          </p>
          <p>{sp(price)} تومان</p>
          <p>
            <BiCalendarCheck />
            {new Date(constractionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
