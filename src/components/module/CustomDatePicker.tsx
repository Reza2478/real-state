import React from "react";
import styles from "@/module/CustomDatePicker.module.css";
import DatePicker from "react-multi-date-picker";
import { ProfileData } from "@/template/AddProfilePage";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

interface Props {
  profileData: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
}

function CustomDatePicker(props: Props) {
  const { profileData, setProfileData } = props;
  const changeHandler = (e: any) => {
    const date = new Date(e);
    setProfileData({ ...profileData, constractionDate: date });
  };

  return (
    <div className={styles.container}>
      <p>تاریخ ساخت</p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={profileData.constractionDate}
        onChange={(e) => changeHandler(e)}
      />
    </div>
  );
}

export default CustomDatePicker;
