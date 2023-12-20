import React from "react";
import styles from "@/module/RadioList.module.css";
import { ProfileData } from "@/template/AddProfilePage";

interface Props {
  profileData: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
}

function RadioList(props: Props) {
  const { profileData, setProfileData } = props;
  const { category } = profileData;
  
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className={styles.container}>
      <p>دسته بندی</p>
      <div className={styles.main}>
        <div>
          <label htmlFor="villa">ویلا</label>
          <input
            value="villa"
            checked={category === "villa"}
            type="radio"
            name="category"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="apartment">آپارتمان</label>
          <input
            value="apartment"
            checked={category === "apartment"}
            type="radio"
            name="category"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="store">مغازه</label>
          <input
            value="store"
            checked={category === "store"}
            type="radio"
            name="category"
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="office">دقتر</label>
          <input
            value="office"
            checked={category === "office"}
            type="radio"
            name="category"
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;
