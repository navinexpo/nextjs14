import React from "react";
import styles from "../../../ui/dashboard/products/add/add.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="text" placeholder="email" name="email" required />
        <input type="text" placeholder="password" name="password" required />
        <input type="text" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={false} selected>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        
        <textarea
          name="address"
          id="address"
          rows="16" 
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
