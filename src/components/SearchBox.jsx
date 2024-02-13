import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./SearchBox.module.css";
function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={searchHandler}>
        <CiSearch />
      </button>
    </div>
  );
}

export default SearchBox;
