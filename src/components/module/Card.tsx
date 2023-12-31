import { ProfileData } from "@/template/AddProfilePage";
import styles from "@/module/Card.module.css";

import { BiLeftArrowAlt } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { sp } from "@/utils/replaceNumber";
import Link from "next/link";
import { icons } from "@/constants/icons";
import Icons from "@/interfaces/Icons";

interface Props {
  profile: ProfileData;
}

export default function Card(props: Props) {
  const { category, title, location, price, _id } = props.profile;

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category as keyof Icons]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price)} تومان</span>
      <Link href={{ pathname: `/buy-residentials/${_id}`}}>
        مشاهده آگهی <BiLeftArrowAlt />
      </Link>
    </div>
  );
}
