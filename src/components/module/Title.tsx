import React from "react";
import styles from "@/module/Title.module.css";

interface Props {
  children: string | JSX.Element | JSX.Element[] 
}

function Title(props:Props) {
  const { children } = props;
  return <h3 className={styles.title}>{children}</h3>;
}

export default Title;
