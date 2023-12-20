import React from "react";
import styles from "@/module/TextList.module.css";
import { ProfileData } from "@/template/AddProfilePage";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

interface Props {
  title: string;
  profileData: ProfileData;
  setProfileData: React.Dispatch<React.SetStateAction<ProfileData>>;
  type: "rules" | "amenities";
}

function TextList(props: Props) {
  const { title, profileData, setProfileData, type } = props;

  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const list = profileData[type];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };

  const deleteHandler = (index: number) => {
    const list = profileData[type];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };

  return (
    <div className={styles.container}>
      <p>{title}</p>

      {profileData[type].map((i, index) => (
        <div key={index} className={styles.card}>
          <input
            name={type}
            onChange={(e) => changeHandler(e, index)}
            value={i}
          />
          <button onClick={() => deleteHandler(index)}>
            حذف <RiDeleteBinLine />
          </button>
        </div>
      ))}

      <button onClick={addHandler}>
        افزودن <MdOutlineAddToPhotos />
      </button>
    </div>
  );
}

export default TextList;
