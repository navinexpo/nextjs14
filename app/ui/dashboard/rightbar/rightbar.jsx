import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

const RightbarPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="astronaut" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}> 😎 Available </span>
          <h3 className={styles.title} >How to use the new version of the Admin Dashboard</h3>
          <span className={styles.subtitle}>Takes 4 min to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
            aliquam itaque dolores minima commodi officiis ipsum magni fuga
            doloribus necessitatibus a doloremque hic quasi? Iusto aliquam
            tempora labore quos, molestias sint rerum? Itaque, doloremque
            excepturi.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightbarPage;
