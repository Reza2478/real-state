"use client";

import React from "react";
import styles from "@/module/TextInput.module.css";
import { ProfileData } from "@/template/AddProfilePage";
import { p2e } from "@/utils/replaceNumber";

interface Props {
  title: string;
  name: keyof Omit<ProfileData, "constractionDate">;
  profileData: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
  textarea?: boolean;
}

function TextInput(props: Props) {
  const { title, name, profileData, setProfileData, textarea } = props;

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };

  return (
    <div className={styles.container}>
      <p>{title}</p>
      {textarea ? (
        <textarea name={name} onChange={(e) => handleChange(e)} />
      ) : (
        <input
          type="text"
          name={name}
          value={profileData[name]}
          onChange={(e) => handleChange(e)}
        />
      )}
    </div>
  );
}

export default TextInput;
