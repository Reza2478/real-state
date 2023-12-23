"use client";

import React, { useReducer, useState } from "react";
import styles from "@/template/AddProfilePage.module.css";
import TextInput from "@/module/TextInput";
import RadioList from "@/module/RadioList";
import TextList from "@/module/TextList";
import CustomDatePicker from "@/module/CustomDatePicker";
import toast, { Toaster } from "react-hot-toast";

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
    amenities: [],
    location: "",
  });

  const submitHandler = async () => {
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-type": "application/json" },
    });

    const data = await res.json();

    if (res.status === 201) {
      toast.success(data.message)
      
    } else {
      toast.error(data.error);
    }

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
      <TextList title="قوانین" profileData={profileData} setProfileData={setProfileData} type="rules" />
      <TextList title="امکانات رفاهی" profileData={profileData} setProfileData={setProfileData} type="amenities" />
      <CustomDatePicker profileData={profileData} setProfileData={setProfileData} />
      <button className={styles.submit} onClick={submitHandler}>
        ثبت آگهی
      </button>
      <Toaster />
    </div>
  );
}

export default AddProfilePage;
