import React from "react";
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Navin Kukreja
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Navin Kukreja" />
          <label>Email</label>
          <input type="email" name="email" placeholder="navin@gmail.com" />
          <label>Password</label>
          <input type="passowrd" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="+91-987654321" />
          <label>Address</label>
          <textarea name="address" type="text" cols="30" rows="10">Indore (M.P.)</textarea>
          <label> Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active? </label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className={styles.button}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
