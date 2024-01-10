import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

const rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronut.png" alt="" fill />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}> Available Now </span>
          <h3 className={styles.title}>
            How to use the new version of the Admin Dashboard
          </h3>
          <span className={styles.subtitle}>Takes 4 mins to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            saepe tenetur? Quam voluptatem cum dolorum omnis eos deleniti, qui
            eum enim. Illo doloribus ratione hic voluptatem voluptatum ducimus
            exercitationem, sunt sint mollitia, eaque quod veritatis.
          </p>
          <button className={styles.subtitle}>
            <MdPlayCircleFilled />
          </button>
        </div>
      </div>
    </div>
  );
};

export default rightbar;
