import React from "react";
import styles from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";

const CardPage = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.732</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span>More than Previous Weeks
        </span>
      </div>
    </div>
  );
};

export default CardPage;
