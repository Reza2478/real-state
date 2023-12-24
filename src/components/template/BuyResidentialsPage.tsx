import React from "react";
import { ProfileData } from "./AddProfilePage";
import styles from "@/template/BuyResidentialsPage.module.css";
import Card from "@/module/Card";
import SideBar from "@/module/SideBar";

interface Props {
  profiles: ProfileData[];
}

function BuyResidentialsPage(props: Props) {
  const { profiles } = props;

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.main}>
        {!profiles.length ? (
          <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
        ) : (
          profiles.map((profile) => (
            <Card key={profile._id} profile={profile} />
          ))
        )}
      </div>
    </div>
  );
}

export default BuyResidentialsPage;
