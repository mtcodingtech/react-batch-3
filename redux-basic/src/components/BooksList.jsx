import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, removeBook } from "../redux/booksSlice";

function BooksList() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const handleAdd = () => {
    if (name && author) {
      dispatch(addBook({ name, author }));
      setName("");
      setAuthor("");
    }
  };
  console.log(books);

  return (
    <div>
      <h1>BooksList</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Please add abook title"
        value={name}
      />
      <br />
      <input
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Please add author name"
        value={author}
      />
      <br />
      <button onClick={handleAdd}>Add book</button>
      <br />
      {books.map((book, index) => {
        return (
          <React.Fragment key={index}>
            <h3>{book.name}</h3>
            <p>{book.author}</p>
            <button onClick={() => dispatch(removeBook(index))}>Delete</button>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default BooksList;
