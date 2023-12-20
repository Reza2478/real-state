"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import styles from "@/module/LogoutBtn.module.css";

function LogoutBtn() {
  return (
    <button className={styles.button} onClick={() => signOut()}>
      <FiLogOut />
      خروج
    </button>
  );
}

export default LogoutBtn;
