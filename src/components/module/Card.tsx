import { ProfileData } from "@/template/AddProfilePage";
import styles from "@/module/Card.module.css";
import { RiHome3Line } from "react-icons/ri";
import { BiStore } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { MdApartment } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { sp } from "@/utils/replaceNumber";
import Link from "next/link";

interface Props {
  profile: ProfileData;
}

interface Icons {
  villa: React.JSX.Element;
  apartment: React.JSX.Element;
  office: React.JSX.Element;
  store: React.JSX.Element;
}

export default function Card(props: Props) {
  const { category, title, location, price, _id } = props.profile;

  const icons: Icons = {
    villa: <RiHome3Line />,
    apartment: <MdApartment />,
    office: <GiOfficeChair />,
    store: <BiStore />,
  };

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
