"use client";

import React, { useEffect, useReducer, useState } from "react";
import styles from "@/template/AddProfilePage.module.css";
import TextInput from "@/module/TextInput";
import RadioList from "@/module/RadioList";
import TextList from "@/module/TextList";
import CustomDatePicker from "@/module/CustomDatePicker";
import toast, { Toaster } from "react-hot-toast";
import Loader from "@/module/Loader";
import { useRouter } from "next/navigation";

export interface ProfileData {
  _id?: string;
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

interface Props {
  data: ProfileData
}

function AddProfilePage(props: Props) {
  const [loading, setLoading] = useState(false)

  const { data } = props
  const router = useRouter()

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
    setLoading(true)
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-type": "application/json" },
    });

    const data = await res.json();

    setLoading(false)
    if (res.status === 201) {
      toast.success(data.message)
      router.refresh()
    } else {
      toast.error(data.error);
    }

  };

  const editHandler = async () => {
    setLoading(true)
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" }
    })
    const data = await res.json()
    setLoading(false)

    if (data.error) {
      toast.error(data.error)
    }
    else {
      toast.success(data.message)
      router.refresh()
    }
  }

  useEffect(() => {
    if (data)
      setProfileData(data)
  }, [])


  return (
    <div className={styles.container}>
      <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
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
      {loading ? <Loader /> : data ? <button className={styles.submit} onClick={editHandler}>
        ویرایش آگهی
      </button> : <button className={styles.submit} onClick={submitHandler}>
        ثبت آگهی
      </button>}

      <Toaster />
    </div>
  );
}

export default AddProfilePage;
