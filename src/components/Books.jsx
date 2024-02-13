import { useState } from "react";
import { books as BookData } from "../constants/mockData";
import Card from "./Card";
import SlideCard from "./SlideCard";
import styles from "./Books.module.css";
import SearchBox from "./SearchBox";

function Books() {
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState(BookData);

  const handleLikelist = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };
  const searchHandler = () => {
    if (search) {
      const newBooks = BookData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(BookData);
    }
  };
  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />

      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <Card key={book.id} data={book} handleLikelist={handleLikelist} />
          ))}
        </div>
        {!!liked.length && (
          <div className={styles.favourite}>
            <h4>Favourite</h4>
            {liked.map((book) => (
              <SlideCard key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
