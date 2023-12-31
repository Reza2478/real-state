import React from "react";
import styles from "@/module/ItemList.module.css"

interface Props {
  data: string[];
}

function ItemList(props: Props) {
  const { data } = props;

  return (
    <div className={styles.container}>
      {data.length ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>هیچ موردی ذکر نشده است</p>
      )}
    </div>
  );
}

export default ItemList;
