import React from "react";
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder={placeholder} className={styles.input} />
      <MdSearch />
    </div>
  );
};

export default Search;
