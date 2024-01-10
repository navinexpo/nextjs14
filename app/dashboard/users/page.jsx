import React from "react";
import styles from "../../ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";

const UserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user ..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavator.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  Navin Kukreja
                </div>
              </td>
              <td>navin@gmail.com</td>
              <td>12.01.2024</td>
              <td>Admin</td>
              <td>active</td>
              <td>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button
                  className={`${styles.button} ${styles.delete}`}
                ></button>
              </td>
            </tr>
          </tbody>
        </thead>
      </table>
    </div>
  );
};

export default UserPage;
