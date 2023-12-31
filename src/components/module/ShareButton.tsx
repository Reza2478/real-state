"use client";

import React, { useEffect, useState } from "react";
import styles from "@/module/ShareButton.module.css";
import { FiShare2 } from "react-icons/fi";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ShareButton() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <CopyToClipboard text={url}>
      <div className={styles.container}>
        <FiShare2 />
        <button>اشتراک گذاری</button>
      </div>
    </CopyToClipboard>
  );
}

export default ShareButton;
