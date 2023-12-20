"use client";

import React, { useState } from "react";
import styles from "@/template/AddProfilePage.module.css";
import TextInput from "@/module/TextInput";
import RadioList from "@/module/RadioList";
import TextList from "@/module/TextList";

export interface ProfileData {
  title: string;
  description: string;
  phone: string;
  price: string;
  realState: string;
  constractionDate: Date;
  category: string;
  rules: string[];
  amenities: string[];
  location: string;
}

function AddProfilePage() {
  const [profileData, setProfileData] = useState<ProfileData>({
    title: "",
    description: "",
    phone: "",
    price: "",
    realState: "",
    constractionDate: new Date(),
    category: "villa",
    rules: [],
    amenities:[],
    location: "",
  });

  const submitHandler = () => {
    console.log(profileData);
  };

  return (
    <div className={styles.container}>
      <h3>ثبت آگهی</h3>
      <TextInput
        title="عنوان"
        name="title"
        setProfileData={setProfileData}
        profileData={profileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        setProfileData={setProfileData}
        profileData={profileData}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        setProfileData={setProfileData}
        profileData={profileData}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        setProfileData={setProfileData}
        profileData={profileData}
      />
      <TextInput
        title="قیمت(تومان)"
        name="price"
        setProfileData={setProfileData}
        profileData={profileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        setProfileData={setProfileData}
        profileData={profileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList title="قوانین" profileData={profileData} setProfileData={setProfileData} type="rules"/>
      <TextList title="امکانات رفاهی" profileData={profileData} setProfileData={setProfileData} type="amenities"/>
      <button className={styles.submit} onClick={submitHandler}>
        ثبت آگهی
      </button>
    </div>
  );
}

export default AddProfilePage;
